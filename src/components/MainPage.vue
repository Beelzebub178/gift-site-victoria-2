<template>
  <div class="main-page">
    <HeaderForms />
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <div v-for="item in items" :key="item.id">
      <h2>{{ item.title }}</h2>
      <p>{{ item.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeaderForms from './HeaderForms.vue';
import { directus } from '@/services/directus';

const items = ref([]);
const errorMessage = ref('');

async function loadArticles() {
  try {
    console.log('Загрузка статей...');
    const response = await directus.items('articles').readByQuery({
      fields: ['*'],
      limit: -1,
    });
    console.log('ответ:', response);
    items.value = response.data;
  } catch (error) {
    console.error('Ошибка при загрузке статей:', error);
    errorMessage.value = 'Не удалось загрузить статьи. Попробуйте позже.';
  }
}

onMounted(loadArticles);
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