<template>
    <div class="user-list">
        <!--どんなユーザーを探しているのかを表示-->
        <v-container>
            <user-card/>
        </v-container>
    </div>
</template>

<script>
import UserCard from '../components/user-card.vue'
import axios from 'axios'

export default {
    name: 'UserList',
    components: {
        UserCard,
    },
    computed: {
        users() {
            return this.$store.state.users.users
        }
    },
    created(){
        let users = this.$store.state.users.users
        if(Object.values(users).length === 0){
        axios.get('https://randomuser.me/api/?results=9')
            .then(response => {
                this.$store.dispatch('users/getUsers', response.data)
            })
            .catch(error => console.log(error))
        }  
    }
}
</script>
