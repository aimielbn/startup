<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="text-blue-900 hover:text-blue-500 underline transition"
  >
    <slot />
  </NuxtLink>
</template>
