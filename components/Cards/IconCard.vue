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
    class="rounded-full flex flex-col p-4 group transition items-center justify-center hover:ring-2 hover:ring-blue-400/75 bg-blue-600 my-8 space-y-2"
  >
    <div class="text-5xl text-blue-50 group-hover:text-blue-950 transition">
      <slot name="icon" />
    </div>

    <div
      class="text-xl text-blue-50 group-hover:text-blue-950 hover:decoration-pink-950 transition"
    >
      <slot />
    </div>
  </NuxtLink>
</template>
