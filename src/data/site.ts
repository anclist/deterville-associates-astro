// Firm facts. Everything here is sourced from detervilleassociates.com — keep it that way.

export const firm = {
  name: 'Deterville & Associates',
  short: 'D&A',
  tagline: 'Legal expertise on which you can rely',
  phone: '(758) 452-1152',
  phoneHref: 'tel:+17584521152',
  phoneAlt: '(758) 452-4399',
  phoneAltHref: 'tel:+17584524399',
  email: 'contact@detervilleassociates.com',
  address: {
    line1: 'Bougainvillea Lane, Sans Souci',
    city: 'Castries, Saint Lucia',
  },
  mailing: 'General P.O. Box 835, Castries, LC04 101, Saint Lucia',
  mapHref: 'https://www.google.com/maps/search/?api=1&query=Deterville+%26+Associates+Bougainvillea+Lane+Sans+Souci+Castries+Saint+Lucia',
  hours: '8:00 a.m. to 4:00 p.m.',
  hoursNote: 'Closed on all public holidays',
  bookHref: '/contact',
} as const;

/** The sister firm in Toronto. */
export const sister = {
  name: 'Deterville Law Office',
  href: 'https://detervillelaw.com',
  summary: 'Canadian immigration and Ontario wills & estates',
} as const;

export const nav = [
  { label: 'Practice areas', href: '/practice-areas' },
  { label: 'About', href: '/about' },
  { label: 'Our team', href: '/our-team' },
  { label: 'Citizenship by Investment', href: '/citizenship-by-investment' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/DetervilleAssociates' },
  { label: 'Instagram', href: 'https://www.instagram.com/detervilleassociates/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/detervilleassociates' },
  { label: 'X', href: 'https://www.x.com/DetervilleAssoc' },
] as const;

/** How the firm describes its approach (About D&A). */
export const approach = [
  {
    title: 'Law you can understand',
    body: 'Saint Lucia law help in language you can understand. If you’re unsure of your options, just ask and we’ll find an explanation that works for you.',
  },
  {
    title: 'A team in your corner',
    body: 'Our legal team meets every morning to discuss our cases, so whoever you work with, the whole team’s expertise weighs in on yours.',
  },
  {
    title: 'A focus on results',
    body: 'We start by working with you on a plan for the result you need, built from Saint Lucia law and your circumstances.',
  },
  {
    title: 'A legacy of success',
    body: 'D&A was built on legacy. We use that experience to help you down the path to the results you need.',
  },
] as const;

export type PracticeArea = { title: string; items?: string[] };
export type PracticeGroup = { title: string; areas: PracticeArea[] };

// The firm's own list of practice areas, grouped for reading. Grouping is ours; the areas are theirs.
export const practiceGroups: PracticeGroup[] = [
  {
    title: 'Family & estates',
    areas: [
      { title: 'Family law litigation', items: ['Divorce'] },
      { title: 'Adoption', items: ['Local adoption', 'International adoption'] },
      { title: 'Successions and probate' },
      { title: 'Notarial services', items: ['Apostilles', 'Last Will and Testament', 'Power of Attorney'] },
    ],
  },
  {
    title: 'Property & land',
    areas: [
      { title: 'Conveyancing', items: ['Agreements for sale', 'Deeds of donation and sale', 'Mortgages'] },
      { title: 'Land law disputes' },
      { title: 'Licences', items: ['Alien landholding', 'Marriage'] },
    ],
  },
  {
    title: 'Business & litigation',
    areas: [
      { title: 'Corporate law', items: ['Annual returns', 'Certificates of good standing', 'Registering businesses and companies'] },
      { title: 'Business litigation' },
      { title: 'Civil litigation' },
      { title: 'Debt collection' },
      { title: 'Personal injury' },
    ],
  },
  {
    title: 'Citizenship & immigration',
    areas: [
      { title: 'Citizenship', items: ['By descent', 'By marriage', 'Through residence'] },
      { title: 'Immigration' },
      { title: 'Citizenship by Investment', items: ['Through Global Migration & Investment Services'] },
    ],
  },
];

/** Citizenship by Investment is offered through the firm's affiliate, GMIS. */
export const cbi = {
  agent: 'Global Migration & Investment Services',
  agentShort: 'GMIS',
  email: 'agent@migrationinvestments.com',
  body: 'As Authorised Agents of the Saint Lucia Citizenship by Investment Programme, GMIS supports prospective candidates for citizenship, assists with the process and submits their applications.',
} as const;
