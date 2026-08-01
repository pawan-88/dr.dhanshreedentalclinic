# SEO action plan — what to do now the site is live

The website work is done. Everything below is off-page, and for a local dental
clinic it matters **more** than the code did. None of it requires a developer.

Live site: https://drdhanshreedental.in

---

## This week (do these first — they take about two hours total)

### 1. Google Search Console — tell Google the site changed

Google's cached copy of your site is from when it served a blank page. Waiting
for a natural recrawl could take weeks.

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add a **URL prefix** property for `https://drdhanshreedental.in`
   — the verification meta tag is already on every page, so it should verify
   instantly.
3. **Sitemaps** → submit `sitemap.xml`
4. **URL Inspection** → paste each URL below → **Request Indexing**. Do all six,
   one at a time:

```
https://drdhanshreedental.in/
https://drdhanshreedental.in/dental-implants-lohegaon
https://drdhanshreedental.in/root-canal-treatment-lohegaon
https://drdhanshreedental.in/braces-and-aligners-lohegaon
https://drdhanshreedental.in/teeth-whitening-lohegaon
https://drdhanshreedental.in/smile-design-lohegaon
```

### 2. Google Business Profile — the single biggest factor

When someone searches "dentist near me", the three results with map pins take
roughly 70% of the clicks. That block is ranked by your Business Profile, **not
your website**. If you do nothing else on this list, do this.

At [business.google.com](https://business.google.com):

- **Claim and verify** the listing. Verification usually needs a postcard or a
  video call — start it now, it takes days.
- **Primary category: `Dental clinic`.** This one field carries more weight than
  almost anything else. Add `Dentist`, `Dental implants periodontist`, and
  `Orthodontist` as secondary categories only if genuinely offered.
- **Name, address, phone must match the website character for character:**

```
Dr. Dhanshree's Dental Clinic
Shop No. 2, Muktai Plaza, Wadgaon Shinde Road,
Opp. Eastern Royale Society, Pathare Wasti,
Lohegaon, Pune, Maharashtra 411047
+91 82751 72931
```

- **Hours:** Monday–Sunday, 10:00–21:00. Keep holiday hours updated — Google
  demotes profiles with hours it believes are wrong.
- **Website field:** the live URL above.
- **Services:** add each one, matching your new page names — Dental Implants,
  Root Canal Treatment, Braces & Clear Aligners, Teeth Whitening, Smile Design,
  Cosmetic Dentistry.
- **Photos:** at least 15. Exterior with signage, reception, each operatory,
  equipment, the team, Dr. Dhanshree. Real photos, not stock. Add a few every
  month — Google tracks freshness.
- **Products/Posts:** post something weekly. A treatment explained, a tip, a
  clinic update. Low effort, and profiles that post rank better than identical
  profiles that don't.

### 3. Verify the deploy worked

- Paste the homepage into the
  [Rich Results Test](https://search.google.com/test/rich-results) — should
  detect Local Business and FAQ. Do one service page too.
- Paste it into the
  [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and
  press "Scrape Again" — confirms the social preview image renders.

---

## Ongoing — reviews (the second biggest factor)

Review count, recency, and whether you reply are all ranking signals, and they
are the main thing a patient looks at before calling.

**Get the short review link:** Business Profile → Ask for reviews → copy link.
It looks like `https://g.page/r/XXXXXXXX/review`.

**Then make it effortless:**

- Print that link as a QR code (any free generator) on a small card at reception
  and on the payment counter.
- Send it on WhatsApp a few hours after the appointment — not days later.
- Ask verbally at the point the patient is happiest, usually right after
  treatment finishes. A specific ask works far better than a generic one:
  *"If you were happy with today, would you mind leaving a quick Google review?
  I'll WhatsApp you the link."*

**Reply to every review**, positive and negative. Replies are public and
prospective patients read them. Never mention a patient's treatment details in a
reply — that is a confidentiality breach even when the patient disclosed it
themselves. Keep replies short and move specifics to a phone call.

Never buy reviews. Google detects clustered fake reviews and the penalty removes
your legitimate ones too.

---

## This month

### Local citations — same details everywhere

Google cross-checks your business details across the web. Inconsistency between
listings weakens confidence in your address. Submit the exact same NAP block to:

- Practo — the highest-value one for Indian clinics; patients book directly
- JustDial
- Sulekha
- Lybrate
- Bing Places
- Apple Business Connect (powers Apple Maps)
- Facebook Page and Instagram bio — link the website

### Buy a custom domain

A `.vercel.app` subdomain is shared free hosting. It carries little authority,
cannot be verified as a business domain, and patients notice it.

Something like `drdhanshreedentalclinic.in` costs roughly ₹700–1,000/year from
BigRock, GoDaddy, or Namecheap. Add it in Vercel → Project → Settings → Domains,
then tell me and I will update the site — it is a one-line change, and I will
handle the redirect so the indexing you have built up carries across.

---

## What to expect, honestly

- **Weeks 1–2:** pages get indexed. Search `site:drdhanshreedental.in`
  in Google to check.
- **Weeks 3–8:** you start appearing for specific, low-competition searches —
  "Dr Dhanshree dental clinic", "dental clinic Wadgaon Shinde Road".
- **Months 2–4:** with the Business Profile verified and reviews accumulating,
  movement on "dentist in Lohegaon" and Map Pack appearances.
- **"Best dentist in Lohegaon" / "dentist near me":** competitive, and driven
  mostly by review volume and profile activity. This is a months-long effort,
  not a switch.

Anyone guaranteeing you #1 within weeks for these terms is not being straight
with you. The ranking factors are largely outside anyone's direct control —
which is exactly why the reviews and the Business Profile matter so much.

---

## Track it

Once a month, check Search Console → **Performance**:

- **Impressions rising** = Google is showing you more. This moves first.
- **Clicks rising** = your titles and descriptions are working.
- **Queries tab** = what people actually typed. This tells you which service
  page to expand next, and whether we should add pages for treatments you offer
  that aren't covered yet — kids' dentistry, extractions, dentures, gum
  treatment.

Send me that Queries list after a month and I'll tell you where the next
opportunity is.
