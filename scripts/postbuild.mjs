// GitHub Pages has no server-side rewrite, so a deep link like
// /Website-Data-Artisans/about would 404. Serving the same SPA shell as 404.html
// lets the client router take over. Assets load fine because Vite references them
// with the absolute `base` path. Also drop a .nojekyll so Pages serves everything.
import { copyFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve(process.cwd(), 'dist');
copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
writeFileSync(resolve(dist, '.nojekyll'), '');
console.log('postbuild: wrote dist/404.html and dist/.nojekyll');
