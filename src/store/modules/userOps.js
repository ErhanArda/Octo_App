import axios from 'axios'

export default {
    state: {
        userList: [],
        },
    mutations: {
        setUserList(state, rUserList) {
            state.userList = rUserList
        }
    },
    getters: {
        _userList: state => state.userList
    },
    actions: {
        fetchUserList({ commit }) {
            axios.get(`https://reqres.in/api/users`).then(user_response => {
                console.log('user_response', user_response)
                commit("setUserList", user_response.data.data)
            })
        }
    }
}
