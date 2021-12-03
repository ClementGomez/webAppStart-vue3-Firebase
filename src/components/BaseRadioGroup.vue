<template>
  <div>
    <component
      v-for="opts: any in options"
      :key="opts.value"
      :is="vertical ? 'div' : 'span'"
      :style="vertical ? '' : 'margin-right: 20px;'"
    >
      <BaseRadio
        :name="name"
        :label="opts.label"
        :modelValue="modelValue"
        :value="opts.value"
        @update:modelValue="$emit('update:modelValue', $event)"
      />
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseRadio from './BaseRadio.vue'

export default defineComponent({
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  components: { BaseRadio }
})
</script>