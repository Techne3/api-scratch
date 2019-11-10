const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')


const tasksRouter = require('./routers/tasksRouter')

const server = express();

server.use(helmet());
server.use(express.json());
// server.use(cors())
server.use(morgan('combined'))

server.use('/api/tasks', tasksRouter);


server.get('/', (req,res)=> {
    res.send('server is running')
})

module.exports=server
