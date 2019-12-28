<template>
  <Layout>
    <span>{{settings}}</span>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/solutions.json")
    };
  }
};
</script>
