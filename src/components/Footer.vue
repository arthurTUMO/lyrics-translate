<template>
    <v-footer
        dark
        padless
        app
        absolute
    >
      <v-card
        flat
        tile
        color="indigo"
        width="100%"
      >
        <v-card-text>
          <v-row justify="center">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              icon
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
            <v-col cols="12" class="text-center">
              <v-btn
                v-for="link in links"
                :key="link.route"
                class="mx-2"
                :to="link.route"
                text
                rounded
              >
                {{ link.name }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} — <strong>TRANSLATIONS</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: [
        'mdi-facebook-box',
        'mdi-twitter-box',
        'mdi-linkedin-box',
        'mdi-instagram',
      ],
    links: [
      { name: 'Artists', route: '/artists' },
      { name: 'Songs', route: '/songs' },
      { name: 'Login', route: '/login' },
      { name: 'Sign Up', route: '/registration' }
    ]
  })
}
</script>
