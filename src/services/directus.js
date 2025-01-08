import { createDirectus, rest, authentication, realtime } from '@directus/sdk';

export const directus = createDirectus('http://localhost:8055')
    .with(rest())
    .with(authentication('json', { credentials: 'include' }))
    .with(realtime());