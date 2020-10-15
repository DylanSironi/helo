const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body,
            db = req.app.get('db');

        const foundUser = await db.check_user({username})
        if(foundUser[0]){
            return res.status(400)>send('Username already in use')
        }

        let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt)

        const newUser = await db.register_user({ username, hash })
        req.session.user = newUser[0]
        res.status(201).send(req.session.user);
    },
    login: async (req, res) => {
        const {username, password} = req.body,
            db = req.app.get('db');

            const foundUser = await db.check_user({username})
            if(!foundUser[0]){
                return res.status(400).send('Username is incorrect')
            }

            const authenticated = bcrypt.compareSync(password, foundUser[0].password)
            if(!authenticated){
                return res.status(401).send('Password is incorrect')
            }

            delete foundUser[0].password;
            req.session.user = foundUser[0]
            res.status(202).send(req.session.user);
    },
    logout: async (req, res) => {
        req.session.destroy();
        res.status(200);
    },
    // get_post: async(req, res) => {
    //     const {userId} = req.params
    //     if ()
    // }
}








// const bcrypt = require('bcryptjs');

// module.exports = {
//     register: async (req, res) => {
//         const { username, password } = req.body,
//             db = req.app.get('db');

//         const foundUser = await db.check_user({username})
//         if(foundUser){
//             return res.status(400).send('Username already in use')
//         }

//         let salt = bcrypt.genSaltSync(10),
//             hash = bcrypt.hashSync(password, salt)

//         const [newUser] = await db.register_user({ username, hash, profilePicture })
//         req.session.user = newUser;
//         res.status(201).send(req.session.user);
//     },
//     login: async (req, res) => {
//         const {username, password} = req.body,
//             db = req.app.get('db');

//             const [foundUser] = await db.check_user({username})
//             if(!foundUser){
//                 return res.status(400).send('Username is incorrect')
//             }

//             const authenticated = bcrypt.compareSync(password, foundUser.password)
//             if(!authenticated){
//                 return res.status(401).send('Password is incorrect')
//             }

//             delete foundUser.password;
//             req.session.user = foundUser;
//             res.status(202).send(req.session.user);
//     },
//     logout: async (req, res) => {
//         req.session.destroy();
//         res.status(200);
//     },
//     getUser: (req, res) => {
//         if(req.session.user){
//             res.status(200).send(req.session.user)
//         }else{
//             res.status(404).send('no session found')
//         }
//     },
//     getUserPost: async(req, res) =>{
//         const {id, myPosts} = req.body;
//           const db = req.app.get('db');
//          if(myPosts && searchString) {
//         const [foundPosts] = await db.get_post_by_title([id]);
//             res.status(200).send(foundPosts)
//         }else if(!myPosts && !searchString) {
//             const [foundPosts] = await db.get_post_by_title([id]);
//             res.status(200).send(otherAuthors)
//         } else if(!myPosts && searchString) {
//             const [foundPosts] = await db.get_title_not_auth([id]);
//             res.status(200).send(notUser)
//         }  else {
//         const [foundPosts] = await db.get_posts();
//             res.status(200).send(getAll)
//        }
//     }
// }
