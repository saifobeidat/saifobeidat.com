<template>
  <div
    v-bind:style="`--infotooltip-color: ${color}`"
    class="inline-block"
    tabindex="0"
    @focusout="handleFocusOut"
  >
    <div class="z-40">
      <span ref="icon">
        <IconInfo @click.native="showInfoTooltip" class="relative z-10" />
      </span>

      <!-- Box -->
      <div
        v-if="show"
        ref="box"
        class="absolute rounded-lg p-4 z-50 sm:w-[450px] overflow-hidden"
        :style="`left:${boxLeft}px; right:${boxRight}; background-color:${color};`"
      >
        <slot> </slot>
      </div>

      <!-- Arrow Top  -->
      <span
        v-if="show"
        class="arrow absolute -top-[25px] -ml-[20px] border-[10px]"
        :style="`left:${arrowLeft}px; top:${arrowTop}px;`"
        style="
          border-color: transparent transparent var(--infotooltip-color)
            transparent;
        "
      >
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    lightColor: {
      default: "#eee",
      type: String,
    },
    darkColor: {
      default: "#111",
      type: String,
    },
  },
  data() {
    return {
      show: false,
      boxLeft: 0,
      arrowLeft: 0,
      arrowTop: 0,
    };
  },
  computed: {
    ...mapState("general", ["isDarkMode"]),
    color() {
      return this.isDarkMode ? this.darkColor : this.lightColor;
    },
  },
  methods: {
    showInfoTooltip() {
      this.show = true;
    },
    closeInfoTooltip() {
      this.show = false;
    },
    setMainPos() {
      let that = this;
      let iconRef = that.$refs.icon;
      if (iconRef) {
        let iconPos = iconRef.getBoundingClientRect();
        this.arrowLeft = iconPos.left + 16;
        this.arrowTop = iconRef.offsetTop;
        if (window.innerWidth > 640) {
          this.boxLeft = iconPos.left - 20;
          this.boxRight = "auto";
        } else {
          this.boxLeft = 0;
          this.boxRight = 0;
        }
      }
    },
    handleFocusOut() {
      this.closeInfoTooltip();
    },
  },
  mounted() {
    let that = this;
    this.setMainPos();
    window.addEventListener("resize", function () {
      that.setMainPos();
    });
  },
};
</script>
