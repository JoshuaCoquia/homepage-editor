// @vitest-environment node
/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import type { UserConfig } from 'vite';
import react from "@vitejs/plugin-react";

export default getViteConfig({
	plugins: [react()],
	test: {},
} as UserConfig);