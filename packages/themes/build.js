import run from '@package/esbuild-config';
import pkg from './package.json' assert { type: 'json' };

run({
  pkg,
});
