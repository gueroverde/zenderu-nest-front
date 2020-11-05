<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <nuxt-link to="/" class="text-dark"
        ><i class="mdi mdi-home-variant h2"></i
      ></nuxt-link>
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
                  <form>
                    <div class="form-group">
                      <input
                        id="email"
                        type="email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>

                    <div class="form-group">
                      <input
                        id="userpassword"
                        type="password"
                        class="form-control"
                        placeholder="Contraseña"
                      />
                    </div>

                    <div class="custom-control custom-checkbox">
                      <input
                        id="auth-remember-check"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label"
                        for="auth-remember-check"
                        >Recordarme</label
                      >
                      <div class="float-right">
                        <nuxt-link to="/auth/recoverpwd" class="text-muted">
                          ¿Olvidaste tu contraseña?</nuxt-link
                        >
                      </div>
                    </div>

                    <div class="mt-3 text-right">
                      <button
                        class="btn btn-primary w-sm waves-effect waves-light btn-block"
                        type="submit"
                      >
                        Iniciar sesión
                      </button>
                    </div>

                    <div class="mt-4 text-center">
                      <div class="signin-other-title">
                        <h5 class="font-size-14 mb-3 title">
                          Inicia sesión con
                        </h5>
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
                      <p class="mb-0">
                        ¿No tienes una cuenta?
                        <nuxt-link
                          to="/auth/register"
                          class="font-weight-medium text-primary"
                        >
                          Registrate Ahora</nuxt-link
                        >
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="mt-5 text-center">
              <p>
                © {{ new Date().getFullYear() }} {{ appName }}. Hecho con
                <i class="mdi mdi-heart text-danger"></i> para todos
              </p>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
  </div>
</template>

<script>
/**
 * Login-1 component
 */
export default {
  layout: 'auth',
  data() {
    return {
      appName: process.env.APP_NAME,
      title: 'Inicio de sesión',
    }
  },
  head() {
    return {
      title: `${this.title} | ${this.appName}`,
    }
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
