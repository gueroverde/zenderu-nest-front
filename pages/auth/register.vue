<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <nuxt-link to="/" class="text-dark">
        <i class="mdi mdi-home-variant h2"></i>
      </nuxt-link>
    </div>
    <div class="account-pages my-5 pt-sm-5">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card">
              <div class="card-body p-4">
                <div class="text-start mt-2">
                  <img
                    src="~/assets/images/logo-dark.svg"
                    alt=""
                    height="50"
                    class="logo logo-dark"
                  />
                </div>
                <div class="p-2 mt-4">
                  <div
                    v-if="notification.show"
                    :class="'alert ' + notification.type"
                  >
                    {{ notification.message }}
                  </div>

                  <b-form @submit.prevent="tryToRegisterIn">
                    <b-form-group
                      id="email-group"
                      label=""
                      label-for="fullName"
                    >
                      <b-form-input
                        id="fullName"
                        v-model="user.fullName"
                        type="text"
                        placeholder="Nombre completo"
                        :class="{
                          'is-invalid': submitted && $v.user.fullName.$error,
                        }"
                      ></b-form-input>
                      <div
                        v-if="submitted && !$v.user.fullName.required"
                        class="invalid-feedback"
                      >
                        El nombre completo es requerido.
                      </div>
                    </b-form-group>

                    <b-form-group
                      id="fullname-group"
                      label=""
                      label-for="email"
                    >
                      <b-form-input
                        id="email"
                        v-model="user.email"
                        type="email"
                        placeholder="Email"
                        :class="{
                          'is-invalid': submitted && $v.user.email.$error,
                        }"
                      ></b-form-input>
                      <div
                        v-if="submitted && $v.user.email.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="!$v.user.email.required"
                          >El email es requerido.</span
                        >
                        <span v-if="!$v.user.email.email"
                          >Por favor introduce un email válido.</span
                        >
                      </div>
                    </b-form-group>

                    <b-form-group
                      id="password-group"
                      label=""
                      label-for="password"
                    >
                      <b-form-input
                        id="password"
                        v-model="user.password"
                        type="password"
                        placeholder="Contraseña"
                        :class="{
                          'is-invalid': submitted && $v.user.password.$error,
                        }"
                      ></b-form-input>
                      <div
                        v-if="submitted && !$v.user.password.required"
                        class="invalid-feedback"
                      >
                        La contraseña es requerida.
                      </div>
                    </b-form-group>
                    <div class="custom-control custom-checkbox">
                      <input
                        id="auth-terms-condition-check"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label"
                        for="auth-terms-condition-check"
                      >
                        Acepto los
                        <a href="javascript: void(0);" class="text-dark"
                          >Terminos y condiciones</a
                        >
                      </label>
                    </div>
                    <div class="mt-3 text-right">
                      <b-button
                        type="submit"
                        variant="primary"
                        class="w-sm btn-block"
                        >Registrate</b-button
                      >
                    </div>

                    <div class="mt-4 text-center">
                      <div class="signin-other-title">
                        <h5 class="font-size-14 mb-3 title">Registrate con</h5>
                      </div>

                      <b-button-group class="btn-block">
                        <b-button variant="primary" class="facebook"
                          ><i class="fab fa-facebook mr-1" />Facebook</b-button
                        >
                        <b-button variant="primary" class="google"
                          ><i class="fab fa-google mr-1" />Google</b-button
                        >
                      </b-button-group>
                    </div>
                    <div class="mt-4 text-center">
                      <p class="text-muted mb-0">
                        ¿Ya tienes una cuenta?
                        <nuxt-link
                          to="/auth/login"
                          class="font-weight-medium text-primary"
                          >Inicia sesión</nuxt-link
                        >
                      </p>
                    </div>
                  </b-form>
                </div>
                <!-- end card-body -->
              </div>
              <!-- end card -->
            </div>
            <div class="mt-5 text-center">
              <p>
                © {{ new Date().getFullYear() }} {{ appName }}. Hecho con
                <i class="mdi mdi-heart text-danger"></i> para todos
              </p>
            </div>
          </div>
          <!-- end col -->
        </div>
      </div>
    </div>
    <!-- end row -->
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
/**
 * Register component
 */
export default {
  layout: 'auth',
  data() {
    return {
      title: 'Registro',
      appName: process.env.APP_NAME,
      notification: {
        show: false,
        type: 'alert-success',
        message: 'register sucessfully',
      },
      user: {
        username: '',
        email: '',
        password: '',
      },
      submitted: false,
      tryingToRegister: false,
      isRegisterError: false,
    }
  },
  computed: {},

  methods: {
    // Try to register the user in with the email, username
    // and password they provided.
    tryToRegisterIn() {
      this.submitted = true
      // stop here if form is invalid
      this.$v.$touch()

      if (this.$v.$invalid) {
      } else {
        const { email, username, password } = this.user
        if (email && username && password) {
          alert('register user', this.user)
          this.notification.show = true
        }
      }
    },
  },
  head() {
    return {
      title: `${this.title} | ${this.appName}`,
    }
  },
  validations: {
    user: {
      username: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
}
</script>
<style lang="scss" scoped>
.facebook {
  background-color: #5a76e0;
}
.google {
  background-color: #f9686c;
}
</style>
