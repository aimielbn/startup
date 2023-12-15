<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <label
    :for="name"
    class="block text-sm font-medium text-pink-950 cursor-pointer"
  >
    <slot />
  </label>
</template>
