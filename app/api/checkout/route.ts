import Stripe from 'stripe';
import { NextResponse } from 'next/server';

function getBaseUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl) return siteUrl;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
}

function getStripeConfig() {
  const mode = (process.env.STRIPE_MODE || 'test').toLowerCase();
  const isLive = mode === 'live';

  const secretKey = isLive
    ? process.env.STRIPE_SECRET_KEY_LIVE
    : process.env.STRIPE_SECRET_KEY_TEST;

  if (!secretKey) {
    throw new Error(
      `Missing Stripe secret key for mode="${mode}". Check STRIPE_SECRET_KEY_TEST / STRIPE_SECRET_KEY_LIVE in .env.local`
    );
  }

  return { isLive, secretKey };
}

function getPriceId(serviceId: string) {
  const mode = (process.env.STRIPE_MODE || 'test').toLowerCase();
  const isLive = mode === 'live';

  const map: Record<string, { test?: string; live?: string }> = {
    'lease-review': {
      test: process.env.PRICE_ID_TEST_LEASE_REVIEW,
      live: process.env.PRICE_ID_LIVE_LEASE_REVIEW,
    },
    'residential-response-letter': {
      test: process.env.PRICE_ID_TEST_RESIDENTIAL_RESPONSE_LETTER,
      live: process.env.PRICE_ID_LIVE_RESIDENTIAL_RESPONSE_LETTER,
    },
    'lease-exit-consult': {
      test: process.env.PRICE_ID_TEST_LEASE_EXIT_CONSULT,
      live: process.env.PRICE_ID_LIVE_LEASE_EXIT_CONSULT,
    },
    'hoa-response-demand-letter': {
      test: process.env.PRICE_ID_TEST_HOA_RESPONSE_DEMAND_LETTER,
      live: process.env.PRICE_ID_LIVE_HOA_RESPONSE_DEMAND_LETTER,
    },
    'hoa-bylaws-covenant-violation-letter-review': {
      test: process.env.PRICE_ID_TEST_HOA_BYLAWS_COVENANT_VIOLATION_LETTER_REVIEW,
      live: process.env.PRICE_ID_LIVE_HOA_BYLAWS_COVENANT_VIOLATION_LETTER_REVIEW,
    },
    'hoa-dispute-consult': {
      test: process.env.PRICE_ID_TEST_HOA_DISPUTE_CONSULT,
      live: process.env.PRICE_ID_LIVE_HOA_DISPUTE_CONSULT,
    },
  };

  const entry = map[serviceId];
  if (!entry) return null;

  const priceId = isLive ? entry.live : entry.test;
  return priceId || null;
}

export async function POST(req: Request) {
  try {
    const { secretKey } = getStripeConfig();
    const stripe = new Stripe(secretKey, {
      apiVersion: '2025-11-17.clover',
    });

    // IMPORTANT: this endpoint is called by an HTML <form>, so we read FormData (not JSON)
    const formData = await req.formData();
    const serviceId = String(formData.get('serviceId') || '').trim();

    if (!serviceId) {
      return NextResponse.json({ error: 'Missing serviceId' }, { status: 400 });
    }

    const priceId = getPriceId(serviceId);
    if (!priceId) {
      return NextResponse.json(
        {
          error:
            'Price not configured for this service in the current Stripe mode. Check your PRICE_ID_* env vars.',
          serviceId,
          stripeMode: process.env.STRIPE_MODE || 'test',
        },
        { status: 400 }
      );
    }

    const baseUrl = getBaseUrl();

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${baseUrl}/checkout/success?serviceId=${encodeURIComponent(
        serviceId
      )}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancelled?serviceId=${encodeURIComponent(serviceId)}`,
    });

    // Redirect the browser to Stripe Checkout
    return NextResponse.redirect(session.url!, 303);
  } catch (err: any) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json(
      { error: err?.message || 'Stripe checkout failed' },
      { status: 500 }
    );
  }
}
