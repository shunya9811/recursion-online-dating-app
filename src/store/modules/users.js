import axios from 'axios'

export default {
    namespaced: true,
    state: {
        users: []
    },
    mutations: {
        setUsers : function(state, users) {
            for (let i = 0; i < 9; i++){
                state.users.push(users.results[i])
            }
        }
    },
    actions: {
        getUsers: function({commit}) {
            return axios.get('https://randomuser.me/api/?results=9')
                .then(response => {
                    commit('setUsers', response.data)
            })
        }
    },
    getters:{
        getUserById: (state) => (id) => {
            return state.users.find((user) => user.login.uuid === id);
        },
    }
}