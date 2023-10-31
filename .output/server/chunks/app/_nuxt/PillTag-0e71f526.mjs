import { useSSRContext, computed, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { c as colorsOutline, a as colorsBgLight, B as BaseIcon } from './colors-5bbb644a.mjs';

const _sfc_main$1 = {
  __name: "PillTagPlain",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    small: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["inline-flex items-center capitalize leading-none", [__props.small ? "text-xs" : "text-sm"]]
      }, _attrs))}>`);
      if (__props.icon) {
        _push(ssrRenderComponent(BaseIcon, {
          path: __props.icon,
          h: "h-4",
          w: "w-4",
          class: __props.small ? "mr-1 text-slate-950 dark:text-white" : "mr-2 text-slate-950 dark:text-white",
          size: __props.small ? 14 : null
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="text-slate-950 dark:text-white">${ssrInterpolate(__props.label)}</span></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PillTagPlain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PillTagPlain = _sfc_main$1;
const _sfc_main = {
  __name: "PillTag",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    small: Boolean,
    outline: Boolean
  },
  setup(__props) {
    const props = __props;
    const componentClass = computed(() => [
      props.small ? "py-1 px-3 " : "py-1.5 px-4",
      props.outline ? colorsOutline[props.color] : colorsBgLight[props.color]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(PillTagPlain, mergeProps({
        class: ["border rounded-full text-slate-950 dark:text-white", componentClass.value],
        icon: __props.icon,
        label: __props.label,
        small: __props.small
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PillTag.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=PillTag-0e71f526.mjs.map
