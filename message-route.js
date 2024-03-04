import express from "express";
import {
    add_message,
    show_message
} from './Controller/message-controller.js'

const message_route = express.Router()

message_route
    .post('/add', add_message)
    .get('/show', show_message)

export default message_route