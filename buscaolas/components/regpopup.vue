<template>
    <div>
      <button class="register-button" @click="showModal = true">Register</button>
      <div v-if="showModal" class="popup-overlay">
        <div class="popup-container">
          <button class="popup-close-button" @click="showModal = false">X</button>
          <h2>Register</h2>
          <form>
            <div>
              <label for="username">Username:</label>
              <input type="text" id="username" v-model="username" />
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="email" />
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" id="password" v-model="password" />
            </div>
            <div>
              <label for="confirm-password">Confirm Password:</label>
              <input type="password" id="confirm-password" v-model="confirmPassword" />
            </div>
            <button class="register-button">Register</button>
          </form>
          <div class="popup-login-link">
            Already have an account? <a href="#">Log in here</a>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        showModal: false,
        showLoginModal: false,
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        loginEmail: '',
        loginPassword: ''
      };
    },
    methods: {
      register() {
        // Call API to register user
        console.log('Register user:', {
          username: this.username,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        });
        // Clear form fields
        this.username = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        // Hide register modal
        this.showModal = false;
      },
      login() {
        // Call API to login user
        console.log('Login user:', {
          email: this.loginEmail,
          password: this.loginPassword
        });
        // Clear form fields
        this.loginEmail = '';
        this.loginPassword = '';
        // Hide login modal
        this.showLoginModal = false;
      }
    }
  };
  </script>
  
  <style>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

.popup-close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.popup-login-link {
  margin-top: 10px;
  text-align: center;
}
</style>