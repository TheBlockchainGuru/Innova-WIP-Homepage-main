function pxToRem(value) {
    return `${value / 16}rem`;
}
    
function responsiveFontSizes({ sm, md, lg, xl }) {
    return {
        "@media (min-width:430px)": {
            fontSize: pxToRem(sm),
        },
        "@media (min-width:992px)": {
            fontSize: pxToRem(md),
        },
        "@media (min-width:1440px)": {
            fontSize: pxToRem(lg),
        },
        "@media (min-width:1920px)": {
            fontSize: pxToRem(xl),
        },
    };
}

const typography = {
    
    fontFamily: 'Epilogue',
    h1: {
        fontSize: pxToRem(36),
        fontFamily: 'Syne',
        fontWeight: 700,
        lineHeight: 1,
        ...responsiveFontSizes({ sm: 36, md: 63, lg: 63, xl: 63 }),
    },
    h2: {
        fontSize: pxToRem(30),
        ...responsiveFontSizes({ sm: 30, md: 48, lg: 48, xl: 48 }),
    },
    h3: {
        fontSize: pxToRem(28),
        fontFamily: 'Syne',
        fontWeight: 700,
        ...responsiveFontSizes({ sm: 28, md: 40, lg: 40, xl: 40 }),
    },
    h4: {
        fontSize: pxToRem(36),
        ...responsiveFontSizes({ sm: 48, md: 48, lg: 48, xl: 48 }),
    },
    h5: {
        fontSize: pxToRem(20),
        fontWeight: 700,
        ...responsiveFontSizes({ sm: 20, md: 26, lg: 26, xl: 26 }),
    },
    h6: {
        fontSize: pxToRem(20),
        fontWeight: 900,
        ...responsiveFontSizes({ sm: 20, md: 22, lg: 22, xl: 22 }),
    },
    subtitle1: {
        fontSize: pxToRem(16),
        fontWeight: 700,
        letterSpacing: 0.64,
        ...responsiveFontSizes({ sm: 16, md: 20, lg: 20, xl: 20 })
    },
    subtitle2: {
        fontSize: pxToRem(20),
        fontWeight: 700,
        ...responsiveFontSizes({ sm: 20, md: 24, lg: 24, xl: 24 })
    },
    body1: {
        fontSize: pxToRem(14),
        ...responsiveFontSizes({ sm: 14, md: 16, lg: 16, xl: 16 })
    },
    body2: {
        fontSize: pxToRem(14),
        fontWeight: 500,
        lineHeight: 1.44,
        textTransform: 'capitalize',
        ...responsiveFontSizes({ sm: 14, md: 18, lg: 18, xl: 18 })
    },
    caption: {
        fontSize: pxToRem(10),
        fontWeight: 400,
        ...responsiveFontSizes({ sm: 10, md: 12, lg: 12, xl: 12 })
    },
    overline: {
        fontSize: pxToRem(6),
        ...responsiveFontSizes({ sm: 6, md: 8, lg: 9, xl: 10 })
    },
    button: {
        fontSize: pxToRem(16),
        // border-radius: 10px;
        ...responsiveFontSizes({ sm: 16, md: 16, lg: 16, xl: 16 }),
        textTransform: "capitalize",
    },
};

export default typography;
    