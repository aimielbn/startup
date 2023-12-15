<script setup>
const isOpen = ref(false);
</script>

<template>
  <nav>
    <div
      class="flex items-center justify-between flex-wrap bg-pink-500 h-20 px-4 border-b border-pink-50"
    >
      <div>
        <nuxt-link to="/">
          <slot name="logo"> </slot>
        </nuxt-link>
      </div>
      <div>
        <ul
          class="hidden md:flex items-center justify-between space-x-8"
        >
          <slot name="links"></slot>
        </ul>
        <ul>
          <li class="flex md:hidden ">
            <button @click="isOpen = !isOpen">
              <i
                v-if="!isOpen"
                class="fa-solid fa-bars text-3xl text-pink-50"
              ></i>
              <div v-else>
                <i class="fa-solid fa-xmark text-3xl text-pink-50"></i>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <ul
      v-show="isOpen"
      class="md:hidden flex flex-col bg-pink-400 space-y-2 px-4 py-8 border-b border-white bg-gray-900"
    >
      <slot name="links"></slot>
    </ul>
  </nav>
</template>
