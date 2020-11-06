<template>
  <div>
    <div ref="carouselImages" class="glide">
      <div data-glide-el="track" class="glide__track">
        <div class="glide__slides">
          <slot></slot>
        </div>
      </div>
      <div
        v-if="!settings.hideNav"
        class="glide__arrows slider-nav"
        data-glide-el="controls"
      >
        <button
          class="glide__arrow glide__arrow--left left-arrow btn btn-link"
          data-glide-dir="<"
        >
          <i class="simple-icon-arrow-left"></i>
        </button>

        <div
          class="glide__bullets slider-dot-container"
          data-glide-el="controls[nav]"
        >
          <button
            v-for="i in total"
            :key="i"
            class="glide__bullet slider-dot"
            :data-glide-dir="`=${i}`"
          ></button>
        </div>
        <button
          class="glide__arrow glide__arrow--right right-arrow btn btn-link"
          data-glide-dir=">"
        >
          <i class="simple-icon-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'

export default {
  props: {
    settings: Object,
    id: String,
    className: String,
  },
  data() {
    return {
      total: 0,
      // mountTimeOut: -1,
      // resizeTimeOut: -1,
      selfWidth: 0,
    }
  },
  mounted() {
    this.initGlide()
  },
  updated() {
    this.destroyGlide()
    this.initGlide()
  },
  beforeDestroy() {
    this.destroyGlide()
  },
  methods: {
    initGlide() {
      this.selfWidth = this.$el.offsetWidth
      this.glideCarousel = new Glide(this.$refs.carouselImages, {
        ...this.settings,
      })
      this.glideCarousel.mount()
      this.total = this.glideCarousel._c.Html.slides.length
      // this.glideCarousel.on('resize', this.onResize)
      // this.mountTimeOut = setTimeout(() => {
      //   const event = document.createEvent('HTMLEvents')
      //   event.initEvent('resize', false, false)
      //   window.dispatchEvent(event)
      // }, 500)
    },
    destroyGlide() {
      // clearTimeout(this.resizeTimeOut)
      // clearTimeout(this.mountTimeOut)
      if (this.glideCarousel) {
        this.glideCarousel.destroy()
      }
    },
  },
}
</script>
