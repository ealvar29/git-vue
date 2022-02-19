import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", () => {
    const user = ref({
        name: 'Eduardo',
        email: 'edalvarez2015@gmail.com'
    });

    const website = computed(() => 
    user.value.email.substring(user.value.email.lastIndexOf('@') + 1)
    );

    const changeName = (newName: any) => {
        user.value.name = newName;
    }

    return {
        user,
        website,
        changeName
    }
})