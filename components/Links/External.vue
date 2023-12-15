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
    target="_blank"
    class="group inline-flex space-x-1.5 items-baseline"
  >
    <span class="underline text-pink-900 group-hover:text-pink-500 transition">
      <slot />
    </span>
    <span>
      <i class="fa-solid fa-up-right-from-square"></i>
    </span>
  </NuxtLink>
</template>
