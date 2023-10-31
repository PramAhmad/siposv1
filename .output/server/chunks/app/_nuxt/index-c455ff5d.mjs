import { d as useSupabaseClient, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './SectionTitleLineWithButton-bad61ad5.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-149f0ed2.mjs';
import { _ as __nuxt_component_3 } from './CardBox-78ae3f19.mjs';
import { ref, mergeProps, withCtx, createTextVNode, createVNode, unref, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
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
    const mahasiswa = ref([]);
    const loading = ref(false);
    const supabase = useSupabaseClient();
    const getMahasiswa = async () => {
      loading.value = false;
      const { data, error } = await supabase.from("mahasiswa").select().order("npm", { ascending: true });
      mahasiswa.value = data;
      loading.value = true;
    };
    const deleteMahasiswa = async (id) => {
      if (confirm("Yakin ingin menghapus data?")) {
        await supabase.from("mahasiswa").delete().match({ id });
        getMahasiswa();
      } else {
        alert("data tidak jadi dihapus");
      }
    };
    const filterMahasiswa = async (e) => {
      const { data, error } = await supabase.from("mahasiswa").select().order("npm", { ascending: true }).ilike("nama", "%" + e.target.value + "%");
      mahasiswa.value = data;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionMain = __nuxt_component_1;
      const _component_SectionTitleLineWithButton = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_CardBox = __nuxt_component_3;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "authenticated" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                    icon: _ctx.mdiAccount,
                    main: "",
                    title: "Mahasiswa"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: "/admin/mahasiswa/tambah",
                          class: "rounded-full my-3 bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3 md:text-lg text-md"
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
                            to: "/admin/mahasiswa/tambah",
                            class: "rounded-full my-3 bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3 md:text-lg text-md"
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
                  _push3(`<div class="flex justify-start mt-2 mb-2"${_scopeId2}><div class="flex gap-3"${_scopeId2}><div class="relative"${_scopeId2}><input type="text" class="rounded-full border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-gray-200 focus:outline-none text-sm text-gray-600 placeholder-gray-400 py-1 px-3 pl-10 block w-full appearance-none leading-normal ds-input" placeholder="Search"${_scopeId2}><div class="absolute top-0 left-0 inline-flex items-center p-2"${_scopeId2}><svg class="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none"${_scopeId2}><path d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path><path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></path></svg></div></div></div></div>`);
                  _push3(ssrRenderComponent(_component_CardBox, {
                    class: "mb-6",
                    "has-table": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<table${_scopeId3}><thead${_scopeId3}><tr${_scopeId3}><th${_scopeId3}>No</th><th${_scopeId3}>Npm</th><th${_scopeId3}>Nama</th><th${_scopeId3}>Kelas</th><th${_scopeId3}>Action</th></tr></thead><tbody${_scopeId3}>`);
                        if (!unref(loading)) {
                          _push4(`<tr${_scopeId3}><td colspan="6" class="text-center"${_scopeId3}><div class="flex justify-center items-center"${_scopeId3}><div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"${_scopeId3}></div></div></td></tr>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(mahasiswa), (data, i) => {
                          _push4(`<tr${_scopeId3}><td data-label="no"${_scopeId3}>${ssrInterpolate(i + 1)}</td><td data-label="npm"${_scopeId3}>${ssrInterpolate(data.npm)}</td><td data-label="nama"${_scopeId3}>${ssrInterpolate(data.nama)}</td><td data-label="kelas" class="uppercase"${_scopeId3}>${ssrInterpolate(data.kelas)}</td><td class="before:hidden lg:w-1 whitespace-nowrap"${_scopeId3}><div class="flex gap-3"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            class: "py-1 px-1.5 rounded-md border",
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
                          _push4(`<button class="py-1 px-2 rounded-md border border-rose-600 text-rose-600"${_scopeId3}>delete</button></div></td></tr>`);
                        });
                        _push4(`<!--]--></tbody></table>`);
                      } else {
                        return [
                          createVNode("table", null, [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", null, "No"),
                                createVNode("th", null, "Npm"),
                                createVNode("th", null, "Nama"),
                                createVNode("th", null, "Kelas"),
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(mahasiswa), (data, i) => {
                                return openBlock(), createBlock("tr", {
                                  key: data.id
                                }, [
                                  createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                                  createVNode("td", { "data-label": "npm" }, toDisplayString(data.npm), 1),
                                  createVNode("td", { "data-label": "nama" }, toDisplayString(data.nama), 1),
                                  createVNode("td", {
                                    "data-label": "kelas",
                                    class: "uppercase"
                                  }, toDisplayString(data.kelas), 1),
                                  createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                                    createVNode("div", { class: "flex gap-3" }, [
                                      createVNode(_component_NuxtLink, {
                                        class: "py-1 px-1.5 rounded-md border",
                                        to: `/admin/mahasiswa/` + data.id
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("detail")
                                        ]),
                                        _: 2
                                      }, 1032, ["to"]),
                                      createVNode("button", {
                                        onClick: ($event) => deleteMahasiswa(data.id),
                                        class: "py-1 px-2 rounded-md border border-rose-600 text-rose-600"
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
                      title: "Mahasiswa"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: "/admin/mahasiswa/tambah",
                          class: "rounded-full my-3 bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3 md:text-lg text-md"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Tambah")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["icon"]),
                    createVNode("div", { class: "flex justify-start mt-2 mb-2" }, [
                      createVNode("div", { class: "flex gap-3" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode("input", {
                            type: "text",
                            onInput: filterMahasiswa,
                            class: "rounded-full border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-gray-200 focus:outline-none text-sm text-gray-600 placeholder-gray-400 py-1 px-3 pl-10 block w-full appearance-none leading-normal ds-input",
                            placeholder: "Search"
                          }, null, 32),
                          createVNode("div", { class: "absolute top-0 left-0 inline-flex items-center p-2" }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-4 h-4 text-gray-400",
                              viewBox: "0 0 24 24",
                              fill: "none"
                            }, [
                              createVNode("path", {
                                d: "M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4Z",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              }),
                              createVNode("path", {
                                d: "M21 21L16.65 16.65",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              })
                            ]))
                          ])
                        ])
                      ])
                    ]),
                    createVNode(_component_CardBox, {
                      class: "mb-6",
                      "has-table": ""
                    }, {
                      default: withCtx(() => [
                        createVNode("table", null, [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", null, "No"),
                              createVNode("th", null, "Npm"),
                              createVNode("th", null, "Nama"),
                              createVNode("th", null, "Kelas"),
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(mahasiswa), (data, i) => {
                              return openBlock(), createBlock("tr", {
                                key: data.id
                              }, [
                                createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                                createVNode("td", { "data-label": "npm" }, toDisplayString(data.npm), 1),
                                createVNode("td", { "data-label": "nama" }, toDisplayString(data.nama), 1),
                                createVNode("td", {
                                  "data-label": "kelas",
                                  class: "uppercase"
                                }, toDisplayString(data.kelas), 1),
                                createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                                  createVNode("div", { class: "flex gap-3" }, [
                                    createVNode(_component_NuxtLink, {
                                      class: "py-1 px-1.5 rounded-md border",
                                      to: `/admin/mahasiswa/` + data.id
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("detail")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode("button", {
                                      onClick: ($event) => deleteMahasiswa(data.id),
                                      class: "py-1 px-2 rounded-md border border-rose-600 text-rose-600"
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
                    title: "Mahasiswa"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: "/admin/mahasiswa/tambah",
                        class: "rounded-full my-3 bg-slate-900 text-white font-semibold hover:bg-slate-950 py-2.5 px-3 md:text-lg text-md"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Tambah")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  createVNode("div", { class: "flex justify-start mt-2 mb-2" }, [
                    createVNode("div", { class: "flex gap-3" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode("input", {
                          type: "text",
                          onInput: filterMahasiswa,
                          class: "rounded-full border border-gray-300 focus:border-transparent focus:ring-2 focus:ring-gray-200 focus:outline-none text-sm text-gray-600 placeholder-gray-400 py-1 px-3 pl-10 block w-full appearance-none leading-normal ds-input",
                          placeholder: "Search"
                        }, null, 32),
                        createVNode("div", { class: "absolute top-0 left-0 inline-flex items-center p-2" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-4 h-4 text-gray-400",
                            viewBox: "0 0 24 24",
                            fill: "none"
                          }, [
                            createVNode("path", {
                              d: "M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4Z",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }),
                            createVNode("path", {
                              d: "M21 21L16.65 16.65",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            })
                          ]))
                        ])
                      ])
                    ])
                  ]),
                  createVNode(_component_CardBox, {
                    class: "mb-6",
                    "has-table": ""
                  }, {
                    default: withCtx(() => [
                      createVNode("table", null, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "No"),
                            createVNode("th", null, "Npm"),
                            createVNode("th", null, "Nama"),
                            createVNode("th", null, "Kelas"),
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
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(mahasiswa), (data, i) => {
                            return openBlock(), createBlock("tr", {
                              key: data.id
                            }, [
                              createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                              createVNode("td", { "data-label": "npm" }, toDisplayString(data.npm), 1),
                              createVNode("td", { "data-label": "nama" }, toDisplayString(data.nama), 1),
                              createVNode("td", {
                                "data-label": "kelas",
                                class: "uppercase"
                              }, toDisplayString(data.kelas), 1),
                              createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                                createVNode("div", { class: "flex gap-3" }, [
                                  createVNode(_component_NuxtLink, {
                                    class: "py-1 px-1.5 rounded-md border",
                                    to: `/admin/mahasiswa/` + data.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("detail")
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]),
                                  createVNode("button", {
                                    onClick: ($event) => deleteMahasiswa(data.id),
                                    class: "py-1 px-2 rounded-md border border-rose-600 text-rose-600"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/mahasiswa/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-c455ff5d.mjs.map
