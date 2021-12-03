<template>
  <form @submit.prevent="handleSubmit">
    <h3>Connexion</h3>
    <BaseInput
      v-model="email"
      label="Email"
      type="email"
      autocomplete="username"
    />
    <BaseInput
      v-model="password"
      label="Mot de passe"
      type="password"
      autocomplete="current-password"
    />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">connexion</button>
    <button v-if="isPending" disabled>chargement ...</button>
  </form>

</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { ref, defineComponent } from 'vue'
import BaseInput from '../../components/BaseInput.vue'

export default defineComponent({
    setup() {

        const router = useRouter();
        const email = ref("");
        const password = ref("");
        const isPending = ref(false);
        const error = ref(null);

        // Sign in Fonction from FireBase
        const handleSubmit = async () => {
            isPending.value = true;
            await signInWithEmailAndPassword(auth, email.value, password.value)
                .then((cred) => {
                // Signed in 
                router.replace({ name: "Home" });
                isPending.value = false;
                console.log(auth.currentUser)
                // ...
            })
                .catch((err) => {
                error.value = err.message;
                console.log(err.message, email, password);
                isPending.value = false;
            });
        };
        return { error, email, password, handleSubmit, isPending };
    },
    components: { BaseInput }
})
</script>

<style>

</style>