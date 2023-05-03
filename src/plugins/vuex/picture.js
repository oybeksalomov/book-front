import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        pushPictures(context, data) {
            const formData = new FormData()
            formData.append('file', data)
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8880/api/media_objects', formData)
                    .then((response) => {
                        console.log('Rasm MO ga jonatildi')
                        console.log(response)

                        context.commit('updatePicture', response.data)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Rasm jonatishda xatolik bor')
                        reject()
                    })
            })
        }
    },
    mutations: {
        updatePicture(state, picture) {
            state.picture.id = picture["@id"]
        }
    },
    state: {
        picture: {
            id: ""
        }
    },
    getters: {
        getPictureId(state) {
            return state.picture
        }
    },
}
