import esbuild from 'esbuild'
import packageJson from './package-lock.json' assert { type: 'json' }

// 개발환경에서는 minify 옵션을 끕니다.
const dev = process.argv.includes('--dev')
const minify = !dev

const watch = process.argv.includes('--watch')

const external = Object.keys({
  ...packageJson.dependencies,
  ...packageJson.peerDependencies,
})

const baseConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify,
  sourcemap: true,
  outdir: 'dist',
  target: 'es2019',
  watch, // esbuild 0.16.17버전 이후에는 watch 옵션의 사용방법이 바뀝니다.
  external,
}

Promise.all([
  esbuild.build({
    ...baseConfig,
    format: 'esm',
  }),
  esbuild.build({
    ...baseConfig,
    platform: 'node',
    format: 'cjs',
    outExtension: {
      '.js': '.cjs',
    },
  }),
]).catch(() => {
  console.error('Build failed')
  process.exit(1)
})
