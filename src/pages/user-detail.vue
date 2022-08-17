<template>
    <div class="user-detail">
        <v-card class="ma-8 pa-8" color="blue darken-1">
            <v-row>
                <v-col cols="3" class="text-center">
                    <v-avatar size="180">
                        <v-img :src="`${ getUserById(id).picture.large }`"></v-img>
                    </v-avatar>
                    <h2 class="mt-4">
                        {{ getUserById(id).name.first + " " + getUserById(id).name.last }}
                    </h2>
                </v-col>
                <v-col cols="8">
                    <div class="list">
                        <div class="text-left">
                            <h2>Gender</h2>
                        </div>
                        <div class="text-right">
                            <h2>{{ getUserById(id).gender }}</h2>
                        </div>
                    </div>
                    <div class="list">
                        <div class="text-left">
                            <h2>Age</h2>
                        </div>
                        <div class="text-right">
                            <h2>{{ getUserById(id).dob.age }}</h2>
                        </div>
                    </div>
                    <div class="list">
                        <div class="text-left">
                            <h2>Country</h2>
                        </div>
                        <div class="text-right">
                            <h2>{{ getUserById(id).location.country }}</h2>
                        </div>
                    </div>
                    <div class="list">
                        <div class="text-left">
                            <h2>State</h2>
                        </div>
                        <div class="text-right">
                            <h2>{{ getUserById(id).location.state }}</h2>
                        </div>
                    </div>
                    <div class="list">
                        <div class="text-left">
                            <h2>City</h2>
                        </div>
                        <div class="text-right">
                            <h2>{{ getUserById(id).location.city }}</h2>
                        </div>
                    </div>
                    <div class="list">
                        <div class="text-left">
                            <h2>e-mail</h2>
                        </div>
                        <div>
                            <h2>{{ getUserById(id).email }}</h2>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card>
        <div class="btn-container">
            <router-link :to="`/user`">
                <v-btn
                    color="secondary"
                    elevation="15"
                    class="ma-2 mt-8"
                    x-large
                ><v-icon>mdi-arrow-u-left-bottom-bold</v-icon>Back
                </v-btn>
            </router-link>
            <router-link :to="`/user/${getUserById(id).login.uuid}/chat`">
                <v-btn
                    color="secondary"
                    elevation="15"
                    class="ma-2 mt-8"
                    x-large
                    @click="createChatLog(id)"
                ><v-icon>mdi-email-edit</v-icon>Message
                </v-btn>
            </router-link>
        </div>
    </div>
</template>

<script>
//import { mapGetters } from 'vuex';

export default{
    name: 'UserDetail',
    computed: {
        id() {
            return this.$route.params.id;
        },
        //...mapGetters(['users/getUserById']),
        getUserById: function(){
            //modulesを使うときは呼び出し方、注意 actionとは違う
            //this.$store.getters["moduleName/getterName"]
            return this.$store.getters["users/getUserById"]
        }
    },
    methods: {
        createChatLog(id) {
            if (!(this.$store.state.messages.messages.some(message => message.userId === id))){
                this.$store.commit('messages/setMessages', id)
            }
        },
    }
}
</script>

<style scoped>
.list{
    display: flex;
    justify-content:space-between;
    border-top-style: none;
    border-bottom-style: solid;
    border-left-style: none;
    border-right-style: none;
    border-color: #2a295c;
    border-width: 1px;
    padding: 0.5rem;
    padding-right: 2rem;
    padding-left: 2rem;
}

.btn-container{
    display: flex;
    justify-content: center;
    align-content: center;
}
</style>