<template>
  <transition name="blur-fade">
    <matrix-rain v-if="showMatrix" />
  </transition>
  <router-view v-slot="{ Component }">
    <transition name="route-blur-fade" mode="out-in">
      <component :is="Component" :key="$route.fullPath" />
    </transition>
  </router-view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MatrixRain from './components/MatrixRain.vue'
import { useRouter } from 'vue-router';

const showMatrix = ref(true);
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    showMatrix.value = false;
    setTimeout(() => {
      router.push("/main-page");
    }, 5000); 
  }, 7000);
});
</script>

<style>
.blur-fade-enter-active, .blur-fade-leave-active {
  transition: opacity 0.5s, filter 0.5s;
}
.blur-fade-enter-from, .blur-fade-leave-to {
  opacity: 0;
  filter: blur(10px);
}

.route-blur-fade-enter-active, .route-blur-fade-leave-active {
  transition: opacity 0.25s, filter 0.25s, transform 0.25s;
}
.route-blur-fade-enter-from, .route-blur-fade-leave-to {
  opacity: 0;
  filter: blur(5px);
  transform: scale(0.98);
}
</style>