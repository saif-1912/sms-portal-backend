import express from "express";
import 'dotenv/config'
import lib_router from "./lib_routes.js";
import db_connection from "./database/mongodb.js";
import bodyParser from "body-parser";
import group_router from "./group_route.js";
import cors from 'cors'
import contact_router from "./contact_route.js";
import message_route from "./message-route.js";


const app = express()
const PORT = 9080

app.use(cors())
app.use(bodyParser.json())
app.use('/libraryroute', lib_router)
app.use('/group_router', group_router)
app.use('/contact_router', contact_router)
app.use('/message_route',message_route)

db_connection().then(res => {
    console.log('connection successfully')
})
    .catch(err => {
        console.log('err')
    })


app.listen(process.env.PORT, () => {
    console.log(`server running on port no ${PORT}`)
})