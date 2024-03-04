import express from 'express'
import {
    AddLibrary,
    showLibrary,
    updateLibrary,
    deleteLibrary
} from './Controller/library-controller.js'

const lib_router = express.Router()
 
lib_router
    .post('/add', AddLibrary)
    .get('/show', showLibrary)
    .put('/update/:libid', updateLibrary)
    .delete('/delete/:libid', deleteLibrary)

export default lib_router