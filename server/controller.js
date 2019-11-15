const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        console.log('fred')
        const db = req.app.get('db')
        const { username, password } = req.body
        // console.log(username, password)
        const found = await db.find_user({ username })
        console.log(found[0].count)
        if (+found[0].count !== 0) {
            return res.status(409).send({ message: 'email already in use' })
        }
        let profile_pic = `https://robohash.org/${username}`
        // console.log(profile_pic)



        const user_id = await db.add_user({ username, profile_pic })
        // console.log(user_id) //returns an id
        // console.log(req.session)

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        db.add_hash([user_id[0].id, hash])
        // console.log(user_id[0].id)

        req.session.user = { id: user_id[0].id, username, profile_pic }
        res.status(201).send({ message: 'registered', user: req.session.user })
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const found = await db.find_user({username})
        // console.log(found[0].count)
        if (+found[0].count === 0){
            return res.status(401).send('user not found')
        }

        const user = await db.find_hash({username})
        // console.log(user)
        const hash = user[0].password
        // console.log(hash)
        const goodPassword = bcrypt.compareSync(password, hash)
        if(!goodPassword){
            return res.status(403).send('incorrect password')
        }
        req.session.user = { user: user[0] }
        // console.log(req.session.user)
        res.status(200).send({message: 'logged in', user: req.session.user})

    },
    logout: (req, res) => {}

    
}