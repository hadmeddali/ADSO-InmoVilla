const {Router} = require('express')
const userController = require('../../../controllers/userController')


const router = Router()


router.get('/', userController.getAll)
router.get('/:id', userController.get)
router.post('/',userController.create)
router.put('/:id',userController.update)
router.delete('/:id',userController.destroy)

module.exports = router;