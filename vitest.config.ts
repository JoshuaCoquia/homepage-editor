// @vitest-environment node
import { getViteConfig } from 'astro/config';
import type { UserConfig } from 'vite';
import react from "@vitejs/plugin-react";

export default getViteConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		setupFiles: ['./test/setup.ts'],
		globals: true,
		coverage: {
			provider: "v8",
		},
	},
} as UserConfig);