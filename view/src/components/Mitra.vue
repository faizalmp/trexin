<template>
    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="100%">
    <div>
        <v-layout align-center column>
            <v-flex>
                <v-img src="https://i.ibb.co/FJrSMBL/trexinlogo.png" width="400"></v-img>
            </v-flex>
            <v-flex>
                <v-layout grid-list column>
                <v-form>
                    <v-text-field label="Nomor Resi" solo v-model="init.no_resi"></v-text-field>
                    <v-text-field label="Mitra" solo v-model="init.nama_mitra"></v-text-field>
                    <v-text-field label="Barang" solo v-model="init.nama_barang"></v-text-field>
                    <v-text-field label="pengirim" solo v-model="init.nama_pengirim"></v-text-field>
                    <v-text-field label="penerima" solo v-model="init.nama_penerima"></v-text-field>
                    <v-subheader class="headline">Asal</v-subheader>
                    <v-text-field label="Kode Pos" solo v-model="lokasi_asal.kodepos"></v-text-field>
                    <v-text-field label="Kecamatan" solo v-model="lokasi_asal.kecamatan"></v-text-field>
                    <v-text-field label="Kota" solo v-model="lokasi_asal.kota"></v-text-field>
                    <v-text-field label="Provinsi" solo v-model="lokasi_asal.provinsi"></v-text-field>
                    <v-subheader class="headline">Tujuan</v-subheader>
                    <v-text-field label="Kode Pos" solo v-model="lokasi_tujuan.kodepos"></v-text-field>
                    <v-text-field label="Kecamatan" solo v-model="lokasi_tujuan.kecamatan"></v-text-field>
                    <v-text-field label="Kota" solo v-model="lokasi_tujuan.kota"></v-text-field>
                    <v-text-field label="Provinsi" solo v-model="lokasi_tujuan.provinsi"></v-text-field>
                    <v-btn @click="add" dark color="primary">Buat resi</v-btn>
                </v-form>
                    <v-subheader class="headline">UPDATE LOKASI</v-subheader>
                    <v-text-field label="Nomor Resi" solo v-model="updateresi"></v-text-field>
                    <v-text-field label="Kode Pos" solo v-model="lokasi_sekarang.kodepos"></v-text-field>
                    <v-text-field label="Kecamatan" solo v-model="lokasi_sekarang.kecamatan"></v-text-field>
                    <v-text-field label="Kota" solo v-model="lokasi_sekarang.kota"></v-text-field>
                    <v-text-field label="Provinsi" solo v-model="lokasi_sekarang.provinsi"></v-text-field>
                    <v-btn @click="update" dark color="primary">UPDATE</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
    </v-parallax>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        updateresi: '',
        init: {
            no_resi: '',
            nama_mitra: '',
            nama_barang: '',
            nama_pengirim: '',
            nama_penerima: '',
            
            tanggal_kirim: 0,

        },
        from: '',
        now: '',
        to: '',
        lokasi_asal: {
                kode_pos: '',
                kecamatan: '',
                kota: '',
                provinsi: ''
            },
        lokasi_sekarang: {
            kode_pos: '',
                kecamatan: '',
                kota: '',
                provinsi: ''
            },
        lokasi_tujuan: {
            kode_pos: '',
                kecamatan: '',
                kota: '',
                provinsi: ''
            }
    }),
    methods: {
        add(){
            const params = new URLSearchParams();
          params.append('no_resi', this.init.no_resi);
          params.append('nama_mitra', this.init.nama_mitra);
          params.append('nama_barang', this.init.nama_barang);
          params.append('lokasi_asal', this.lokasi_asal);
          params.append('lokasi_tujuan', this.lokasi_tujuan);
          params.append('tanggal_kirim', this.init.tanggal_kirim);
            axios.post('http://trexin.herokuapp.com/api/resi/', params
        ).then(response => {
          console.log(response)
          })
          .catch(error => console.log(JSON.stringify(error)))
        },
        update(){
            const params = new URLSearchParams();
            params.append('no_resi', this.updateresi);
            params.append('lokasi_sekarang', this.lokasi_sekarang);
            axios.post('http://trexin.herokuapp.com/api/resi/' + this.updateresi, params
        ).then(response => {
          console.log(response)
          })
          .catch(error => console.log(JSON.stringify(error)))
        }
    }
}
</script>
