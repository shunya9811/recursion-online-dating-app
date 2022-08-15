<template>
    <div class="top-page">
        <v-container>
            <v-row 
                class="text-center"
                style="height: 450px;"
                justify="center" 
                align-content="center"
            >
                <v-col class="mb-4">
                    <h1 class="display-2 font-weight-bold mb-3">
                        Welcome to <br> Online Dating App
                    </h1>

                    <p class="subheading font-weight-regular">
                        Come on, let's go find new people to meet!
                    </p>

                    <v-btn
                        color="primary"
                        elevation="24"
                        text
                    >
                        <router-link to="/user">go to find</router-link>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script>
  export default {
    name: 'TopPage',
  }
</script>
