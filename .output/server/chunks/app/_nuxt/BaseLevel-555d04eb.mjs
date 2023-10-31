import { useSSRContext, defineComponent, h } from 'vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "BaseLevel",
  props: {
    mobile: Boolean,
    type: {
      type: String,
      default: "justify-between"
    }
  },
  render() {
    const parentClass = [this.type, "items-center"];
    const parentMobileClass = ["flex"];
    const parentBaseClass = ["block", "md:flex"];
    const childBaseClass = ["flex", "items-center", "justify-center"];
    return h(
      "div",
      {
        class: parentClass.concat(
          this.mobile ? parentMobileClass : parentBaseClass
        )
      },
      this.$slots.default().map((element, index) => {
        const childClass = !this.mobile && this.$slots.default().length > index + 1 ? childBaseClass.concat(["mb-6", "md:mb-0"]) : childBaseClass;
        return h("div", { class: childClass }, [element]);
      })
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseLevel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BaseLevel = _sfc_main;

export { BaseLevel as B };
//# sourceMappingURL=BaseLevel-555d04eb.mjs.map
