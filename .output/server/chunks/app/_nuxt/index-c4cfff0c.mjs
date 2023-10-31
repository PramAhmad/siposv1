import { d as useSupabaseClient, e as useRoute, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './SectionTitleLineWithButton-bad61ad5.mjs';
import { _ as __nuxt_component_4 } from './NotificationBarInCard-e25b846b.mjs';
import { _ as __nuxt_component_3 } from './MahasiswaCard-3113de64.mjs';
import { _ as __nuxt_component_3$1 } from './CardBox-78ae3f19.mjs';
import { _ as __nuxt_component_4$1, a as __nuxt_component_5 } from './FormControl-ab424399.mjs';
import { F as FotoMahasiswa } from './FotoMahasiswa-edc084cf.mjs';
import { _ as __nuxt_component_6 } from './BaseButtons-c51a2c2b.mjs';
import { _ as __nuxt_component_7 } from './BaseButton-547d4d10.mjs';
import { B as BaseDivider } from './BaseDivider-52c813b9.mjs';
import { ref, computed, mergeProps, withCtx, unref, createTextVNode, isRef, createVNode, withDirectives, vModelSelect, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { mdiAccount, mdiMail } from '@mdi/js';
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
import './BaseLevel-555d04eb.mjs';
import './PillTag-0e71f526.mjs';
import './main-a14f7ca0.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const url = ref("https://wsgwhdbimgdepfxktxlo.supabase.co/storage/v1/object/public/mahasiswa/");
    const fotopath = ref();
    const nama = ref();
    const npm = ref();
    const kelas = ref();
    const supabase = useSupabaseClient();
    const payment = ref([]);
    const $route = useRoute();
    ref(false);
    const alert = ref(false);
    const updateMahasiswa = async () => {
      alert.value = false;
      if (fotopath.value) {
        const { data, error } = await supabase.from("mahasiswa").update({
          nama: nama.value,
          npm: npm.value,
          kelas: kelas.value
        }).eq("id", $route.params.id);
        if (error) {
          console.log(error);
        } else {
          alert.value = true;
          getSingleMahasiswa();
        }
      } else {
        const { data, error } = await supabase.from("mahasiswa").update({
          nama: nama.value,
          npm: npm.value,
          kelas: kelas.value,
          foto: url.value + fotopath.value
        }).eq("id", $route.params.id);
        if (error) {
          console.log(error);
        } else {
          alert.value = true;
          getSingleMahasiswa();
        }
      }
    };
    const getSingleMahasiswa = async () => {
      const { data, error } = await supabase.from("mahasiswa").select().eq("id", $route.params.id);
      if (data[0]) {
        const mahasiswaData = data[0];
        nama.value = mahasiswaData.nama || "";
        npm.value = mahasiswaData.npm || "";
        kelas.value = mahasiswaData.kelas || "";
        fotopath.value = mahasiswaData.foto || "";
      }
      if (error) {
        console.log(error);
      }
    };
    const calculateTotalPaymentPerNamaPembayaran = computed(() => {
      const totalPerNamaPembayaran = {};
      for (const data of payment.value) {
        const namaPembayaran = data.payment_id.nama_pembayaran;
        const total = data.total_bayar;
        if (!totalPerNamaPembayaran[namaPembayaran]) {
          totalPerNamaPembayaran[namaPembayaran] = 0;
        }
        totalPerNamaPembayaran[namaPembayaran] += total;
      }
      return totalPerNamaPembayaran;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionMain = __nuxt_component_1;
      const _component_SectionTitleLineWithButton = __nuxt_component_2;
      const _component_NotificationBarInCard = __nuxt_component_4;
      const _component_MahasiswaCard = __nuxt_component_3;
      const _component_CardBox = __nuxt_component_3$1;
      const _component_FormField = __nuxt_component_4$1;
      const _component_FotoMahasiswa = FotoMahasiswa;
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
                    icon: unref(mdiAccount),
                    title: "Profile",
                    main: ""
                  }, null, _parent3, _scopeId2));
                  if (unref(alert)) {
                    _push3(ssrRenderComponent(_component_NotificationBarInCard, {
                      class: "mb-6",
                      type: "success"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Data berhasil di update `);
                        } else {
                          return [
                            createTextVNode(" Data berhasil di update ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MahasiswaCard, { class: "mb-6" }, null, _parent3, _scopeId2));
                  _push3(`<form method="post"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_CardBox, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "New Profile",
                          help: "Max 500kb"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FotoMahasiswa, {
                                path: unref(fotopath),
                                "onUpdate:path": ($event) => isRef(fotopath) ? fotopath.value = $event : null
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FotoMahasiswa, {
                                  path: unref(fotopath),
                                  "onUpdate:path": ($event) => isRef(fotopath) ? fotopath.value = $event : null
                                }, null, 8, ["path", "onUpdate:path"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_FormField, {
                          label: "nama",
                          help: "Masukan nama baru"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: unref(nama),
                                "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                                icon: unref(mdiAccount),
                                name: "nama",
                                required: "",
                                autocomplete: "nama"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(nama),
                                  "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                                  icon: unref(mdiAccount),
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
                          label: "NPM",
                          help: "Masukan NPM baru"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormControl, {
                                modelValue: unref(npm),
                                "onUpdate:modelValue": ($event) => isRef(npm) ? npm.value = $event : null,
                                icon: unref(mdiMail),
                                type: "number",
                                name: "npm",
                                required: "",
                                autocomplete: "npm"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(npm),
                                  "onUpdate:modelValue": ($event) => isRef(npm) ? npm.value = $event : null,
                                  icon: unref(mdiMail),
                                  type: "number",
                                  name: "npm",
                                  required: "",
                                  autocomplete: "npm"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<select class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"${_scopeId3}><option value="A"${_scopeId3}>A</option><option value="B"${_scopeId3}>B</option><option value="C"${_scopeId3}>C</option></select>`);
                        _push4(ssrRenderComponent(_component_BaseButtons, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button type="submit" class="py-2 px-5 bg-sky-600 rounded-md text-white hover:bg-sky-500"${_scopeId4}>Update</button>`);
                              _push5(ssrRenderComponent(_component_BaseButton, {
                                color: "info",
                                label: "Options",
                                outline: ""
                              }, null, _parent5, _scopeId4));
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormField, {
                            label: "New Profile",
                            help: "Max 500kb"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FotoMahasiswa, {
                                path: unref(fotopath),
                                "onUpdate:path": ($event) => isRef(fotopath) ? fotopath.value = $event : null
                              }, null, 8, ["path", "onUpdate:path"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "nama",
                            help: "Masukan nama baru"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(nama),
                                "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                                icon: unref(mdiAccount),
                                name: "nama",
                                required: "",
                                autocomplete: "nama"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "NPM",
                            help: "Masukan NPM baru"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(npm),
                                "onUpdate:modelValue": ($event) => isRef(npm) ? npm.value = $event : null,
                                icon: unref(mdiMail),
                                type: "number",
                                name: "npm",
                                required: "",
                                autocomplete: "npm"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => isRef(kelas) ? kelas.value = $event : null,
                            class: "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                          }, [
                            createVNode("option", { value: "A" }, "A"),
                            createVNode("option", { value: "B" }, "B"),
                            createVNode("option", { value: "C" }, "C")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(kelas)]
                          ]),
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
                  }, _parent3, _scopeId2));
                  _push3(`</form>`);
                  _push3(ssrRenderComponent(_component_BaseDivider, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                    icon: unref(mdiAccount),
                    main: "",
                    title: "Pembayaran "
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardBox, {
                    class: "mb-6",
                    "has-table": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mt-4"${_scopeId3}><strong${_scopeId3}>Total Pembayaran Yang Sudah Di Lakukan:</strong><ul class="mt-2 mb-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(calculateTotalPaymentPerNamaPembayaran), (total, namaPembayaran) => {
                          _push4(`<li class="text-gray-700 dark:text-white font-semibold py-1 list-disc ml-6"${_scopeId3}>${ssrInterpolate(namaPembayaran)}: <span class="text-blue-500"${_scopeId3}>Rp. ${ssrInterpolate(total)}</span></li>`);
                        });
                        _push4(`<!--]--></ul></div><table${_scopeId3}><thead${_scopeId3}><tr${_scopeId3}><th${_scopeId3}>No</th><th${_scopeId3}>Nama Pembayaran</th><th${_scopeId3}>Total bayar</th><th${_scopeId3}>Tanggal bayar</th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(payment), (data, i) => {
                          _push4(`<tr${_scopeId3}><td data-label="no"${_scopeId3}>${ssrInterpolate(i + 1)}</td><td data-label="Nama Pembayaran"${_scopeId3}>${ssrInterpolate(data.payment_id.nama_pembayaran)}</td><td data-label="Total Bayar"${_scopeId3}>Rp.${ssrInterpolate(data.total_bayar)}</td><td data-label="Tanggal Bayar"${_scopeId3}>${ssrInterpolate(data.tanggal_bayar)}</td></tr>`);
                        });
                        _push4(`<!--]--></tbody></table>`);
                      } else {
                        return [
                          createVNode("div", { class: "mt-4" }, [
                            createVNode("strong", null, "Total Pembayaran Yang Sudah Di Lakukan:"),
                            createVNode("ul", { class: "mt-2 mb-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(calculateTotalPaymentPerNamaPembayaran), (total, namaPembayaran) => {
                                return openBlock(), createBlock("li", {
                                  key: namaPembayaran,
                                  class: "text-gray-700 dark:text-white font-semibold py-1 list-disc ml-6"
                                }, [
                                  createTextVNode(toDisplayString(namaPembayaran) + ": ", 1),
                                  createVNode("span", { class: "text-blue-500" }, "Rp. " + toDisplayString(total), 1)
                                ]);
                              }), 128))
                            ])
                          ]),
                          createVNode("table", null, [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", null, "No"),
                                createVNode("th", null, "Nama Pembayaran"),
                                createVNode("th", null, "Total bayar"),
                                createVNode("th", null, "Tanggal bayar")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(payment), (data, i) => {
                                return openBlock(), createBlock("tr", {
                                  key: data.id
                                }, [
                                  createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                                  createVNode("td", { "data-label": "Nama Pembayaran" }, toDisplayString(data.payment_id.nama_pembayaran), 1),
                                  createVNode("td", { "data-label": "Total Bayar" }, "Rp." + toDisplayString(data.total_bayar), 1),
                                  createVNode("td", { "data-label": "Tanggal Bayar" }, toDisplayString(data.tanggal_bayar), 1)
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
                      icon: unref(mdiAccount),
                      title: "Profile",
                      main: ""
                    }, null, 8, ["icon"]),
                    unref(alert) ? (openBlock(), createBlock(_component_NotificationBarInCard, {
                      key: 0,
                      class: "mb-6",
                      type: "success"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Data berhasil di update ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2" }, [
                      createVNode(_component_MahasiswaCard, { class: "mb-6" }),
                      createVNode("form", {
                        method: "post",
                        onSubmit: withModifiers(updateMahasiswa, ["prevent"])
                      }, [
                        createVNode(_component_CardBox, null, {
                          default: withCtx(() => [
                            createVNode(_component_FormField, {
                              label: "New Profile",
                              help: "Max 500kb"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_FotoMahasiswa, {
                                  path: unref(fotopath),
                                  "onUpdate:path": ($event) => isRef(fotopath) ? fotopath.value = $event : null
                                }, null, 8, ["path", "onUpdate:path"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormField, {
                              label: "nama",
                              help: "Masukan nama baru"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(nama),
                                  "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                                  icon: unref(mdiAccount),
                                  name: "nama",
                                  required: "",
                                  autocomplete: "nama"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormField, {
                              label: "NPM",
                              help: "Masukan NPM baru"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_FormControl, {
                                  modelValue: unref(npm),
                                  "onUpdate:modelValue": ($event) => isRef(npm) ? npm.value = $event : null,
                                  icon: unref(mdiMail),
                                  type: "number",
                                  name: "npm",
                                  required: "",
                                  autocomplete: "npm"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ]),
                              _: 1
                            }),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => isRef(kelas) ? kelas.value = $event : null,
                              class: "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                            }, [
                              createVNode("option", { value: "A" }, "A"),
                              createVNode("option", { value: "B" }, "B"),
                              createVNode("option", { value: "C" }, "C")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(kelas)]
                            ]),
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
                      ], 40, ["onSubmit"]),
                      createVNode(_component_BaseDivider)
                    ]),
                    createVNode(_component_SectionTitleLineWithButton, {
                      icon: unref(mdiAccount),
                      main: "",
                      title: "Pembayaran "
                    }, null, 8, ["icon"]),
                    createVNode(_component_CardBox, {
                      class: "mb-6",
                      "has-table": ""
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mt-4" }, [
                          createVNode("strong", null, "Total Pembayaran Yang Sudah Di Lakukan:"),
                          createVNode("ul", { class: "mt-2 mb-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(calculateTotalPaymentPerNamaPembayaran), (total, namaPembayaran) => {
                              return openBlock(), createBlock("li", {
                                key: namaPembayaran,
                                class: "text-gray-700 dark:text-white font-semibold py-1 list-disc ml-6"
                              }, [
                                createTextVNode(toDisplayString(namaPembayaran) + ": ", 1),
                                createVNode("span", { class: "text-blue-500" }, "Rp. " + toDisplayString(total), 1)
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode("table", null, [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", null, "No"),
                              createVNode("th", null, "Nama Pembayaran"),
                              createVNode("th", null, "Total bayar"),
                              createVNode("th", null, "Tanggal bayar")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(payment), (data, i) => {
                              return openBlock(), createBlock("tr", {
                                key: data.id
                              }, [
                                createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                                createVNode("td", { "data-label": "Nama Pembayaran" }, toDisplayString(data.payment_id.nama_pembayaran), 1),
                                createVNode("td", { "data-label": "Total Bayar" }, "Rp." + toDisplayString(data.total_bayar), 1),
                                createVNode("td", { "data-label": "Tanggal Bayar" }, toDisplayString(data.tanggal_bayar), 1)
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
                    icon: unref(mdiAccount),
                    title: "Profile",
                    main: ""
                  }, null, 8, ["icon"]),
                  unref(alert) ? (openBlock(), createBlock(_component_NotificationBarInCard, {
                    key: 0,
                    class: "mb-6",
                    type: "success"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Data berhasil di update ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2" }, [
                    createVNode(_component_MahasiswaCard, { class: "mb-6" }),
                    createVNode("form", {
                      method: "post",
                      onSubmit: withModifiers(updateMahasiswa, ["prevent"])
                    }, [
                      createVNode(_component_CardBox, null, {
                        default: withCtx(() => [
                          createVNode(_component_FormField, {
                            label: "New Profile",
                            help: "Max 500kb"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FotoMahasiswa, {
                                path: unref(fotopath),
                                "onUpdate:path": ($event) => isRef(fotopath) ? fotopath.value = $event : null
                              }, null, 8, ["path", "onUpdate:path"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "nama",
                            help: "Masukan nama baru"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(nama),
                                "onUpdate:modelValue": ($event) => isRef(nama) ? nama.value = $event : null,
                                icon: unref(mdiAccount),
                                name: "nama",
                                required: "",
                                autocomplete: "nama"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_FormField, {
                            label: "NPM",
                            help: "Masukan NPM baru"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormControl, {
                                modelValue: unref(npm),
                                "onUpdate:modelValue": ($event) => isRef(npm) ? npm.value = $event : null,
                                icon: unref(mdiMail),
                                type: "number",
                                name: "npm",
                                required: "",
                                autocomplete: "npm"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => isRef(kelas) ? kelas.value = $event : null,
                            class: "block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 p-2"
                          }, [
                            createVNode("option", { value: "A" }, "A"),
                            createVNode("option", { value: "B" }, "B"),
                            createVNode("option", { value: "C" }, "C")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(kelas)]
                          ]),
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
                    ], 40, ["onSubmit"]),
                    createVNode(_component_BaseDivider)
                  ]),
                  createVNode(_component_SectionTitleLineWithButton, {
                    icon: unref(mdiAccount),
                    main: "",
                    title: "Pembayaran "
                  }, null, 8, ["icon"]),
                  createVNode(_component_CardBox, {
                    class: "mb-6",
                    "has-table": ""
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mt-4" }, [
                        createVNode("strong", null, "Total Pembayaran Yang Sudah Di Lakukan:"),
                        createVNode("ul", { class: "mt-2 mb-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(calculateTotalPaymentPerNamaPembayaran), (total, namaPembayaran) => {
                            return openBlock(), createBlock("li", {
                              key: namaPembayaran,
                              class: "text-gray-700 dark:text-white font-semibold py-1 list-disc ml-6"
                            }, [
                              createTextVNode(toDisplayString(namaPembayaran) + ": ", 1),
                              createVNode("span", { class: "text-blue-500" }, "Rp. " + toDisplayString(total), 1)
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("table", null, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "No"),
                            createVNode("th", null, "Nama Pembayaran"),
                            createVNode("th", null, "Total bayar"),
                            createVNode("th", null, "Tanggal bayar")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(payment), (data, i) => {
                            return openBlock(), createBlock("tr", {
                              key: data.id
                            }, [
                              createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                              createVNode("td", { "data-label": "Nama Pembayaran" }, toDisplayString(data.payment_id.nama_pembayaran), 1),
                              createVNode("td", { "data-label": "Total Bayar" }, "Rp." + toDisplayString(data.total_bayar), 1),
                              createVNode("td", { "data-label": "Tanggal Bayar" }, toDisplayString(data.tanggal_bayar), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/mahasiswa/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-c4cfff0c.mjs.map
