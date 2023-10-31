import { useSSRContext, computed, createVNode, resolveDynamicComponent, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, toDisplayString } from 'vue';
import { ssrRenderVNode, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { RouterLink } from 'vue-router';
import { f as getButtonColor, B as BaseIcon } from './colors-5bbb644a.mjs';

const _sfc_main = {
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    label: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconSize: {
      type: [String, Number],
      default: null
    },
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: null
    },
    to: {
      type: [String, Object],
      default: null
    },
    type: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "white"
    },
    as: {
      type: String,
      default: null
    },
    small: Boolean,
    outline: Boolean,
    active: Boolean,
    disabled: Boolean,
    roundedFull: Boolean
  },
  setup(__props) {
    const props = __props;
    const is = computed(() => {
      if (props.as) {
        return props.as;
      }
      if (props.to) {
        return RouterLink;
      }
      if (props.href) {
        return "a";
      }
      return "button";
    });
    const computedType = computed(() => {
      var _a;
      if (is.value === "button") {
        return (_a = props.type) != null ? _a : "button";
      }
      return null;
    });
    const labelClass = computed(
      () => props.small && props.icon ? "px-1" : "px-2"
    );
    const componentClass = computed(() => {
      const base = [
        "inline-flex",
        "justify-center",
        "items-center",
        "whitespace-nowrap",
        "focus:outline-none",
        "transition-colors",
        "focus:ring",
        "duration-150",
        "border",
        props.disabled ? "cursor-not-allowed" : "cursor-pointer",
        props.roundedFull ? "rounded-full" : "rounded",
        getButtonColor(props.color, props.outline, !props.disabled, props.active)
      ];
      if (!props.label && props.icon) {
        base.push("p-1");
      } else if (props.small) {
        base.push("text-sm", props.roundedFull ? "px-3 py-1" : "p-1");
      } else {
        base.push("py-2", props.roundedFull ? "px-6" : "px-3");
      }
      if (props.disabled) {
        base.push(props.outline ? "opacity-50" : "opacity-70");
      }
      return base;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(is.value), mergeProps({
        class: componentClass.value,
        href: __props.href,
        type: computedType.value,
        to: __props.to,
        target: __props.target,
        disabled: __props.disabled
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.icon) {
              _push2(ssrRenderComponent(BaseIcon, {
                path: __props.icon,
                size: __props.iconSize
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.label) {
              _push2(`<span class="${ssrRenderClass([labelClass.value, "text-slate-900 dark:text-white"])}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.icon ? (openBlock(), createBlock(BaseIcon, {
                key: 0,
                path: __props.icon,
                size: __props.iconSize
              }, null, 8, ["path", "size"])) : createCommentVNode("", true),
              __props.label ? (openBlock(), createBlock("span", {
                key: 1,
                class: [labelClass.value, "text-slate-900 dark:text-white"]
              }, toDisplayString(__props.label), 3)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main;

export { __nuxt_component_7 as _ };
//# sourceMappingURL=BaseButton-547d4d10.mjs.map
