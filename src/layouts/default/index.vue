<template>
  <div>
  <header>
 <Navigation />
  </header>
  <main>
  <slot></slot>
  </main>
  <footer></footer>
  </div>
</template>
<script setup>
import Navigation from "@/components/navigation.vue";
</script>

<style lang="scss" scoped>

</style>