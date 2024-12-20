/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            center: true,
        },
        screens: {
            mobile: { max: '499px' },
            sm: { min: '500px' },
            xsm: { min: '700px' },
            sxsm: { min: '800px' },
            md: { min: '900px' },
            xmd: { min: '1100px' },
            lg: { min: '1300px' },
            xlg: { min: '1500px' },
        },
        extend: {
            fontFamily: {
                ibm_light: 'IBMPlexSans-Light',
                ibm_regular: 'IBMPlexSans-Regular',
                ibm_medium: 'IBMPlexSans-Medium',
                ibm_semibold: 'IBMPlexSans-SemiBold',
                ibm_bold: 'IBMPlexSans-Bold',
            },
            backgroundImage: {
                gradientleft: 'linear-gradient(90deg, rgb(152, 97, 90) 0%, rgb(129, 72, 50) 83%, rgb(125, 67, 42) 100%)',
            },
            colors: {
                primary: '#FB6F92',
                secondary: '#00526a',
                dark: '#0E0E0E',
                dark2: '#D4D4D4',
                dark3: '#868686',
                dark4: '#4B4B4A',
                third: '#D9E41B',
                fourth: '#fff5f5',
                letterinput: '#828282',
                borderinput: '#D9D9D9',
                background: '#1A202C',
                text: '#E2E8F0',
                colortext: '#6B6B6B',
                border: '#2D3748',
                hover: '#2D3748',
                info: '#3695fbfa',
                success: '#32d09c',
                lemon: '#39c6a4',
                warning: '#ff8c00',
                danger: '#ff6868',
                bordersky: '#dee1ef',
                sky: '#f3f4f6',
                letter: '#7e889b',
                green: {
                    100: '#39c6a4',
                },
                gray: {
                    10: '#fafafa',
                    20: '#fafafa',
                    30: '#f5f5f5',
                    80: '#4a5163',
                    100: '#e8e8e8',
                    200: '#c5c5c5',
                    300: '#a2a2a2',
                    400: '#838383',
                    500: '#6e6e6e',
                },
            },
            fontSize: {
                '0/6': '.6rem',
                '0/7': '.7rem',
                '0/8': '.8rem',
                '0/9': '.9rem',
                '1/0': '1rem',
                '1/1': '1.1rem',
                '1/2': '1.2rem',
                '1/3': '1.3rem',
                '1/4': '1.4rem',
                '1/5': '1.5rem',
                '1/6': '1.6rem',
                '1/7': '1.7rem',
                '1/8': '1.8rem',
                '1/9': '1.9rem',
                '2/0': '2rem',
                '2/1': '2.1rem',
                '2/2': '2.2rem',
                '2/3': '2.3rem',
                '2/4': '2.4rem',
                '2/5': '2.5rem',
                '2/6': '2.6rem',
                '2/7': '2.7rem',
                '2/8': '2.8rem',
                '2/9': '2.9rem',
                '3/0': '3rem',
                '3/1': '3.1rem',
                '3/2': '3.2rem',
                '3/3': '3.3rem',
                '3/4': '3.4rem',
                '3/5': '3.5rem',
                '3/6': '3.6rem',
                '3/7': '3.7rem',
                '3/8': '3.8rem',
                '3/9': '3.9rem',
                '4/0': '4rem',
                '4/1': '4.1rem',
                '4/2': '4.2rem',
                '4/3': '4.3rem',
                '4/4': '4.4rem',
                '4/5': '4.5rem',
                '4/6': '4.6rem',
                '4/7': '4.7rem',
                '4/8': '4.8rem',
                '4/9': '4.9rem',
                '5/0': '5rem',
                '5/1': '5.1rem',
                '5/2': '5.2rem',
                '5/3': '5.3rem',
                '5/4': '5.4rem',
                '5/5': '5.5rem',
                '5/6': '5.6rem',
                '5/7': '5.7rem',
                '5/8': '5.8rem',
                '5/9': '5.9rem',
                '6/0': '6rem',
                '6/1': '6.1rem',
                '6/2': '6.2rem',
                '6/3': '6.3rem',
                '6/4': '6.4rem',
                '6/5': '6.5rem',
                '6/6': '6.6rem',
                '6/7': '6.7rem',
                '6/8': '6.8rem',
                '6/9': '6.9rem',
                '7/0': '7rem',
                '7/1': '7.1rem',
                '7/2': '7.2rem',
                '7/3': '7.3rem',
                '7/4': '7.4rem',
                '7/5': '7.5rem',
                '7/6': '7.6rem',
                '7/7': '7.7rem',
                '7/8': '7.8rem',
                '7/9': '7.9rem',
                '8/0': '8rem',
                '8/1': '8.1rem',
                '8/2': '8.2rem',
                '8/3': '8.3rem',
                '8/4': '8.4rem',
                '8/5': '8.5rem',
                '8/6': '8.6rem',
                '8/7': '8.7rem',
                '8/8': '8.8rem',
                '8/9': '8.9rem',
                '9/0': '9rem',
                '9/1': '9.1rem',
                '9/2': '9.2rem',
                '9/3': '9.3rem',
                '9/4': '9.4rem',
                '9/5': '9.5rem',
                '9/6': '9.6rem',
                '9/7': '9.7rem',
                '9/8': '9.8rem',
                '9/9': '9.9rem',
                '10/0': '10rem',
                '11/0': '11rem',
                '12/0': '12rem',
                '13/0': '13rem',

            },
            textWrap: {
                balance: 'balance',
            },

        },
    },
    plugins: [],
};
