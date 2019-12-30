<template>
  <v-container fluid fill-height class="grey darken-3 pb-10">
    <v-row class="text-center" justify="center">
      <v-col cols="12">
        <h2 class="white--text">Songs on Lyrics-Translate</h2>
      </v-col>
    </v-row>
    <v-row v-if="loading" justify="center">
      <v-col cols="1">
        <v-progress-circular indeterminate :size="70" :width="7" color="indigo"></v-progress-circular>
        <h1 class="white--text">{{ error }} </h1>
      </v-col>
    </v-row>
    <v-row v-if="!loading" justify="center">
      <v-col cols="12" md="10">
        <v-data-table
          :headers="headers"
          :items="songs"
          dark
          class="elevation-3 grey darken-1 pa-5"
        >
          <template v-slot:item="{ item }">
            <tr class="clickable" @click="$router.push({name:'display', params:{id: item.id}})" :key="item.id">
             <td class="text-xs-left">{{ item.title }}</td>
             <td class="text-xs-center">{{ item.artist }}</td>
             <td class="text-xs-center">{{ item.language }}</td>
           </tr>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'songs',
    data: () => ({
      headers: null,
      songs: null,
      loading: true,
      error: null
    }),
    async created() {
      axios.get('https://lyrics-site.herokuapp.com/getSongs')
        .then((response) => {
          this.headers = response.data['headers']
          this.songs = response.data['songs']
          this.loading = false
        })
        .catch((error) => {
          this.loading = true
          this.error = error
        })
    }
  }
</script>
