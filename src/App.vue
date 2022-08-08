<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Navigation lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name">
            <v-list-item-icon>
              <v-icon>{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
      clipped-left
    >
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Online Dating App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/shunya9811/recursion-online-dating-app"
        target="_blank"
        text
      >
        <span class="mr-2">Support</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!--コンテンツを入れる
        <router-view/>
        -->
    </v-main>

    <v-footer app
      color="primary lighten-1"
      padless
    >
      <v-card-text class="py-2 white--text text-center">
        © {{ new Date().getFullYear() }} — <strong>Online Dating App</strong>
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    nav_lists: [
      {name: 'User List',icon: 'mdi-account-group'},
      {name: 'Message List',icon: 'mdi-email-edit'},
    ]
  }),
};
</script>
