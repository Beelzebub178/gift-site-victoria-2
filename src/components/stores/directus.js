import { ref } from 'vue';
import { defineStore } from 'pinia';
import { authentication, createDirectus, rest } from '@directus/sdk';

export const useDirectusStore = defineStore('directus', () => {
  const client = ref(null);
  const homePage = ref([]);

  const load = async () => {
    client.value = createDirectus('http://localhost:8056')
      .with(authentication())
      .with(rest());

    if (!client.value) {
      throw new Error("Неверный логин или пароль");
    }

    await client.value.auth.login({
      email: "admin.danya@evil-chan.ru",
      password: "?={pxt9?#1#!R\\"
    });

    const responseHome = await client.value.items('pins').readMany({
      fields: ['*']
    });
    homePage.value = responseHome.data;
  };

  const getHome = async () => {
    await load();
    return homePage.value;
  };

  return { client, getHome, homePage };
});