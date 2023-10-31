import { d as useSupabaseClient, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './SectionTitleLineWithButton-bad61ad5.mjs';
import { _ as __nuxt_component_3 } from './CardBox-78ae3f19.mjs';
import { _ as __nuxt_component_4 } from './NotificationBarInCard-e25b846b.mjs';
import { _ as __nuxt_component_4$1, a as __nuxt_component_5 } from './FormControl-ab424399.mjs';
import { _ as __nuxt_component_6 } from './BaseButtons-c51a2c2b.mjs';
import { _ as __nuxt_component_7 } from './BaseButton-547d4d10.mjs';
import { ref, mergeProps, withCtx, unref, isRef, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import './main-a14f7ca0.mjs';

const _sfc_main = {
  __name: "tambah",
  __ssrInlineRender: true,
  setup(__props) {
    const supabase = useSupabaseClient();
    ref([]);
    const nama = ref();
    const desc = ref();
    const alert = ref(false);
    const submit = async () => {
      alert.value = false;
      const { data, error } = await supabase.from("room_payment").insert({
        nama_pembayaran: nama.value,
        desc: desc.value
      });
      if (error) {
        console.log(error);
      } else {
        alert.value = true;
        nama.value = "";
        desc.value = "";
      }
    };
    const reset = async () => {
      nama.value = "";
      desc.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionMain = __nuxt_component_1;
      const _component_SectionTitleLineWithButton = __nuxt_component_2;
      const _component_CardBox = __nuxt_component_3;
      const _component_NotificationBarInCard = __nuxt_component_4;
      const _component_FormField = __nuxt_component_4$1;
      const _component_FormControl = __nuxt_component_5;
      const _component_BaseButtons = __nuxt_component_6;
      const _component_BaseButton = __nuxt_component_7;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "authenticated" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                    icon: _ctx.mdiTableBorder,
                    title: "Room Payment",
                    main: ""
                  }, null, _parent3, _scopeId2));
                  if (unref(alert)) {
                    _push3(`<div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert"${_scopeId2}><p class="font-bold"${_scopeId2}>Sukses </p><p class="text-sm"${_scopeId2}>Berhasil Menambahkan Room</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_CardBox, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<form${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_NotificationBarInCard, {
                          color: "info",
                          icon: _ctx.mdiMonitorCellphone,
                          class: "mb-6"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, { label: "Masukan Nama Room" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: unref(nama),
                                "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                                icon: _ctx.mdiMail,
                                placeholder: "Nama Jenis Payment"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(nama),
                                  "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                                  icon: _ctx.mdiMail,
                                  placeholder: "Nama Jenis Payment"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<label for="" class="font-semibold text-gray-800"${_scopeId3}>Masukan Desc</label><textarea id="" cols="30" rows="10" class="w-full border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2" placeholder="deskripsi"${_scopeId3}>${ssrInterpolate(unref(desc))}</textarea><div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BaseButtons, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button type="submit" class="py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"${_scopeId4}>Tambah</button>`);
                              _push5(ssrRenderComponent(_component_BaseButton, {
                                onClick: reset,
                                color: "info",
                                outline: "",
                                label: "Reset"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("button", {
                                  type: "submit",
                                  class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                                }, "Tambah"),
                                createVNode(_component_BaseButton, {
                                  onClick: reset,
                                  color: "info",
                                  outline: "",
                                  label: "Reset"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></form>`);
                      } else {
                        return [
                          createVNode("form", {
                            onSubmit: withModifiers(submit, ["prevent"])
                          }, [
                            createVNode(_component_NotificationBarInCard, {
                              color: "info",
                              icon: _ctx.mdiMonitorCellphone,
                              class: "mb-6"
                            }, null, 8, ["icon"]),
                            createVNode(_component_FormField, { label: "Masukan Nama Room" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(nama),
                                  "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                                  icon: _ctx.mdiMail,
                                  placeholder: "Nama Jenis Payment"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ]),
                              _: 1
                            }),
                            createVNode("label", {
                              for: "",
                              class: "font-semibold text-gray-800"
                            }, "Masukan Desc"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => isRef(desc) ? desc.value = $event : null,
                              id: "",
                              cols: "30",
                              rows: "10",
                              class: "w-full border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2",
                              placeholder: "deskripsi"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(desc)]
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_BaseButtons, null, {
                                default: withCtx(() => [
                                  createVNode("button", {
                                    type: "submit",
                                    class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                                  }, "Tambah"),
                                  createVNode(_component_BaseButton, {
                                    onClick: reset,
                                    color: "info",
                                    outline: "",
                                    label: "Reset"
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ], 40, ["onSubmit"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SectionTitleLineWithButton, {
                      icon: _ctx.mdiTableBorder,
                      title: "Room Payment",
                      main: ""
                    }, null, 8, ["icon"]),
                    unref(alert) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",
                      role: "alert"
                    }, [
                      createVNode("p", { class: "font-bold" }, "Sukses "),
                      createVNode("p", { class: "text-sm" }, "Berhasil Menambahkan Room")
                    ])) : createCommentVNode("", true),
                    createVNode(_component_CardBox, null, {
                      default: withCtx(() => [
                        createVNode("form", {
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
                          createVNode(_component_NotificationBarInCard, {
                            color: "info",
                            icon: _ctx.mdiMonitorCellphone,
                            class: "mb-6"
                          }, null, 8, ["icon"]),
                          createVNode(_component_FormField, { label: "Masukan Nama Room" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(nama),
                                "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                                icon: _ctx.mdiMail,
                                placeholder: "Nama Jenis Payment"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode("label", {
                            for: "",
                            class: "font-semibold text-gray-800"
                          }, "Masukan Desc"),
                          withDirectives(createVNode("textarea", {
                            "onUpdate:modelValue": ($event) => isRef(desc) ? desc.value = $event : null,
                            id: "",
                            cols: "30",
                            rows: "10",
                            class: "w-full border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2",
                            placeholder: "deskripsi"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(desc)]
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_BaseButtons, null, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  type: "submit",
                                  class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                                }, "Tambah"),
                                createVNode(_component_BaseButton, {
                                  onClick: reset,
                                  color: "info",
                                  outline: "",
                                  label: "Reset"
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ], 40, ["onSubmit"])
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
                    title: "Room Payment",
                    main: ""
                  }, null, 8, ["icon"]),
                  unref(alert) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",
                    role: "alert"
                  }, [
                    createVNode("p", { class: "font-bold" }, "Sukses "),
                    createVNode("p", { class: "text-sm" }, "Berhasil Menambahkan Room")
                  ])) : createCommentVNode("", true),
                  createVNode(_component_CardBox, null, {
                    default: withCtx(() => [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode(_component_NotificationBarInCard, {
                          color: "info",
                          icon: _ctx.mdiMonitorCellphone,
                          class: "mb-6"
                        }, null, 8, ["icon"]),
                        createVNode(_component_FormField, { label: "Masukan Nama Room" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: unref(nama),
                              "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                              icon: _ctx.mdiMail,
                              placeholder: "Nama Jenis Payment"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }),
                        createVNode("label", {
                          for: "",
                          class: "font-semibold text-gray-800"
                        }, "Masukan Desc"),
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => isRef(desc) ? desc.value = $event : null,
                          id: "",
                          cols: "30",
                          rows: "10",
                          class: "w-full border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2",
                          placeholder: "deskripsi"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(desc)]
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_BaseButtons, null, {
                            default: withCtx(() => [
                              createVNode("button", {
                                type: "submit",
                                class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                              }, "Tambah"),
                              createVNode(_component_BaseButton, {
                                onClick: reset,
                                color: "info",
                                outline: "",
                                label: "Reset"
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/payment/tambah.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tambah-a0f395ba.mjs.map
