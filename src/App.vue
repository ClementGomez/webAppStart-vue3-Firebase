<template>
  <Navbar/>
  <div class="content">
    <router-view/>
  </div>
  <div class="modal"></div>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {Navbar}
})
</script>

<style>

</style>
