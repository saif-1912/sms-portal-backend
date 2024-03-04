import contact_Model from "../Model/contact_model.js"

const addcontact = async (req, res) => {
    // res.send({msg:'add contact route called'})

    var { username, usermobile, useremail,group_id } = req.body

    var datatoinsert = {
        username: username,
        usermobile: usermobile,
        useremail: useremail,
        group_id:group_id
    }

    try {
        var contact_instance = new contact_Model(datatoinsert)
        var afterinsert = await contact_instance.save()
        res.status(200).send({ msg: 'data inserted', data: afterinsert })
    }
    catch (err) {
        res.send({ msg: 'err', data: err })
        console.log(err)
    }

}

const showcontact = async (req, res) => {
    // res.send({ msg: 'show contact route called' })

    try {
        var showdata = await contact_Model.find()
        res.status(200).send({ msg: 'All records', data: showdata })
    }
    catch (err) {
        res.send({ msg: 'err', data: err })
    }
}

const updatecontact = async (req, res) => {
    // res.send({ msg: 'Update contact route called' })

    try {
        var updatedata = await contact_Model.findByIdAndUpdate(req.params.contactid, req.body)
        res.status(200).send({ msg: 'data Updated', data: updatedata })
    }
    catch (err) {
        res.send({ msg: 'err', data: err })
    }
}

const deletecontact = async (req, res) => {
    // res.send({ msg: 'delete contact route called' })

    try {
        var deletedata = await contact_Model.findByIdAndDelete(req.params.contactid)
        res.status(200).send({ msg: 'data deleted', data: deletedata })
    }
    catch (err) {
        console.log(err);
        res.send({ msg: 'err', data: err })
    }
}

export {
    addcontact,
    showcontact,
    updatecontact,
    deletecontact
}