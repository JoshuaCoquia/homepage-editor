// @vitest-environment node
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import { getContainerRenderer as reactRenderer } from "@astrojs/react";
import { loadRenderers } from "astro:container";

import indexPage from '../src/pages/index.astro';

describe('index.astro', () => {
  it('renders the initial page', async () => {
    const renderers = await loadRenderers([reactRenderer()]);
    const container = await AstroContainer.create({ renderers });
    const result = await container.renderToString(indexPage);

    // Astro Rendering (index.astro)
    expect(result).toContain('Homepage Editor');

    // React Rendering (App.tsx)
    expect(result).toContain('Add Widget');
  });
});