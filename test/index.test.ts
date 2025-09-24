import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import indexPage from '../src/pages/index.astro';

test('index.astro', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(indexPage);
  console.log(result)

  expect(result).toContain('Homepage Editor');
});