<template>
    <v-row justify="center">
      <v-col cols="12" md="11">
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
              <v-card-title class="a justify-center">About the Translator</v-card-title>
              <v-img class="text-center" width="100%" src="https://lyricstranslate.com/files/styles/avatar/public/avatar-default-u.png?itok=3fdQPvOS"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <v-card-text class="white--text">
                <ul>
                  <li><b>Name: </b> {{ currentTranslator.firstName + ' ' + currentTranslator.lastName }}</li>
                  <li><b>Role: </b> {{ currentTranslator.role }}</li>
                  <li><b>Contribution: </b>{{ currentTranslator.translationCount }} translations, {{ currentTranslator.transliterations }} transliteration, thanked {{ currentTranslator.thankCount }} times, solved {{ currentTranslator.solvedRequests}} requests, helped {{ currentTranslator.helpedMembers }} members</li>
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
</template>

<script>
export default {
  name: 'Display',
  data: () => ({
    hover: [],
    currentTranslator: {
      firstName: 'Mathew',
      lastName: 'Bfenkamp',
      role: 'Member',
      translationCount: 9,
      transliterations: 1,
      thankCount: 74,
      solvedRequests: 3,
      helpedMembers: 4,
      languages: ['English', 'Armenian', 'Norwegian']
    },
    songInfo: {
      title: 'Tun Im Hayreni',
      artist: 'Arabo Ispiryan (Արաբո Իսպիրյան)',
      translations: ['English'],
      English: {
        translatorId: 1,
        title: 'My Fatherly Home',
        date: 'Tuesday',
        lyrics: [
          'I\'m longing for my fatherly home,',
          'You\'re the fortress of powerful fathers',
          'You\'re the chapel of our tender mothers, fatherland',
          'I\'m praying may God protect you.',
          'You\'re the chapel of our tender mothers, fatherland',
          'I\'m praying may God protect you.',
          'Strangeness separate from my life',
          'I’m living fearless of my Armenian soul',
          'I’ll return and embrace you, hold on to you',
          'I’m afraid I won’t fulfill my longing',
          'I’ll return and embrace you, hold on to you',
          'I’m afraid I won’t fulfill my longing.',
          'They’ve seized you, plundered you, detained you',
          'They’ve ruined your monasteries, my fatherly home',
          'I’ll wash your cross stones (khachkars) with my tears',
          'I’m begging, call me, let me come back home',
          'I’ll wash your cross stones (khachkars) with my tears',
          'I’m begging, call me, let me come back home.',
          'You’ve become a slave to foreigners',
          'Your children slaves to foreigners',
          'Ice has formed, hardened in your warm heart',
          'Your springs have become autumns',
          'Ice has formed, hardened in your warm heart',
          'Your springs have become autumns.',
          'They’ve seized you, plundered you, detained you',
          'They’ve ruined your monasteries, my fatherly home',
          'I’ll wash your cross stones (khachkars) with my tears',
          'I’m begging, call me, let me come back home.',
          'I’ll wash your cross stones (khachkars) with my tears',
          'I’m begging, call me, let me come back home.',
          'I’m begging, call me, let me come back home.'
        ]
      },
      Armenian: {
        translatorId: 0,
        title: 'Tun Im Hayreni',
        date: 'Tuesday',
        lyrics: [
          'Կարոտում եմ տուն իմ հայրենի',
          'Դու ամրոցն ես հզոր հայրերի',
          'Դու մատուռն ես դու մեր քնքուշ մայրերի, հայրենիք',
          'Աղոթում եմ Աստված պահպանի։',
          'Դու մատուռն ես դու մեր քնքուշ մայրերի, հայրենիք',
          'Աղոթում եմ Աստված պահպանի։',
          'Օտարություն իմ կյանքից անկախ',
          'Հայի ոգով ապրում եմ անվախ',
          'Ես կդառնամ ու իմ գիրկը քեզ կառնեմ, կփարվեմ',
          'Վախենում եմ կարոտս չառնեմ։',
          'Ես կդառնամ ու իմ գիրկը քեզ կառնեմ, կփարվեմ',
          'Վախենում եմ կարոտս չառնեմ։',
          'Քեզ խլել են, թալանել են, կալանել են',
          'Քո վանքերը, ավիրել են տուն իմ հայրենի',
          'Խաչքարերդ արցունքներով կլվանամ',
          'Աղաչում եմ, կանչիր, թույլ տուր տուն դառնամ:',
          'Խաչքարերդ արցունքներով կլվանամ',
          'Աղաչում եմ, կանչիր, թույլ տուր տուն դառնամ։',
          'Դու դարծել ես օտարի գերի',
          'Որդիներդ գերի օտարին',
          'Քո տաք սրտում սառույցներ են գոյացել, քարացել',
          'Գարուններդ աշուն են դարձել:',
          'Քո տաք սրտում սառուցներ են գոյացել, քարացել',
          'Գարուններդ աշուն են դարձել։',
          'Քեզ խլել են, թալանել են, դարանել են',
          'Քո վանքերը ավիրել են տուն իմ հայրենի',
          'Խաչքարերդ արցունքներով կլվանամ',
          'Աղաչում եմ կանչիր, թույլ տուր տուն դառնամ:',
          'Խաչքարերտ արցունքներով կլվանամ',
          'Աղաչում եմ կանչիր, թույլ տուր տուն դառնամ։',
          'Աղաչում եմ, կանչիր, թույլ տուր տուն դառնամ...'
        ]
      }
    },
    currentLanguage: 'English',
    originalLanguage: 'Armenian'
  }),
  created() {
    for (var i = 0; i < this.songInfo[this.currentLanguage].lyrics.length; i++) {
      this.hover.push(false)
    }
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
