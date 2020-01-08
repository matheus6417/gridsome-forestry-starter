<template>
  <div>
    <span v-html="journals[0].node"></span>

    <div class="latest-journals-heading container">
      <span class="label">Latest and greatest</span>
    </div>
    <div class="latest-journals">
      <div class="container">
        <g-link :to="item.node.path" class="journal" v-for="item in journals" :key="item.node.id">
          <h3 class="journal-title">{{ item.node.title }}</h3>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    journals: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.latest-journals-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: 0.6rem;
  font-weight: 400;
  text-transform: uppercase;
}
.latest-journals {
  max-width: 100%;
  margin: 0 2rem;
  border: 1px solid var(--color-base-1);
}
.latest-journals > .container {
  display: flex;
  flex-wrap: wrap;
}
.journal {
  flex: 0 0 100%;
  display: block;
  padding: 2rem;
  transition: background 0.25s ease;
  text-decoration: none;
  border-bottom: 1px solid var(--color-base-1);
}

.journal:last-of-type {
  border-bottom: 0;
}

.journal:hover {
  background: var(--color-base-1);
}

.journal-title {
  font-size: 1rem;
  line-height: 1.35;
}
</style>
