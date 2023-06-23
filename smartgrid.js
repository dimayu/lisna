let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '20px',
    mobileFirst: false,
    container: {
        maxWidth: '1620px',
        fields: '150px'
    },
    breakPoints: {
        lm: {
            width: '1620px',
            fields: '150px'
        },
        xlm: {
            width: '1360px',
            fields: '32px'
        },
        md: {
            width: '940px',
            fields: '32px'
        },
        sm: {
            width: '768px',
            fields: '32px'
        },
        xs: {
            width: '540px',
            fields: '12px'
        },
        xxs: {
            width: '330px',
            fields: '12px'
        }
    }
};

smartgrid('./src/styles/helpers', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */
