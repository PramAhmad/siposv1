import { useSSRContext, mergeProps, unref, computed, useSlots } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { c as containerMaxW } from './config-d8473645.mjs';
import { mdiCog } from '@mdi/js';
import { B as BaseIcon, a as colorsBgLight, e as colorsText } from './colors-5bbb644a.mjs';
import { _ as __nuxt_component_7 } from './BaseButton-547d4d10.mjs';

const _sfc_main$2 = {
  __name: "SectionMain",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["p-6", unref(containerMaxW)]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionMain.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "IconRounded",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: null
    },
    w: {
      type: String,
      default: "w-12"
    },
    h: {
      type: String,
      default: "h-12"
    },
    bg: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(BaseIcon, mergeProps({
        path: __props.icon,
        w: __props.w,
        h: __props.h,
        size: "24",
        class: [
          "rounded-full",
          __props.bg ? unref(colorsBgLight)[__props.color] : [unref(colorsText)[__props.color], "bg-gray-50 dark:bg-slate-800"]
        ]
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IconRounded.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconRounded = _sfc_main$1;
const _sfc_main = {
  __name: "SectionTitleLineWithButton",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    main: Boolean
  },
  setup(__props) {
    const hasSlot = computed(() => useSlots().default);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: [{ "pt-6": !__props.main }, "mb-6 flex items-center justify-between"]
      }, _attrs))}><div class="flex items-center justify-start">`);
      if (__props.icon && __props.main) {
        _push(ssrRenderComponent(IconRounded, {
          icon: __props.icon,
          color: "light",
          class: "mr-3",
          bg: ""
        }, null, _parent));
      } else if (__props.icon) {
        _push(ssrRenderComponent(BaseIcon, {
          path: __props.icon,
          class: "mr-2",
          size: "20"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="${ssrRenderClass([__props.main ? "text-3xl" : "text-2xl", "leading-tight"])}">${ssrInterpolate(__props.title)}</h1></div>`);
      if (hasSlot.value) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(ssrRenderComponent(__nuxt_component_7, {
          icon: unref(mdiCog),
          color: "whiteDark"
        }, null, _parent));
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionTitleLineWithButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_1 as _, __nuxt_component_2 as a };
//# sourceMappingURL=SectionTitleLineWithButton-bad61ad5.mjs.map
