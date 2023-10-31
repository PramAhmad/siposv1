import { d as useSupabaseClient, n as navigateTo, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './SectionTitleLineWithButton-bad61ad5.mjs';
import { _ as __nuxt_component_3 } from './CardBox-78ae3f19.mjs';
import { _ as __nuxt_component_4, a as __nuxt_component_5 } from './FormControl-ab424399.mjs';
import { _ as __nuxt_component_6 } from './FotoActivity-c761c099.mjs';
import { _ as __nuxt_component_6$1 } from './BaseButtons-c51a2c2b.mjs';
import { _ as __nuxt_component_7 } from './BaseButton-547d4d10.mjs';
import { ref, mergeProps, withCtx, unref, isRef, createVNode, withModifiers, createCommentVNode, useSSRContext } from 'vue';
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
    const urlfoto = ref("");
    const title = ref("");
    const desc = ref("");
    const alert = ref(false);
    const supabase = useSupabaseClient();
    const sendToDiscord = async (message) => {
      const discordWebhookURL = "https://discord.com/api/webhooks/1153007344276488344/Wdtaw5NDrDGNwc1XRwUcMm_EZFTGvQ2EpiVpIg2lOtbS5fedm3W8EwCplBr1AhgxjOQK";
      const data = {
        content: message
      };
      try {
        const response = await fetch(discordWebhookURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        if (response.ok) {
          console.log("Pesan berhasil dikirim ke Discord");
        } else {
          console.error("Gagal mengirim pesan ke Discord");
        }
      } catch (error) {
        console.error("Gagal mengirim pesan ke Discord:", error);
      }
    };
    const submit = async () => {
      alert.value = false;
      const { data, error } = await supabase.from("activity").insert({
        title: title.value,
        desc: desc.value,
        image: urlfoto.value
      });
      alert.value = true;
      if (error) {
        console.log(error);
      } else {
        const messageToDiscord = `**${title.value}**

${desc.value}

${urlfoto.value}`;
        sendToDiscord(messageToDiscord);
        navigateTo("/admin/activity");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionMain = __nuxt_component_1;
      const _component_SectionTitleLineWithButton = __nuxt_component_2;
      const _component_CardBox = __nuxt_component_3;
      const _component_FormField = __nuxt_component_4;
      const _component_FormControl = __nuxt_component_5;
      const _component_FotoActivity = __nuxt_component_6;
      const _component_BaseButtons = __nuxt_component_6$1;
      const _component_BaseButton = __nuxt_component_7;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "authenticated" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                    icon: _ctx.mdiBallotOutline,
                    title: "Tambah Activity",
                    main: ""
                  }, null, _parent3, _scopeId2));
                  {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_CardBox, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<form${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_FormField, { label: "title" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: unref(title),
                                "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                                placeholder: "Input Title",
                                icon: _ctx.mdiAccount
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(title),
                                  "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                                  placeholder: "Input Title",
                                  icon: _ctx.mdiAccount
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "Desc",
                          help: "Your Desc "
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: unref(desc),
                                "onUpdate:modelValue": ($event) => isRef(desc) ? desc.value = $event : null,
                                type: "textarea",
                                placeholder: "Hos its it going?"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(desc),
                                  "onUpdate:modelValue": ($event) => isRef(desc) ? desc.value = $event : null,
                                  type: "textarea",
                                  placeholder: "Hos its it going?"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FotoActivity, {
                          path: unref(urlfoto),
                          "onUpdate:path": ($event) => isRef(urlfoto) ? urlfoto.value = $event : null
                        }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BaseButtons, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button type="submit" class="py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"${_scopeId4}>Tambah</button>`);
                              _push5(ssrRenderComponent(_component_BaseButton, {
                                type: "reset",
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
                                  type: "reset",
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
                            createVNode(_component_FormField, { label: "title" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(title),
                                  "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                                  placeholder: "Input Title",
                                  icon: _ctx.mdiAccount
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormField, {
                              label: "Desc",
                              help: "Your Desc "
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(desc),
                                  "onUpdate:modelValue": ($event) => isRef(desc) ? desc.value = $event : null,
                                  type: "textarea",
                                  placeholder: "Hos its it going?"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FotoActivity, {
                              path: unref(urlfoto),
                              "onUpdate:path": ($event) => isRef(urlfoto) ? urlfoto.value = $event : null
                            }, null, 8, ["path", "onUpdate:path"]),
                            createVNode("div", null, [
                              createVNode(_component_BaseButtons, null, {
                                default: withCtx(() => [
                                  createVNode("button", {
                                    type: "submit",
                                    class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                                  }, "Tambah"),
                                  createVNode(_component_BaseButton, {
                                    type: "reset",
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
                      icon: _ctx.mdiBallotOutline,
                      title: "Tambah Activity",
                      main: ""
                    }, null, 8, ["icon"]),
                    createCommentVNode("", true),
                    createVNode(_component_CardBox, null, {
                      default: withCtx(() => [
                        createVNode("form", {
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
                          createVNode(_component_FormField, { label: "title" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(title),
                                "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                                placeholder: "Input Title",
                                icon: _ctx.mdiAccount
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "Desc",
                            help: "Your Desc "
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(desc),
                                "onUpdate:modelValue": ($event) => isRef(desc) ? desc.value = $event : null,
                                type: "textarea",
                                placeholder: "Hos its it going?"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FotoActivity, {
                            path: unref(urlfoto),
                            "onUpdate:path": ($event) => isRef(urlfoto) ? urlfoto.value = $event : null
                          }, null, 8, ["path", "onUpdate:path"]),
                          createVNode("div", null, [
                            createVNode(_component_BaseButtons, null, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  type: "submit",
                                  class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                                }, "Tambah"),
                                createVNode(_component_BaseButton, {
                                  type: "reset",
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
                    icon: _ctx.mdiBallotOutline,
                    title: "Tambah Activity",
                    main: ""
                  }, null, 8, ["icon"]),
                  createCommentVNode("", true),
                  createVNode(_component_CardBox, null, {
                    default: withCtx(() => [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode(_component_FormField, { label: "title" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: unref(title),
                              "onUpdate:modelValue": ($event) => isRef(title) ? title.value = $event : null,
                              placeholder: "Input Title",
                              icon: _ctx.mdiAccount
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FormField, {
                          label: "Desc",
                          help: "Your Desc "
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: unref(desc),
                              "onUpdate:modelValue": ($event) => isRef(desc) ? desc.value = $event : null,
                              type: "textarea",
                              placeholder: "Hos its it going?"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_FotoActivity, {
                          path: unref(urlfoto),
                          "onUpdate:path": ($event) => isRef(urlfoto) ? urlfoto.value = $event : null
                        }, null, 8, ["path", "onUpdate:path"]),
                        createVNode("div", null, [
                          createVNode(_component_BaseButtons, null, {
                            default: withCtx(() => [
                              createVNode("button", {
                                type: "submit",
                                class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                              }, "Tambah"),
                              createVNode(_component_BaseButton, {
                                type: "reset",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/activity/tambah.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tambah-7fbc3a41.mjs.map
