<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking";
import AppHeader from "@/components/AppHeader.vue";
import DropDown, {type ICity} from "@/components/DropDown.vue";
import {ref} from "vue";

const selectedCity = ref<ICity | null>(null);

const setCity = (city: ICity | null) => {
  selectedCity.value = city;
}
</script>

<template>
  <AppHeader />
  <div class="home">
    <div class="home-view">
      <DropDown @select-city="setCity($event)" />
        <span style="margin-top: 80px" v-if="!selectedCity">Город не выбран</span>
        <div v-else class="city-info">
          <span>{{ selectedCity.name }}</span>
          <p>{{ selectedCity.text }}</p>
        </div>
    </div>

    <Flicking class="img-scroll" :options="{ circular: true }">
      <div class="img-item">1</div>
      <div class="img-item">2</div>
      <div class="img-item">3</div>
      <div class="img-item">4</div>
    </Flicking>
  </div>
</template>

<style lang="scss" scoped>
.img-scroll {
  width:600px;
  height: 600px;
  background-color: white;
  display: flex;
  margin-top: 80px;
}
.img-item {
  width: 100%;
  height: 100%;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.home-view {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.city-info {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 18px;
  }

}
</style>