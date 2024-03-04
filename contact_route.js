import express from "express";
import {
    addcontact,
    showcontact,
    updatecontact,
    deletecontact
} from './Controller/contact-controller.js'

const contact_router = express.Router()

contact_router
    .post('/add', addcontact)
    .get('/show', showcontact)
    .put('/update/:contactid', updatecontact)
    .delete('/delete/:contactid', deletecontact)

export default contact_router 