import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'cyan': 'hsl(180, 66%, 49%)',
        'red': 'hsl(0, 87%, 67%)',
        'Dark Violet': 'hsl(257, 27%, 26%)',
        'Gray': 'hsl(0, 0%, 75%)',
        'Grayish Violet': 'hsl(257, 7%, 63%)',
        'Very Dark Blue': 'hsl(255, 11%, 22%)',
        'Very Dark Violet': 'hsl(260, 8%, 14%)',
      },
    },
  },
  plugins: [],
}
export default config
