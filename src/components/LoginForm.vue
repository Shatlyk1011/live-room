<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input
      type="password"
      required
      placeholder="пароль"
      v-model="password"
      minlength="6"
    />
    <div class="error">{{ error }}</div>
    <button>Войти</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useLogin } from "@/composables/useLogin";
export default {
  name: "SignUpForm",

  setup(props, context) {
    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style>
</style>