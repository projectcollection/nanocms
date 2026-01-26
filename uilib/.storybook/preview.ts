import type { Preview } from '@storybook/sveltekit'

import '../src/lib/reset.css'
import '../src/lib/styles.css'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
