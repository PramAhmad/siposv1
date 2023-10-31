import { d as useSupabaseClient, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './SectionTitleLineWithButton-bad61ad5.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-149f0ed2.mjs';
import { _ as __nuxt_component_3 } from './CardBox-78ae3f19.mjs';
import { _ as __nuxt_component_7 } from './BaseButton-547d4d10.mjs';
import { _ as __nuxt_component_6 } from './BaseButtons-c51a2c2b.mjs';
import { ref, mergeProps, withCtx, createTextVNode, createVNode, unref, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { mdiEye, mdiTrashCan } from '@mdi/js';
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
import './colors-5bbb644a.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const activity = ref([]);
    const loading = ref(false);
    const supabase = useSupabaseClient();
    const getActivity = async () => {
      loading.value = false;
      const { data, error } = await supabase.from("activity").select().order("id", { ascending: false });
      activity.value = data;
      loading.value = true;
    };
    const deleteActvity = async (id) => {
      if (confirm("Yakin ingin menghapus data?")) {
        await supabase.from("activity").delete().match({ id });
      } else {
        alert("data tidak jadi dihapus");
      }
      getActivity();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionMain = __nuxt_component_1;
      const _component_SectionTitleLineWithButton = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_CardBox = __nuxt_component_3;
      const _component_BaseButton = __nuxt_component_7;
      const _component_BaseButtons = __nuxt_component_6;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "authenticated" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                    icon: _ctx.mdiTableBorder,
                    title: "activity",
                    main: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/admin/activity/tambah",
                          class: "rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tambah activity`);
                            } else {
                              return [
                                createTextVNode("Tambah activity")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: "/admin/activity/tambah",
                            class: "rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Tambah activity")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardBox, {
                    class: "mb-6",
                    "has-table": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<table${_scopeId3}><thead${_scopeId3}><tr${_scopeId3}><th${_scopeId3}>No</th><th${_scopeId3}>Title</th><th${_scopeId3}>Foto</th><th${_scopeId3}>Desc</th><th${_scopeId3}>action</th></tr></thead><tbody${_scopeId3}>`);
                        if (!unref(loading)) {
                          _push4(`<tr${_scopeId3}><td colspan="6" class="text-center"${_scopeId3}><div class="flex justify-center items-center"${_scopeId3}><div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"${_scopeId3}></div></div></td></tr>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(activity), (data, i) => {
                          _push4(`<tr${_scopeId3}><td data-label="no"${_scopeId3}>${ssrInterpolate(i + 1)}</td><td data-label="Judul"${_scopeId3}>${ssrInterpolate(data.title)}</td><td${_scopeId3}><img${ssrRenderAttr("src", data.image)} alt="" class="md:w-[200px] md:h-[150px] max-w-full w-full h-[100%]"${_scopeId3}></td><td data-label="desc"${_scopeId3}>${ssrInterpolate(data.desc)}</td><td class="before:hidden lg:w-1 whitespace-nowrap"${_scopeId3}><div class="md:flex md:justify-center md:gap-3"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: `/admin/activity/` + data.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BaseButton, {
                                  color: "danger",
                                  icon: unref(mdiEye),
                                  small: ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BaseButton, {
                                    color: "danger",
                                    icon: unref(mdiEye),
                                    small: ""
                                  }, null, 8, ["icon"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_BaseButtons, {
                            type: "justify-start lg:justify-end",
                            "no-wrap": ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BaseButton, {
                                  color: "danger",
                                  icon: unref(mdiTrashCan),
                                  small: "",
                                  onClick: ($event) => deleteActvity(data.id)
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BaseButton, {
                                    color: "danger",
                                    icon: unref(mdiTrashCan),
                                    small: "",
                                    onClick: ($event) => deleteActvity(data.id)
                                  }, null, 8, ["icon", "onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></td></tr>`);
                        });
                        _push4(`<!--]--></tbody></table>`);
                      } else {
                        return [
                          createVNode("table", null, [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", null, "No"),
                                createVNode("th", null, "Title"),
                                createVNode("th", null, "Foto"),
                                createVNode("th", null, "Desc"),
                                createVNode("th", null, "action")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(activity), (data, i) => {
                                return openBlock(), createBlock("tr", {
                                  key: data.id
                                }, [
                                  createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                                  createVNode("td", { "data-label": "Judul" }, toDisplayString(data.title), 1),
                                  createVNode("td", null, [
                                    createVNode("img", {
                                      src: data.image,
                                      alt: "",
                                      class: "md:w-[200px] md:h-[150px] max-w-full w-full h-[100%]"
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("td", { "data-label": "desc" }, toDisplayString(data.desc), 1),
                                  createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                                    createVNode("div", { class: "md:flex md:justify-center md:gap-3" }, [
                                      createVNode(_component_NuxtLink, {
                                        to: `/admin/activity/` + data.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BaseButton, {
                                            color: "danger",
                                            icon: unref(mdiEye),
                                            small: ""
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 2
                                      }, 1032, ["to"]),
                                      createVNode(_component_BaseButtons, {
                                        type: "justify-start lg:justify-end",
                                        "no-wrap": ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BaseButton, {
                                            color: "danger",
                                            icon: unref(mdiTrashCan),
                                            small: "",
                                            onClick: ($event) => deleteActvity(data.id)
                                          }, null, 8, ["icon", "onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
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
                      icon: _ctx.mdiTableBorder,
                      title: "activity",
                      main: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: "/admin/activity/tambah",
                          class: "rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Tambah activity")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["icon"]),
                    createVNode(_component_CardBox, {
                      class: "mb-6",
                      "has-table": ""
                    }, {
                      default: withCtx(() => [
                        createVNode("table", null, [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", null, "No"),
                              createVNode("th", null, "Title"),
                              createVNode("th", null, "Foto"),
                              createVNode("th", null, "Desc"),
                              createVNode("th", null, "action")
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(activity), (data, i) => {
                              return openBlock(), createBlock("tr", {
                                key: data.id
                              }, [
                                createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                                createVNode("td", { "data-label": "Judul" }, toDisplayString(data.title), 1),
                                createVNode("td", null, [
                                  createVNode("img", {
                                    src: data.image,
                                    alt: "",
                                    class: "md:w-[200px] md:h-[150px] max-w-full w-full h-[100%]"
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("td", { "data-label": "desc" }, toDisplayString(data.desc), 1),
                                createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                                  createVNode("div", { class: "md:flex md:justify-center md:gap-3" }, [
                                    createVNode(_component_NuxtLink, {
                                      to: `/admin/activity/` + data.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_BaseButton, {
                                          color: "danger",
                                          icon: unref(mdiEye),
                                          small: ""
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode(_component_BaseButtons, {
                                      type: "justify-start lg:justify-end",
                                      "no-wrap": ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_BaseButton, {
                                          color: "danger",
                                          icon: unref(mdiTrashCan),
                                          small: "",
                                          onClick: ($event) => deleteActvity(data.id)
                                        }, null, 8, ["icon", "onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
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
                    icon: _ctx.mdiTableBorder,
                    title: "activity",
                    main: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: "/admin/activity/tambah",
                        class: "rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Tambah activity")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  createVNode(_component_CardBox, {
                    class: "mb-6",
                    "has-table": ""
                  }, {
                    default: withCtx(() => [
                      createVNode("table", null, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "No"),
                            createVNode("th", null, "Title"),
                            createVNode("th", null, "Foto"),
                            createVNode("th", null, "Desc"),
                            createVNode("th", null, "action")
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(activity), (data, i) => {
                            return openBlock(), createBlock("tr", {
                              key: data.id
                            }, [
                              createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                              createVNode("td", { "data-label": "Judul" }, toDisplayString(data.title), 1),
                              createVNode("td", null, [
                                createVNode("img", {
                                  src: data.image,
                                  alt: "",
                                  class: "md:w-[200px] md:h-[150px] max-w-full w-full h-[100%]"
                                }, null, 8, ["src"])
                              ]),
                              createVNode("td", { "data-label": "desc" }, toDisplayString(data.desc), 1),
                              createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                                createVNode("div", { class: "md:flex md:justify-center md:gap-3" }, [
                                  createVNode(_component_NuxtLink, {
                                    to: `/admin/activity/` + data.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BaseButton, {
                                        color: "danger",
                                        icon: unref(mdiEye),
                                        small: ""
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]),
                                  createVNode(_component_BaseButtons, {
                                    type: "justify-start lg:justify-end",
                                    "no-wrap": ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BaseButton, {
                                        color: "danger",
                                        icon: unref(mdiTrashCan),
                                        small: "",
                                        onClick: ($event) => deleteActvity(data.id)
                                      }, null, 8, ["icon", "onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/activity/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-123b420f.mjs.map
