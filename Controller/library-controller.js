import library_model from "../Model/librarymodel.js"

const AddLibrary = async (req, res) => {
    // res.send('add library called')

    var { lib_name } = req.body

    var data_to_insert = {        
        lib_name: lib_name
    }

    try {
        var library_instance = new library_model(data_to_insert)
        var after_insert = await library_instance.save()
        res.status(200).send({ msg: 'Data inserted', data: after_insert })
    }
    catch (err) {
        res.status(403).send({ msg: 'err', data: err })
        console.log(err);
    }

}

const showLibrary = async (req, res) => {
    // res.send('show library called')

    try {
        var showdata = await library_model.find()
        res.status(200).send({ msg: 'All Records', data: showdata })
    }

    catch {
        res.status(403).send({ msg: 'err', data: err })
    }
}

const updateLibrary = async (req, res) => {
    // res.send('update library called')

    try {
        var update_lib = await library_model.findByIdAndUpdate(req.params.libid, req.body)
        res.status(200).send({  msg: 'data Updated', data: update_lib })
    }
    catch {
        res.status(403).send({ msg: 'err', data: err })
    }
}

const deleteLibrary = async (req, res) => {
    // res.send('delete library called')

    try {
        var delete_data = await library_model.findByIdAndDelete(req.params.libid)
        res.send({ status: 200, msg: 'data deleted', data: delete_data })
    }
    catch {
        res.status(403).send({ msg: 'err', data: err })
    }
}


export {
    AddLibrary,
    showLibrary,
    updateLibrary,
    deleteLibrary
}