import express from "express";
import {
    addgroup,
    showgroup,
    updategroup,
    deletegroup
} from './Controller/group-controller.js'

const group_router = express.Router()

group_router
    .post('/add', addgroup)
    .get('/show', showgroup)
    .put('/update/:groupid', updategroup)
    .delete('/delete/:groupid', deletegroup)

export default group_router 