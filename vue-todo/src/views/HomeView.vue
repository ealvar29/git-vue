<script lang="ts">
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore();
    console.log(counter)
  }
}
</script>

<template>
  <main>
    <p>Hello</p>
    <p>{{ counter.counter }}</p>
  </main>
</template>
