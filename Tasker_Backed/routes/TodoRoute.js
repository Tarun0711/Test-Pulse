const {Router} = require("express");
const {getToDo} = require("../controllers/TodoController");
const {saveToDo} = require("../controllers/TodoController");
const {updateToDo} = require("../controllers/TodoController");
const {deleteToDo} = require("../controllers/TodoController");

const router = Router()

router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router;