<script setup lang="ts">
const { error = null } = defineProps<{
  error: any;
}>();

function handleReturnHome() {
  clearError({ redirect: "/" });
}
</script>

<template>
  <div class="tw-container tw-text-center">
    <div class="tw-flex tw-h-screen tw-flex-col tw-items-center tw-justify-center tw-gap-4">
      <template v-if="error">
        <h1 class="text-h1">
          {{ error.statusCode }}
        </h1>
        <p class="text-h4">
          {{ error.message }}
        </p>
        <details v-if="error" class="tw-text-center">
          <v-card class="tw-w-full">
            <v-card-text>
              <pre class="tw-overflow-x-auto tw-text-left"><code class="tw-whitespace-pre-wrap">{{ error }}</code></pre>
            </v-card-text>
          </v-card>
          <summary>Full error log can be found here:</summary>
        </details>
      </template>
      <template v-else>
        <h1>Oops!</h1>
        <p>Something went wrong.</p>
      </template>
      <v-btn @click="handleReturnHome">
        Return home
      </v-btn>
    </div>
  </div>
</template>
