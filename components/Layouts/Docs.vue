<template>
  <LayoutsBase>
    <template #navigation>
      <NavsDocsNavigation />
    </template>

    <template #content>
      <slot />
    </template>

    <template #footer>
      <FootersBasic />
    </template>
  </LayoutsBase>
</template>
