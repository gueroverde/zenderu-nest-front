<template>
  <div class="landing-page">
    <div class="main-container">
      <div class="landing-page-nav">
        <headroom style="height: initial">
          <nav>
            <div
              class="container d-flex align-items-center justify-content-between"
            >
              <a
                class="navbar-logo pull-left"
                href="javascript:;"
                @click="scrollTo('#home')"
              >
                <span class="white"></span>
                <span class="dark"></span>
              </a>
              <ul class="navbar-nav d-none d-lg-flex flex-row">
                <li class="nav-item">
                  <a href="javascript:;" @click="scrollTo('#features')"
                    >EXPERTOS</a
                  >
                </li>
                <li class="nav-item">
                  <a href="javascript:;" @click="scrollTo('#layouts')"
                    >NOSOTROS</a
                  >
                </li>
                <li class="nav-item">
                  <a href="javascript:;" @click="scrollTo('#components')"
                    >PREGUNTAS FRECUENTES</a
                  >
                </li>
                <li class="nav-item">
                  <a href="javascript:;" @click="scrollTo('#themes')">TAROT</a>
                </li>
                <li class="nav-item pl-4">
                  <nuxt-link to="/auth/login"
                    ><b-button pill variant="outline-primary" class="pr-4 pl-4"
                      >INICIAR SESIÓN</b-button
                    ></nuxt-link
                  >
                </li>
              </ul>
              <span
                class="mobile-menu-button"
                @click="
                  showMobileMenu = !showMobileMenu
                  $event.stopPropagation()
                "
              >
                <i class="simple-icon-menu"></i>
              </span>
            </div>
          </nav>
        </headroom>
      </div>

      <div id="home" class="content-container">
        <div id="sectionHome" class="section home">
          <div class="container">
            <div id="homeRow" class="row home-row">
              <div class="col-12 d-block d-md-none">
                <a target="_blank">
                  <img
                    alt="mobile hero"
                    class="mobile-hero"
                    src="~/assets/images/landing-page/home-hero.png"
                  />
                </a>
              </div>

              <div class="col-12 col-xl-5 col-lg-6 col-md-6">
                <div class="home-text">
                  <div class="display-1">
                    CHATEA CON EXPERTOS
                    <br />
                    ESPIRITUALES EN VIVO
                  </div>
                  <p class="white mb-5">
                    Profesionales con habilidades verificadas <br />
                    dispuestos a entender y guiar el camino de tu vida
                  </p>
                  <nuxt-link to="/auth/login"
                    ><b-button pill class="pr-4 pl-4"
                      >PREGUNTAR AHORA</b-button
                    ></nuxt-link
                  >
                </div>
              </div>
              <div
                class="col-12 col-xl-6 offset-xl-1 col-lg-6 col-md-6 d-none d-md-block"
              >
                <a target="_blank">
                  <img
                    alt="hero"
                    src="~/assets/images/landing-page/home-hero.png"
                  />
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-12 p-0">
                <div class="home-carousel">
                  <glide-carousel :settings="slideSettings">
                    <div
                      v-for="(f, index) in slideItems"
                      :key="`slide_${index}`"
                      class="card"
                    >
                      <div class="card-body text-center">
                        <div>
                          <i :class="f.icon + ' large-icon'"></i>
                          <h5 class="mb-3 font-weight-semibold">
                            {{ f.title }}
                          </h5>
                        </div>
                        <div class="text-container">
                          <p class="detail-text">{{ f.detail }}</p>
                        </div>
                      </div>
                    </div>
                  </glide-carousel>
                </div>
              </div>
            </div>

            <div class="row">
              <a
                class="btn btn-circle btn-outline-semi-light hero-circle-button"
                @click="scrollTo('#features')"
              >
                <i class="simple-icon-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="section">
          <div id="features" class="container">
            <div class="row">
              <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                <h1>
                  Resuelve tus preguntas con expertos y encuentra la guía en tu
                  camino
                </h1>
                <p>
                  We tried to create an admin theme that we would like to use
                  ourselves so we listed our priorities. We would like to have a
                  theme that is not over complicated to use, does the job well,
                  contains must have components and looks really nice.
                </p>
              </div>
            </div>

            <div v-for="(feature, i) in features" :key="`feature_${i}`">
              <div v-if="i % 2 == 0" class="row feature-row">
                <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                  <div class="feature-text-container">
                    <h2>{{ feature.title }}</h2>
                    <p>{{ feature.detail }}</p>
                  </div>
                </div>
                <div
                  class="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 position-relative"
                >
                  <!-- <img
                    :alt="feature.title"
                    :src="feature.img"
                    class="feature-image-right feature-image-charts position-relative"
                  /> -->
                </div>
              </div>
              <div v-if="i % 2 == 1" class="row feature-row">
                <div class="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                  <!-- <img
                    :alt="feature.title"
                    :src="feature.img"
                    class="feature-image-left feature-image-charts"
                  /> -->
                </div>
                <div
                  class="col-12 col-md-6 offset-md-0 col-lg-5 offset-lg-1 d-flex align-items-center order-1 order-md-2"
                >
                  <div class="feature-text-container">
                    <h2>{{ feature.title }}</h2>
                    <p>{{ feature.detail }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="section background">
          <div id="layouts" class="container">
            <div class="row">
              <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                <h1>Structures &amp; Layouts</h1>
                <p>
                  We did our best to create layouts for various needs that
                  developers might have and best experience for users.
                  <br />They are clean and slick. They function well and look
                  good at the same time.
                </p>
              </div>
            </div>

            <div class="row pt-5">
              <div
                v-for="(l, index) in layouts"
                :key="`layout_${index}`"
                class="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5"
              >
                <img
                  class="img-fluid border-radius depth-2 mb-3 semi-rounded"
                  :src="l.img"
                />
                <h4 class="text-center">{{ l.title }}</h4>
              </div>
            </div>
          </div>
        </div> -->

        <div class="section background background-no-bottom mb-0 pb-0">
          <div class="container">
            <div class="row">
              <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                <h1>Enjoying so Far?</h1>
                <p>Purchase Piaf to get a fresh start with your new project.</p>
              </div>
              <div
                class="col-12 offset-0 col-lg-6 offset-lg-3 newsletter-input-container"
              >
                <div class="text-center mb-3">
                  <nuxt-link class="btn btn-secondary btn-xl" to="/auth/login"
                    >INICIAR SESIÓN</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="sectionFooter" class="section footer-landing mb-0">
          <div class="container">
            <div class="row footer-row">
              <div class="col-12 text-right">
                <a
                  class="btn btn-circle btn-outline-semi-light footer-circle-button"
                  href="javascript:;"
                  @click="scrollTo('#home')"
                >
                  <i class="simple-icon-arrow-up"></i>
                </a>
              </div>
              <div class="col-12 text-center footer-content">
                <a href="javascript:;" @click="scrollTo('#home')">
                  <img
                    class="footer-logo"
                    alt="footer logo"
                    src="~/assets/images/logo-light.svg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="container copyright pt-5 pb-5">
            <div class="row">
              <div class="col-12"></div>
              <div class="col-12 text-center">
                <p class="mb-0">2020 © Zenderu Todos los derechos reservados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { headroom } from 'vue-headroom'
import VueScrollTo from 'vue-scrollto'
export default {
  components: {
    headroom,
  },
  data() {
    return {
      appName: process.env.APP_NAME,
      title: 'Home',
      slideItems: [
        {
          icon: 'iconsminds-eci-icon',
          title: 'Expertos validados',
          detail:
            'Increases overall usability of the project by providing additional actions menu.',
        },
        {
          icon: 'simple-icon-bubbles',
          title: 'Chat en vivo',
          detail:
            'Carefully themed multimedia players powered by Video.js library with Youtube support.',
        },
        {
          icon: 'iconsminds-biotech',
          title: 'Sesiones especiales',
          detail:
            'Easily configurable keyboard shortcuts plugin that highly improves user experience.',
        },
        {
          icon: 'iconsminds-money-bag',
          title: 'Planes flexibles',
          detail:
            'Three states two panels icon menu that looks good, auto resizes and does the job well.',
        },
        {
          icon: 'iconsminds-deer',
          title: 'Icons Mind',
          detail:
            '1040 icons in 53 different categories, designed pixel perfect and ready for your project.',
        },
        {
          icon: 'iconsminds-palette',
          title: '20 Color Schemes',
          detail:
            'Colors, icons and design harmony that creates excellent themes to cover entire project.',
        },
        {
          icon: 'iconsminds-air-balloon-1',
          title: '3 Applications',
          detail:
            'Applications that mostly made of components are the way to get started to create something similar.',
        },
        {
          icon: 'iconsminds-resize',
          title: 'Extra Responsive',
          detail:
            'Custom Bootstrap 4 xxs & xxl classes delivers better experiences for smaller and larger screens.',
        },
      ],
      features: [
        {
          title: 'Pleasant Design',
          // img: require('~/assets/img/landing-page/features/pleasant-design.png'),
          detail:
            'As a web developer we enjoy to work on something looks nice. It is not an absolute necessity but it really motivates us that final product will look good for user point of view. <br /><br />So we put a lot of work into colors, icons, composition and design harmony. Themed components and layouts with same design language. <br /><br />We kept user experience principles always at the heart of the design process.',
        },
        {
          title: 'Extra Responsive',
          // img: require('~/assets/img/landing-page/features/extra-responsive.png'),
          detail:
            'Xxs breakpoint is for smaller screens that has a resolution lower than 420px. Xs works between 576px and 420px. Xxl breakpoint is for larger screens that has a resolution higher than 1440px. Xl works between 1200px and 1440px.<br><br>With this approach we were able to create better experiences for smaller and larger screens.',
        },
        {
          title: 'Superfine Charts',
          // img: require('~/assets/img/landing-page/features/superfine-charts.png'),
          detail:
            'Using charts is a good way to visualize data but they often look ugly and break the rhythm of design. <br /><br />We concentrated on a single chart library and tried to create charts that look good with color, opacity, border and shadow. <br /><br />Used certain plugins and created some to make charts even more useful and beautiful.',
        },
        {
          title: 'Layouts for the Job',
          // img: require('~/assets/img/landing-page/features/layouts-for-the-job.png'),
          detail:
            'Layouts are the real thing, they need to be accurate and right for the job. They should be functional for both user and developer. <br /><br />We created lots of different layouts for different jobs.<br /><br />Listing pages with view mode changing capabilities, shift select and select all functionality, application layouts with an additional menu, authentication and error layouts which has a different design than the other pages were our main focus. We also created details page with tabs that can hold many components.',
        },
        {
          title: 'Smart Menu',
          // img: require('~/assets/img/landing-page/features/smart-menu.png'),
          detail:
            'Instead of good old single panel menus with accordion structure that looks over complicated, we created 2 panels and categorized pages accordingly.<br><br>The default menu auto hides sub panel when resolution is under some breakpoint to open some space. You may also hide menu completely or use only main panel open only.',
        },
      ],
      scrollOptions: {
        container: 'body',
        easing: 'ease-in',
        offset: -120,
        force: true,
        x: false,
        y: true,
      },
      slideSettings: {
        type: 'carousel',
        gap: 30,
        perView: 4,
        hideNav: true,
        peek: { before: 10, after: 10 },
        breakpoints: {
          600: { perView: 1 },
          992: { perView: 2 },
          1200: { perView: 3 },
        },
      },
    }
  },
  mounted() {
    document.body.classList.add('no-footer')
    window.addEventListener('scroll', this.onWindowScroll)
    window.addEventListener('resize', this.onWindowResize)
    window.addEventListener('click', this.onWindowClick)
    this.onWindowResize()
  },
  beforeDestroy() {
    document.body.classList.remove('no-footer')
    window.removeEventListener('scroll', this.onWindowScroll)
    window.removeEventListener('resize', this.onWindowResize)
    window.removeEventListener('click', this.onWindowClick)
  },
  methods: {
    onWindowResize() {
      const homeRect = document
        .getElementById('homeRow')
        .getBoundingClientRect()
      const homeSection = document.getElementById('sectionHome')
      homeSection.style.backgroundPositionX = homeRect.x - 580 + 'px'

      const footerSection = document.getElementById('sectionFooter')
      if (event) {
        footerSection.style.backgroundPositionX =
          event.target.innerWidth - homeRect.x - 2000 + 'px'
      } else {
        footerSection.style.backgroundPositionX = homeRect.x - 800 + 'px'
      }

      if (event && event.target.innerWidth >= 992) {
        this.showMobileMenu = false
      }
    },
    onWindowScroll() {
      this.showMobileMenu = false
    },
    onWindowClick() {
      this.showMobileMenu = false
    },
    scrollTo(target) {
      VueScrollTo.scrollTo(target, 200, this.scrollOptions)
    },
  },
  head() {
    return {
      title: `${this.title} | ${this.appName}`,
    }
  },
}
</script>
