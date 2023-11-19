import { useSSRContext, defineComponent, h } from 'vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "BaseButtons",
  props: {
    noWrap: Boolean,
    type: {
      type: String,
      default: "justify-start"
    },
    classAddon: {
      type: String,
      default: "mr-3 last:mr-0 mb-3"
    },
    mb: {
      type: String,
      default: "-mb-3"
    }
  },
  render() {
    const hasSlot = this.$slots && this.$slots.default;
    const parentClass = [
      "flex",
      "items-center",
      this.type,
      this.noWrap ? "flex-nowrap" : "flex-wrap"
    ];
    if (this.mb) {
      parentClass.push(this.mb);
    }
    return h(
      "div",
      { class: parentClass },
      hasSlot ? this.$slots.default().map((element) => {
        if (element && element.children && typeof element.children === "object") {
          return h(
            element,
            {},
            element.children.map((child) => {
              return h(child, { class: [this.classAddon] });
            })
          );
        }
        return h(element, { class: [this.classAddon] });
      }) : null
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseButtons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main;

export { __nuxt_component_6 as _ };
//# sourceMappingURL=BaseButtons-c51a2c2b.mjs.map
