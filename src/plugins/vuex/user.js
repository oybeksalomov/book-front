import axios from "axios";

export default {
    actions: {
        fetchToken(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8880/api/users/auth', data)
                    .then((response) => {
                        console.log('Token olindi')
                        console.log(response)

                        context.commit('updateToken', response.data.token)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Token olishda xatolik bor')
                        reject()
                    })
                    .finally(() => {
                        console.log('Bu funksiya har doim ishlarkan')
                    })
            })
        }
    },
    mutations: {
        updateToken(state, token) {
            localStorage.setItem('token', token)
            state.token = token
        }
    },
    state: {
        token: localStorage.getItem('token')
    },
    getters: {
        getToken(state) {
            return state.token
        }
    },
}