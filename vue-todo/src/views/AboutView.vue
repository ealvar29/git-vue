<script lang="ts">
// import { useCounterStore } from '@/stores/counter'

// export default {
//   setup() {
//     const counter = useCounterStore();

//     counter.increment();
//   }
// }

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Count is {{ counter.counter }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
