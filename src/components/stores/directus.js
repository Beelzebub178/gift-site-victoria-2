import { ref } from 'vue';
import { defineStore } from 'pinia';
import { authentication, createDirectus, rest, readItems } from '@directus/sdk';

export const useDirectusStore = defineStore('directus', () => {
  const client = ref(null);
  const homePage = ref([]);

  const load = async () => {
    client.value = createDirectus('https://directus.danya.evil-chan.ru')
      .with(authentication())
      .with(rest());

    if (client.value === null) {
      throw new Error("Не верный логин или пароль");
    }

    await client.value.login("admin.danya@evil-chan.ru", "?={pxt9?#1#!R\\");

    homePage.value = await client.value.request(
      readItems("pins", {
        fields: ["*"]
      })
    );
  };

  const getHome = async () => {
    await load();
    return homePage.value;
  };

  return { client, getHome, homePage };
});