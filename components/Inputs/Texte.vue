<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);

const handleChange = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <input
    :name="name"
    :id="name"
    :value="modelValue"
    @input="handleChange"
    class="focus:outline-none px-4 py-2 w-full bg-white text-pink-950"
  />
</template>
