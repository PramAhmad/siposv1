import { f as useSupabaseUser, d as useSupabaseClient, e as useRoute, g as useRouter, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './SectionTitleLineWithButton-bad61ad5.mjs';
import { _ as __nuxt_component_3 } from './CardBox-78ae3f19.mjs';
import { _ as __nuxt_component_4 } from './NotificationBarInCard-e25b846b.mjs';
import { _ as __nuxt_component_4$1, a as __nuxt_component_5 } from './FormControl-ab424399.mjs';
import { _ as __nuxt_component_6 } from './BaseButtons-c51a2c2b.mjs';
import { _ as __nuxt_component_7 } from './BaseButton-547d4d10.mjs';
import { B as BaseIcon } from './colors-5bbb644a.mjs';
import { ref, mergeProps, withCtx, unref, isRef, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, withModifiers, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import './main-a14f7ca0.mjs';

const _sfc_main = {
  __name: "tambah",
  __ssrInlineRender: true,
  setup(__props) {
    const mahasiswa = ref("");
    const total_bayar = ref("");
    const user = useSupabaseUser();
    const alert = ref(false);
    const supabase = useSupabaseClient();
    const $route = useRoute();
    const room = ref([]);
    const filter = ref([]);
    const filterMahasiswa = async (e) => {
      const { data, error } = await supabase.from("mahasiswa").select("id,nama,kelas").ilike("nama", "%" + e.target.value + "%");
      filter.value = data;
      if (error) {
        console.error(error);
      }
    };
    const sendToDiscord = async (message) => {
      const discordWebhookURL = "https://discordapp.com/api/webhooks/1157344823666294784/5l_evA92FI2JNTOHlyUhj-zr_xMLyhaLAmII8hPOMhubBErwUfiwqLTRJON72sISLn4W";
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
    const addPayment = async () => {
      alert.value = false;
      try {
        const { error } = await supabase.from("payment").insert({
          mahasiswa_id: filter.value[0].id,
          payment_id: $route.params.room,
          total_bayar: total_bayar.value,
          add_by: user.value.id
        });
        if (error) {
          alert(error.message);
        } else {
          const messageToDiscord = `
      \`\`\`md
  Terimakasih sudah bayar

 Informasi Pembayaran:
  -Nama: ${filter.value[0].nama}
  -Total Bayar: Rp ${total_bayar.value}
  -Tanggal Bayar: ${( new Date()).toLocaleDateString()} 
  -Nama Pembayaran: ${room.value[0].nama_pembayaran}
  \`\`\`
  `;
          mahasiswa.value = "";
          total_bayar.value = "";
          sendToDiscord(messageToDiscord);
          alert.value = true;
        }
      } catch (error) {
        console.error(error);
      }
    };
    const reset = () => {
      mahasiswa.value = "";
      total_bayar.value = "";
    };
    const router = useRouter();
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
      const _component_BaseIcon = BaseIcon;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "authenticated" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(room), (r) => {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                      icon: _ctx.mdiTableBorder,
                      title: `payment ` + r.nama_pembayaran,
                      main: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                  if (unref(alert)) {
                    _push3(`<div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert"${_scopeId2}><p class="font-bold"${_scopeId2}>Transaksi</p><p class="text-sm"${_scopeId2}>Transaksi Berhasil</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_CardBox, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NotificationBarInCard, {
                          color: "info",
                          icon: _ctx.mdiMonitorCellphone,
                          class: "mb-6"
                        }, null, _parent4, _scopeId3));
                        _push4(`<form${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_FormField, { label: "Masukan Nama dan jumlah" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: unref(mahasiswa),
                                "onUpdate:modelValue": ($event) => isRef(mahasiswa) ? mahasiswa.value = $event : null,
                                icon: _ctx.mdiMail,
                                placeholder: "Nama Mahasiswa",
                                onInput: filterMahasiswa
                              }, null, _parent5, _scopeId4));
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(filter), (f) => {
                                _push5(`<div class="flex items-center"${_scopeId4}><input type="radio"${ssrRenderAttr("value", f.id)} class="mr-2"${_scopeId4}><label${_scopeId4}>${ssrInterpolate(f.nama)} - ${ssrInterpolate(f.kelas)}</label></div>`);
                              });
                              _push5(`<!--]-->`);
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: unref(total_bayar),
                                "onUpdate:modelValue": ($event) => isRef(total_bayar) ? total_bayar.value = $event : null,
                                icon: _ctx.mdiMail,
                                placeholder: "jumlah bayar"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(mahasiswa),
                                  "onUpdate:modelValue": ($event) => isRef(mahasiswa) ? mahasiswa.value = $event : null,
                                  icon: _ctx.mdiMail,
                                  placeholder: "Nama Mahasiswa",
                                  onInput: filterMahasiswa
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"]),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(filter), (f) => {
                                  return openBlock(), createBlock("div", {
                                    key: f.id,
                                    class: "flex items-center"
                                  }, [
                                    createVNode("input", {
                                      type: "radio",
                                      value: f.id,
                                      class: "mr-2"
                                    }, null, 8, ["value"]),
                                    createVNode("label", null, toDisplayString(f.nama) + " - " + toDisplayString(f.kelas), 1)
                                  ]);
                                }), 128)),
                                createVNode(_component_FormControl, {
                                  modelValue: unref(total_bayar),
                                  "onUpdate:modelValue": ($event) => isRef(total_bayar) ? total_bayar.value = $event : null,
                                  icon: _ctx.mdiMail,
                                  placeholder: "jumlah bayar"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
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
                          createVNode(_component_NotificationBarInCard, {
                            color: "info",
                            icon: _ctx.mdiMonitorCellphone,
                            class: "mb-6"
                          }, null, 8, ["icon"]),
                          createVNode("form", {
                            onSubmit: withModifiers(addPayment, ["prevent"])
                          }, [
                            createVNode(_component_FormField, { label: "Masukan Nama dan jumlah" }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(mahasiswa),
                                  "onUpdate:modelValue": ($event) => isRef(mahasiswa) ? mahasiswa.value = $event : null,
                                  icon: _ctx.mdiMail,
                                  placeholder: "Nama Mahasiswa",
                                  onInput: filterMahasiswa
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"]),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(filter), (f) => {
                                  return openBlock(), createBlock("div", {
                                    key: f.id,
                                    class: "flex items-center"
                                  }, [
                                    createVNode("input", {
                                      type: "radio",
                                      value: f.id,
                                      class: "mr-2"
                                    }, null, 8, ["value"]),
                                    createVNode("label", null, toDisplayString(f.nama) + " - " + toDisplayString(f.kelas), 1)
                                  ]);
                                }), 128)),
                                createVNode(_component_FormControl, {
                                  modelValue: unref(total_bayar),
                                  "onUpdate:modelValue": ($event) => isRef(total_bayar) ? total_bayar.value = $event : null,
                                  icon: _ctx.mdiMail,
                                  placeholder: "jumlah bayar"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(room), (r) => {
                      return openBlock(), createBlock("div", {
                        key: r.id
                      }, [
                        createVNode(_component_SectionTitleLineWithButton, {
                          icon: _ctx.mdiTableBorder,
                          title: `payment ` + r.nama_pembayaran,
                          main: ""
                        }, null, 8, ["icon", "title"])
                      ]);
                    }), 128)),
                    unref(alert) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",
                      role: "alert"
                    }, [
                      createVNode("p", { class: "font-bold" }, "Transaksi"),
                      createVNode("p", { class: "text-sm" }, "Transaksi Berhasil")
                    ])) : createCommentVNode("", true),
                    createVNode(_component_CardBox, null, {
                      default: withCtx(() => [
                        createVNode(_component_NotificationBarInCard, {
                          color: "info",
                          icon: _ctx.mdiMonitorCellphone,
                          class: "mb-6"
                        }, null, 8, ["icon"]),
                        createVNode("form", {
                          onSubmit: withModifiers(addPayment, ["prevent"])
                        }, [
                          createVNode(_component_FormField, { label: "Masukan Nama dan jumlah" }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(mahasiswa),
                                "onUpdate:modelValue": ($event) => isRef(mahasiswa) ? mahasiswa.value = $event : null,
                                icon: _ctx.mdiMail,
                                placeholder: "Nama Mahasiswa",
                                onInput: filterMahasiswa
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"]),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(filter), (f) => {
                                return openBlock(), createBlock("div", {
                                  key: f.id,
                                  class: "flex items-center"
                                }, [
                                  createVNode("input", {
                                    type: "radio",
                                    value: f.id,
                                    class: "mr-2"
                                  }, null, 8, ["value"]),
                                  createVNode("label", null, toDisplayString(f.nama) + " - " + toDisplayString(f.kelas), 1)
                                ]);
                              }), 128)),
                              createVNode(_component_FormControl, {
                                modelValue: unref(total_bayar),
                                "onUpdate:modelValue": ($event) => isRef(total_bayar) ? total_bayar.value = $event : null,
                                icon: _ctx.mdiMail,
                                placeholder: "jumlah bayar"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
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
            _push2(`<div class="fixed bottom-4 right-4 z-50"${_scopeId}><button class="flex items-center justify-center w-10 h-10 rounded-full text-white bg-blue-600 dark:bg-blue-600 shadow-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIcon, {
              path: _ctx.mdiArrowLeft,
              size: "24px",
              color: "white"
            }, null, _parent2, _scopeId));
            _push2(`</button></div>`);
          } else {
            return [
              createVNode(_component_SectionMain, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(room), (r) => {
                    return openBlock(), createBlock("div", {
                      key: r.id
                    }, [
                      createVNode(_component_SectionTitleLineWithButton, {
                        icon: _ctx.mdiTableBorder,
                        title: `payment ` + r.nama_pembayaran,
                        main: ""
                      }, null, 8, ["icon", "title"])
                    ]);
                  }), 128)),
                  unref(alert) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",
                    role: "alert"
                  }, [
                    createVNode("p", { class: "font-bold" }, "Transaksi"),
                    createVNode("p", { class: "text-sm" }, "Transaksi Berhasil")
                  ])) : createCommentVNode("", true),
                  createVNode(_component_CardBox, null, {
                    default: withCtx(() => [
                      createVNode(_component_NotificationBarInCard, {
                        color: "info",
                        icon: _ctx.mdiMonitorCellphone,
                        class: "mb-6"
                      }, null, 8, ["icon"]),
                      createVNode("form", {
                        onSubmit: withModifiers(addPayment, ["prevent"])
                      }, [
                        createVNode(_component_FormField, { label: "Masukan Nama dan jumlah" }, {
                          default: withCtx(() => [
                            createVNode(_component_FormControl, {
                              modelValue: unref(mahasiswa),
                              "onUpdate:modelValue": ($event) => isRef(mahasiswa) ? mahasiswa.value = $event : null,
                              icon: _ctx.mdiMail,
                              placeholder: "Nama Mahasiswa",
                              onInput: filterMahasiswa
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(filter), (f) => {
                              return openBlock(), createBlock("div", {
                                key: f.id,
                                class: "flex items-center"
                              }, [
                                createVNode("input", {
                                  type: "radio",
                                  value: f.id,
                                  class: "mr-2"
                                }, null, 8, ["value"]),
                                createVNode("label", null, toDisplayString(f.nama) + " - " + toDisplayString(f.kelas), 1)
                              ]);
                            }), 128)),
                            createVNode(_component_FormControl, {
                              modelValue: unref(total_bayar),
                              "onUpdate:modelValue": ($event) => isRef(total_bayar) ? total_bayar.value = $event : null,
                              icon: _ctx.mdiMail,
                              placeholder: "jumlah bayar"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
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
              }),
              createVNode("div", { class: "fixed bottom-4 right-4 z-50" }, [
                createVNode("button", {
                  onClick: ($event) => unref(router).back(),
                  class: "flex items-center justify-center w-10 h-10 rounded-full text-white bg-blue-600 dark:bg-blue-600 shadow-lg"
                }, [
                  createVNode(_component_BaseIcon, {
                    path: _ctx.mdiArrowLeft,
                    size: "24px",
                    color: "white"
                  }, null, 8, ["path"])
                ], 8, ["onClick"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/payment/[room]/tambah.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tambah-a9d80afa.mjs.map
