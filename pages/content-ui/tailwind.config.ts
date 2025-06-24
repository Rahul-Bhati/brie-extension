import { withUI } from '@extension/ui';

export default withUI({
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'media', // Automatically switches based on system preference
});
