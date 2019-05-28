const express = require('express')
const router = express.Router()
const Resi = require('./resicontroller')

/*router.get("/search/:no_resi", async (req, res) => {
    const resi = await req.context.models.Resi.findById(req.params.no_resi)
    
})

router.post("/create", async (req, res) => {
    const resi = await req.context.models.Resi.create
})

router.put("/update/:no_resi", async (req, res) => {

})*/
router.route('/resi')
    .post(Resi.new)
    .get(Resi.getAll)

router.route('/resi/:no_resi')
    .get(Resi.get)
    .put(Resi.update)

module.exports = router