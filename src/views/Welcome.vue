<template>
  <div class="welcome container">
    <p>Добро пожаловать!</p>
    <div v-if="showLogin">
      <h2>Вход</h2>
      <login-form @login="enterChat" />
      <p>
        Нет аккаунта?
        <span @click="showLogin = !showLogin">Регистрация</span>
      </p>
    </div>
    <div v-else>
      <h2>Регистрация</h2>
      <sign-up-form @signup="enterChat" />
      <p>
        Есть аккаунт?
        <span @click="showLogin = !showLogin">Войти</span>
      </p>
    </div>
  </div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm.vue";
import LoginForm from "@/components/LoginForm.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    SignUpForm,
    LoginForm,
  },

  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: "ChatRoom" });
    };

    return { showLogin, enterChat };
  },
};
</script>

<style >
.welcome {
  text-align: center;
  padding: 20px 0;
  background-color: #8ecae6;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 1px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
  border-bottom: 2px solid transparent;
}

.welcome input:focus:invalid {
  border-bottom: 2px solid #f86b6b;
}
.welcome input:focus:valid {
  border-bottom: 2px solid green;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>