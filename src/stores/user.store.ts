import {defineStore} from "pinia";
import {ref} from "vue";

interface IUser {
    username: string;
}

const useUserStore = defineStore('userStore', () => {

    const user = ref<IUser | null>(null)

    return {
        user
    }
})

export default useUserStore