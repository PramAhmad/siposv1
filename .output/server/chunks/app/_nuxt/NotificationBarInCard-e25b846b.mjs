import { useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { a as colorsBgLight } from './colors-5bbb644a.mjs';

const _sfc_main = {
  __name: "NotificationBarInCard",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col mb-6 -mt-6 -mr-6 -ml-6 animate-fade-in" }, _attrs))}><div class="${ssrRenderClass([[unref(colorsBgLight)[__props.color]], "rounded-t-2xl flex flex-col p-6 transition-colors"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NotificationBarInCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main;

export { __nuxt_component_4 as _ };
//# sourceMappingURL=NotificationBarInCard-e25b846b.mjs.map
