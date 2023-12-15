<template>
  <LayoutsBase>
    <template #navigation>
      <NavsStartupNavigation />
    </template>

    <template #content>
      <slot />
    </template>

    <template #footer>
      <FootersBasic />
    </template>
  </LayoutsBase>
</template>
