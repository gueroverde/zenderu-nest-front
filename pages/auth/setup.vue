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
          <div class="col-md-12 col-lg-10 col-xl-9">
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
                  <b-form ref="setupForm" @submit.prevent="completeSetup">
                    <form-wizard
                      color="#5b73e8"
                      back-button-text="Atras"
                      next-button-text="Siguiente"
                      finish-button-text="Finalizar"
                    >
                      <tab-content
                        title="Datos personales"
                        icon="mdi mdi-account-circle"
                        :before-change="() => validateStep('step1')"
                      >
                        <div
                          ref="step1"
                          class="row"
                          @on-validate="mergePartialModels"
                        >
                          <div class="col-12">
                            <div class="form-group row mb-3">
                              <div class="col-md-12">
                                <textarea
                                  id="shortDescription"
                                  v-model="user.shortDescription"
                                  name="shortDescription"
                                  class="form-control"
                                  :maxlength="225"
                                  rows="3"
                                  placeholder="Describe quien eres y por que quieres trabajar con nosotros"
                                ></textarea>
                              </div>
                            </div>
                            <div class="form-group row mb-3">
                              <div class="col-md-12">
                                <label
                                  class="col-md-12 col-form-label"
                                  for="picture"
                                  >Queremos verte, sube la foto que quieres
                                  enseñar a tus clientes</label
                                >
                                <div class="custom-file">
                                  <input
                                    id="picture"
                                    type="file"
                                    accept="image/*"
                                    class="custom-file-input"
                                  />
                                  <label
                                    class="custom-file-label"
                                    for="customFile"
                                    >Escojer foto</label
                                  >
                                </div>
                              </div>
                            </div>

                            <div class="form-group row mb-3">
                              <label
                                class="col-md-3 col-form-label"
                                for="website"
                                >Sitio Web</label
                              >
                              <div class="col-md-9">
                                <input
                                  id="website"
                                  v-model="user.website"
                                  type="text"
                                  name="website"
                                  placeholder="Pega la url"
                                  class="form-control"
                                />
                              </div>
                            </div>

                            <div class="form-group row mb-3">
                              <label
                                class="col-md-3 col-form-label"
                                for="facebook"
                                >Facebook</label
                              >
                              <div class="col-md-9">
                                <input
                                  id="facebook"
                                  v-model="user.facebook"
                                  type="text"
                                  name="facebook"
                                  placeholder="Pega la url"
                                  class="form-control"
                                />
                              </div>
                            </div>

                            <div class="form-group row mb-3">
                              <label
                                class="col-md-3 col-form-label"
                                for="instagram"
                                >Instagram</label
                              >
                              <div class="col-md-9">
                                <input
                                  id="instagram"
                                  v-model="user.instagram"
                                  type="text"
                                  name="instagram"
                                  placeholder="Pega la url"
                                  class="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <!-- end col -->
                        </div>
                        <!-- end row -->
                      </tab-content>
                      <tab-content
                        title="Experiencia"
                        icon="mdi mdi-face-profile"
                      >
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group row mb-3">
                              <div class="col-md-12">
                                <label
                                  class="col-md-12 col-form-label"
                                  for="guideExperience"
                                  >¿Has trabajado como guía de vida?</label
                                >
                                <textarea
                                  id="guideExperience"
                                  v-model="user.guideExperience"
                                  name="guideExperience"
                                  class="form-control"
                                  :maxlength="225"
                                  rows="3"
                                  placeholder="Cuéntanos tu experiencia"
                                ></textarea>
                              </div>
                            </div>
                            <div class="form-group row mb-3">
                              <div class="col-md-12">
                                <label
                                  class="col-md-12 col-form-label"
                                  for="highlights"
                                  >¿En que te destacas?</label
                                >
                                <textarea
                                  id="highlights"
                                  v-model="user.highlights"
                                  name="highlights"
                                  class="form-control"
                                  :maxlength="225"
                                  rows="3"
                                  placeholder="Escribe y describe algunas de tus habilidades"
                                ></textarea>
                              </div>
                            </div>

                            <div class="form-group row mb-3">
                              <div class="col-md-12">
                                <label
                                  class="col-md-12 col-form-label"
                                  for="whereLearned"
                                  >¿Dónde aprendiste?</label
                                >
                                <textarea
                                  id="whereLearned"
                                  v-model="user.whereLearned"
                                  name="whereLearned"
                                  class="form-control"
                                  :maxlength="225"
                                  rows="3"
                                  placeholder="Cuéntanos como has adquirido tus conocimientos"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <!-- end col -->
                        </div>
                        <!-- end row -->
                      </tab-content>
                      <tab-content
                        title="Prueba"
                        icon="mdi mdi-checkbox-marked-circle-outline"
                      >
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group row mb-3">
                              <div class="col-md-12">
                                <label
                                  class="col-md-12 col-form-label"
                                  for="realCaseExample"
                                  >Por último nos gustaría conocer cómo te
                                  desenvuelves con un caso de la vida real.
                                  Responde la siguiente consulta.</label
                                >
                                <textarea
                                  id="realCaseExample"
                                  v-model="user.realCaseExample"
                                  name="realCaseExample"
                                  class="form-control"
                                  :maxlength="225"
                                  rows="3"
                                  placeholder="Una consulta compleja aca"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <!-- end col -->
                        </div>
                        <!-- end row -->
                      </tab-content>
                      <!-- <template slot="footer" slot-scope="props">
                        <div class="wizard-footer-left">
                          <wizard-button
                            v-if="props.activeTabIndex > 0 && !props.isLastStep"
                            :style="props.fillButtonStyle"
                            @click.native="props.prevTab()"
                            >Previous</wizard-button
                          >
                        </div>
                        <div class="wizard-footer-right">
                          <wizard-button
                            v-if="!props.isLastStep"
                            class="wizard-footer-right"
                            :style="props.fillButtonStyle"
                            @click.native="props.nextTab()"
                            >Next</wizard-button
                          >

                          <wizard-button
                            v-else
                            class="wizard-footer-right finish-button"
                            :style="props.fillButtonStyle"
                            @click.native="alert('Done')"
                          >
                            {{
                              props.isLastStep ? 'Done' : 'Next'
                            }}</wizard-button
                          >
                        </div>
                      </template> -->
                    </form-wizard>
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
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  layout: 'auth',
  components: {
    FormWizard,
    TabContent,
  },
  data() {
    return {
      appName: process.env.APP_NAME,
      title: 'Registro',
      user: {
        shortDescription: '',
        picture: null,
        website: '',
        facebook: '',
        instagram: '',
        guideExperience: '',
        highlights: '',
        whereLearned: '',
        realCaseExample: '',
      },
      submitted: false,
    }
  },
  computed: {},

  methods: {
    completeSetup() {
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
    onComplete() {
      alert('Yay. Done!')
      this.$refs.setupForm.submit()
    },
    validateStep() {
      console.log('validating...')
      return true
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
<style lang="scss">
$zenderuPrincipal: #774896;
.wizard-progress-bar {
  background-color: $zenderuPrincipal !important;
  color: $zenderuPrincipal !important;
}
.wizard-icon-container {
  background-color: $zenderuPrincipal !important;
}
.wizard-icon-circle.md.checked {
  border-color: $zenderuPrincipal !important;
}
.wizard-btn {
  font-weight: 400 !important;
  background-color: $zenderuPrincipal !important;
  border-color: $zenderuPrincipal !important;
}
</style>
