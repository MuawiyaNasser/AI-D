/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Tajawal', 'sans-serif'],
            },
            colors: {
                prcs: {
                    red: {
                        50: '#FEF2F2',
                        100: '#FEE2E2',
                        200: '#FECACA',
                        300: '#FCA5A5',
                        400: '#F87171',
                        500: '#EF4444',
                        600: '#E53E3E', // PRCS Red
                        700: '#C53030',
                        800: '#9B2C2C',
                        900: '#742A2A',
                    },
                    green: {
                        50: '#F0FFF4',
                        100: '#C6F6D5',
                        200: '#9AE6B4',
                        300: '#68D391',
                        400: '#48BB78',
                        500: '#38A169', // PRCS Green
                        600: '#2F855A',
                        700: '#276749',
                        800: '#22543D',
                        900: '#1C4532',
                    },
                    black: {
                        50: '#F7FAFC',
                        100: '#EDF2F7',
                        200: '#E2E8F0',
                        300: '#CBD5E0',
                        400: '#A0AEC0',
                        500: '#718096',
                        600: '#4A5568',
                        700: '#2D3748',
                        800: '#1A202C', // PRCS Black
                        900: '#171923',
                    },
                },
                accent: {
                    50: '#E6F6FF',
                    100: '#BAE3FF',
                    200: '#7CC4FA',
                    300: '#47A3F3',
                    400: '#2186EB',
                    500: '#0967D2',
                    600: '#0552B5',
                    700: '#03449E',
                    800: '#01337D',
                    900: '#002159',
                },
            },
            boxShadow: {
                soft: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                medium: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-delay-150': 'bounce 1s infinite 150ms',
                'bounce-delay-300': 'bounce 1s infinite 300ms',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};