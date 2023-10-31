import { d as useSupabaseClient, e as useRoute, a as __nuxt_component_0 } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './SectionTitleLineWithButton-bad61ad5.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-149f0ed2.mjs';
import { _ as __nuxt_component_3 } from './CardBox-78ae3f19.mjs';
import { _ as __nuxt_component_7 } from './BaseButton-547d4d10.mjs';
import { _ as __nuxt_component_6 } from './BaseButtons-c51a2c2b.mjs';
import { ref, computed, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, Fragment, renderList, createCommentVNode, withDirectives, isRef, vModelText, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { mdiTableBorder, mdiEye, mdiTrashCan } from '@mdi/js';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let payment = ref([]);
    let room = ref([]);
    let search = ref("");
    const loading = ref(false);
    const supabase = useSupabaseClient();
    const $route = useRoute();
    const getpayment = async () => {
      loading.value = false;
      const { data, error } = await supabase.from("payment").select("id,total_bayar, tanggal_bayar, mahasiswa_id(id,nama, kelas), payment_id(nama_pembayaran, desc)").eq("payment_id", $route.params.room).limit(5).order("id", { ascending: false });
      if (error) {
        console.error(error);
      }
      data.forEach((item) => {
        item.total_bayar = new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(item.total_bayar);
      });
      payment.value = data.map((item) => ({
        ...item,
        tanggal_bayar: formatDateCustom(item.tanggal_bayar)
      }));
      loading.value = true;
    };
    const deleteMahasiswa = async (id) => {
      const confirm = window.confirm("yakin akan menghapus?");
      if (confirm) {
        const { data, error } = await supabase.from("payment").delete().eq("id", id);
        if (error) {
          console.log(error);
        } else {
          getpayment();
        }
      }
    };
    const formatDateCustom = (dateString) => {
      const date = new Date(dateString);
      const monthNames = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
      ];
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();
      const monthName = monthNames[monthIndex];
      return `${day} ${monthName} ${year}`;
    };
    const LoadMore = async () => {
      const { data, error } = await supabase.from("payment").select("id,total_bayar, tanggal_bayar, mahasiswa_id(id,nama, kelas), payment_id(nama_pembayaran, desc)").eq("payment_id", $route.params.room).order("id", { ascending: false }).range(payment.value.length, payment.value.length + 5);
      if (error) {
        console.error(error);
      }
      payment.value = [...payment.value, ...data];
    };
    const filteredPayment = computed(() => {
      return payment.value.filter((data) => {
        return data.mahasiswa_id.nama.toLowerCase().includes(search.value.toLowerCase()) || data.mahasiswa_id.kelas.toLowerCase().includes(search.value.toLowerCase()) || data.total_bayar.toString().toLowerCase().includes(search.value.toLowerCase()) || data.tanggal_bayar.toLowerCase().includes(search.value.toLowerCase());
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_SectionMain = __nuxt_component_1;
      const _component_SectionTitleLineWithButton = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_CardBox = __nuxt_component_3;
      const _component_BaseButton = __nuxt_component_7;
      const _component_BaseButtons = __nuxt_component_6;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "authenticated" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!unref(loading)) {
                    _push3(`<div class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-white"${_scopeId2}><div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"${_scopeId2}></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(room), (r) => {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_SectionTitleLineWithButton, {
                      icon: unref(mdiTableBorder),
                      title: `payment ` + r.nama_pembayaran,
                      main: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: `/admin/payment/${r.id}/tambah`,
                            class: "rounded-md border-2 border-gray-900 py-1.5 px-1.5"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId4}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"${_scopeId4}></path></svg>`);
                              } else {
                                return [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-6 w-6 inline-block",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    })
                                  ]))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_NuxtLink, {
                              to: `/admin/payment/${r.id}/tambah`,
                              class: "rounded-md border-2 border-gray-900 py-1.5 px-1.5"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-6 w-6 inline-block",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                  })
                                ]))
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--><div class="flex flex-col lg:flex-row gap-3 mb-6"${_scopeId2}><div class="flex-1"${_scopeId2}><input type="text" class="form-input" placeholder="Cari nama mahasiswa, kelas, jumlah bayar, tanggal bayar"${ssrRenderAttr("value", unref(search))}${_scopeId2}></div></div>`);
                  _push3(ssrRenderComponent(_component_CardBox, {
                    class: "mb-6",
                    "has-table": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<table${_scopeId3}><thead${_scopeId3}><tr${_scopeId3}><th${_scopeId3}>No</th><th${_scopeId3}>Nama Mahasiswa</th><th${_scopeId3}>Kelas</th><th${_scopeId3}>Jumlah Bayar</th><th${_scopeId3}>Tanggal Bayar</th><th${_scopeId3}>Action</th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(filteredPayment), (data, i) => {
                          _push4(`<tr${_scopeId3}><td data-label="no"${_scopeId3}>${ssrInterpolate(i + 1)}</td><td data-label="nama"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: `/admin/mahasiswa/` + data.mahasiswa_id.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(data.mahasiswa_id.nama)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(data.mahasiswa_id.nama), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</td><td data-label="kelas" class="uppercase"${_scopeId3}>${ssrInterpolate(data.mahasiswa_id.kelas)}</td><td data-label="jumlah bayar"${_scopeId3}>${ssrInterpolate(data.total_bayar)}</td><td data-label="jumlah bayar"${_scopeId3}>${ssrInterpolate(data.tanggal_bayar)}</td><td class="before:hidden lg:w-1 whitespace-nowrap"${_scopeId3}><div class="flex gap-3 justify-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: `/admin/payment/` + unref($route).params.room + `/` + data.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BaseButton, {
                                  color: "primary",
                                  icon: unref(mdiEye),
                                  small: ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BaseButton, {
                                    color: "primary",
                                    icon: unref(mdiEye),
                                    small: ""
                                  }, null, 8, ["icon"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_BaseButtons, {
                            type: "justify-start lg:justify-end",
                            "no-wrap": ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BaseButton, {
                                  color: "danger",
                                  icon: unref(mdiTrashCan),
                                  small: "",
                                  onClick: ($event) => deleteMahasiswa(data.id)
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BaseButton, {
                                    color: "danger",
                                    icon: unref(mdiTrashCan),
                                    small: "",
                                    onClick: ($event) => deleteMahasiswa(data.id)
                                  }, null, 8, ["icon", "onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></td></tr>`);
                        });
                        _push4(`<!--]--></tbody></table>`);
                      } else {
                        return [
                          createVNode("table", null, [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", null, "No"),
                                createVNode("th", null, "Nama Mahasiswa"),
                                createVNode("th", null, "Kelas"),
                                createVNode("th", null, "Jumlah Bayar"),
                                createVNode("th", null, "Tanggal Bayar"),
                                createVNode("th", null, "Action")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredPayment), (data, i) => {
                                return openBlock(), createBlock("tr", {
                                  key: data.id
                                }, [
                                  createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                                  createVNode("td", { "data-label": "nama" }, [
                                    createVNode(_component_NuxtLink, {
                                      to: `/admin/mahasiswa/` + data.mahasiswa_id.id
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(data.mahasiswa_id.nama), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  createVNode("td", {
                                    "data-label": "kelas",
                                    class: "uppercase"
                                  }, toDisplayString(data.mahasiswa_id.kelas), 1),
                                  createVNode("td", { "data-label": "jumlah bayar" }, toDisplayString(data.total_bayar), 1),
                                  createVNode("td", { "data-label": "jumlah bayar" }, toDisplayString(data.tanggal_bayar), 1),
                                  createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                                    createVNode("div", { class: "flex gap-3 justify-center" }, [
                                      createVNode(_component_NuxtLink, {
                                        to: `/admin/payment/` + unref($route).params.room + `/` + data.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BaseButton, {
                                            color: "primary",
                                            icon: unref(mdiEye),
                                            small: ""
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 2
                                      }, 1032, ["to"]),
                                      createVNode(_component_BaseButtons, {
                                        type: "justify-start lg:justify-end",
                                        "no-wrap": ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_BaseButton, {
                                            color: "danger",
                                            icon: unref(mdiTrashCan),
                                            small: "",
                                            onClick: ($event) => deleteMahasiswa(data.id)
                                          }, null, 8, ["icon", "onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
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
                  _push3(`<div class="flex justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    color: "primary",
                    onClick: LoadMore,
                    label: "more"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    !unref(loading) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-white"
                    }, [
                      createVNode("div", { class: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" })
                    ])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(room), (r) => {
                      return openBlock(), createBlock("div", {
                        key: r.id
                      }, [
                        createVNode(_component_SectionTitleLineWithButton, {
                          icon: unref(mdiTableBorder),
                          title: `payment ` + r.nama_pembayaran,
                          main: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: `/admin/payment/${r.id}/tambah`,
                              class: "rounded-md border-2 border-gray-900 py-1.5 px-1.5"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-6 w-6 inline-block",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                  })
                                ]))
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]),
                          _: 2
                        }, 1032, ["icon", "title"])
                      ]);
                    }), 128)),
                    createVNode("div", { class: "flex flex-col lg:flex-row gap-3 mb-6" }, [
                      createVNode("div", { class: "flex-1" }, [
                        withDirectives(createVNode("input", {
                          type: "text",
                          class: "form-input",
                          placeholder: "Cari nama mahasiswa, kelas, jumlah bayar, tanggal bayar",
                          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : search = $event
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(search)]
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
                              createVNode("th", null, "Nama Mahasiswa"),
                              createVNode("th", null, "Kelas"),
                              createVNode("th", null, "Jumlah Bayar"),
                              createVNode("th", null, "Tanggal Bayar"),
                              createVNode("th", null, "Action")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredPayment), (data, i) => {
                              return openBlock(), createBlock("tr", {
                                key: data.id
                              }, [
                                createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                                createVNode("td", { "data-label": "nama" }, [
                                  createVNode(_component_NuxtLink, {
                                    to: `/admin/mahasiswa/` + data.mahasiswa_id.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(data.mahasiswa_id.nama), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                createVNode("td", {
                                  "data-label": "kelas",
                                  class: "uppercase"
                                }, toDisplayString(data.mahasiswa_id.kelas), 1),
                                createVNode("td", { "data-label": "jumlah bayar" }, toDisplayString(data.total_bayar), 1),
                                createVNode("td", { "data-label": "jumlah bayar" }, toDisplayString(data.tanggal_bayar), 1),
                                createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                                  createVNode("div", { class: "flex gap-3 justify-center" }, [
                                    createVNode(_component_NuxtLink, {
                                      to: `/admin/payment/` + unref($route).params.room + `/` + data.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_BaseButton, {
                                          color: "primary",
                                          icon: unref(mdiEye),
                                          small: ""
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode(_component_BaseButtons, {
                                      type: "justify-start lg:justify-end",
                                      "no-wrap": ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_BaseButton, {
                                          color: "danger",
                                          icon: unref(mdiTrashCan),
                                          small: "",
                                          onClick: ($event) => deleteMahasiswa(data.id)
                                        }, null, 8, ["icon", "onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ])
                              ]);
                            }), 128))
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex justify-center" }, [
                      createVNode(_component_BaseButton, {
                        color: "primary",
                        onClick: LoadMore,
                        label: "more"
                      })
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
                  !unref(loading) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-white"
                  }, [
                    createVNode("div", { class: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" })
                  ])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(room), (r) => {
                    return openBlock(), createBlock("div", {
                      key: r.id
                    }, [
                      createVNode(_component_SectionTitleLineWithButton, {
                        icon: unref(mdiTableBorder),
                        title: `payment ` + r.nama_pembayaran,
                        main: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: `/admin/payment/${r.id}/tambah`,
                            class: "rounded-md border-2 border-gray-900 py-1.5 px-1.5"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                class: "h-6 w-6 inline-block",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                })
                              ]))
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        _: 2
                      }, 1032, ["icon", "title"])
                    ]);
                  }), 128)),
                  createVNode("div", { class: "flex flex-col lg:flex-row gap-3 mb-6" }, [
                    createVNode("div", { class: "flex-1" }, [
                      withDirectives(createVNode("input", {
                        type: "text",
                        class: "form-input",
                        placeholder: "Cari nama mahasiswa, kelas, jumlah bayar, tanggal bayar",
                        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : search = $event
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(search)]
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
                            createVNode("th", null, "Nama Mahasiswa"),
                            createVNode("th", null, "Kelas"),
                            createVNode("th", null, "Jumlah Bayar"),
                            createVNode("th", null, "Tanggal Bayar"),
                            createVNode("th", null, "Action")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredPayment), (data, i) => {
                            return openBlock(), createBlock("tr", {
                              key: data.id
                            }, [
                              createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                              createVNode("td", { "data-label": "nama" }, [
                                createVNode(_component_NuxtLink, {
                                  to: `/admin/mahasiswa/` + data.mahasiswa_id.id
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(data.mahasiswa_id.nama), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              createVNode("td", {
                                "data-label": "kelas",
                                class: "uppercase"
                              }, toDisplayString(data.mahasiswa_id.kelas), 1),
                              createVNode("td", { "data-label": "jumlah bayar" }, toDisplayString(data.total_bayar), 1),
                              createVNode("td", { "data-label": "jumlah bayar" }, toDisplayString(data.tanggal_bayar), 1),
                              createVNode("td", { class: "before:hidden lg:w-1 whitespace-nowrap" }, [
                                createVNode("div", { class: "flex gap-3 justify-center" }, [
                                  createVNode(_component_NuxtLink, {
                                    to: `/admin/payment/` + unref($route).params.room + `/` + data.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BaseButton, {
                                        color: "primary",
                                        icon: unref(mdiEye),
                                        small: ""
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]),
                                  createVNode(_component_BaseButtons, {
                                    type: "justify-start lg:justify-end",
                                    "no-wrap": ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_BaseButton, {
                                        color: "danger",
                                        icon: unref(mdiTrashCan),
                                        small: "",
                                        onClick: ($event) => deleteMahasiswa(data.id)
                                      }, null, 8, ["icon", "onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ])
                            ]);
                          }), 128))
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex justify-center" }, [
                    createVNode(_component_BaseButton, {
                      color: "primary",
                      onClick: LoadMore,
                      label: "more"
                    })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/payment/[room]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-8dc7eb2f.mjs.map
