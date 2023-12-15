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
    class="text-pink-900 hover:text-pink-500 underline transition"
  >
    <slot />
  </NuxtLink>
</template>
