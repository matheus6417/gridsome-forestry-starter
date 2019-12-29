<template>
  <div class="layout">
    <Header />
    <slot />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
  }
};
</script>


<style>
</style>
