# Deterville & Associates — site proposal

Astro rebuild proposal for [detervilleassociates.com](https://detervilleassociates.com/), the Saint Lucia sister firm of
Deterville Law Office ([proposal](https://github.com/anclist/deterville-law-astro)).

Shares the sister site's component structure (atoms / molecules / organisms) and type and spacing scales; only the
palette in `src/tokens/tokens.ts` differs (navy from the logo, Saint Lucia flag blue as the accent).

Status: homepage mock only. Every page is `noindex, nofollow`.

```sh
npm install
npm run dev     # http://localhost:4321
```

## Open questions for the firm
- Our team: the live page is behind a member login, so no lawyer profiles yet.
- Practice-area grouping (Family & estates, Property & land, Business & litigation, Citizenship & immigration) is ours.
- Office hours: the live site gives 8:00 a.m. to 4:00 p.m. but not which days.
