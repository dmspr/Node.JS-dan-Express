const express = require('express');
const sweagerRoute = require('../controller/controller')
const loginRoute = require('../controller/login.controller')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Tugas Sweagger-UI' })
})



// STORE

router.post('/store/order', sweagerRoute.insertStore)
router.get('/store/order/:id', sweagerRoute.listStore)
router.delete('/store/order/:id', sweagerRoute.DeleteStore)
router.get('/store/inventory', sweagerRoute.listStoreInventory)


// USER

router.get('/user/:username', sweagerRoute.listUser)
router.put('/user/:username', sweagerRoute.updateUser)
router.delete('/user/:username', sweagerRoute.deleteUser)
router.post('/user/login', loginRoute.login)
router.get('/user/logout', function (req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});
router.post('/user', sweagerRoute.insertUser)

// // pet

router.post('/pet', sweagerRoute.insertPet)
router.put('/pet/:id', sweagerRoute.putPet)
router.get('/pet/findByStatus', sweagerRoute.listPetStatus)
router.get('/pet/:id', sweagerRoute.listPet)
router.delete('/pet/:id', sweagerRoute.deletePet)

module.exports = router

