import { u as useHead, a as __nuxt_component_0, b as __nuxt_component_1 } from '../server.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useStyleStore } from './style-4fabede4.mjs';
import { s as styleKey, d as darkModeKey } from './config-d8473645.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'vue-router';
import '@supabase/supabase-js';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: (titleChunk) => {
        const titleBase = "Information System";
        return titleChunk ? `${titleChunk} - ${titleBase}` : titleBase;
      }
    });
    const styleStore = useStyleStore();
    const currentStyle = typeof localStorage !== "undefined" && localStorage[styleKey] ? localStorage[styleKey] : "basic";
    styleStore.setStyle(currentStyle);
    const currentStoredDarkMode = typeof localStorage !== "undefined" && localStorage[darkModeKey] === "1";
    if (!currentStoredDarkMode && false || currentStoredDarkMode) {
      styleStore.setDarkMode(true);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=App-fc6db812.mjs.map
