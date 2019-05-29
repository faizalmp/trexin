# Trexin
Website untuk tracking barang menggunakan nomor resi yang mengintegrasikan dari berbagai mitra.


## Service


## GET Semua Resi

Mengambil semua data resi, GET : https://trexin.herokuapp.com/api/resi


## GET Resi Tertentu

Mengambil data resi dan riwayat pengiriman sesuai dengan nomor resi tertentu, GET : https://trexin.herokuapp.com/api/resi/<no_resi>


## POST Resi Baru

Membuat resi baru, POST : https://trexin.herokuapp.com/api/resi

```
{
            lokasi_asal: {
                kode_pos: String,
                kecamatan: String,
                kota: String,
                provinsi: String
            },
            lokasi_sekarang: {
                kode_pos: String,
                kecamatan: String,
                kota: String,
                provinsi: String
            },
            lokasi_tujuan: {
                kode_pos: String,
                kecamatan: String,
                kota: String,
                provinsi: String
            },
            no_resi: String,
            nama_mitra: String,
            nama_barang: String,
            nama_pengirim: String,
            nama_penerima: String,
            tanggal_kirim: Number
}
```


## PUT Update Lokasi Barang

Update Lokasi barang, PUT : https://trexin.herokuapp.com/api/resi/<no_resi>

```
{
            lokasi: {
                kode_pos: String,
                kecamatan: String,
                kota: String,
                provinsi: String
            },
            no_resi: String
}
``` 


## Build with

Node.js, vue.js, vuetify, express, mongoose, heroku, mongoDB Atlas


## Contributor

Faizal Muhammad Priyowibowo     16/395394/TK/44686
Arstyoputro Wibisono            16/400347/TK/45361
Panji Riski Hernanda            16/395414/TK/44706
