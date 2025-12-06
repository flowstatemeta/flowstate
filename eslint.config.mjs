import studio from '@sanity/eslint-config-studio'
import next from 'eslint-config-next/core-web-vitals.js';

export default [
  {
    // Apply Next.js rules to the 'web' directory
    files: ['web/**/!(*.test).{js,ts,jsx,tsx}'],
    ...next,
  },
  // Apply Sanity Studio rules to the 'studio' directory
  ...studio,
];
