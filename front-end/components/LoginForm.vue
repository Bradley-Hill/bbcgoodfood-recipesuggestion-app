<template>
  <form @submit.prevent="loginSubmit({ email, password })">
    <input
      v-model="email"
      type="email"
      :class="{ 'error-message': hasErrorEmail }"
      placeholder="User-email"
      @input="verifyEmail"
    />
    <input
      v-model="password"
      type="password"
      :class="{ 'error-message': hasErrorPassword }"
      placeholder="Password"
      @input="verifyPassword"
    />
    <p v-if="hasErrorPassword" class="password-requirements">
      Password must contain at least one lowercase letter, one uppercase letter,
      one number, and be at least 8 characters long.
    </p>
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      hasErrorEmail: false,
      hasErrorPassword: false,
    }
  },
  methods: {
    verifyEmail() {
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
      this.hasErrorEmail = !emailRegex.test(this.email)
    },
    verifyPassword() {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
      this.hasErrorPassword = !passwordRegex.test(this.password)
    },
    loginSubmit(credentials) {
      // handle form submission
      console.log(credentials)
    },
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}
input {
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
}
button {
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
}
button:hover {
  background-color: #0056b3;
}
button:active {
  background-color: #004085;
}
.error-message {
  border: 1px solid red;
}
.password-requirements {
  color: red;
  font-size: 0.8em;
  width: 100%;
  max-width: 300px;
  text-align: center;
}
</style>
