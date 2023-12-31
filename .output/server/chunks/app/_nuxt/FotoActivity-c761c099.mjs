import { useSSRContext, ref } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = {
  __name: "FotoActivity",
  __ssrInlineRender: true,
  props: ["path"],
  emits: ["update:path", "upload"],
  setup(__props, { emit }) {
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><input type="file" accept="image/*" class="w-full dark:bg-gray-800 py-2 rounded-md border border-gray-900"></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FotoActivity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main;

export { __nuxt_component_6 as _ };
//# sourceMappingURL=FotoActivity-c761c099.mjs.map
