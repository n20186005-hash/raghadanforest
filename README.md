# Raghadan Forest visitor guide

Independent Arabic and English visitor guide for Raghadan Forest Park in Al Bahah, Saudi Arabia. All 14 existing routes are retained: each language has home, guide, tickets, location, privacy, terms and cookie settings.

## Local checks

Use Node 24.19.0 and pnpm 11.23.0, then `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build`, `pnpm source:audit`, `node scripts/verify-output.mjs`, `node scripts/consent-test.mjs` and `node scripts/weather-test.mjs`. Native build approval is limited to the existing esbuild/workerd allowlist. The default canonical/sitemap origin is https://raghadanforest.com; `SITE_URL` can deliberately override it for an isolated build. The Worker serves `dist` through ASSETS and proxies Open-Meteo forecasts. Publishing is a separate operation.

## Facts and sources

Public sources were checked on 21 October 2026. Visit Saudi lists general entry without a ticket and 08:00–00:00 hours; the dated Maps listing instead shows 14:00–02:00 next day. Both are attributed visibly. No recurring opening-hours or third-party review aggregate is claimed in structured data. SPA facility figures describe its 13 June 2026 report; the development background also links its 12 July 2024 report. Individual activities and services require a current check. Suggested itineraries and packing are planning ideas, with no guarantee of access, weather or a step-free route.

Photo provenance, original and derivative SHA-256 values, per-file primary source/discussion links, licences and modifications are recorded in `src/data/photos.json`. Five local WebP derivatives preserve the five existing originals; only the entrance and welcome sign are identified as Raghadan. The three other photographs are labelled regional context. The cloud image's Commons record lacks a meaningful description; the exact location remains unverified. BY-SA derivatives retain the original BY-SA licence. Credits are visible on both home pages.

The existing Google Analytics choice is off by default, supports withdrawal and explicit regrant, and reports storage failures at their actual scope. It does not control Maps, delivery logs or a possible hosting performance beacon. Weather shows model time, rejects missing/expired payloads and replaces expired on-screen data with an unavailable message. The obsolete offline cache is retired only under this site's own cache name.
