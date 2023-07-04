<script setup lang="ts">
import Icon from "@/assets/img/logo/icon.svg";

const appConfig = useAppConfig();
</script>

<template>
  <v-footer class="!tw-flex-initial">
    <v-container>
      <div class="text-primary tw-flex tw-items-center tw-justify-center tw-gap-2">
        <Icon class="tw-h-6" />
        <span class="tw-sr-only">{{ appConfig.title }}</span>
      </div>
    </v-container>
  </v-footer>
</template>
