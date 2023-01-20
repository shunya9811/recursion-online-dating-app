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
        getUsers: function({commit}, payload) {
            commit('setUsers', payload)
        }
    },
    getters: {
        getUserById: (state) => (id) => {
            return state.users.find((user) => user.login.uuid === id);
        },
    }
}