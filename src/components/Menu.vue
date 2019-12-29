<template>
    <div id="menu">
        <v-app-bar app color="indigo" dark>
        <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="show = !show"></v-app-bar-nav-icon>
        <v-toolbar-title class="hidden-sm-and-down" @click="$router.push('/')">Lyrics App</v-toolbar-title>
        <!-- <v-img src="./assets/flooop.png" /> -->
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-slide-x-reverse-transition>
            <v-text-field
              v-model="searchText"
              clearable
              filled
              hide-details
              dark
              v-show="searchShow"
              label="Search">
            </v-text-field>
          </v-slide-x-reverse-transition>
          <v-btn icon @click="searchShow = !searchShow">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar-items>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn to='/artists' text>Artists</v-btn>
            <v-btn to='/songs' text>Songs</v-btn>
            <v-btn to='/login' text>Login</v-btn>
            <v-btn to='/registration' text>Registration</v-btn>
            <v-menu
        origin="top right"
        transition="scale-transition"
        offset-y
        >
        <template v-slot:activator="{ on }">
            <v-btn
            v-on="on"
            icon
            >
            <v-icon class="fa fa-language"></v-icon>
            </v-btn>
        </template>

        <v-list>
            <v-list-item
            v-for="(item, i) in items"
            :key="i"
            >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
        </v-menu>
        </v-toolbar-items>
        </v-app-bar>


        <v-navigation-drawer app v-model="show" class="hidden-md-and-up" disable-resize-watcher>
        <v-list-item>
            <v-list-item-content>
            <v-list-item-title  @click="$router.push('/');drawer=false;" class="title">
                Lyrics App
            </v-list-item-title>

            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
            dense
            nav
        >
            <v-list-item  @click="$router.push('/artists');drawer=false;">
            <v-list-item-icon>
                <v-icon>mdi-microphone-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>Artist</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-list
            dense
            nav
        >
            <v-list-item @click="$router.push('/songs');drawer=false;">
            <v-list-item-icon>
                <v-icon>mdi-music-note</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>Songs</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>


        <v-list
            dense
            nav
        >
            <v-list-item @click="$router.push('/login');drawer=false;">
            <v-list-item-icon>
                <v-icon> mdi-account</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>


        <v-list
            dense
            nav
        >
            <v-list-item @click="$router.push('/registration');drawer=false;">
            <v-list-item-icon>
                <v-icon> mdi-account-plus</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>Registration</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>

        </v-navigation-drawer>
    </div>
</template>
<script>
  export default {
    data: () => ({
      show: false,
      searchShow: false,
      items: [
        { title: 'English' },
        { title: 'Russian' },
        { title: 'Armenian' },
        { title: 'French' },
      ]
    }),
    name: 'Song',
  props: {
    msg: String
  },
    translations: [
      { language: 'English', author: 'Matthew Bofenkamp' },
      {  language: 'Spanish', author: 'Arthur' }
    ]
}
</script>
