<script setup lang="ts">
import Icon from "@/assets/img/logo/icon.svg";

const appConfig = useAppConfig();
const route = useRoute();

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
</script>

<template>
  <v-app-bar>
    <template #title>
      <NuxtLink to="/" class="text-primary tw-flex tw-items-center tw-gap-2">
        <Icon class="tw-h-6" />
        <span class="tw-sr-only">{{ appConfig.title }}</span>
      </NuxtLink>
    </template>
    <template v-for="link in links" :key="`${link}`">
      <v-btn
        class="tw-ml-2 first-of-type:tw-ml-0"
        role="link"
        rounded="md"
        :ripple="false"
        :variant="route.path === link.href ? 'tonal' : 'text'"
        :aria-current="route.path === link.href ? 'page' : undefined"
        @click="() => $router.push(link.href)"
      >
        {{ link.label }}
      </v-btn>
    </template>
  </v-app-bar>
</template>
