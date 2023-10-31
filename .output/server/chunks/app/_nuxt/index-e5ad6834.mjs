import { _ as _export_sfc, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './SectionTitleLineWithButton-bad61ad5.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-149f0ed2.mjs';
import { withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext, computed, ref, useSlots, mergeProps, unref, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { mdiClose } from '@mdi/js';
import { c as colorsOutline, a as colorsBgLight, B as BaseIcon } from './colors-5bbb644a.mjs';
import { B as BaseLevel } from './BaseLevel-555d04eb.mjs';
import { _ as __nuxt_component_7 } from './BaseButton-547d4d10.mjs';
import { _ as __nuxt_component_3 } from './CardBox-78ae3f19.mjs';
import { _ as __nuxt_component_6 } from './BaseButtons-c51a2c2b.mjs';
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

const _sfc_main$1 = {
  __name: "NotificationBar",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: null
    },
    outline: Boolean,
    color: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const componentClass = computed(
      () => props.outline ? colorsOutline[props.color] : colorsBgLight[props.color]
    );
    const isDismissed = ref(false);
    const dismiss = () => {
      isDismissed.value = true;
    };
    const slots = useSlots();
    const hasRightSlot = computed(() => slots.right);
    return (_ctx, _push, _parent, _attrs) => {
      if (!isDismissed.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [componentClass.value, "px-3 py-6 md:py-3 mb-6 last:mb-0 border rounded-lg transition-colors duration-150"]
        }, _attrs))}>`);
        _push(ssrRenderComponent(BaseLevel, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col md:flex-row items-center"${_scopeId}>`);
              if (__props.icon) {
                _push2(ssrRenderComponent(BaseIcon, {
                  path: __props.icon,
                  w: "w-10 md:w-5",
                  h: "h-10 md:h-5",
                  size: "24",
                  class: "md:mr-2"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="text-center md:text-left md:py-2"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</span></div>`);
              if (hasRightSlot.value) {
                ssrRenderSlot(_ctx.$slots, "right", {}, null, _push2, _parent2, _scopeId);
              } else {
                _push2(ssrRenderComponent(__nuxt_component_7, {
                  icon: unref(mdiClose),
                  small: "",
                  "rounded-full": "",
                  color: "white",
                  onClick: dismiss
                }, null, _parent2, _scopeId));
              }
            } else {
              return [
                createVNode("div", { class: "flex flex-col md:flex-row items-center" }, [
                  __props.icon ? (openBlock(), createBlock(BaseIcon, {
                    key: 0,
                    path: __props.icon,
                    w: "w-10 md:w-5",
                    h: "h-10 md:h-5",
                    size: "24",
                    class: "md:mr-2"
                  }, null, 8, ["path"])) : createCommentVNode("", true),
                  createVNode("span", { class: "text-center md:text-left md:py-2" }, [
                    renderSlot(_ctx.$slots, "default")
                  ])
                ]),
                hasRightSlot.value ? renderSlot(_ctx.$slots, "right", { key: 0 }) : (openBlock(), createBlock(__nuxt_component_7, {
                  key: 1,
                  icon: unref(mdiClose),
                  small: "",
                  "rounded-full": "",
                  color: "white",
                  onClick: dismiss
                }, null, 8, ["icon"]))
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NotificationBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_SectionMain = __nuxt_component_1;
  const _component_SectionTitleLineWithButton = __nuxt_component_2;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_NotificationBar = __nuxt_component_4;
  const _component_CardBox = __nuxt_component_3;
  const _component_BaseButtons = __nuxt_component_6;
  const _component_BaseButton = __nuxt_component_7;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SectionMain, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                icon: _ctx.mdiTableBorder,
                title: "Mahasiswa",
                main: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_NuxtLink, {
                      to: "/admin/mahasiswa/tambah",
                      class: "rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Tambah Mahasiswa`);
                        } else {
                          return [
                            createTextVNode("Tambah Mahasiswa")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: "/admin/mahasiswa/tambah",
                        class: "rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Tambah Mahasiswa")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NotificationBar, {
                color: "info",
                icon: _ctx.mdiMonitorCellphone
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<b${_scopeId3}>Responsive table.</b> Collapses on mobile `);
                  } else {
                    return [
                      createVNode("b", null, "Responsive table."),
                      createTextVNode(" Collapses on mobile ")
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
                    _push4(`<table${_scopeId3}><thead${_scopeId3}><tr${_scopeId3}><th${_scopeId3}>No</th><th${_scopeId3}>Nama </th><th${_scopeId3}>Nama</th><th${_scopeId3}>Foto</th><th${_scopeId3}>Desc</th><th${_scopeId3}>Action</th></tr></thead><tbody${_scopeId3}>`);
                    if (!_ctx.loading) {
                      _push4(`<tr${_scopeId3}><td colspan="6" class="text-center"${_scopeId3}><div class="flex justify-center items-center"${_scopeId3}><div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"${_scopeId3}></div></div></td></tr>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`<!--[-->`);
                    ssrRenderList(_ctx.mahasiswa, (data, i) => {
                      _push4(`<tr${_scopeId3}><td data-label="no"${_scopeId3}>${ssrInterpolate(i + 1)}</td><td data-label="npm"${_scopeId3}>${ssrInterpolate(data.npm)}</td><td data-label="nama"${_scopeId3}>${ssrInterpolate(data.nama)}</td><td${_scopeId3}><img${ssrRenderAttr("src", data.foto)} alt="" class="w-[100px] h-[130px]"${_scopeId3}></td><td data-label="kelas"${_scopeId3}>${ssrInterpolate(data.kelas)}</td><td class="before:hidden lg:w-1 whitespace-nowrap"${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_NuxtLink, {
                        to: `/admin/mahasiswa/` + data.id
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
                      _push4(ssrRenderComponent(_component_BaseButtons, {
                        type: "justify-start lg:justify-end",
                        "no-wrap": ""
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_BaseButton, {
                              color: "danger",
                              icon: _ctx.mdiTrashCan,
                              small: "",
                              onClick: ($event) => _ctx.deleteMahasiswa(data.id)
                            }, null, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(_component_BaseButton, {
                                color: "danger",
                                icon: _ctx.mdiTrashCan,
                                small: "",
                                onClick: ($event) => _ctx.deleteMahasiswa(data.id)
                              }, null, 8, ["icon", "onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      _push4(`</td></tr>`);
                    });
                    _push4(`<!--]--></tbody></table>`);
                  } else {
                    return [
                      createVNode("table", null, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "No"),
                            createVNode("th", null, "Nama "),
                            createVNode("th", null, "Nama"),
                            createVNode("th", null, "Foto"),
                            createVNode("th", null, "Desc"),
                            createVNode("th", null, "Action")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          !_ctx.loading ? (openBlock(), createBlock("tr", { key: 0 }, [
                            createVNode("td", {
                              colspan: "6",
                              class: "text-center"
                            }, [
                              createVNode("div", { class: "flex justify-center items-center" }, [
                                createVNode("div", { class: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" })
                              ])
                            ])
                          ])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.mahasiswa, (data, i) => {
                            return openBlock(), createBlock("tr", {
                              key: data.id
                            }, [
                              createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                              createVNode("td", { "data-label": "npm" }, toDisplayString(data.npm), 1),
                              createVNode("td", { "data-label": "nama" }, toDisplayString(data.nama), 1),
                              createVNode("td", null, [
                                createVNode("img", {
                                  src: data.foto,
                                  alt: "",
                                  class: "w-[100px] h-[130px]"
                                }, null, 8, ["src"])
                              ]),
                              createVNode("td", { "data-label": "kelas" }, toDisplayString(data.kelas), 1),
                              createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                                createVNode(_component_NuxtLink, {
                                  to: `/admin/mahasiswa/` + data.id
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("detail")
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
                                      icon: _ctx.mdiTrashCan,
                                      small: "",
                                      onClick: ($event) => _ctx.deleteMahasiswa(data.id)
                                    }, null, 8, ["icon", "onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
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
                  title: "Mahasiswa",
                  main: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: "/admin/mahasiswa/tambah",
                      class: "rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Tambah Mahasiswa")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["icon"]),
                createVNode(_component_NotificationBar, {
                  color: "info",
                  icon: _ctx.mdiMonitorCellphone
                }, {
                  default: withCtx(() => [
                    createVNode("b", null, "Responsive table."),
                    createTextVNode(" Collapses on mobile ")
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
                          createVNode("th", null, "Nama "),
                          createVNode("th", null, "Nama"),
                          createVNode("th", null, "Foto"),
                          createVNode("th", null, "Desc"),
                          createVNode("th", null, "Action")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        !_ctx.loading ? (openBlock(), createBlock("tr", { key: 0 }, [
                          createVNode("td", {
                            colspan: "6",
                            class: "text-center"
                          }, [
                            createVNode("div", { class: "flex justify-center items-center" }, [
                              createVNode("div", { class: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" })
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.mahasiswa, (data, i) => {
                          return openBlock(), createBlock("tr", {
                            key: data.id
                          }, [
                            createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                            createVNode("td", { "data-label": "npm" }, toDisplayString(data.npm), 1),
                            createVNode("td", { "data-label": "nama" }, toDisplayString(data.nama), 1),
                            createVNode("td", null, [
                              createVNode("img", {
                                src: data.foto,
                                alt: "",
                                class: "w-[100px] h-[130px]"
                              }, null, 8, ["src"])
                            ]),
                            createVNode("td", { "data-label": "kelas" }, toDisplayString(data.kelas), 1),
                            createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                              createVNode(_component_NuxtLink, {
                                to: `/admin/mahasiswa/` + data.id
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("detail")
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
                                    icon: _ctx.mdiTrashCan,
                                    small: "",
                                    onClick: ($event) => _ctx.deleteMahasiswa(data.id)
                                  }, null, 8, ["icon", "onClick"])
                                ]),
                                _: 2
                              }, 1024)
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
                title: "Mahasiswa",
                main: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, {
                    to: "/admin/mahasiswa/tambah",
                    class: "rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Tambah Mahasiswa")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["icon"]),
              createVNode(_component_NotificationBar, {
                color: "info",
                icon: _ctx.mdiMonitorCellphone
              }, {
                default: withCtx(() => [
                  createVNode("b", null, "Responsive table."),
                  createTextVNode(" Collapses on mobile ")
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
                        createVNode("th", null, "Nama "),
                        createVNode("th", null, "Nama"),
                        createVNode("th", null, "Foto"),
                        createVNode("th", null, "Desc"),
                        createVNode("th", null, "Action")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      !_ctx.loading ? (openBlock(), createBlock("tr", { key: 0 }, [
                        createVNode("td", {
                          colspan: "6",
                          class: "text-center"
                        }, [
                          createVNode("div", { class: "flex justify-center items-center" }, [
                            createVNode("div", { class: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" })
                          ])
                        ])
                      ])) : createCommentVNode("", true),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.mahasiswa, (data, i) => {
                        return openBlock(), createBlock("tr", {
                          key: data.id
                        }, [
                          createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                          createVNode("td", { "data-label": "npm" }, toDisplayString(data.npm), 1),
                          createVNode("td", { "data-label": "nama" }, toDisplayString(data.nama), 1),
                          createVNode("td", null, [
                            createVNode("img", {
                              src: data.foto,
                              alt: "",
                              class: "w-[100px] h-[130px]"
                            }, null, 8, ["src"])
                          ]),
                          createVNode("td", { "data-label": "kelas" }, toDisplayString(data.kelas), 1),
                          createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                            createVNode(_component_NuxtLink, {
                              to: `/admin/mahasiswa/` + data.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode("detail")
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
                                  icon: _ctx.mdiTrashCan,
                                  small: "",
                                  onClick: ($event) => _ctx.deleteMahasiswa(data.id)
                                }, null, 8, ["icon", "onClick"])
                              ]),
                              _: 2
                            }, 1024)
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
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/event/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-e5ad6834.mjs.map
