require('dotenv').config();
const Server = require('./src/server');

Server.listen(process.env.PORT, () => {
    console.log('Running... PORT : ', process.env.PORT);
});