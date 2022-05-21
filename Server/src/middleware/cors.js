const Cors = require('cors');

const ConfigCors = () => {

    let config = {
        origin: '*',
        methods: 'GET,POST, PATCH, DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 200,
    };

    return Cors(config);
};

module.exports = {
    ConfigCors
};