import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchBooks(context, categoryId = null) {
            let categoryUrl = ''

            if (categoryId) {
                categoryUrl = '?category=' + categoryId
            }
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8880/api/books' + categoryUrl)
                    .then((response) => {
                        console.log('Kitoblar olindi')
                        console.log(response)

                        let books = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateBooks', books)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kitoblarni olishda xatolik yuz berdi')

                        reject()
                    })
            })
        },
        pushBooks(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8880/api/books', data)
                    .then((response) => {
                        console.log("Kitob MO'ga muvaffaqiyatli qo'shildi")
                        console.log(response)
                        resolve()
                    })
                    .catch(() => {
                        console.log("Kitob qo'shishda xatolik bor")
                        reject()
                    })
            })
        },
        fetchBook(context, bookId) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:8880/api/books/' + bookId)
                    .then((response) => {
                        console.log('kitob olindi')
                        console.log(response)

                        let book = {
                            id: response.data.id,
                            name: response.data.name,
                            description: response.data.description,
                            text: response.data.text,
                            category: response.data.category,
                        }
                        context.commit('updateBook', book)
                        resolve()
                    })
                    .catch(() => {
                        console.log('kitob olishda xatolik chiqdi')
                        reject()
                    })
            })
        }
    },
    mutations: {
        updateBooks(state, books) {
            state.books = books
        },

        updateBook(state, book) {
            state.book = book
        }
    },
    state: {
        books: {
            models: [],
            totalItems: 0,
        },

        book: {
            id: null,
            name: null,
            description: null,
            text: null,
            category: null,
        }
    },
    getters: {
        getBooks(state) {
            return state.books.models
        },

        getBook(state) {
            return state.book
        }
    },

}
