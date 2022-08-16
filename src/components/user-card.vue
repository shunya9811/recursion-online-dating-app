<template>
    <div class="user-card">
        <v-row>
            <v-col v-for="user in users" 
                :key="user.login.uuid" 
                class="d-flex justify-content-center;"
                cols="4"
            >
                <v-card 
                    elevation="10"
                    class=" ma-2"
                >
                    <v-img :src="`${ user.picture.large }`" height="300" class="white--text align-end">
                        <v-card-title class="headline">{{ user.name.first + " " + user.name.last }}</v-card-title>
                    </v-img>
                    <v-card-subtitle>
                        <v-icon> mdi-map-marker </v-icon>
                        Country: {{ user.location.country }}<br>
                        Age: {{user.dob.age }}
                    </v-card-subtitle>
                    
                    <v-card-actions>
                        <router-link :to="`/user/${user.login.uuid}`">
                            <v-btn
                                color="primary"
                                class="my-3 mx-2 white--text"
                            >
                                Profile
                            </v-btn>
                        </router-link>
                        
                        <router-link :to="`/user/${user.login.uuid}/chat`">
                            <v-btn 
                                color="primary"
                                class="my-3 mx-2 white--text"
                                @click="createChatLog(id)"
                            >
                                Message
                            </v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default{
    name: 'UserCard',
    computed: {
        users() {
            return this.$store.state.users.users
        },
        id() {
            return this.$route.params.id;
        },
    },
    methods: {
        createChatLog(id) {
            if (!(this.$store.state.messages.messages.some(message => message.userId === id))){
                this.$store.commit('setMessages', id)
            }
        },
    }
}
</script>
