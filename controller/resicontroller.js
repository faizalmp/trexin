const Resi = require('../model/resi')
const HistoryResi = require('../model/history')

exports.getAll = async function (req, res) {
    Resi.find(function (err, resi) {
        if (err) {
            res.json ({
                status : 400,
                message : 'Gagal',
                error_message : err
            })
        } else {
            res.json ({
                status : 200,
                message: 'Berhasil',
                data : resi
            })
        }
    })
}

exports.new = async function (req, res) {
    var resi = new Resi();
    resi.no_resi = req.body.no_resi ? req.body.no_resi : resi.no_resi
    resi.nama_mitra = req.body.nama_mitra
    resi.nama_barang = req.body.nama_barang
    resi.nama_pengirim = req.body.nama_pengirim
    resi.nama_penerima = req.body.nama_penerima
    resi.lokasi_asal = req.body.lokasi_asal
    resi.lokasi_sekarang = req.body.lokasi_asal
    resi.lokasi_tujuan = req.body.lokasi_tujuan
    resi.tanggal_kirim = req.body.tanggal_kirim

    resi.save (function (err) {
        if (err) {
            res.json ({
                status : 400,
                message : 'Gagal',
                error_message : err
            })
        } else {
            res.json ({
                status : 200,
                message: 'Berhasil',
                data : resi
            })
        }
    })
}

exports.get = async function (req, res) {
    var resi_temp = null
    Resi.findOne({ no_resi: req.params.no_resi }).then(resi => {
        resi_temp = resi
        
        return HistoryResi.find({ no_resi: req.params.no_resi })
    }).then(history => {
        res.json ({
            status : 200,
            message: 'Berhasil',
            data_resi : resi_temp,
            data_history : history
        })
    }).catch(error => {
        res.json ({
            status : 400,
            message : 'Gagal',
            error_message : error
        })
    })
}

exports.update = async function (req, res) {
    var resi_ini = null;
    Resi.findOneAndUpdate({ no_resi: req.params.no_resi }, { $set:{lokasi_sekarang : req.body.lokasi}}).then(resi => {
        
        resi_ini = resi
               
        return HistoryResi.create({
            no_resi: req.body.no_resi,
            lokasi: req.body.lokasi,
            tanggal_update: Date.now()
        });
    }).then((history) => {
        res.json ({
            status : 200,
            message: 'Berhasil update',
            data_resi : resi_ini,
            data_history : history
        })
    }).catch(error => {
        res.json ({
            status : 400,
            message : 'Gagal',
            error_message : error
        })
    })
    

}
        