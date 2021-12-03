<template>
  <div class="navbar">
    <nav>
      <h1>
        <router-link :to="{ name : 'Home' }">Nonneville</router-link>
      </h1>
      <div class="links">
        <div v-if="user">
          <span>Bonjour, {{ user.displayName }}</span>
          <button @click="handleClick">déconnexion</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang='ts'>
import useLogout from '../composables/useLogout'
import { useRouter } from 'vue-router'
import { defineComponent} from 'vue'
import getUser from '../composables/getUser'

export default defineComponent({
  setup () {
    const { logout } = useLogout()
    const { user } = getUser()
    const router = useRouter()

    const handleClick = async () => {
      await logout()
      console.log( 'user logged out', user )
      router.replace({ name: 'Login' })
    }

    return { handleClick, user }
  }
})
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav .links {
  margin-left: auto;
}
nav .links a, button {
  margin-left: 16px;
  font-size: 14px;
}
span {
  font-size: 14px;
  display: inline-block;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee
}
</style>