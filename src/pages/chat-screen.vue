<template>
    <div class="chat-screen">
        <v-card 
            flat
            max-height="75vh" 
            height="75vh"
            class="overflow-y-auto"
        >
            <chat-log></chat-log>
        </v-card>
        <v-footer>
            <v-row>
                <v-text-field
                    v-model="inputText"
                    label="Message"
                    color="indigo lighten-1"
                    class="mt-5 ml-3"
                    @keydown.enter="InputMessage(id)"
                    clearable
                    outlined
                    rounded
                    dense
                ></v-text-field>

                <v-btn
                    icon
                    small
                    class="mt-6 mx-3"
                    color="indigo lighten-1"
                    @click="InputMessage(id)"
                    :disabled="!inputText"
                >
                <v-icon color="indigo lighten-1">mdi-send</v-icon>
                </v-btn>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
import ChatLog from '../components/chat-log.vue'

export default{
    name: 'ChatScreeen',
    data() {
        return {
            inputText : ""
        }
    },
    components: {
        ChatLog
    },
    computed: {
        id() {
            return this.$route.params.id;
        }
    },
    methods: {
        InputMessage(userId){
            if(this.inputText.length > 0){
                let today = new Date();
                let years = today.getFullYear();
                let month = ("0" + today.getMonth()).slice(-2);
                let days = ("0" + today.getDay()).slice(-2);
                let hours = ("0" + today.getHours()).slice(-2);
                let minutes = ("0" + today.getMinutes()).slice(-2);
                let seconds = ("0" + today.getSeconds()).slice(-2);
                let timeStamp = years
                                    + "-" + month
                                    + "-" + days
                                    + " " + hours
                                    + ":" + minutes
                                    + ":" + seconds;

                let messageObj = {
                    me : true,
                    text : this.inputText,
                    timeStamp : timeStamp
                }

                this.$store.commit('messages/addChatLog', {
                    userId: userId, 
                    messageObj: messageObj
                })

                this.$store.dispatch('messages/getReply', {userId, messageObj})

                this.inputText = ""
            }
        }
    }
}
</script>
