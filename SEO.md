# SEO notes

## What was wrong

The single biggest issue: `src/components/clinic-home-client.tsx` loaded the whole
page through `next/dynamic` with `{ ssr: false }`. With `output: "export"`, that
meant `out/index.html` shipped an empty `<body>` — no H1, no service copy, no
address. Google was indexing a blank page. Everything else was secondary to this.

## What changed

**Crawlability**

- Removed `ssr: false`. The page is still a client component, but Next now
  pre-renders it to static HTML at build time — that HTML is what gets indexed.
- Hero entrance moved from framer-motion to CSS (`.hero-enter` in `globals.css`)
  so the H1 paints on the first frame instead of sitting at `opacity: 0` until
  hydration. Better LCP, and no headline hidden from crawlers.
- Added a `no-js` class on `<html>`, stripped by an inline script. If scripts
  never run, `.no-js .scroll-reveal` keeps all revealed content visible.

**On-page**

- The H1 now carries a keyword sub-line: *"Dental Clinic in Lohegaon, Pune —
  Implants, Braces & Smile Design"*. The poetic display lines are unchanged.
- Section H2s rewritten to include location + service terms.
- Hero intro paragraph rewritten around "dentist in Lohegaon, Pune" and the
  actual treatment names.
- Footer now carries the full NAP (name / address / phone) as crawlable text in
  an `<address>` element. **This must match your Google Business Profile exactly
  — character for character.**

**Structured data** (`src/app/page.tsx`)

Consolidated into a single `@graph` so entities cross-reference by `@id`:
`Dentist` → `Person` (the doctor) → `WebSite` → `WebPage` → `FAQPage`.
Added `hasOfferCatalog`, `paymentAccepted`, `currenciesAccepted`,
`isAcceptingNewPatients`, `knowsLanguage`, a `ReserveAction` pointing at
WhatsApp, and a wider `areaServed`. Fixed `addressLocality` from
`"Lohegaon, Pune"` to `"Pune"` — Google matches on the city.

**Metadata & infra**

- `src/app/opengraph-image.tsx` generates a real 1200×630 social card at build
  time (the OG tag previously pointed at a small square logo).
- Linked `manifest.json`; added `googleBot` directives with
  `max-image-preview: large`.
- All URLs now derive from `siteUrl` in `src/lib/site-data.ts` — one line to
  change when the custom domain goes live.
- `robots.txt` now explicitly allows AI answer engines (GPTBot, ClaudeBot,
  PerplexityBot, etc.), which is how a growing share of "dentist near me"
  queries get answered.
- **`netlify.toml`: replaced the `/* → /index.html 200` catch-all with a real
  404.** That rule was returning the homepage with a 200 status for every
  mistyped URL — Google reads that as a soft 404 and may index duplicates.
- Removed the duplicate Google Maps iframe in the footer (a full second
  third-party load for no added information). Added `width`/`height` to the
  remaining images to stop layout shift.

## Deliberately not done

**`aggregateRating` in the LocalBusiness schema.** The site displays "4.9 Google
rating", and marking that up would produce star ratings in search results — but
Google's structured data policy prohibits self-serving review markup for
`LocalBusiness`, and sites get manual actions for it. Reviews have to be
collected on your Google Business Profile; the stars there appear in the map
pack on their own.

## Before you deploy

```bash
npm run build
```

Then confirm the fix actually landed:

```bash
grep -c "Lohegaon" out/index.html     # should be well above 0
grep -o "<h1.\{0,300\}" out/index.html
```

If `out/index.html` still has an empty body, nothing else here matters.

## What moves the needle next (off-page)

For a local dental clinic, on-page SEO is maybe a third of the result. In rough
order of impact:

1. **Google Business Profile.** Claim it, verify it, and make the name, address,
   phone, hours, and category ("Dental clinic" primary, "Dentist" secondary)
   match this site exactly. Post photos weekly. This outranks the website itself
   for "dentist near me".
2. **Reviews.** Ask every satisfied patient, in person, with a QR code to the
   review link. Volume and recency both count. Reply to all of them.
3. **Local citations.** Practo, JustDial, Sulekha, Lybrate, Bing Places, Apple
   Business Connect — same NAP everywhere.
4. **Content.** The single-page site caps how much you can rank. Dedicated pages
   for `/dental-implants-lohegaon`, `/root-canal-pune`, `/braces-lohegaon` would
   each target their own search. Say the word and I'll build them.
