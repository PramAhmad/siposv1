import { d as useSupabaseClient, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './SectionTitleLineWithButton-bad61ad5.mjs';
import { _ as __nuxt_component_3 } from './CardBox-78ae3f19.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-149f0ed2.mjs';
import { ref, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
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
    const supabase = useSupabaseClient();
    const masukan = ref([]);
    const loading = ref(false);
    const alert = ref(false);
    const getMasukan = async () => {
      loading.value = false;
      const { data, error } = await supabase.from("masukan").select().eq("is_delete", 0);
      if (error) {
        console.log(error);
      } else {
        masukan.value = data;
        loading.value = true;
      }
    };
    const deleteMasukan = async (id) => {
      alert.value = false;
      const confirm = window.confirm("Are you sure?");
      if (confirm) {
        const { data, error } = await supabase.from("masukan").update({ is_delete: 1 }).eq("id", id);
        if (error) {
          console.log(error);
        } else {
          alert.value = true;
          getMasukan();
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionMain = __nuxt_component_1;
      const _component_SectionTitleLineWithButton = __nuxt_component_2;
      const _component_CardBox = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "authenticated" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                    icon: _ctx.mdiAccount,
                    main: "",
                    title: "Masukan Form"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardBox, {
                    class: "mb-6",
                    "has-table": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<table${_scopeId3}><thead${_scopeId3}><tr${_scopeId3}><th${_scopeId3}>No</th><th${_scopeId3}>Dari</th><th${_scopeId3}>Pesan</th><th${_scopeId3}>Action</th></tr></thead><tbody${_scopeId3}>`);
                        if (!unref(loading)) {
                          _push4(`<tr${_scopeId3}><td colspan="6" class="text-center"${_scopeId3}><div class="flex justify-center items-center"${_scopeId3}><div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"${_scopeId3}></div></div></td></tr>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(masukan), (data, i) => {
                          _push4(`<tr${_scopeId3}><td data-label="no"${_scopeId3}>${ssrInterpolate(i + 1)}</td><td data-label="npm"${_scopeId3}>${ssrInterpolate(data.nama)}</td><td data-label="nama"${_scopeId3}>${ssrInterpolate(data.desc)}</td><td class="before:hidden lg:w-1 whitespace-nowrap"${_scopeId3}><div class="flex gap-3"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            class: "py-1 px-1.5 rounded-md border",
                            to: `/admin/masukan/` + data.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`detail`);
                              } else {
                                return [
                                  createTextVNode("detail")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<button${_scopeId3}>delete</button></div></td></tr>`);
                        });
                        _push4(`<!--]--></tbody></table>`);
                      } else {
                        return [
                          createVNode("table", null, [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", null, "No"),
                                createVNode("th", null, "Dari"),
                                createVNode("th", null, "Pesan"),
                                createVNode("th", null, "Action")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              !unref(loading) ? (openBlock(), createBlock("tr", { key: 0 }, [
                                createVNode("td", {
                                  colspan: "6",
                                  class: "text-center"
                                }, [
                                  createVNode("div", { class: "flex justify-center items-center" }, [
                                    createVNode("div", { class: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" })
                                  ])
                                ])
                              ])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(masukan), (data, i) => {
                                return openBlock(), createBlock("tr", {
                                  key: data.id
                                }, [
                                  createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                                  createVNode("td", { "data-label": "npm" }, toDisplayString(data.nama), 1),
                                  createVNode("td", { "data-label": "nama" }, toDisplayString(data.desc), 1),
                                  createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                                    createVNode("div", { class: "flex gap-3" }, [
                                      createVNode(_component_NuxtLink, {
                                        class: "py-1 px-1.5 rounded-md border",
                                        to: `/admin/masukan/` + data.id
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("detail")
                                        ]),
                                        _: 2
                                      }, 1032, ["to"]),
                                      createVNode("button", {
                                        onClick: ($event) => deleteMasukan(data.id)
                                      }, "delete", 8, ["onClick"])
                                    ])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SectionTitleLineWithButton, {
                      icon: _ctx.mdiAccount,
                      main: "",
                      title: "Masukan Form"
                    }, null, 8, ["icon"]),
                    createVNode(_component_CardBox, {
                      class: "mb-6",
                      "has-table": ""
                    }, {
                      default: withCtx(() => [
                        createVNode("table", null, [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", null, "No"),
                              createVNode("th", null, "Dari"),
                              createVNode("th", null, "Pesan"),
                              createVNode("th", null, "Action")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            !unref(loading) ? (openBlock(), createBlock("tr", { key: 0 }, [
                              createVNode("td", {
                                colspan: "6",
                                class: "text-center"
                              }, [
                                createVNode("div", { class: "flex justify-center items-center" }, [
                                  createVNode("div", { class: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" })
                                ])
                              ])
                            ])) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(masukan), (data, i) => {
                              return openBlock(), createBlock("tr", {
                                key: data.id
                              }, [
                                createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                                createVNode("td", { "data-label": "npm" }, toDisplayString(data.nama), 1),
                                createVNode("td", { "data-label": "nama" }, toDisplayString(data.desc), 1),
                                createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                                  createVNode("div", { class: "flex gap-3" }, [
                                    createVNode(_component_NuxtLink, {
                                      class: "py-1 px-1.5 rounded-md border",
                                      to: `/admin/masukan/` + data.id
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("detail")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode("button", {
                                      onClick: ($event) => deleteMasukan(data.id)
                                    }, "delete", 8, ["onClick"])
                                  ])
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SectionMain, null, {
                default: withCtx(() => [
                  createVNode(_component_SectionTitleLineWithButton, {
                    icon: _ctx.mdiAccount,
                    main: "",
                    title: "Masukan Form"
                  }, null, 8, ["icon"]),
                  createVNode(_component_CardBox, {
                    class: "mb-6",
                    "has-table": ""
                  }, {
                    default: withCtx(() => [
                      createVNode("table", null, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "No"),
                            createVNode("th", null, "Dari"),
                            createVNode("th", null, "Pesan"),
                            createVNode("th", null, "Action")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          !unref(loading) ? (openBlock(), createBlock("tr", { key: 0 }, [
                            createVNode("td", {
                              colspan: "6",
                              class: "text-center"
                            }, [
                              createVNode("div", { class: "flex justify-center items-center" }, [
                                createVNode("div", { class: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" })
                              ])
                            ])
                          ])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(masukan), (data, i) => {
                            return openBlock(), createBlock("tr", {
                              key: data.id
                            }, [
                              createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                              createVNode("td", { "data-label": "npm" }, toDisplayString(data.nama), 1),
                              createVNode("td", { "data-label": "nama" }, toDisplayString(data.desc), 1),
                              createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                                createVNode("div", { class: "flex gap-3" }, [
                                  createVNode(_component_NuxtLink, {
                                    class: "py-1 px-1.5 rounded-md border",
                                    to: `/admin/masukan/` + data.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("detail")
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]),
                                  createVNode("button", {
                                    onClick: ($event) => deleteMasukan(data.id)
                                  }, "delete", 8, ["onClick"])
                                ])
                              ])
                            ]);
                          }), 128))
                        ])
                      ])
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/masukan/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-1bceca87.mjs.map
