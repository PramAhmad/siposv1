import { _ as __nuxt_component_3$1 } from './CardBox-78ae3f19.mjs';
import { B as BaseLevel } from './BaseLevel-555d04eb.mjs';
import { _ as __nuxt_component_2 } from './PillTag-0e71f526.mjs';
import { d as useSupabaseClient, e as useRoute } from '../server.mjs';
import { useSSRContext, ref, unref, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "MahasiswaCard",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    const mahasiswa = ref();
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardBox = __nuxt_component_3$1;
      const _component_BaseLevel = BaseLevel;
      const _component_PillTag = __nuxt_component_2;
      _push(`<!--[-->`);
      ssrRenderList(unref(mahasiswa), (data) => {
        _push(ssrRenderComponent(_component_CardBox, {
          key: data.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseLevel, { type: "justify-around lg:justify-center h-full" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", data.foto)} class="block h-full min-w-[300px] bg-clip-content max-w-full bg-gray-100 dark:bg-slate-800 lg:mx-12" alt=""${_scopeId2}><div class="space-y-3 text-center md:text-left lg:mx-12"${_scopeId2}><div class="flex justify-center md:block"${_scopeId2}></div><h1 class="text-2xl"${_scopeId2}> Nama, <b${_scopeId2}>${ssrInterpolate(data.nama)}</b></h1><p${_scopeId2}>NPM <b${_scopeId2}>${ssrInterpolate(data.npm)}</b></p><div class="flex justify-center md:block"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_PillTag, {
                      label: `Kelas ` + data.kelas,
                      color: "info",
                      icon: _ctx.mdiCheckDecagram
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: data.foto,
                        class: "block h-full min-w-[300px] bg-clip-content max-w-full bg-gray-100 dark:bg-slate-800 lg:mx-12",
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "space-y-3 text-center md:text-left lg:mx-12" }, [
                        createVNode("div", { class: "flex justify-center md:block" }),
                        createVNode("h1", { class: "text-2xl" }, [
                          createTextVNode(" Nama, "),
                          createVNode("b", null, toDisplayString(data.nama), 1)
                        ]),
                        createVNode("p", null, [
                          createTextVNode("NPM "),
                          createVNode("b", null, toDisplayString(data.npm), 1)
                        ]),
                        createVNode("div", { class: "flex justify-center md:block" }, [
                          createVNode(_component_PillTag, {
                            label: `Kelas ` + data.kelas,
                            color: "info",
                            icon: _ctx.mdiCheckDecagram
                          }, null, 8, ["label", "icon"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseLevel, { type: "justify-around lg:justify-center h-full" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: data.foto,
                      class: "block h-full min-w-[300px] bg-clip-content max-w-full bg-gray-100 dark:bg-slate-800 lg:mx-12",
                      alt: ""
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "space-y-3 text-center md:text-left lg:mx-12" }, [
                      createVNode("div", { class: "flex justify-center md:block" }),
                      createVNode("h1", { class: "text-2xl" }, [
                        createTextVNode(" Nama, "),
                        createVNode("b", null, toDisplayString(data.nama), 1)
                      ]),
                      createVNode("p", null, [
                        createTextVNode("NPM "),
                        createVNode("b", null, toDisplayString(data.npm), 1)
                      ]),
                      createVNode("div", { class: "flex justify-center md:block" }, [
                        createVNode(_component_PillTag, {
                          label: `Kelas ` + data.kelas,
                          color: "info",
                          icon: _ctx.mdiCheckDecagram
                        }, null, 8, ["label", "icon"])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MahasiswaCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main;

export { __nuxt_component_3 as _ };
//# sourceMappingURL=MahasiswaCard-3113de64.mjs.map
