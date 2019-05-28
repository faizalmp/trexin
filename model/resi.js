const mongoose = require('mongoose')

const resiSchema = mongoose.Schema({
    no_resi: {
        type : String,
        required : true,
        unique : true
    },
    nama_mitra : {
        type : String,
        required : true
    },
    nama_barang : {
        type : String,
        required : true
    },
    nama_pengirim : {
        type : String,
        required : true
    },
    nama_penerima : {
        type : String,
        required : true
    },
    lokasi_asal : {
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
    },
    lokasi_sekarang : {
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
    },
    lokasi_tujuan : {
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
    },
    tanggal_kirim : {
        type : Number,
        required : true,
        timestamps : true
    }
})

module.exports = Resi = mongoose.model("resi", resiSchema)