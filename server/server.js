import config from './../config/config';
import app from './../server/express';
import mongoose from 'mongoose';

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port);
})

// Database Connection URL
// Configure mongoose to use native ES6 promises
mongoose.Promise = global.Promise;

// Connect to the MongoDB using 'connect' method
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.on('error', () => {
    throw new Error(`Unable to connect to database: ${config.mongoUri}`)
})
