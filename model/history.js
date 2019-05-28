const mongoose = require('mongoose')

const historySchema = mongoose.Schema({
    no_resi: {
        type : String,
        required : true
    },
    tanggal_update: {
        type : Date,
        required : true,
        default: Date.now()
    },
    lokasi:{
        kode_pos : {
            type : String,
            required : true
        },
        kecamatan : {
            type : String,
            required : true
        },
        kota : {
            type : String,
            required : true
        },
        provinsi : {
            type : String,
            required : true
        }
    }
})

module.exports = HistoryResi = mongoose.model("history", historySchema)