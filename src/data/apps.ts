// src/data/apps.ts
// One entry per app. Each entry gets a privacy page at /<slug>/privacy/
export interface App {
  slug: string;          // URL segment, e.g. 'jkb' → /jkb/privacy/
  name: string;          // exactly as the store listing title
  developer?: string;    // developer name on the store listing (defaults to DEFAULT_DEVELOPER)
  androidId?: string;    // Google Play package name, e.g. 'app.cambodiabible.jra.jkb'
  iosName?: string;      // App Store name, if different from `name`
}

export const DEFAULT_DEVELOPER = 'Cambodia Bible';

export const apps: App[] = [
  { slug: 'jkb', name: 'JKB Jarai ព្រះគម្ពីរ​ចារាយ' },
  // add new apps here
];
