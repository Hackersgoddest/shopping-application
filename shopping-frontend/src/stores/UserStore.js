import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import API from "../plugin/api";


export const useUserStore = defineStore('UserStore', () => {
  let openLogin = ref(false)
  let isLogin = ref(false)
  let errorMessage = ref("");
  let unableToLogin = ref(false);

  let user = reactive({
    id: null,
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });


  function logInUser() {
    API.get('/api/user/').then((res) => {
      unableToLogin.value = false;
      isLogin.value = true;
      openLogin.value = false
      user.first_name = res.data.user.first_name;
      user.last_name = res.data.user.last_name;
      user.email = res.data.user.email;
      user.username = res.data.user.username;
      user.id = res.data.user.id;
    }).catch((error) => {
      isLogin.value = false
      openLogin.value = true
      localStorage.setItem('token', '')
    })
  }

  function login() {
    localStorage.setItem('token', '')
    API.post("api/login/", {
      username: user.email,
      password: user.password,
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("expiry", res.data.expiry);
        unableToLogin.value = false;
        isLogin.value = true;
        openLogin.value = false
        user.first_name = res.data.user.first_name;
        user.last_name = res.data.user.last_name;
        user.email = res.data.user.email;
        user.username = res.data.user.username;
        user.id = res.data.user.id;
      })
      .catch((error) => {
        unableToLogin.value = true;
        openLogin.value = true
        if (error.response.data["non_field_errors"] !== undefined)
          errorMessage.value = "Invalid credentials";
        else if (error.response.data["username"] !== undefined)
          errorMessage.value = "Email field cannot be empty";
        else if (error.response.data["password"] !== undefined)
          errorMessage.value = "Password field cannot be empty";
        else errorMessage.value = "Maximum login limit exceeded";
        setTimeout(() => (unableToLogin.value = false), 3000);
      });
  }

  function signUp() {
    localStorage.setItem('token', '')
    API.post("api/register/", {
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
      password: user.password,
    })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("expiry", res.data.expiry)
        unableToLogin.value = false;
        isLogin.value = true
        openLogin.value = false
      })
      .catch((error) => {
        unableToLogin.value = true;
        openLogin.value = true
        if (error.response.data["first_name"] !== undefined)
          errorMessage.value = "First name field cannot be empty";
        else if (error.response.data["last_name"] !== undefined)
          errorMessage.value = "Last name field cannot be empty";
        else if (error.response.data["username"] !== undefined)
          errorMessage.value = [
            error.response.data.username[0] == "This field may not be blank.",
          ]
            ? "Username field cannot be empty"
            : error.response.data.username[0];
        else if (error.response.data["email"] !== undefined)
          errorMessage.value = [
            error.response.data.email[0] == "This field may not be blank.",
          ]
            ? "Email field cannot be empty"
            : error.response.data.email[0];
        else if (error.response.data["password"] !== undefined)
          errorMessage.value = "Password field cannot be empty";
        setTimeout(() => (unableToLogin.value = false), 3000);
      });
  }

  function logout() {
    API.post('api/logout/').then(() => {
      isLogin.value = false
      openLogin.value = true
      user.first_name = "";
      user.last_name = "";
      user.email = "";
      user.username = "";
      user.id = "";
      localStorage.setItem('token', '')
    }).catch((error) => {
      console.log(error)
    })
  }

  return { openLogin, isLogin, user, login, signUp, errorMessage, unableToLogin, logInUser, logout }
})