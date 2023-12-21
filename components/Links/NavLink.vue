<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="text-lg text-blue-50 hover:underline transition"
    active-class="font-bold"
  >
    <slot />
  </NuxtLink>
</template>
