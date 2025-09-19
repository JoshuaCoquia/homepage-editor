import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import indexPage from '../src/pages/index.astro';

test('index.html', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(indexPage);

  expect(result).toContain('Homepage Editor');
});