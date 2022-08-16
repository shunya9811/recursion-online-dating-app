import axios from 'axios'

export default {
    namespaced: true,
    state: {
        messages: []
    },
    mutations: {
        setMessages(state, userId) {
            state.messages.push({
                userId: userId,
                chatLog: []
            }) 
        },
        addChatLog(state, {userId, messageObj}) {
            state.messages.find((message) => message.userId === userId).chatLog.push(messageObj)
        }
    },
    actions: {
        getReply(commit, {userId, messageObj}) {
            let params = new URLSearchParams()
            params.append('apikey', 'DZZDMpzeEVRw6pzZF5O7oVWOwRVx5ZPj')
            params.append('query', messageObj.text)

            axios.post('https://api.a3rt.recruit.co.jp/talk/v1/smalltalk', params)
                .then(response => response.json())
                .then(data => {
                    let replyObj ={
                        me : false,
                        text : data.results[0].reply,
                        timeStamp : messageObj.timeStamp
                    }

                    commit('addChatLog', {
                        userId : userId,
                        messageObj : replyObj
                    })
                })
        }
    },
    getters: {
        getMessageById: (state) => (userId) => {
            return state.messages.find((message) => message.userId === userId).chatLog
        },
        getLastChat: (state, getters) => (userId) => {
            return getters.getMessageById(userId).slice(-1)[0]
        },
        getChatedUser: (state) => {
            return state.message.map((message) => message.userId)
        }
    }
}