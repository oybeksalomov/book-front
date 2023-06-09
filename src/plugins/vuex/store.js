import {createStore} from 'vuex'
import user from "@/plugins/vuex/user";
import book from "@/plugins/vuex/book";
import category from "@/plugins/vuex/category";
import picture from "@/plugins/vuex/picture";

export default createStore({
    modules: {
        book,
        category,
        user,
        picture
    }
})