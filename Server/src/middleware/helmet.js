const Helmet = require('helmet');

exports.HelmetConfig = () => {
    return Helmet({ referrerPolicy: { policy: 'no-referrer' } }); // adcionar mais confiurações
};
