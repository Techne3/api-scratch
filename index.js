const server = require('./api/server');

const port = process.env.PORT || 7100;

server.listen(port, () => console.log(`\n server is running on  ${port} \n`));
