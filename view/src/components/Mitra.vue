<template>
    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="657">
    <div>
        <v-layout align-center column>
            <v-flex>
                <v-img src="https://i.ibb.co/FJrSMBL/trexinlogo.png" width="400"></v-img>
            </v-flex>
            <v-flex>
                <v-layout grid-list column>
                <v-form>
                    <v-text-field label="Nomor Resi" solo v-model="init.no_resi"></v-text-field>
                    <v-text-field label="Nomor Resi" solo v-model="init.nama_mitra"></v-text-field>
                    <v-text-field label="Nomor Resi" solo v-model="init.nama_barang"></v-text-field>
                    <v-text-field label="Nomor Resi" solo v-model="init.nama_pengirim"></v-text-field>
                    <v-text-field label="Nomor Resi" solo v-model="init.nama_penerima"></v-text-field>
                    
                </v-form>
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
        init: {
            no_resi: '',
            nama_mitra: '',
            nama_barang: '',
            nama_pengirim: '',
            nama_penerima: '',
            lokasi_asal: {
                kecamatan: '',
                kota: '',
                provinsi: ''
            },
            lokasi_tujuan: {
                kecamatan: '',
                kota: '',
                provinsi: ''
            },
            tanggal_kirim: 0,

        }
    })
}
</script>
