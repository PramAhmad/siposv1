import { d as useSupabaseClient, e as useRoute, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_3 } from './CardBox-78ae3f19.mjs';
import { _ as __nuxt_component_4, a as __nuxt_component_5 } from './FormControl-ab424399.mjs';
import { _ as __nuxt_component_6 } from './FotoActivity-c761c099.mjs';
import { _ as __nuxt_component_6$1 } from './BaseButtons-c51a2c2b.mjs';
import { _ as __nuxt_component_7 } from './BaseButton-547d4d10.mjs';
import { ref, withCtx, unref, createVNode, createTextVNode, toDisplayString, isRef, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import './main-a14f7ca0.mjs';
import './colors-5bbb644a.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const supabase = useSupabaseClient();
    const $route = useRoute();
    const fotopath = ref("");
    const desc = ref("");
    const title = ref("");
    const loading = ref(false);
    const updateActivity = async () => {
      loading.value = true;
      if (fotopath.value) {
        const { data, error } = await supabase.from("activity").update({ image: fotopath.value, title: title.value, desc: desc.value }).eq("id", $route.params.id);
        if (error) {
          console.log(error);
        }
        loading.value = false;
      } else {
        const { data, error } = await supabase.from("activity").update({ title: title.value, desc: desc.value }).eq("id", $route.params.id);
        if (error) {
          console.log(error);
        }
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_CardBox = __nuxt_component_3;
      const _component_FormField = __nuxt_component_4;
      const _component_FotoActivity = __nuxt_component_6;
      const _component_FormControl = __nuxt_component_5;
      const _component_BaseButtons = __nuxt_component_6$1;
      const _component_BaseButton = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(loading)) {
              _push2(`<div class="flex justify-center items-center h-screen"${_scopeId}><div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_CardBox, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-white rounded-lg shadow-md p-6"${_scopeId2}><div class="grid grid-cols-2 gap-4 mb-6"${_scopeId2}><div${_scopeId2}><img${ssrRenderAttr("src", unref(fotopath))} alt=""${_scopeId2}></div><div${_scopeId2}><h2 class="text-xl font-semibold"${_scopeId2}>Informasi Aktivitas</h2><div class="max-w-full"${_scopeId2}><h3 class="text-gray-800 dark:text-white font-semibold text-3xl my-2"${_scopeId2}>Nama Activity: <span${_scopeId2}>${ssrInterpolate(unref(title))}</span></h3><p class="text-gray-800 dark:text-white font-semibold text-md my-2 max-w-full break-words"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(unref(desc))}</span></p></div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-white rounded-lg shadow-md p-6" }, [
                      createVNode("div", { class: "grid grid-cols-2 gap-4 mb-6" }, [
                        createVNode("div", null, [
                          createVNode("img", {
                            src: unref(fotopath),
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", null, [
                          createVNode("h2", { class: "text-xl font-semibold" }, "Informasi Aktivitas"),
                          createVNode("div", { class: "max-w-full" }, [
                            createVNode("h3", { class: "text-gray-800 dark:text-white font-semibold text-3xl my-2" }, [
                              createTextVNode("Nama Activity: "),
                              createVNode("span", null, toDisplayString(unref(title)), 1)
                            ]),
                            createVNode("p", { class: "text-gray-800 dark:text-white font-semibold text-md my-2 max-w-full break-words" }, [
                              createVNode("span", null, toDisplayString(unref(desc)), 1)
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<form method="post"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CardBox, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormField, {
                    label: "New Profile",
                    help: "Max 500kb"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FotoActivity, { "model:path": "fotopath" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FotoActivity, { "model:path": "fotopath" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, {
                    label: "title",
                    help: "Masukan Title baru"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormControl, {
                          modelValue: unref(title),
                          "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                          icon: _ctx.mdiAccount,
                          name: "nama",
                          required: "",
                          autocomplete: "nama"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormControl, {
                            modelValue: unref(title),
                            "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                            icon: _ctx.mdiAccount,
                            name: "nama",
                            required: "",
                            autocomplete: "nama"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, {
                    label: "desc",
                    help: "Masukan desc baru"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormControl, {
                          modelValue: unref(desc),
                          "onUpdate:modelValue": ($event) => isRef(desc) ? desc.value = $event : null,
                          icon: _ctx.mdiMail,
                          type: "text",
                          name: "desc",
                          required: "",
                          autocomplete: "desc"
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseButtons, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button type="submit" class="py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"${_scopeId3}>Update</button>`);
                        _push4(ssrRenderComponent(_component_BaseButton, {
                          color: "info",
                          label: "Options",
                          outline: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("button", {
                            type: "submit",
                            class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                          }, "Update"),
                          createVNode(_component_BaseButton, {
                            color: "info",
                            label: "Options",
                            outline: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormField, {
                      label: "New Profile",
                      help: "Max 500kb"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_FotoActivity, { "model:path": "fotopath" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormField, {
                      label: "title",
                      help: "Masukan Title baru"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_FormControl, {
                          modelValue: unref(title),
                          "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                          icon: _ctx.mdiAccount,
                          name: "nama",
                          required: "",
                          autocomplete: "nama"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormField, {
                      label: "desc",
                      help: "Masukan desc baru"
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
                    }),
                    createVNode(_component_BaseButtons, null, {
                      default: withCtx(() => [
                        createVNode("button", {
                          type: "submit",
                          class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                        }, "Update"),
                        createVNode(_component_BaseButton, {
                          color: "info",
                          label: "Options",
                          outline: ""
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              unref(loading) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex justify-center items-center h-screen"
              }, [
                createVNode("div", { class: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" })
              ])) : createCommentVNode("", true),
              createVNode(_component_CardBox, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-white rounded-lg shadow-md p-6" }, [
                    createVNode("div", { class: "grid grid-cols-2 gap-4 mb-6" }, [
                      createVNode("div", null, [
                        createVNode("img", {
                          src: unref(fotopath),
                          alt: ""
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", null, [
                        createVNode("h2", { class: "text-xl font-semibold" }, "Informasi Aktivitas"),
                        createVNode("div", { class: "max-w-full" }, [
                          createVNode("h3", { class: "text-gray-800 dark:text-white font-semibold text-3xl my-2" }, [
                            createTextVNode("Nama Activity: "),
                            createVNode("span", null, toDisplayString(unref(title)), 1)
                          ]),
                          createVNode("p", { class: "text-gray-800 dark:text-white font-semibold text-md my-2 max-w-full break-words" }, [
                            createVNode("span", null, toDisplayString(unref(desc)), 1)
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode("form", {
                method: "post",
                onSubmit: withModifiers(updateActivity, ["prevent"])
              }, [
                createVNode(_component_CardBox, null, {
                  default: withCtx(() => [
                    createVNode(_component_FormField, {
                      label: "New Profile",
                      help: "Max 500kb"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_FotoActivity, { "model:path": "fotopath" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormField, {
                      label: "title",
                      help: "Masukan Title baru"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_FormControl, {
                          modelValue: unref(title),
                          "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                          icon: _ctx.mdiAccount,
                          name: "nama",
                          required: "",
                          autocomplete: "nama"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormField, {
                      label: "desc",
                      help: "Masukan desc baru"
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
                    }),
                    createVNode(_component_BaseButtons, null, {
                      default: withCtx(() => [
                        createVNode("button", {
                          type: "submit",
                          class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                        }, "Update"),
                        createVNode(_component_BaseButton, {
                          color: "info",
                          label: "Options",
                          outline: ""
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/activity/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-9869cf69.mjs.map
