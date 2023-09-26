const {Router}= require("express")
const router =  Router()

const { rendenindex , rendepublicar } =  require("../controllers/index.controllers.js")
router.get("/", rendenindex )
router.get("/publicar", rendepublicar )
module.exports = router

