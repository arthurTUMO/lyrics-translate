<template>
  <v-app>
    <Menu/>
    <v-content>
      <router-view></router-view>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Menu from './components/Menu';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Menu,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
