<template>
  <div id="artists">
    <v-row class="text-center" justify="center">
      <v-col cols="12">
        <h2 class="white--text">Artists on Lyrics-Translate</h2>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12" sm="6" md="4" lg="3" v-for="(artist, i) in artists" :key="i">
        <v-card dark shaped hover color="grey darken-1" class="px-5">
          <v-card-title class="my-0 pb-0">
            {{ artist.name }}
          </v-card-title>
          <v-container class="pt-0">
            <v-row>
              <v-col cols="10">
                <v-img
                  height="200"
                  width="100%"
                  :src="artist.img"
                ></v-img>
              </v-col>
              <v-col cols="2">
                <v-row
                  class="flex-column ma-0 fill-height"
                  justify="center"
                >
                  <v-col class="px-0">
                    <v-btn icon>
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                  </v-col>

                  <v-col class="px-0">
                    <v-btn icon>
                      <v-icon>mdi-bookmark</v-icon>
                    </v-btn>
                  </v-col>

                  <v-col class="px-0">
                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'artists',
    data: () => ({
      artists: [
        {name: 'Arabo Ispiryan', id: '1', img: 'https://i.ytimg.com/vi/bxOzCo4we_g/maxresdefault.jpg'},
        {name: 'Super Sako', id: '2', img: 'http://asbarez.com/wp-content/uploads/2017/06/FullSizeRender-2.jpg'},
        {name: 'Sirusho', id: '3', img: 'https://armeniagogo.com/wp-content/uploads/2016/12/sirusho-e1481819915997.jpg'},
        {name: 'Tata Simonyan', id: '4', img: 'https://i.ytimg.com/vi/F01XfVh9C1E/maxresdefault.jpg'},
        {name: 'Aram Asatryan', id: '5', img: 'https://i.ytimg.com/vi/0NPZb8wqwVo/hqdefault.jpg'}
      ]
    })
  }
</script>
