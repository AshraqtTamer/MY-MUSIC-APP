<<<<<<< HEAD
import { defineStore } from 'pinia';

export default defineStore("modal",{
    state:()=>({
         isOpen: false,
        }),
    getters:{
        hiddenclass(state){
            return !state.isOpen? "hidden":"";

        },

    },

=======
import { defineStore } from 'pinia';

export default defineStore("modal",{
    state:()=>({
         isOpen: false,
        }),
    getters:{
        hiddenclass(state){
            return !state.isOpen? "hidden":"";

        },

    },

>>>>>>> e8b6db1 (Music App)
});