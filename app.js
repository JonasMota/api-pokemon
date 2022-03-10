const express = require('express')
const server = express();
const api = require('./api')

server.use(express.json());

server.listen(8081, ()=>{
    console.log("servidor rodando https://localhost:8081")
})

server.get('/', (req, res) =>{
    return res.send({message: "Jonas Mota Feitosa"})
})

server.get('/pokemon/:id', async (req, res) =>{
    const {id} = req.params
    try {
        const { data } = await api.get(`pokemon/${id}`)
        return res.send ({name: data.name})
    } catch (error) {
        res.send({error: error.message})
        
    }
})
