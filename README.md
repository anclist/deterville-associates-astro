# Deterville & Associates — site proposal

Astro rebuild proposal for [detervilleassociates.com](https://detervilleassociates.com/), the Saint Lucia sister firm of
Deterville Law Office ([proposal](https://github.com/anclist/deterville-law-astro)).

Shares the sister site's component structure (atoms / molecules / organisms) and type and spacing scales; only the
palette in `src/tokens/tokens.ts` differs (navy from the logo, Saint Lucia flag blue as the accent).

Every page is `noindex, nofollow`.

## Routes
| Route | Notes |
|---|---|
| `/` | Hero with the gavel-and-flag photo, approach, practice groups, Citizenship by Investment, tips, office details |
| `/practice-areas` | All areas, in four groups |
| `/about` | Approach in the firm's words, team photo, sister firm |
| `/our-team` | Team photo and approach |
| `/citizenship-by-investment` | GMIS, Authorised Agent |
| `/blog`, `/blog/[slug]` | Tip of the Week posts (3 migrated) |
| `/contact` | Form plus office details |
| `/styleguide` | The design system |

Legacy GoDaddy URLs (`/contact-d&a`, `/about-d&a`, `/d&a-blog`, `/migration-services`, `/f/[slug]`) redirect to the new routes.

```sh
npm install
npm run dev     # http://localhost:4321
```

## Open questions for the firm
- Our team: the live page is behind a member login, so there are no lawyer names or profiles yet; only the team photo.
- Remaining blog posts (about 40) to migrate.
- Contact form: set `PUBLIC_FORM_ENDPOINT`; without it the form opens a pre-filled email.
- Hero image: confirm the firm is happy with it, or supply their own photograph.
- Practice-area grouping (Family & estates, Property & land, Business & litigation, Citizenship & immigration) is ours.
- Office hours: the live site gives 8:00 a.m. to 4:00 p.m. but not which days.
