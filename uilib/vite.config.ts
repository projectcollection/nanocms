import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import { sveltekit } from '@sveltejs/kit/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { transform } from 'esbuild'
import { copyFileSync, existsSync, readdir, unlink } from 'fs'
import Inspect from 'vite-plugin-inspect'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Optional custom minification plugin using esbuild
function minifyEs() {
    return {
        name: 'minifyEs',
        renderChunk: {
            order: 'post' as const,
            async handler(code: string, _chunk: any, outputOptions: { format: string }) {
                if (outputOptions.format === 'es') {
                    const result = await transform(code, { minify: true });
                    return result.code;
                }
                return code;
            }
        }
    };
}

// Plugin to copy preview template to dist after build
function copyPreviewTemplate() {
    return {
        name: 'copy-preview-template',
        writeBundle() {
            const preview_template = resolve(__dirname, 'preview-index.html');
            const dist_index = resolve(__dirname, 'dist_wc/index.html');
            const styles = resolve(__dirname, './src/lib/styles.css');
            const dist_styles = resolve(__dirname, 'dist_wc/styles.css');
      
            if (existsSync(preview_template) && existsSync(styles)) {
                copyFileSync(preview_template, dist_index);
                copyFileSync(styles, dist_styles);
                console.log('✓ Copied preview-index.html to dist_wc/index.html');
            }
        }
    };
}

export default defineConfig(({ mode }) => {
    if (mode === 'production') {
        return {
            plugins: [
                svelte({
                    compilerOptions: {
                        customElement: true 
                    }
                }),
                minifyEs(), // extra minification plugin using esbuild
                copyPreviewTemplate()
            ],
            build: {
                lib: {
                    // Use the web component registration file as the library entry point
                    entry: resolve(__dirname, 'src/lib/index.ts'),
                    name: 'uilib',
                    // fileName: (format) => `uilib-[hash].${format}.js`,
                    fileName: (format) => `uilib.${format}.js`,
                    // Build both ES and UMD formats
                    formats: ['es', 'umd']
                },
                rollupOptions: {
                    // Externalize Svelte runtime to remove it from the bundle
                    external: ['svelte', 'svelte/internal'],
                    output: {
                        globals: {
                            svelte: 'Svelte',
                            'svelte/internal': 'SvelteInternal'
                        }
                    }
                },
                // Disable sourcemaps for production
                sourcemap: false,
                outDir: 'dist_wc'
            }
        }
    }

    return {
        plugins: [sveltekit()],

        test: {
            expect: { requireAssertions: true },

            projects: [
                {
                    extends: './vite.config.ts',

                    test: {
                        name: 'client',

                        browser: {
                            enabled: true,
                            provider: playwright(),
                            instances: [{ browser: 'chromium', headless: true }]
                        },

                        include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
                        exclude: ['src/lib/server/**']
                    }
                },

                {
                    extends: './vite.config.ts',

                    test: {
                        name: 'server',
                        environment: 'node',
                        include: ['src/**/*.{test,spec}.{js,ts}'],
                        exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
                    }
                }
            ]
        }
    }
});
