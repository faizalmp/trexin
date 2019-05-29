<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="657">
  <div>
    <v-layout justify-center align-center column>
      <v-flex>
        <v-img src="https://i.ibb.co/FJrSMBL/trexinlogo.png" width="400"></v-img>
        <v-flex mt-4>
          <v-form>
            <v-text-field solo append-icon="search" v-model="cari_resi" placeholder="Masukkan Nomor resi"></v-text-field>
            <v-btn @click="initialize">Cari Resi</v-btn>
          </v-form>
        </v-flex>
        <v-flex mt-4>
          <v-data-table :headers="headers" :items="items" :search="search" clipped-left hide-actions class="elevation-1">
            <template v-slot:items="props">
              <td class="text-xs-left">{{ props.item.no_resi }}</td>
              <td class="text-xs-left">{{ props.item.nama_mitra }}</td>
              <td class="text-xs-left">{{ props.item.nama_barang }}</td>
              <td class="text-xs-left">{{ props.item.nama_pengirim }}</td>
              <td class="text-xs-left">{{ props.item.nama_penerima }}</td>
              <td class="text-xs-left">{{ props.item.from }}</td>
              <td class="text-xs-left">{{ props.item.now }}</td>
              <td class="text-xs-left">{{ props.item.to }}</td>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
          </v-data-table>
        </v-flex>
      </v-flex>
    </v-layout>
  </div>
  </v-parallax>
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
      cari_resi: '',
      items: [],
      from: '',
      now: '',
      to: '',
      tanggalkirim: '',
      headers: [
          { text: 'Nomor Resi', align: 'left', value: 'no_resi'},
          { text: 'Mitra', align: 'left', value: 'nama_mitra' },
          { text: 'Paket Barang', align: 'left', value: 'nama_barang' },
          { text: 'Pengirim', align: 'left', value: 'nama_pengirim' },
          { text: 'Penerima', align: 'left', value: 'nama_penerima' },
          { text: 'Asal', align: 'left', value: from },
          { text: 'Sekarang', align: 'left', value: now },
          { text: 'Tujuan', align: 'left', value: to },
          { text: 'Tanggal Pengiriman', align: 'left', value: tanggalkirim }
        ]
    }),
    watch: {
      dialog (val) {
        val || this.close()
      }
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        
        axios.get('https://trexin.herokuapp.com/api/resi/' + this.cari_resi, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(response => {
              this.items = response.data_resi
              //this.from = this.resi.lokasi_asal.kecamatan + ", " + this.resi.lokasi_asal.kota + ", " + this.resi.lokasi_asal.provinsi
              //this.now = this.resi.lokasi_sekarang.kecamatan + ", " + this.resi.lokasi_sekarang.kota + ", " + this.resi.lokasi_sekarang.provinsi
              //this.to = this.resi.lokasi_tujuan.kecamatan + ", " + this.resi.lokasi_tujuan.kota + ", " + this.resi.lokasi_tujuan.provinsi
              console.log(items)
          }).catch(error => console.log(error)) 
       
      },

    }
  }
</script>

