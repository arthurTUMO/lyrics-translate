<template>
  <div id="songs">
    <v-row class="text-center" justify="center">
      <v-col cols="12">
        <h2 class="white--text">Songs on Lyrics-Translate</h2>
      </v-col>
    </v-row>
    <v-row justify="center">
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
  </div>
</template>

<script>
  export default {
    name: 'songs',
    data: () => ({
      headers: [
        {
          text: 'Song Title',
          align: 'left',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        },
        {
          text: 'Language',
          value: 'language'
        }
      ],
      songs: [
        {
          title: 'Tun Im Hayreni',
          artist: 'Arabo Ispiryan',
          language: 'Armenian',
          id: 1
        },
        {
          title: 'Mi Gna',
          artist: 'Super Sako',
          language: 'Armenian',
          id: 2
        },
        {
          title: 'Pregomesh',
          artist: 'Sirusho',
          language: 'Armenian',
          id: 3
        },
        {
          title: 'Anapati Arev',
          artist: 'Tata Simonyan',
          language: 'Armenian',
          id: 4
        },
        {
          title: 'Masis',
          artist: 'Aram Asatryan',
          language: 'Armenian',
          id: 5
        },
        {
          title: 'Mediterráneo',
          artist: 'Joan Manuel Serrat',
          language: 'Spanish',
          id: 6
        },
        {
          title: 'Il tempo se ne va',
          artist: 'Adriano Celentano',
          language: 'Italian',
          id: 7
        },
        {
          title: 'Komarovo',
          artist: 'Igor Skylar',
          language: 'Russian',
          id: 8
        },
        {
          title: 'Soledad y el mar',
          artist: 'Natalia Lafourcade',
          language: 'Spanish',
          id: 9
        },
        {
          title: 'Vagabundear',
          artist: 'Joan Manuel Serrat',
          language: 'Spanish',
          id: 10
        }
      ]
    })
  }
</script>
