<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Имя" v-model="displayName" />
    <input type="email" required placeholder="email" v-model="email" />
    <input
      type="password"
      required
      placeholder="пароль"
      v-model="password"
      minlength="6"
    />
    <div class="error">{{ error }}</div>
    <button>Создать аккаунт</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignUp from "@/composables/useSignUp";

export default {
  name: "SignUpForm",

  setup(props, context) {
    const { error, signup } = useSignUp();

    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        context.emit("signup");
      }
    };

    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style>
</style>