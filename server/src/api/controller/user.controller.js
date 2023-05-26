const User = require("../model/user.model");

async function sample (req, res, next){
    try {
        // let user = new User({
        //     address: 'sadwdwdw',
        //     role: 1,
        // })
        await user.save()
        User.find({}).then((list) => {
            console.log(list)
        })

        let a = 90
        res.json({list: 'okay'})
    } catch (error) {
        console.log('api/controller/user.controller' + error)
    }
}
module.exports = {
    sample
}