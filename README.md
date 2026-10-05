# Spectacular*

AI-powered advertising agency — one campaign a month, every month.
Directed by Taci Yalcin (human), produced with an AI crew.

Live: https://github.com/tacibey/spectacular → Whop Website (`whop/spectacular`)

## Develop

```bash
npm run build    # -> dist/client (also the Whop + Netlify publish dir)
npm run dev      # preview dist on :5173
```

No framework, no deps. Edit `index.html`, `src/styles.css`, `src/app.js`, rebuild.

## Whop wiring (dashboard, ~15 min)

- [ ] Claim route: `whop.com/spectacular` (fallback `spectaculars`)
- [ ] Products: Monthly $2,000 · Founding $1,500 (first 10, then hide) · Ad Credit $50 min (one-time)
- [ ] Affiliate: Custom, flat **$500**, applies to **all payments** (recurring)
- [ ] Checkout buttons on site point at `https://whop.com/spectacular` until plan links exist
- [ ] Whop Ads: connect Facebook Page + card/balance; Ad Credit buyers get concierge launch + weekly report
- [ ] Websites panel: attach `spectacular.site` as custom domain if offered, else 301 it to the Whop URL
- [ ] Deploy: `whop apps deploy` from this repo (static goes to `dist/client`)

## Notes

- Founding slots counter lives in `src/app.js` (`FOUNDING_TAKEN`).
- Affiliate math on-page is illustrative by design (FTC / Whop earnings-claim rules).
- Logos = past creative-director experience, labelled as such (not endorsements).
