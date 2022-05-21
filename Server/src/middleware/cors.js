const Cors = require('cors');

exports.ConfigCors = () => {

    let config = {
        origin: '*',
        methods: 'GET,POST, PATCH, DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 200,
    };

    return Cors(config);
};
