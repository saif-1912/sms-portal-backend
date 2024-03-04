import group_model from "../Model/group_model.js"

const addgroup = async (req, res) => {
    // res.send('Group added')

    var { group_name } = req.body

    const datatoinsert = {        
        group_name: group_name
    }

    try {
        var group_instance = new group_model(datatoinsert)
        var afterinsert = await group_instance.save()
        res.status(200).send({ msg: 'data inserted', data: afterinsert })
    }
    catch (err){
        console.log(err);
        res.status(403).send({ msg: 'err', data: err })
    }
}

const showgroup = async (req, res) => {
    // res.send('Group records')

    try {
        var showdata = await group_model.find()
        res.status(200).send({ msg: 'All Records', data: showdata })
    }
    catch {
        res.status(403).send({ msg: 'err', data: err })
    }
}

const updategroup = async (req, res) => {
    // res.send('Group updated')
    try {
        var update_data = await group_model.findByIdAndUpdate(req.params.groupid, req.body)
        res.status(200).send({ msg: 'Data Updated', data: update_data })
    }
    catch {
        res.status(403).send({ msg: 'err', data: err })
    }
}

const deletegroup = async (req, res) => {
    // res.send('Group deleted')

    try {
        var delete_data = await group_model.findByIdAndDelete(req.params.groupid)
        res.status(200).send({ msg: 'Data deleted', data: delete_data })
    }
    catch {
        res.status(403).send({ msg: 'err', data: err })
    }
}


export {
    addgroup,
    showgroup,
    updategroup,
    deletegroup
}