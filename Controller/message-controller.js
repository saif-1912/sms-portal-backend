import message_model from "../Model/message_model.js"

const add_message = async (req, res) => {
    // res.send({msg:'add message route called'})
    var { Message, lib_id } = req.body

    const datatoinsert = {
        Message: Message,
        lib_id: lib_id
    }

    try {
        var message_instance = new message_model(datatoinsert)
        var after_insert = await message_instance.save()
        res.status(200).send({ msg: 'data inserted', data: after_insert })
    }
    catch (err) {
        res.status(403).send({ msg: 'err', data: err })
    }

}

const show_message = async (req, res) => {
    // res.send({ msg: 'show message route called' })

    try {
        var showdata = await message_model.find()
        res.status(200).send({ msg: 'All Records', data: showdata })
    }
    catch (err) {
        res.status(403).send({ msg: 'err', data: err })
    }
}

export {
    add_message,
    show_message
}