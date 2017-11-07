import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import path from 'path'

const app = express()

app.use(express.static('public'))

app.get('*', (req,res) => {
    const store = createStore();
    
    //some logic to load data to store

    res.send(renderer(req, store))
})

app.listen( 3000, () => {
    console.log("listening on port 3000")
})