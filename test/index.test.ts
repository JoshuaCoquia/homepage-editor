import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import indexPage from '../src/pages/index.astro';
import { getContainerRenderer as reactRenderer } from "@astrojs/react";
import { loadRenderers } from "astro:container";

test('index.astro', async () => {
  const renderers = await loadRenderers([reactRenderer()]);
  const container = await AstroContainer.create({ renderers });
  const result = await container.renderToString(indexPage);

  expect(result).toContain('Homepage Editor');
});