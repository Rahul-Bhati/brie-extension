import { withUI } from '@extension/ui';

export default withUI({
  content: ['index.html', 'src/**/*.tsx'],
  theme: {
    extend: {},
  },
  darkMode: 'media', // Automatically switches based on system preference
});
