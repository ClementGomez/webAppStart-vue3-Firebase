<template>
  <p
    aria-live="assertive"
    class="errorMessage"
    :id="id"
  >
    <slot />
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: [String],
      required: true
    }
  }
})
</script>
