import axios from 'axios'

export default {
    state: {
        baseUrl:"https://reqres.in/api/users",
        userList: [],
        page: 1,
        total:1
        },
    mutations: {
        setUserList(state, rUserList) {
            state.userList = rUserList
        },
        newUser(state, user) {
            state.userList.push(user)
        },
        deleteUser(state,userId){
            state.userList = state.userList.filter(user => user.id !== userId)
        },
        setPage(state,page){
            state.page = page
        }
    },
    getters: {
        _userList: state => state.userList,
        getPage: state => state.page
    },
    actions: {
        fetchUserList({ commit,state }) {
            axios.get(`${state.baseUrl}?page=${state.page}`).then(user_response => {
                console.log('user_response', user_response)
                commit("setUserList", user_response.data.data)
            })
        },
        deleteUser({commit,state},userId){
            console.log('userId', userId)
            axios.delete(`${state.baseUrl}/${userId}`).then(delete_response => {
                console.log('delete_response', userId)
                if(delete_response.status === 204){
                    commit("deleteUser",userId)
                }
                else{
                    console.log("object")
                }
            })
        },
        addNewUswer({ commit,state }, user) {
            axios.post(`${state.baseUrl}`, user).then(user_add_response => {
                console.log('user_add_response', user_add_response.data)
                commit("newUser", user_add_response.data)
            })
        },
    }
}
