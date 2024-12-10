<script setup lang="ts">
import useUserStore from "@/stores/user.store.ts";
import {useRouter} from "vue-router";

const userStore = useUserStore()
const router = useRouter()

const signOut = () => {
  userStore.user = null
  router.push('/login')
}

</script>

<template>
  <div v-if="userStore.user" class="app-header">
    <span class="text-user">Привет, <b>{{ userStore.user.username }}</b></span>
    <button @click="signOut()"  class="link-btn">Выйти</button>
  </div>
</template>

<style scoped>
.app-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  margin-bottom: 60px;
}
.text-user {
  font-size: 18px;
}
.link-btn {
  border: none;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
}
</style>