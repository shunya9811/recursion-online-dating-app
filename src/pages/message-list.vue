<template>
    <div class="message-list">
        <v-list
            max-height="70vh"
            height="70vh"
            class="overflow-y-auto px-6"
        >
            <v-simple-table>
                <template v-slot:default>
                    <tbody>
                        <tr 
                            v-for="user in getChatedList"
                            :key="user.userId"
                            class="py-10"
                            height="80px"
                            @click="transitionToChatPage(user.userId)"
                        >
                            <td class="text-center" width="8%">
                                <v-avatar>
                                    <img
                                        :src="user.picture"
                                        :alt="user.name"
                                    >
                                </v-avatar>
                            </td>
                            <td width="8%">{{ user.name }}</td>
                            <td width="16%">{{ user.timeStamp }}</td>
                            <td class="text-start" width="68%">{{ user.text }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-list>
    </div>
</template>

<script>

export default{
    name: 'MessageList',
    computed: {
        getUserById: function(){
            return this.$store.getters["users/getUserById"]
        },
        getChatedList() {
            let chatedUserList = []
            let messages = this.$store.state.messages.messages

            for (let messageObj of messages){

                let user = this.getUserById(messageObj.userId)
                let lastMsg = messageObj.chatLog.slice(-1)[0]

                chatedUserList.push({
                    userId: messageObj.userId,
                    name: user.name.first + " " + user.name.last,
                    picture: user.picture.large,
                    timeStamp: lastMsg.timeStamp,
                    text: lastMsg.text
                })
            }

            chatedUserList.sort((a,b) => {
                return new Date(b.timeStamp) - new Date(a.timeStamp)
            })

            return chatedUserList
        }
    },
    methods: {
        transitionToChatPage(userId){
            return this.$router.push('/user/' + userId + '/chat/')
        }
    }    
}
</script>
