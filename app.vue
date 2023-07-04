<script setup lang="ts">
const { title, description } = useAppConfig();

useServerSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
});

useHead({
  titleTemplate: t => (t ? `${t} | ${title}` : title),
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
