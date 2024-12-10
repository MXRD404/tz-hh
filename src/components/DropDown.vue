<script setup lang="ts">
import {ref} from "vue";

export interface ICity {
  name: string,
  text: string
}

const selectedCity = ref<ICity | null>(null);
const cityList: ICity[] = [
  {
    name: 'Санкт-Петербург',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore optio qui quos ratione voluptatibus. Aliquid architecto et explicabo facere laboriosam, reiciendis voluptatibus. Eaque earum, esse maiores nobis obcaecati perspiciatis ullam"
  },
  {
    name: 'Москва',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore optio qui quos ratione voluptatibus. Aliquid architecto et explicabo facere laboriosam, reiciendis voluptatibus. Eaque earum, esse maiores nobis obcaecati perspiciatis ullam"
  },
  {
    name: 'Казань',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore optio qui quos ratione voluptatibus. Aliquid architecto et explicabo facere laboriosam, reiciendis voluptatibus. Eaque earum, esse maiores nobis obcaecati perspiciatis ullam"
  },
  {
    name: 'Уфа',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore optio qui quos ratione voluptatibus. Aliquid architecto et explicabo facere laboriosam, reiciendis voluptatibus. Eaque earum, esse maiores nobis obcaecati perspiciatis ullam"
  },
  {
    name: 'Челябинск',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore optio qui quos ratione voluptatibus. Aliquid architecto et explicabo facere laboriosam, reiciendis voluptatibus. Eaque earum, esse maiores nobis obcaecati perspiciatis ullam"
  },
  {
    name: 'Салават',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore optio qui quos ratione voluptatibus. Aliquid architecto et explicabo facere laboriosam, reiciendis voluptatibus. Eaque earum, esse maiores nobis obcaecati perspiciatis ullam"
  },
  {
    name: 'Октябрьский',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore optio qui quos ratione voluptatibus. Aliquid architecto et explicabo facere laboriosam, reiciendis voluptatibus. Eaque earum, esse maiores nobis obcaecati perspiciatis ullam"
  },
  {
    name: 'Псков',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore optio qui quos ratione voluptatibus. Aliquid architecto et explicabo facere laboriosam, reiciendis voluptatibus. Eaque earum, esse maiores nobis obcaecati perspiciatis ullam"
  },
  {
    name: 'Великий Новгород',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore optio qui quos ratione voluptatibus. Aliquid architecto et explicabo facere laboriosam, reiciendis voluptatibus. Eaque earum, esse maiores nobis obcaecati perspiciatis ullam"
  },
  {
    name: 'Мурманск',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore optio qui quos ratione voluptatibus. Aliquid architecto et explicabo facere laboriosam, reiciendis voluptatibus. Eaque earum, esse maiores nobis obcaecati perspiciatis ullam"
  }
]

const isSelect = ref(false)

const selectCity = (value: ICity) => {
  selectedCity.value = value
  isSelect.value = !isSelect.value
  emit('selectCity', value)
}

const emit = defineEmits<{
  (e: 'selectCity', v: ICity): void
}>()

</script>

<template>
  <div class="drop-down">
    <div @click="isSelect = !isSelect" class="drop-down__input">
      <span v-if="selectedCity">{{ selectedCity.name }}</span>
      <span v-else>Выберите город</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    </div>
    <div v-if="isSelect" class="drop-down__list">
      <div @click="selectCity(item)" :key="item.name" v-for="item in cityList" class="list-item">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.drop-down {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
}
.drop-down__input {
  width: 230px;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;
  padding-block: 12px;
  background-color: white;
  cursor: pointer;
}
.list-item {
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.drop-down__list {
  position: absolute;
  top: 60px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.5);
  left: 0;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
}
</style>