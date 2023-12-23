<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink :to="to" class="">
    <div class="text-5xl text-blue-950 group-hover:text-blue-500 transition">
      <slot name="icon" />
    </div>

    <div
      class="bg-blue-600 text-blue-50 font-bold py-2 px-4 rounded-full w-32 hover:shadow-md hover:ring-2 hover:ring-blue-400 transition text-center"
    >
      <slot />
    </div>
  </NuxtLink>
</template>
