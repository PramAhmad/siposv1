import { useSSRContext, ref } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = {
  __name: "FotoMahasiswa",
  __ssrInlineRender: true,
  props: ["path"],
  emits: ["update:path", "upload"],
  setup(__props, { emit }) {
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><input type="file" accept="image/*"></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FotoMahasiswa.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FotoMahasiswa = _sfc_main;

export { FotoMahasiswa as F };
//# sourceMappingURL=FotoMahasiswa-edc084cf.mjs.map
