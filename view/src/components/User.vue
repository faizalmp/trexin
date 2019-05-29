<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="100%">
  <div>
    <v-layout justify-center align-center column>
      <v-flex>
        <v-img src="https://i.ibb.co/FJrSMBL/trexinlogo.png" width="400"></v-img>
        <v-flex mt-4>
          <v-form>
            <v-text-field solo append-icon="search" v-model="cari_resi" return-object placeholder="Masukkan Nomor resi"></v-text-field>
            <v-btn @click="initialize" color="primary">Cari Resi</v-btn>
          </v-form>
        </v-flex>
        <v-flex mt-4 v-if="resi != null">
          <!--<span>{{ resi }}</span>-->
          <!--<v-data-table :headers="headers" :items="resi" clipped-left hide-actions class="elevation-1">
            <template v-slot:items="props">
              <td class="text-xs-left">{{ props.item.no_resi }}</td>
              <td class="text-xs-left">{{ props.item.nama_mitra }}</td>
              <td class="text-xs-left">{{ props.item.nama_barang }}</td>
              <td class="text-xs-left">{{ props.item.nama_pengirim }}</td>
              <td class="text-xs-left">{{ props.item.nama_penerima }}</td>
              <td class="text-xs-left">{{ props.from }}</td>
              <td class="text-xs-left">{{ props.now }}</td>
              <td class="text-xs-left">{{ props.to }}</td>
            </template>
          </v-data-table>-->



              <v-text-field dark outline readonly v-model="resifix.no_resi" label="Nomor Resi"></v-text-field>

              <v-text-field dark outline readonly v-model="resifix.nama_mitra" label="Mitra"></v-text-field>

              <v-text-field dark outline readonly v-model="resifix.nama_barang" label="Barang"></v-text-field>

              <v-text-field dark outline readonly v-model="resifix.nama_pengirim" label="Pengirim"></v-text-field>

              <v-text-field dark outline readonly v-model="resifix.nama_penerima" label="Penerima"></v-text-field>

              <v-text-field dark outline readonly v-model="from" label="Dari"></v-text-field>

              <v-text-field dark outline readonly v-model="now" label="Sekarang"></v-text-field>

              <v-text-field dark outline readonly v-model="to" label="Tujuan"></v-text-field>

          <img :src="iklan">
        </v-flex>
      </v-flex>
    </v-layout>
  </div>
  </v-parallax>
</template>

<script>
import axios from 'axios'
import { setInterval } from 'timers';
  export default {
    data:  function(){
      return {
      cari_resi: '',
      resi: null,
      from: '',
      now: '',
      to: '',
      iklan: '',
      resifix:{
        no_resi: '',
        nama_mitra: '',
        nama_barang: '',
        nama_pengirim:'',
        nama_penerima: '',
        from: '',
        now: '',
        to: '',
      },
      tanggalkirim: 0,
      headers: [
          { text: 'Nomor Resi', align: 'left'},
          { text: 'Mitra', align: 'left'},
          { text: 'Paket Barang', align: 'left'},
          { text: 'Pengirim', align: 'left' },
          { text: 'Penerima', align: 'left' },
          { text: 'Asal', align: 'left' },
          { text: 'Sekarang', align: 'left'},
          { text: 'Tujuan', align: 'left' },
          { text: 'Tanggal Pengiriman', align: 'left' }
        ]
    }
    },
    created () {
      this.initialize()
      this.getIklan();
      setInterval(() => {
        this.getIklan();
      }, 15000);
    },
    methods: {
      initialize () {
        console.log(this.cari_resi)
        axios.get('http://trexin.herokuapp.com/api/resi/' + this.cari_resi).then(response => {
              this.resi = response.data.data_resi
              this.from = this.resi.lokasi_asal.kecamatan + ", " + this.resi.lokasi_asal.kota + ", " + this.resi.lokasi_asal.provinsi
              this.now = this.resi.lokasi_sekarang.kecamatan + ", " + this.resi.lokasi_sekarang.kota + ", " + this.resi.lokasi_sekarang.provinsi
              this.to = this.resi.lokasi_tujuan.kecamatan + ", " + this.resi.lokasi_tujuan.kota + ", " + this.resi.lokasi_tujuan.provinsi
              this.resifix.no_resi = this.resi.no_resi
              this.resifix.nama_mitra = this.resi.nama_mitra
              this.resifix.nama_barang = this.resi.nama_barang
              this.resifix.nama_pengirim = this.resi.nama_pengirim
              this.resifix.nama_penerima = this.resi.nama_penerima 
              this.resifix.from = this.from
              this.resifix.now = this.now
              this.resifix.to = this.to  
              console.log(this.resi)
              
          }).catch(error => console.log(error))        
      },
      getIklan: function(){
        axios.get('https://arta.ruangkarya.id/service/ads/img-ads').then(response => {
          this.iklan = response.data.data.url
          console.log(response)
        }).catch(error => console.log(error))
      }

    }
  }
</script>

