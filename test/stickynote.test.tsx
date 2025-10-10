import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import StickyNote from '../src/components/widgets/stickynote';

describe('stickynote widget', () => {
    const component = render(<StickyNote id="1" title="Test Note" description="This is a test note." initialContent="Hello, world!" />);
    const textarea = component.getByPlaceholderText('Write your note here...');

    it('displays initial content', async () => {
        expect(textarea).toHaveValue('Hello, world!');
    });

    // TODO: add test for updating/clearing textarea content
});