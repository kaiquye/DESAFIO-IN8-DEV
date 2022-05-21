const Helmet = require('helmet');

const HelmetConfig = function () {
    return Helmet({ referrerPolicy: { policy: 'no-referrer' } }); // adcionar mais confiurações
};

module.exports = {
    HelmetConfig
};