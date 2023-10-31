import { d as useSupabaseClient, e as useRoute, n as navigateTo, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './SectionTitleLineWithButton-bad61ad5.mjs';
import { _ as __nuxt_component_3 } from './MahasiswaCard-3113de64.mjs';
import { _ as __nuxt_component_3$1 } from './CardBox-78ae3f19.mjs';
import { _ as __nuxt_component_4, a as __nuxt_component_5 } from './FormControl-ab424399.mjs';
import { _ as __nuxt_component_6 } from './BaseButtons-c51a2c2b.mjs';
import { _ as __nuxt_component_7 } from './BaseButton-547d4d10.mjs';
import { B as BaseDivider } from './BaseDivider-52c813b9.mjs';
import { ref, mergeProps, withCtx, createVNode, unref, isRef, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
import './BaseLevel-555d04eb.mjs';
import './PillTag-0e71f526.mjs';
import './main-a14f7ca0.mjs';

const _sfc_main = {
  __name: "setting",
  __ssrInlineRender: true,
  setup(__props) {
    const supabase = useSupabaseClient();
    const $route = useRoute();
    const desc = ref();
    const nama = ref();
    const alert = ref(false);
    const updateRoom = async () => {
      alert.value = false;
      const { data, error } = await supabase.from("room_payment").update({
        nama_pembayaran: nama.value,
        desc: desc.value
      }).eq("id", $route.params.room);
      if (error) {
        console.log(error);
      } else {
        alert.value = true;
      }
    };
    const deletePayment = async () => {
      const confirm = window.confirm("yakin akan menghapus?");
      if (confirm) {
        const { data, error } = await supabase.from("room_payment").update({
          is_delete: 1
        }).eq("id", $route.params.room);
        if (error) {
          console.log(error);
        } else {
          navigateTo("/admin/payment");
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionMain = __nuxt_component_1;
      const _component_SectionTitleLineWithButton = __nuxt_component_2;
      const _component_MahasiswaCard = __nuxt_component_3;
      const _component_CardBox = __nuxt_component_3$1;
      const _component_FormField = __nuxt_component_4;
      const _component_FormControl = __nuxt_component_5;
      const _component_BaseButtons = __nuxt_component_6;
      const _component_BaseButton = __nuxt_component_7;
      const _component_BaseDivider = BaseDivider;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "authenticated" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                    icon: _ctx.mdiAccount,
                    title: "Payment",
                    main: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button class="py-2 px-3 bg-rose-600 rounded-full text-white hover:bg-rose-500"${_scopeId3}>delete</button>`);
                      } else {
                        return [
                          createVNode("button", {
                            onClick: ($event) => deletePayment(),
                            class: "py-2 px-3 bg-rose-600 rounded-full text-white hover:bg-rose-500"
                          }, "delete", 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (unref(alert)) {
                    _push3(`<div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert"${_scopeId2}><p class="font-bold"${_scopeId2}>Update Room</p><p class="text-sm"${_scopeId2}>Berhasil Update Room</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MahasiswaCard, { class: "mb-6" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardBox, {
                    "is-form": "",
                    onSubmit: updateRoom
                  }, {
                    footer: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseButtons, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_BaseButton, {
                                color: "info",
                                type: "submit",
                                label: "Submit"
                              }, null, _parent5, _scopeId4));
                              _push5(`<a href="/admin/payment" class="py-2 px-3 bg-white border-2 rounded-md border-slate-950"${_scopeId4}>kembali </a>`);
                            } else {
                              return [
                                createVNode(_component_BaseButton, {
                                  color: "info",
                                  type: "submit",
                                  label: "Submit"
                                }),
                                createVNode("a", {
                                  href: "/admin/payment",
                                  class: "py-2 px-3 bg-white border-2 rounded-md border-slate-950"
                                }, "kembali ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseButtons, null, {
                            default: withCtx(() => [
                              createVNode(_component_BaseButton, {
                                color: "info",
                                type: "submit",
                                label: "Submit"
                              }),
                              createVNode("a", {
                                href: "/admin/payment",
                                class: "py-2 px-3 bg-white border-2 rounded-md border-slate-950"
                              }, "kembali ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "nama",
                          help: "Masukan nama baru"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: unref(nama),
                                "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                                icon: _ctx.mdiAccount,
                                name: "nama",
                                required: "",
                                autocomplete: "nama"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(nama),
                                  "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                                  icon: _ctx.mdiAccount,
                                  name: "nama",
                                  required: "",
                                  autocomplete: "nama"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "Desc",
                          help: "Masukan NPM baru"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: unref(desc),
                                "onUpdate:modelValue": ($event) => isRef(desc) ? desc.value = $event : null,
                                icon: _ctx.mdiMail,
                                type: "text",
                                name: "desc",
                                required: "",
                                autocomplete: "desc"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(desc),
                                  "onUpdate:modelValue": ($event) => isRef(desc) ? desc.value = $event : null,
                                  icon: _ctx.mdiMail,
                                  type: "text",
                                  name: "desc",
                                  required: "",
                                  autocomplete: "desc"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormField, {
                            label: "nama",
                            help: "Masukan nama baru"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(nama),
                                "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                                icon: _ctx.mdiAccount,
                                name: "nama",
                                required: "",
                                autocomplete: "nama"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "Desc",
                            help: "Masukan NPM baru"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(desc),
                                "onUpdate:modelValue": ($event) => isRef(desc) ? desc.value = $event : null,
                                icon: _ctx.mdiMail,
                                type: "text",
                                name: "desc",
                                required: "",
                                autocomplete: "desc"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDivider, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_SectionTitleLineWithButton, {
                      icon: _ctx.mdiAccount,
                      title: "Payment",
                      main: ""
                    }, {
                      default: withCtx(() => [
                        createVNode("button", {
                          onClick: ($event) => deletePayment(),
                          class: "py-2 px-3 bg-rose-600 rounded-full text-white hover:bg-rose-500"
                        }, "delete", 8, ["onClick"])
                      ]),
                      _: 1
                    }, 8, ["icon"]),
                    unref(alert) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",
                      role: "alert"
                    }, [
                      createVNode("p", { class: "font-bold" }, "Update Room"),
                      createVNode("p", { class: "text-sm" }, "Berhasil Update Room")
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2" }, [
                      createVNode(_component_MahasiswaCard, { class: "mb-6" }),
                      createVNode(_component_CardBox, {
                        "is-form": "",
                        onSubmit: withModifiers(updateRoom, ["prevent"])
                      }, {
                        footer: withCtx(() => [
                          createVNode(_component_BaseButtons, null, {
                            default: withCtx(() => [
                              createVNode(_component_BaseButton, {
                                color: "info",
                                type: "submit",
                                label: "Submit"
                              }),
                              createVNode("a", {
                                href: "/admin/payment",
                                class: "py-2 px-3 bg-white border-2 rounded-md border-slate-950"
                              }, "kembali ")
                            ]),
                            _: 1
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_FormField, {
                            label: "nama",
                            help: "Masukan nama baru"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(nama),
                                "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                                icon: _ctx.mdiAccount,
                                name: "nama",
                                required: "",
                                autocomplete: "nama"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "Desc",
                            help: "Masukan NPM baru"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(desc),
                                "onUpdate:modelValue": ($event) => isRef(desc) ? desc.value = $event : null,
                                icon: _ctx.mdiMail,
                                type: "text",
                                name: "desc",
                                required: "",
                                autocomplete: "desc"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onSubmit"]),
                      createVNode(_component_BaseDivider)
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
                    icon: _ctx.mdiAccount,
                    title: "Payment",
                    main: ""
                  }, {
                    default: withCtx(() => [
                      createVNode("button", {
                        onClick: ($event) => deletePayment(),
                        class: "py-2 px-3 bg-rose-600 rounded-full text-white hover:bg-rose-500"
                      }, "delete", 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  unref(alert) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",
                    role: "alert"
                  }, [
                    createVNode("p", { class: "font-bold" }, "Update Room"),
                    createVNode("p", { class: "text-sm" }, "Berhasil Update Room")
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2" }, [
                    createVNode(_component_MahasiswaCard, { class: "mb-6" }),
                    createVNode(_component_CardBox, {
                      "is-form": "",
                      onSubmit: withModifiers(updateRoom, ["prevent"])
                    }, {
                      footer: withCtx(() => [
                        createVNode(_component_BaseButtons, null, {
                          default: withCtx(() => [
                            createVNode(_component_BaseButton, {
                              color: "info",
                              type: "submit",
                              label: "Submit"
                            }),
                            createVNode("a", {
                              href: "/admin/payment",
                              class: "py-2 px-3 bg-white border-2 rounded-md border-slate-950"
                            }, "kembali ")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_FormField, {
                          label: "nama",
                          help: "Masukan nama baru"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: unref(nama),
                              "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                              icon: _ctx.mdiAccount,
                              name: "nama",
                              required: "",
                              autocomplete: "nama"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, {
                          label: "Desc",
                          help: "Masukan NPM baru"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: unref(desc),
                              "onUpdate:modelValue": ($event) => isRef(desc) ? desc.value = $event : null,
                              icon: _ctx.mdiMail,
                              type: "text",
                              name: "desc",
                              required: "",
                              autocomplete: "desc"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onSubmit"]),
                    createVNode(_component_BaseDivider)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/payment/[room]/setting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=setting-04de14d6.mjs.map
