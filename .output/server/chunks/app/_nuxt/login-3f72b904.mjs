import { d as useSupabaseClient, n as navigateTo, a as __nuxt_component_0 } from '../server.mjs';
import { reactive, ref, withCtx, unref, createVNode, withModifiers, openBlock, createBlock, createCommentVNode, useSSRContext, computed, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { u as useStyleStore } from './style-4fabede4.mjs';
import { g as gradientBgDark, b as gradientBgPinkRed, d as gradientBgPurplePink } from './colors-5bbb644a.mjs';
import { _ as __nuxt_component_3 } from './CardBox-78ae3f19.mjs';
import { _ as __nuxt_component_4, a as __nuxt_component_5 } from './FormControl-ab424399.mjs';
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
import './main-a14f7ca0.mjs';

const _sfc_main$1 = {
  __name: "SectionFullScreen",
  __ssrInlineRender: true,
  props: {
    bg: {
      type: String,
      required: true,
      validator: (value) => ["purplePink", "pinkRed"].includes(value)
    }
  },
  setup(__props) {
    const props = __props;
    const colorClass = computed(() => {
      if (useStyleStore().darkMode) {
        return gradientBgDark;
      }
      switch (props.bg) {
        case "purplePink":
          return gradientBgPurplePink;
        case "pinkRed":
          return gradientBgPinkRed;
      }
      return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex min-h-screen items-center justify-center", colorClass.value]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", { cardClass: "w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl" }, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionFullScreen.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      login: "",
      pass: ""
    });
    const loading = ref(false);
    const supabase = useSupabaseClient();
    const submit = async () => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.login,
        password: form.pass
      });
      loading.value = true;
      if (error) {
        alert(error.message);
      }
      navigateTo("/admin");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionFullScreen = __nuxt_component_1;
      const _component_CardBox = __nuxt_component_3;
      const _component_FormField = __nuxt_component_4;
      const _component_FormControl = __nuxt_component_5;
      const _component_BaseButtons = __nuxt_component_6;
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(loading)) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"${_scopeId}><div class="bg-white rounded-lg p-6"${_scopeId}><div class="flex items-center justify-center"${_scopeId}><div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"${_scopeId}></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_SectionFullScreen, { bg: "purplePink" }, {
              default: withCtx(({ cardClass }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardBox, {
                    class: cardClass,
                    "is-form": "",
                    onSubmit: submit
                  }, {
                    footer: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseButtons, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button class="py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"${_scopeId4}>Login</button><button class="py-2 px-5 bg-rose-600 rounded-md text-white hover:bg-rose-500"${_scopeId4}>Back</button>`);
                            } else {
                              return [
                                createVNode("button", { class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500" }, "Login"),
                                createVNode("button", { class: "py-2 px-5 bg-rose-600 rounded-md text-white hover:bg-rose-500" }, "Back")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseButtons, null, {
                            default: withCtx(() => [
                              createVNode("button", { class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500" }, "Login"),
                              createVNode("button", { class: "py-2 px-5 bg-rose-600 rounded-md text-white hover:bg-rose-500" }, "Back")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "Login",
                          help: "Please enter your login"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: unref(form).login,
                                "onUpdate:modelValue": ($event) => unref(form).login = $event,
                                icon: _ctx.mdiAccount,
                                name: "login",
                                autocomplete: "username"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(form).login,
                                  "onUpdate:modelValue": ($event) => unref(form).login = $event,
                                  icon: _ctx.mdiAccount,
                                  name: "login",
                                  autocomplete: "username"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "Password",
                          help: "Please enter your password"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: unref(form).pass,
                                "onUpdate:modelValue": ($event) => unref(form).pass = $event,
                                icon: _ctx.mdiAsterisk,
                                type: "password",
                                name: "password",
                                autocomplete: "current-password"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(form).pass,
                                  "onUpdate:modelValue": ($event) => unref(form).pass = $event,
                                  icon: _ctx.mdiAsterisk,
                                  type: "password",
                                  name: "password",
                                  autocomplete: "current-password"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormField, {
                            label: "Login",
                            help: "Please enter your login"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(form).login,
                                "onUpdate:modelValue": ($event) => unref(form).login = $event,
                                icon: _ctx.mdiAccount,
                                name: "login",
                                autocomplete: "username"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "Password",
                            help: "Please enter your password"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(form).pass,
                                "onUpdate:modelValue": ($event) => unref(form).pass = $event,
                                icon: _ctx.mdiAsterisk,
                                type: "password",
                                name: "password",
                                autocomplete: "current-password"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardBox, {
                      class: cardClass,
                      "is-form": "",
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, {
                      footer: withCtx(() => [
                        createVNode(_component_BaseButtons, null, {
                          default: withCtx(() => [
                            createVNode("button", { class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500" }, "Login"),
                            createVNode("button", { class: "py-2 px-5 bg-rose-600 rounded-md text-white hover:bg-rose-500" }, "Back")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_FormField, {
                          label: "Login",
                          help: "Please enter your login"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: unref(form).login,
                              "onUpdate:modelValue": ($event) => unref(form).login = $event,
                              icon: _ctx.mdiAccount,
                              name: "login",
                              autocomplete: "username"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, {
                          label: "Password",
                          help: "Please enter your password"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: unref(form).pass,
                              "onUpdate:modelValue": ($event) => unref(form).pass = $event,
                              icon: _ctx.mdiAsterisk,
                              type: "password",
                              name: "password",
                              autocomplete: "current-password"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["class", "onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              unref(loading) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              }, [
                createVNode("div", { class: "bg-white rounded-lg p-6" }, [
                  createVNode("div", { class: "flex items-center justify-center" }, [
                    createVNode("div", { class: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" })
                  ])
                ])
              ])) : createCommentVNode("", true),
              createVNode(_component_SectionFullScreen, { bg: "purplePink" }, {
                default: withCtx(({ cardClass }) => [
                  createVNode(_component_CardBox, {
                    class: cardClass,
                    "is-form": "",
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, {
                    footer: withCtx(() => [
                      createVNode(_component_BaseButtons, null, {
                        default: withCtx(() => [
                          createVNode("button", { class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500" }, "Login"),
                          createVNode("button", { class: "py-2 px-5 bg-rose-600 rounded-md text-white hover:bg-rose-500" }, "Back")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_FormField, {
                        label: "Login",
                        help: "Please enter your login"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_FormControl, {
                            modelValue: unref(form).login,
                            "onUpdate:modelValue": ($event) => unref(form).login = $event,
                            icon: _ctx.mdiAccount,
                            name: "login",
                            autocomplete: "username"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormField, {
                        label: "Password",
                        help: "Please enter your password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_FormControl, {
                            modelValue: unref(form).pass,
                            "onUpdate:modelValue": ($event) => unref(form).pass = $event,
                            icon: _ctx.mdiAsterisk,
                            type: "password",
                            name: "password",
                            autocomplete: "current-password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["class", "onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-3f72b904.mjs.map
