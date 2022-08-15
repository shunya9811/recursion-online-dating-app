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
        this.$store.dispatch('users/getUsers')
    }
}
</script>
