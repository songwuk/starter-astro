import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import UnoCSS from 'unocss/astro'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
import fs from 'node:fs'
// https://astro.build/config
export default defineConfig({
	// Enable Vue to support Vue components.
	integrations: [vue(),UnoCSS(),
	{
		name: 'astro-env',
		hooks: {
			'astro:config:setup': () => {
				/**
				 * 默认dev环境
				 */
				const __filename = fileURLToPath(import.meta.url);
				const __dirname = path.dirname(__filename)
				const { ENV } = process.env
				const filePath = path.resolve(__dirname, 'env', `./.env.${ENV ?? 'dev'}`);
				const client = {};
				fs.readFile(filePath ?? '', 'utf-8', (err, data) => {
					if (err) throw err;
					data.split('\n')?.forEach(key => {
						if(key.startsWith('PUBLIC_')){
							const value = key.split('=');
							client[value[0]] = value[1]
						}
					});
					for (const key in client) {
						if (Object.hasOwnProperty.call(client, key)) {
							process.env[key] = client[key];
						}
					}
				});
			}
		}
	}],
});
