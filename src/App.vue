<template>
  <v-app>
    <Menu/>
    <v-content>
      <v-container fluid class="grey darken-3">
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer/>
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

<style>
.clickable {
  cursor: pointer;
}
</style>
