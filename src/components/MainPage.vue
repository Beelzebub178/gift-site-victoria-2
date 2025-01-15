<template>
  <div class="main-page">
    <HeaderForms />
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeaderForms from './HeaderForms.vue';
import { useDirectusStore } from './stores/directus.js';

const { getHome } = useDirectusStore();

const posts = ref([]);
const errorMessage = ref('');

async function loadPosts() {
  try {
    posts.value = await getHome();
  } catch (error) {
    console.error('Ошибка при загрузке постов:', error);
    errorMessage.value = 'Не удалось загрузить посты. Попробуйте позже.';
  }
}

onMounted(loadPosts);
</script>

<style scoped>
.main-page {
  padding: 20px;
  text-align: center;
  animation: slide-in 1.5s ease-out;
}

.error {
  color: red;
  margin: 10px 0;
}

@keyframes slide-in {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>