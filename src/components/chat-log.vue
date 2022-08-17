<template>
    <div class="chat-log">
        <v-col
            class="py-2 px-4"
            cols="12"
            v-for="(chat, index) in getMessageById(id)"
            :key="index"
        >
            <v-card
                flat
                class="d-flex align-center px-4"
                :class=" { 'justify-end': chat.me } "
            >
                <v-avatar v-if="!chat.me" class="mr-4">
                    <img
                        :src="getUserById(id).picture.large"
                    >
                </v-avatar>
                <v-card
                    class="pa-3"
                    max-width="30vw"
                >
                    <p class="my-0 pl-4 text-start grey--text">{{ chat.timeStamp.split(" ")[1] }}</p>
                    <p
                        class="rounded-xl px-4 py-2 my-0"
                        :class="{ 'grey': !chat.me, 'blue': chat.me, 'black--text': chat.me }"
                    >{{ chat.text }}</p>
                </v-card>
            </v-card>
        </v-col>
    </div>
</template>

<script>
export default {
    name: 'ChatLog',
    computed: {
        id() {
            return this.$route.params.id;
        },
        getUserById: function(){
            return this.$store.getters["users/getUserById"]
        },
        getMessageById: function(){
            return this.$store.getters["messages/getMessageById"]
        }
    },

}
</script>