<script setup lang="ts">
</script>

<template>
  <Head>
    <Title>Home</Title>
  </Head>

  <NuxtLayout name="app">
    <v-container>
      <h1>Home</h1>
      <div class="tw-space-x-2">
        <v-btn prepend-icon="$account">
          Button 1
        </v-btn>
        <v-btn variant="tonal">
          Button 2
        </v-btn>
      </div>
      <p class="tw-text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laboriosam. Consectetur dolorum debitis inventore tempora nihil amet consequuntur corrupti, voluptatum quod cumque neque corporis ducimus quia. Consequuntur iusto dolores dolorum!
      </p>
    </v-container>
  </NuxtLayout>
</template>
