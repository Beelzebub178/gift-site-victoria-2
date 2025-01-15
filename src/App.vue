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
import { ref, onMounted, watch } from 'vue';
import MatrixRain from './components/MatrixRain.vue'
import { useRouter } from 'vue-router';

const showMatrix = ref(true);
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    showMatrix.value = false;
    router.push("/main-page");
  }, 3000);
});

</script>

<style>
.blur-fade-enter-active, .blur-fade-leave-active {
  transition: opacity 2s, filter 4s;
}
.blur-fade-enter-from, .blur-fade-leave-to {
  opacity: 0;
  filter: blur(30px);
}

.route-blur-fade-enter-active, .route-blur-fade-leave-active {
  transition: opacity 6s, filter 6s, transform 5s;
}
.route-blur-fade-enter-from, .route-blur-fade-leave-to {
  opacity: 1;
  filter: blur(5px);
  transform: scale(0.98);
}
</style>