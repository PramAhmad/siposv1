import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = {
  __name: "BaseDivider",
  __ssrInlineRender: true,
  props: {
    navBar: Boolean
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<hr${ssrRenderAttrs(mergeProps({
        class: [
          props.navBar ? "hidden lg:block lg:my-0.5 dark:border-slate-700" : "my-6 -mx-6 dark:border-slate-800",
          "border-t border-gray-100"
        ]
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseDivider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BaseDivider = _sfc_main;

export { BaseDivider as B };
//# sourceMappingURL=BaseDivider-52c813b9.mjs.map
