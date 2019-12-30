<template>
  <v-container fluid fill-height class="grey darken-3 pl-9 pb-10">
    <v-row v-if="loading" justify="center">
      <v-col cols="1">
        <v-progress-circular indeterminate :size="70" :width="7" color="indigo"></v-progress-circular>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col v-if="!loading" cols="12" md="11">
        <v-card flat class="grey darken-3">
          <v-card-title style="word-break: normal">
            <h1 class="a">{{ songInfo.title }} ({{ currentLanguage }}) Translation</h1>
          </v-card-title>
          <v-card-text class="white--text">
            <hr>
            <p>
              Artist: {{ songInfo.artist }}
            <br>
            Song: {{ songInfo.title }}
            <br>
            Translations: {{ songInfo.translations.toString() }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-select v-model="currentLanguage" dark :items="songInfo.translations" label="Select a translation:">
            </v-select>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>

        <v-card flat class="grey darken-3">
          <v-row align="center" justify="center">
            <v-col cols="8" sm="4" md="2">
              <v-card-title style="word-break: normal" class="a justify-center">About the Translator</v-card-title>
              <v-img class="text-center" width="100%" src="https://lyricstranslate.com/files/styles/avatar/public/avatar-default-u.png?itok=3fdQPvOS"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <v-card-text class="white--text">
                <ul>
                  <li><b>Name: </b> {{ currentTranslator.firstName + ' ' + currentTranslator.lastName }}</li>
                  <li><b>Languages: </b>{{ currentTranslator.languages.toString() }}</li>
                </ul>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>

        <v-card class="grey darken-3">
          <v-row>
            <v-col cols="6">
              <v-card-text class="white--text">
                <div style="color: #18ffff;">{{currentLanguage}} translation</div>
                <hr class="hr1 mb-5">
                <h2 class="mb-5">{{ songInfo[currentLanguage].title }}</h2>
                <p @mouseover="hoverSelect(i)" @mouseleave="hoverDeselect(i)" :class="{'highlight': hover[i]}" v-for="(line, i) in songInfo[currentLanguage].lyrics" :key="i">
                  {{line}}
                </p>
              </v-card-text>
            </v-col>
            <v-col cols="6">
              <v-card-text class="white--text">
                <div class="a">{{ originalLanguage }}</div>
                <hr class="hr1">
                <br>
                <h2 class="mb-5"> {{ songInfo[originalLanguage].title }} </h2>
                <p @mouseover="hoverSelect(i)" @mouseleave="hoverDeselect(i)" :class="{'highlight': hover[i]}" v-for="(line, i) in songInfo[originalLanguage].lyrics" :key="i">
                  {{ line }}
                </p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
        <p class="white--text">Submitted by <a class="a" href="#">{{ currentTranslator.firstName + ' ' + currentTranslator.lastName }}</a> on {{ songInfo[currentLanguage].date }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Display',
  data: () => ({
    hover: [],
    songInfo: null,
    currentLanguage: null,
    originalLanguage: null,
    currentTranslator: null,
    loading: true
  }),
  async created() {
    axios.get('https://lyrics-site.herokuapp.com/getSongInfo')
      .then((response) => {
        this.songInfo = response.data['songInfo']
        this.originalLanguage = this.songInfo.originalLanguage
        this.currentLanguage = this.songInfo.translations[0]
        let translatorId = this.songInfo[this.currentLanguage].translatorId
        return axios.get(`https://lyrics-site.herokuapp.com/getTranslatorInfo/${translatorId}`)
      })
      .then((response) => {
        this.currentTranslator = response.data['currentTranslator']
        for (var i = 0; i < this.songInfo[this.currentLanguage].lyrics.length; i++) {
          this.hover.push(false)
        }
        this.loading = false
      })
  },
  methods: {
    hoverSelect: function (i) {
      this.hover.splice(i, 1, true)
    },
    hoverDeselect: function (i) {
      this.hover.splice(i, 1, false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .a,b{
    color: #18ffff;
  }
  a{
       text-decoration: none;
  }
  .abouttranslator{
    margin-left: 200px;
    margin-top: -235px;
  }
   ul {
     list-style: none;
}
ul li::before {
  content: "\2022";
  color: #18ffff;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
.highlight {
  background-color: grey
}
</style>
