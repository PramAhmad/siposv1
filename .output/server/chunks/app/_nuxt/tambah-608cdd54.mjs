import { d as useSupabaseClient, n as navigateTo, a as __nuxt_component_0 } from '../server.mjs';
import { ref, mergeProps, withCtx, unref, isRef, createVNode, withDirectives, vModelSelect, withModifiers, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { mdiBallotOutline, mdiAccount } from '@mdi/js';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './SectionTitleLineWithButton-bad61ad5.mjs';
import { _ as __nuxt_component_3 } from './CardBox-78ae3f19.mjs';
import { _ as __nuxt_component_4, a as __nuxt_component_5 } from './FormControl-ab424399.mjs';
import { _ as __nuxt_component_7 } from './BaseButton-547d4d10.mjs';
import { _ as __nuxt_component_6 } from './BaseButtons-c51a2c2b.mjs';
import { F as FotoMahasiswa } from './FotoMahasiswa-edc084cf.mjs';
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
import './main-a14f7ca0.mjs';

const _sfc_main = {
  __name: "tambah",
  __ssrInlineRender: true,
  setup(__props) {
    const fotopath = ref();
    const urlfoto = ref("");
    const name = ref("");
    const npm = ref("");
    const kelas = ref("");
    const alert = ref(false);
    const supabase = useSupabaseClient();
    const sendToDiscord = async (message) => {
      const discordWebhookURL = "https://discord.com/api/webhooks/1152545570272059478/Q6imkAWcj5LQo0j0s19kmyvlCx4B_SvcJc1oaiOGq9zNrGtEdGzuyX1J22MdF2VS0t1_";
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
      const { data, error } = await supabase.from("mahasiswa").insert({
        nama: name.value,
        npm: npm.value,
        kelas: kelas.value,
        foto: urlfoto.value
      });
      alert.value = true;
      if (error) {
        console.log(error);
      } else {
        const messageToDiscord = `Data mahasiswa baru ditambahkan:
Nama: ${name.value}
NPM: ${npm.value}
Kelas: ${kelas.value}
Foto: ${urlfoto.value}`;
        sendToDiscord(messageToDiscord);
        navigateTo("/admin/mahasiswa");
      }
    };
    const reset = async () => {
      name.value = "";
      npm.value = "";
      kelas.value = "";
      fotopath.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "authenticated" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(__nuxt_component_1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(__nuxt_component_2, {
                    icon: unref(mdiBallotOutline),
                    title: "Tambah Mahasiswa",
                    main: ""
                  }, null, _parent3, _scopeId2));
                  {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(__nuxt_component_3, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<form${_scopeId3}>`);
                        _push4(ssrRenderComponent(__nuxt_component_4, { label: "Nama dan Kelas" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(__nuxt_component_5, {
                                modelValue: unref(name),
                                "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                placeholder: "Your Name",
                                icon: unref(mdiAccount)
                              }, null, _parent5, _scopeId4));
                              _push5(`<select class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"${_scopeId4}><option value="a"${_scopeId4}>A</option><option value="b"${_scopeId4}>B</option><option value="c"${_scopeId4}>C</option></select>`);
                            } else {
                              return [
                                createVNode(__nuxt_component_5, {
                                  modelValue: unref(name),
                                  "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                  placeholder: "Your Name",
                                  icon: unref(mdiAccount)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"]),
                                withDirectives(createVNode("select", {
                                  "onUpdate:modelValue": ($event) => isRef(kelas) ? kelas.value = $event : null,
                                  class: "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                                }, [
                                  createVNode("option", { value: "a" }, "A"),
                                  createVNode("option", { value: "b" }, "B"),
                                  createVNode("option", { value: "c" }, "C")
                                ], 8, ["onUpdate:modelValue"]), [
                                  [vModelSelect, unref(kelas)]
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(__nuxt_component_4, {
                          label: "With help line",
                          help: "Do not enter the leading zero"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(__nuxt_component_5, {
                                modelValue: unref(npm),
                                "onUpdate:modelValue": ($event) => isRef(npm) ? npm.value = $event : null,
                                type: "tel",
                                placeholder: "Your npm number"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(__nuxt_component_5, {
                                  modelValue: unref(npm),
                                  "onUpdate:modelValue": ($event) => isRef(npm) ? npm.value = $event : null,
                                  type: "tel",
                                  placeholder: "Your npm number"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(FotoMahasiswa, {
                          path: unref(urlfoto),
                          "onUpdate:path": ($event) => isRef(urlfoto) ? urlfoto.value = $event : null
                        }, null, _parent4, _scopeId3));
                        _push4(`<div${_scopeId3}>`);
                        _push4(ssrRenderComponent(__nuxt_component_6, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button type="submit" class="py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"${_scopeId4}>Tambah</button>`);
                              _push5(ssrRenderComponent(__nuxt_component_7, {
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
                                createVNode(__nuxt_component_7, {
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
                            createVNode(__nuxt_component_4, { label: "Nama dan Kelas" }, {
                              default: withCtx(() => [
                                createVNode(__nuxt_component_5, {
                                  modelValue: unref(name),
                                  "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                  placeholder: "Your Name",
                                  icon: unref(mdiAccount)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"]),
                                withDirectives(createVNode("select", {
                                  "onUpdate:modelValue": ($event) => isRef(kelas) ? kelas.value = $event : null,
                                  class: "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                                }, [
                                  createVNode("option", { value: "a" }, "A"),
                                  createVNode("option", { value: "b" }, "B"),
                                  createVNode("option", { value: "c" }, "C")
                                ], 8, ["onUpdate:modelValue"]), [
                                  [vModelSelect, unref(kelas)]
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(__nuxt_component_4, {
                              label: "With help line",
                              help: "Do not enter the leading zero"
                            }, {
                              default: withCtx(() => [
                                createVNode(__nuxt_component_5, {
                                  modelValue: unref(npm),
                                  "onUpdate:modelValue": ($event) => isRef(npm) ? npm.value = $event : null,
                                  type: "tel",
                                  placeholder: "Your npm number"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(FotoMahasiswa, {
                              path: unref(urlfoto),
                              "onUpdate:path": ($event) => isRef(urlfoto) ? urlfoto.value = $event : null
                            }, null, 8, ["path", "onUpdate:path"]),
                            createVNode("div", null, [
                              createVNode(__nuxt_component_6, null, {
                                default: withCtx(() => [
                                  createVNode("button", {
                                    type: "submit",
                                    class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                                  }, "Tambah"),
                                  createVNode(__nuxt_component_7, {
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
                    createVNode(__nuxt_component_2, {
                      icon: unref(mdiBallotOutline),
                      title: "Tambah Mahasiswa",
                      main: ""
                    }, null, 8, ["icon"]),
                    createCommentVNode("", true),
                    createVNode(__nuxt_component_3, null, {
                      default: withCtx(() => [
                        createVNode("form", {
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
                          createVNode(__nuxt_component_4, { label: "Nama dan Kelas" }, {
                            default: withCtx(() => [
                              createVNode(__nuxt_component_5, {
                                modelValue: unref(name),
                                "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                                placeholder: "Your Name",
                                icon: unref(mdiAccount)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"]),
                              withDirectives(createVNode("select", {
                                "onUpdate:modelValue": ($event) => isRef(kelas) ? kelas.value = $event : null,
                                class: "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                              }, [
                                createVNode("option", { value: "a" }, "A"),
                                createVNode("option", { value: "b" }, "B"),
                                createVNode("option", { value: "c" }, "C")
                              ], 8, ["onUpdate:modelValue"]), [
                                [vModelSelect, unref(kelas)]
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(__nuxt_component_4, {
                            label: "With help line",
                            help: "Do not enter the leading zero"
                          }, {
                            default: withCtx(() => [
                              createVNode(__nuxt_component_5, {
                                modelValue: unref(npm),
                                "onUpdate:modelValue": ($event) => isRef(npm) ? npm.value = $event : null,
                                type: "tel",
                                placeholder: "Your npm number"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(FotoMahasiswa, {
                            path: unref(urlfoto),
                            "onUpdate:path": ($event) => isRef(urlfoto) ? urlfoto.value = $event : null
                          }, null, 8, ["path", "onUpdate:path"]),
                          createVNode("div", null, [
                            createVNode(__nuxt_component_6, null, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  type: "submit",
                                  class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                                }, "Tambah"),
                                createVNode(__nuxt_component_7, {
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
              createVNode(__nuxt_component_1, null, {
                default: withCtx(() => [
                  createVNode(__nuxt_component_2, {
                    icon: unref(mdiBallotOutline),
                    title: "Tambah Mahasiswa",
                    main: ""
                  }, null, 8, ["icon"]),
                  createCommentVNode("", true),
                  createVNode(__nuxt_component_3, null, {
                    default: withCtx(() => [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode(__nuxt_component_4, { label: "Nama dan Kelas" }, {
                          default: withCtx(() => [
                            createVNode(__nuxt_component_5, {
                              modelValue: unref(name),
                              "onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
                              placeholder: "Your Name",
                              icon: unref(mdiAccount)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"]),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => isRef(kelas) ? kelas.value = $event : null,
                              class: "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                            }, [
                              createVNode("option", { value: "a" }, "A"),
                              createVNode("option", { value: "b" }, "B"),
                              createVNode("option", { value: "c" }, "C")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(kelas)]
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(__nuxt_component_4, {
                          label: "With help line",
                          help: "Do not enter the leading zero"
                        }, {
                          default: withCtx(() => [
                            createVNode(__nuxt_component_5, {
                              modelValue: unref(npm),
                              "onUpdate:modelValue": ($event) => isRef(npm) ? npm.value = $event : null,
                              type: "tel",
                              placeholder: "Your npm number"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(FotoMahasiswa, {
                          path: unref(urlfoto),
                          "onUpdate:path": ($event) => isRef(urlfoto) ? urlfoto.value = $event : null
                        }, null, 8, ["path", "onUpdate:path"]),
                        createVNode("div", null, [
                          createVNode(__nuxt_component_6, null, {
                            default: withCtx(() => [
                              createVNode("button", {
                                type: "submit",
                                class: "py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"
                              }, "Tambah"),
                              createVNode(__nuxt_component_7, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/mahasiswa/tambah.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tambah-608cdd54.mjs.map
