<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
    class="field"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
  >
  <p
    v-if="error"
    class="errorMessage"
    :id="`${uuid}-error`"
    aria-live="assertive"
  >
    {{ error }}
  </p>
</template>

<script lang="ts">
import UniqueID from '../features/UniqueID'
import { defineComponent } from 'vue'
import SetupFormComponent from '../features/SetupFormComponent'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  setup (props, context) {
    const { updateValue } = SetupFormComponent(props, context)
    const uuid: any = UniqueID().getID()

    return {
      updateValue,
      uuid
    }
  }
})
</script>
