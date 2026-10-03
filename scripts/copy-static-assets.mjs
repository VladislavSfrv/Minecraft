import { cp, mkdir } from 'node:fs/promises';

await mkdir('dist', { recursive: true });
await Promise.all([
  cp('images', 'dist/images', { recursive: true }),
  cp('audio', 'dist/audio', { recursive: true }),
]);
