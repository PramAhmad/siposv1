import { d as useSupabaseClient, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './SectionTitleLineWithButton-bad61ad5.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-149f0ed2.mjs';
import { ref, mergeProps, withCtx, createTextVNode, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
import './config-d8473645.mjs';
import '@mdi/js';
import './colors-5bbb644a.mjs';
import './BaseButton-547d4d10.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    const rooms = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionMain = __nuxt_component_1;
      const _component_SectionTitleLineWithButton = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "authenticated" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                    icon: _ctx.mdiTableBorder,
                    title: "Pembayaran",
                    main: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/admin/payment/tambah",
                          class: "bg-blue-600 hover:bg-blue-600s py-2 px-3 rounded-full mr-5 text-white"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tambah`);
                            } else {
                              return [
                                createTextVNode("Tambah")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "/admin/payment/tambah",
                            class: "bg-blue-600 hover:bg-blue-600s py-2 px-3 rounded-full mr-5 text-white"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Tambah")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="w-full"${_scopeId2}><div class="md:flex md:flex-wrap md:justify-start"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(rooms), (data) => {
                    _push3(`<div class="md:w-[30%] w-full rounded-md overflow-hidden shadow-lg dark:bg-slate-900 mr-4 mb-4"${_scopeId2}><div class="px-6 py-4"${_scopeId2}><div class="font-bold text-xl mb-2"${_scopeId2}>${ssrInterpolate(data.nama_pembayaran)}</div><p class="text-gray-700 text-base dark:text-gray-400"${_scopeId2}>${ssrInterpolate(data.desc)}</p></div><div class="px-6 pt-4 pb-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: `/admin/payment/` + data.id,
                      class: "bg-blue-600 hover:bg-blue-600s py-2 px-3 rounded-full mr-5 text-white"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Kelola`);
                        } else {
                          return [
                            createTextVNode("Kelola")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: `/admin/payment/${data.id}/setting`,
                      class: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Detail`);
                        } else {
                          return [
                            createTextVNode("Detail")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode(_component_SectionTitleLineWithButton, {
                      icon: _ctx.mdiTableBorder,
                      title: "Pembayaran",
                      main: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: "/admin/payment/tambah",
                          class: "bg-blue-600 hover:bg-blue-600s py-2 px-3 rounded-full mr-5 text-white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Tambah")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["icon"]),
                    createVNode("div", { class: "w-full" }, [
                      createVNode("div", { class: "md:flex md:flex-wrap md:justify-start" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(rooms), (data) => {
                          return openBlock(), createBlock("div", {
                            key: data.id,
                            class: "md:w-[30%] w-full rounded-md overflow-hidden shadow-lg dark:bg-slate-900 mr-4 mb-4"
                          }, [
                            createVNode("div", { class: "px-6 py-4" }, [
                              createVNode("div", { class: "font-bold text-xl mb-2" }, toDisplayString(data.nama_pembayaran), 1),
                              createVNode("p", { class: "text-gray-700 text-base dark:text-gray-400" }, toDisplayString(data.desc), 1)
                            ]),
                            createVNode("div", { class: "px-6 pt-4 pb-2" }, [
                              createVNode(_component_NuxtLink, {
                                to: `/admin/payment/` + data.id,
                                class: "bg-blue-600 hover:bg-blue-600s py-2 px-3 rounded-full mr-5 text-white"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Kelola")
                                ]),
                                _: 2
                              }, 1032, ["to"]),
                              createVNode(_component_NuxtLink, {
                                to: `/admin/payment/${data.id}/setting`,
                                class: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Detail")
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SectionMain, null, {
                default: withCtx(() => [
                  createVNode(_component_SectionTitleLineWithButton, {
                    icon: _ctx.mdiTableBorder,
                    title: "Pembayaran",
                    main: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: "/admin/payment/tambah",
                        class: "bg-blue-600 hover:bg-blue-600s py-2 px-3 rounded-full mr-5 text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Tambah")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  createVNode("div", { class: "w-full" }, [
                    createVNode("div", { class: "md:flex md:flex-wrap md:justify-start" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(rooms), (data) => {
                        return openBlock(), createBlock("div", {
                          key: data.id,
                          class: "md:w-[30%] w-full rounded-md overflow-hidden shadow-lg dark:bg-slate-900 mr-4 mb-4"
                        }, [
                          createVNode("div", { class: "px-6 py-4" }, [
                            createVNode("div", { class: "font-bold text-xl mb-2" }, toDisplayString(data.nama_pembayaran), 1),
                            createVNode("p", { class: "text-gray-700 text-base dark:text-gray-400" }, toDisplayString(data.desc), 1)
                          ]),
                          createVNode("div", { class: "px-6 pt-4 pb-2" }, [
                            createVNode(_component_NuxtLink, {
                              to: `/admin/payment/` + data.id,
                              class: "bg-blue-600 hover:bg-blue-600s py-2 px-3 rounded-full mr-5 text-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Kelola")
                              ]),
                              _: 2
                            }, 1032, ["to"]),
                            createVNode(_component_NuxtLink, {
                              to: `/admin/payment/${data.id}/setting`,
                              class: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Detail")
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/payment/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-f77a504d.mjs.map
