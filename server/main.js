const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static');
const path = require("path")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(serveStatic(path.join(__dirname, '..', '/dist')));
// Inserted this so that client-side routing works
app.use(history({
    verbose: true
}));
// Documentation for connect-history-api-fallback requires this again...
app.use(serveStatic(path.join(__dirname, '..', '/dist')));

app.get('/getArtists', (req, res) => {
  let response = {
    artists: [
      {name: 'Arabo Ispiryan', id: '1', img: 'https://i.ytimg.com/vi/bxOzCo4we_g/maxresdefault.jpg'},
      {name: 'Super Sako', id: '2', img: 'http://asbarez.com/wp-content/uploads/2017/06/FullSizeRender-2.jpg'},
      {name: 'Sirusho', id: '3', img: 'https://armeniagogo.com/wp-content/uploads/2016/12/sirusho-e1481819915997.jpg'},
      {name: 'Tata Simonyan', id: '4', img: 'https://i.ytimg.com/vi/F01XfVh9C1E/maxresdefault.jpg'},
      {name: 'Aram Asatryan', id: '5', img: 'https://i.ytimg.com/vi/0NPZb8wqwVo/hqdefault.jpg'},
      {name: 'Joan Manuel Serrat', id: '6', img: 'https://plenamar.do/wp-content/uploads/2019/11/Actualidad_295483191_71734757_854x640.jpg'},
      {name: 'Natalia Lafourcade', id: '7', img: 'https://images-na.ssl-images-amazon.com/images/I/C10pkQJaAfS._CR0,0,3840,2880_._SL1000_.jpg'},
      {name: 'Adriano Celentano', id: '8', img: 'https://www.mitrofm.com/site/wp-content/uploads/2016/11/Adriano_Celentano_4.jpg'},
      {name: 'Igor Sklyar', id: '9', img: 'https://image.tmdb.org/t/p/w235_and_h235_face/atpeVudJr8Nw6C79mNn2yxzEsLo.jpg'}
    ]
  }
  res.status(200)
  res.json(response)
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
})

app.get('/getTranslatorInfo/:id', (req, res) => {
  let response = {
    currentTranslator: {
      firstName: 'Mathew',
      lastName: 'Bfenkamp',
      languages: ['English', 'Armenian', 'Norwegian']
    }
  }
  res.status(200)
  res.json(response)
})

app.get('/getSongs', (req, res) => {
  let response = {
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
  }
  res.status(200)
  res.json(response)
})

app.get('/getSongInfo', (req, res) => {
  console.log("here")
  let response = {
    songInfo: {
      title: 'Tun Im Hayreni',
      artist: 'Arabo Ispiryan (Արաբո Իսպիրյան)',
      originalLanguage: 'Armenian',
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
    }
  }
  console.log(response)
  res.status(200)
  res.json(response)
})

let port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log('Node js at port', port);
});
