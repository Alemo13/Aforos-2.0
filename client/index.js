const { startServer } = require('./src/App')
const SLEEP_TIME = process.env.SLEEP_TIME || 100;

// Sleep till MongoDB and RabbitMQ services start.
console.log(`Sleeping for ${SLEEP_TIME}ms before connecting to MongoDB and RabbitMQ.`)
setTimeout(() => {
    startServer();
    console.log(`cliente-service started.`)
}, SLEEP_TIME)
