import { d as useSupabaseClient, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './SectionTitleLineWithButton-bad61ad5.mjs';
import { _ as __nuxt_component_3 } from './CardBox-78ae3f19.mjs';
import { _ as __nuxt_component_4, a as __nuxt_component_5 } from './FormControl-ab424399.mjs';
import { _ as __nuxt_component_6 } from './BaseButtons-c51a2c2b.mjs';
import { _ as __nuxt_component_7 } from './BaseButton-547d4d10.mjs';
import { ref, resolveComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, isRef, withDirectives, vModelSelect, withModifiers, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
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
import './main-a14f7ca0.mjs';

const _sfc_main = {
  __name: "tambah",
  __ssrInlineRender: true,
  setup(__props) {
    const alert = ref(false);
    const supabase = useSupabaseClient();
    const mail = ref("");
    const password = ref("");
    const role = ref("");
    const submit = async () => {
      alert.value = false;
      const { data, error } = await supabase.auth.admin.createUser({
        email: mail.value,
        password: password.value,
        options: {
          data: { role: role.value }
        }
      });
      if (error) {
        console.log(error);
      }
      alert.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionMain = __nuxt_component_1;
      const _component_SectionTitleLineWithButton = __nuxt_component_2;
      const _component_Alert = resolveComponent("Alert");
      const _component_CardBox = __nuxt_component_3;
      const _component_FormField = __nuxt_component_4;
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
                    icon: _ctx.mdiBallotOutline,
                    title: "Tambah User",
                    main: ""
                  }, null, _parent3, _scopeId2));
                  if (unref(alert)) {
                    _push3(ssrRenderComponent(_component_Alert, {
                      type: "success",
                      class: "mb-4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="font-semibold"${_scopeId3}>Berhasil!</span> User berhasil ditambahkan. `);
                        } else {
                          return [
                            createVNode("span", { class: "font-semibold" }, "Berhasil!"),
                            createTextVNode(" User berhasil ditambahkan. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_CardBox, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<form${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_FormField, { label: "Nama dan role" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: unref(mail),
                                "onUpdate:modelValue": ($event) => isRef(mail) ? mail.value = $event : null,
                                placeholder: "Your mail",
                                icon: _ctx.mdiAccount
                              }, null, _parent5, _scopeId4));
                              _push5(`<select class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"${_scopeId4}><option value="mahasiswa"${_scopeId4}>mahasiswa</option><option value="bendahara"${_scopeId4}>bendahara</option><option value="admin"${_scopeId4}>admin</option></select>`);
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(mail),
                                  "onUpdate:modelValue": ($event) => isRef(mail) ? mail.value = $event : null,
                                  placeholder: "Your mail",
                                  icon: _ctx.mdiAccount
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"]),
                                withDirectives(createVNode("select", {
                                  "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                  class: "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                                }, [
                                  createVNode("option", { value: "mahasiswa" }, "mahasiswa"),
                                  createVNode("option", { value: "bendahara" }, "bendahara"),
                                  createVNode("option", { value: "admin" }, "admin")
                                ], 8, ["onUpdate:modelValue"]), [
                                  [vModelSelect, unref(role)]
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "Password",
                          help: "Do not enter the leading zero"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: unref(password),
                                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                type: "password",
                                placeholder: "Your password"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(password),
                                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                  type: "password",
                                  placeholder: "Your password"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BaseButtons, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button type="submit" class="py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"${_scopeId4}>Tambah</button>`);
                              _push5(ssrRenderComponent(_component_BaseButton, {
                                onClick: _ctx.reset,
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
                                  onClick: _ctx.reset,
                                  color: "info",
                                  outline: "",
                                  label: "Reset"
                                }, null, 8, ["onClick"])
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
                            createVNode(_component_FormField, { label: "Nama dan role" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(mail),
                                  "onUpdate:modelValue": ($event) => isRef(mail) ? mail.value = $event : null,
                                  placeholder: "Your mail",
                                  icon: _ctx.mdiAccount
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"]),
                                withDirectives(createVNode("select", {
                                  "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                  class: "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                                }, [
                                  createVNode("option", { value: "mahasiswa" }, "mahasiswa"),
                                  createVNode("option", { value: "bendahara" }, "bendahara"),
                                  createVNode("option", { value: "admin" }, "admin")
                                ], 8, ["onUpdate:modelValue"]), [
                                  [vModelSelect, unref(role)]
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormField, {
                              label: "Password",
                              help: "Do not enter the leading zero"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(password),
                                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                  type: "password",
                                  placeholder: "Your password"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", null, [
                              createVNode(_component_BaseButtons, null, {
                                default: withCtx(() => [
                                  createVNode("button", {
                                    type: "submit",
                                    class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                                  }, "Tambah"),
                                  createVNode(_component_BaseButton, {
                                    onClick: _ctx.reset,
                                    color: "info",
                                    outline: "",
                                    label: "Reset"
                                  }, null, 8, ["onClick"])
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
                      icon: _ctx.mdiBallotOutline,
                      title: "Tambah User",
                      main: ""
                    }, null, 8, ["icon"]),
                    unref(alert) ? (openBlock(), createBlock(_component_Alert, {
                      key: 0,
                      type: "success",
                      class: "mb-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "font-semibold" }, "Berhasil!"),
                        createTextVNode(" User berhasil ditambahkan. ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_CardBox, null, {
                      default: withCtx(() => [
                        createVNode("form", {
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
                          createVNode(_component_FormField, { label: "Nama dan role" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(mail),
                                "onUpdate:modelValue": ($event) => isRef(mail) ? mail.value = $event : null,
                                placeholder: "Your mail",
                                icon: _ctx.mdiAccount
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"]),
                              withDirectives(createVNode("select", {
                                "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                class: "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                              }, [
                                createVNode("option", { value: "mahasiswa" }, "mahasiswa"),
                                createVNode("option", { value: "bendahara" }, "bendahara"),
                                createVNode("option", { value: "admin" }, "admin")
                              ], 8, ["onUpdate:modelValue"]), [
                                [vModelSelect, unref(role)]
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "Password",
                            help: "Do not enter the leading zero"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(password),
                                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                type: "password",
                                placeholder: "Your password"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode(_component_BaseButtons, null, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  type: "submit",
                                  class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                                }, "Tambah"),
                                createVNode(_component_BaseButton, {
                                  onClick: _ctx.reset,
                                  color: "info",
                                  outline: "",
                                  label: "Reset"
                                }, null, 8, ["onClick"])
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
                    icon: _ctx.mdiBallotOutline,
                    title: "Tambah User",
                    main: ""
                  }, null, 8, ["icon"]),
                  unref(alert) ? (openBlock(), createBlock(_component_Alert, {
                    key: 0,
                    type: "success",
                    class: "mb-4"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "font-semibold" }, "Berhasil!"),
                      createTextVNode(" User berhasil ditambahkan. ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_CardBox, null, {
                    default: withCtx(() => [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode(_component_FormField, { label: "Nama dan role" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: unref(mail),
                              "onUpdate:modelValue": ($event) => isRef(mail) ? mail.value = $event : null,
                              placeholder: "Your mail",
                              icon: _ctx.mdiAccount
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"]),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                              class: "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                            }, [
                              createVNode("option", { value: "mahasiswa" }, "mahasiswa"),
                              createVNode("option", { value: "bendahara" }, "bendahara"),
                              createVNode("option", { value: "admin" }, "admin")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(role)]
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, {
                          label: "Password",
                          help: "Do not enter the leading zero"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: unref(password),
                              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                              type: "password",
                              placeholder: "Your password"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", null, [
                          createVNode(_component_BaseButtons, null, {
                            default: withCtx(() => [
                              createVNode("button", {
                                type: "submit",
                                class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                              }, "Tambah"),
                              createVNode(_component_BaseButton, {
                                onClick: _ctx.reset,
                                color: "info",
                                outline: "",
                                label: "Reset"
                              }, null, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/user/tambah.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tambah-898d39f9.mjs.map
