import { d as useSupabaseClient, f as useSupabaseUser, a as __nuxt_component_0 } from '../server.mjs';
import { ref, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext, createCommentVNode, computed, watch, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { mdiChartTimelineVariant, mdiAccountMultiple, mdiCartOutline, mdiCog, mdiChevronUp, mdiChevronDown, mdiAlertCircleOutline } from '@mdi/js';
import { _ as __nuxt_component_3 } from './CardBox-78ae3f19.mjs';
import numeral from 'numeral';
import { B as BaseIcon } from './colors-5bbb644a.mjs';
import { B as BaseLevel } from './BaseLevel-555d04eb.mjs';
import { _ as __nuxt_component_2$1 } from './PillTag-0e71f526.mjs';
import { _ as __nuxt_component_7 } from './BaseButton-547d4d10.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_2 } from './SectionTitleLineWithButton-bad61ad5.mjs';
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

const _sfc_main$3 = {
  __name: "NumberDynamic",
  __ssrInlineRender: true,
  props: {
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    value: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  setup(__props) {
    const props = __props;
    const newValue = ref(0);
    const newValueFormatted = computed(
      () => newValue.value < 1e3 ? newValue.value : numeral(newValue.value).format("0,0")
    );
    const value = computed(() => props.value);
    const grow = (m) => {
      const v = Math.ceil(newValue.value + m);
      if (v > value.value) {
        newValue.value = value.value;
        return false;
      }
      newValue.value = v;
      setTimeout(() => {
        grow(m);
      }, 25);
    };
    const growInit = () => {
      newValue.value = 0;
      grow(props.value / (props.duration / 25));
    };
    watch(value, () => {
      growInit();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>${ssrInterpolate(__props.prefix)}${ssrInterpolate(newValueFormatted.value)}${ssrInterpolate(__props.suffix)}</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NumberDynamic.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const NumberDynamic = _sfc_main$3;
const _sfc_main$2 = {
  __name: "PillTagTrend",
  __ssrInlineRender: true,
  props: {
    trend: {
      type: String,
      required: true
    },
    trendType: {
      type: String,
      default: null
    },
    small: Boolean
  },
  setup(__props) {
    const props = __props;
    const trendStyle = computed(() => {
      if (props.trendType === "up") {
        return {
          icon: mdiChevronUp,
          style: "success"
        };
      }
      if (props.trendType === "down") {
        return {
          icon: mdiChevronDown,
          style: "danger"
        };
      }
      if (props.trendType === "alert") {
        return {
          icon: mdiAlertCircleOutline,
          style: "warning"
        };
      }
      return {
        style: "info"
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(__nuxt_component_2$1, mergeProps({
        label: __props.trend,
        color: trendStyle.value.style,
        icon: trendStyle.value.icon,
        small: __props.small,
        class: "text-slate-950 dark:text-white"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PillTagTrend.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PillTagTrend = _sfc_main$2;
const _sfc_main$1 = {
  __name: "CardBoxWidget",
  __ssrInlineRender: true,
  props: {
    number: {
      type: Number,
      default: 0
    },
    icon: {
      type: String,
      default: null
    },
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    trend: {
      type: String,
      default: null
    },
    trendType: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(__nuxt_component_3, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.trend) {
              _push2(ssrRenderComponent(BaseLevel, {
                class: "mb-3",
                mobile: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(PillTagTrend, {
                      trend: __props.trend,
                      "trend-type": __props.trendType,
                      small: ""
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(__nuxt_component_7, {
                      icon: unref(mdiCog),
                      "icon-w": "w-4",
                      "icon-h": "h-4",
                      color: "lightDark",
                      small: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(PillTagTrend, {
                        trend: __props.trend,
                        "trend-type": __props.trendType,
                        small: ""
                      }, null, 8, ["trend", "trend-type"]),
                      createVNode(__nuxt_component_7, {
                        icon: unref(mdiCog),
                        "icon-w": "w-4",
                        "icon-h": "h-4",
                        color: "lightDark",
                        small: ""
                      }, null, 8, ["icon"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(BaseLevel, { mobile: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><h3 class="text-lg leading-tight text-rose-500 dark:text-slate-400"${_scopeId2}>${ssrInterpolate(__props.label)}</h3><h1 class="text-3xl leading-tight font-semibold"${_scopeId2}>`);
                  _push3(ssrRenderComponent(NumberDynamic, {
                    value: __props.number,
                    prefix: __props.prefix,
                    suffix: __props.suffix
                  }, null, _parent3, _scopeId2));
                  _push3(`</h1></div>`);
                  if (__props.icon) {
                    _push3(ssrRenderComponent(BaseIcon, {
                      path: __props.icon,
                      size: "48",
                      w: "",
                      h: "h-16",
                      class: __props.color
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-lg leading-tight text-rose-500 dark:text-slate-400" }, toDisplayString(__props.label), 1),
                      createVNode("h1", { class: "text-3xl leading-tight font-semibold" }, [
                        createVNode(NumberDynamic, {
                          value: __props.number,
                          prefix: __props.prefix,
                          suffix: __props.suffix
                        }, null, 8, ["value", "prefix", "suffix"])
                      ])
                    ]),
                    __props.icon ? (openBlock(), createBlock(BaseIcon, {
                      key: 0,
                      path: __props.icon,
                      size: "48",
                      w: "",
                      h: "h-16",
                      class: __props.color
                    }, null, 8, ["path", "class"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              __props.trend ? (openBlock(), createBlock(BaseLevel, {
                key: 0,
                class: "mb-3",
                mobile: ""
              }, {
                default: withCtx(() => [
                  createVNode(PillTagTrend, {
                    trend: __props.trend,
                    "trend-type": __props.trendType,
                    small: ""
                  }, null, 8, ["trend", "trend-type"]),
                  createVNode(__nuxt_component_7, {
                    icon: unref(mdiCog),
                    "icon-w": "w-4",
                    "icon-h": "h-4",
                    color: "lightDark",
                    small: ""
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(BaseLevel, { mobile: "" }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-lg leading-tight text-rose-500 dark:text-slate-400" }, toDisplayString(__props.label), 1),
                    createVNode("h1", { class: "text-3xl leading-tight font-semibold" }, [
                      createVNode(NumberDynamic, {
                        value: __props.number,
                        prefix: __props.prefix,
                        suffix: __props.suffix
                      }, null, 8, ["value", "prefix", "suffix"])
                    ])
                  ]),
                  __props.icon ? (openBlock(), createBlock(BaseIcon, {
                    key: 0,
                    path: __props.icon,
                    size: "48",
                    w: "",
                    h: "h-16",
                    class: __props.color
                  }, null, 8, ["path", "class"])) : createCommentVNode("", true)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardBoxWidget.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    useSupabaseUser();
    const transaksi = ref([]);
    const chartData = ref([]);
    const mahasiswa = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_CardBoxWidget = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "authenticated" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(__nuxt_component_1$1, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(__nuxt_component_2, {
                    icon: unref(mdiChartTimelineVariant),
                    title: "Overview",
                    main: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_CardBoxWidget, {
                    trend: "12%",
                    "trend-type": "up",
                    color: "text-emerald-500",
                    icon: unref(mdiAccountMultiple),
                    number: unref(mahasiswa).length,
                    label: "Mahasiswa",
                    class: "border border-slate-200"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardBoxWidget, {
                    trend: "12%",
                    "trend-type": "down",
                    color: "text-blue-500",
                    icon: unref(mdiCartOutline),
                    number: unref(transaksi).length,
                    prefix: "",
                    label: "Transaksi",
                    class: "border border-slate-200"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardBoxWidget, {
                    trend: "Overflow",
                    "trend-type": "alert",
                    color: "text-red-500",
                    icon: unref(mdiChartTimelineVariant),
                    number: 256,
                    suffix: "%",
                    label: "Performance",
                    class: "border border-slate-200"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(__nuxt_component_3, {
                    "has-table": "",
                    class: "md:w-1/2 w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<table${_scopeId3}><thead${_scopeId3}><tr${_scopeId3}><th${_scopeId3}>no</th><th${_scopeId3}>Pembayaran</th><th${_scopeId3}>Jumlah Uang</th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(chartData), (data, i) => {
                          _push4(`<tr${_scopeId3}><td data-label="no"${_scopeId3}>${ssrInterpolate(i + 1)}</td><td data-label="pembayaran"${_scopeId3}>${ssrInterpolate(data.nama_pembayaran)}</td><td data-label="jumlah uang"${_scopeId3}>${ssrInterpolate(data.total_bayar)}</td></tr>`);
                        });
                        _push4(`<!--]--></tbody></table>`);
                      } else {
                        return [
                          createVNode("table", null, [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", null, "no"),
                                createVNode("th", null, "Pembayaran"),
                                createVNode("th", null, "Jumlah Uang")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(chartData), (data, i) => {
                                return openBlock(), createBlock("tr", { key: i }, [
                                  createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                                  createVNode("td", { "data-label": "pembayaran" }, toDisplayString(data.nama_pembayaran), 1),
                                  createVNode("td", { "data-label": "jumlah uang" }, toDisplayString(data.total_bayar), 1)
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
                    createVNode(__nuxt_component_2, {
                      icon: unref(mdiChartTimelineVariant),
                      title: "Overview",
                      main: ""
                    }, null, 8, ["icon"]),
                    createVNode("div", { class: "grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6" }, [
                      createVNode(_component_CardBoxWidget, {
                        trend: "12%",
                        "trend-type": "up",
                        color: "text-emerald-500",
                        icon: unref(mdiAccountMultiple),
                        number: unref(mahasiswa).length,
                        label: "Mahasiswa",
                        class: "border border-slate-200"
                      }, null, 8, ["icon", "number"]),
                      createVNode(_component_CardBoxWidget, {
                        trend: "12%",
                        "trend-type": "down",
                        color: "text-blue-500",
                        icon: unref(mdiCartOutline),
                        number: unref(transaksi).length,
                        prefix: "",
                        label: "Transaksi",
                        class: "border border-slate-200"
                      }, null, 8, ["icon", "number"]),
                      createVNode(_component_CardBoxWidget, {
                        trend: "Overflow",
                        "trend-type": "alert",
                        color: "text-red-500",
                        icon: unref(mdiChartTimelineVariant),
                        number: 256,
                        suffix: "%",
                        label: "Performance",
                        class: "border border-slate-200"
                      }, null, 8, ["icon"])
                    ]),
                    createVNode(__nuxt_component_3, {
                      "has-table": "",
                      class: "md:w-1/2 w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("table", null, [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", null, "no"),
                              createVNode("th", null, "Pembayaran"),
                              createVNode("th", null, "Jumlah Uang")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(chartData), (data, i) => {
                              return openBlock(), createBlock("tr", { key: i }, [
                                createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                                createVNode("td", { "data-label": "pembayaran" }, toDisplayString(data.nama_pembayaran), 1),
                                createVNode("td", { "data-label": "jumlah uang" }, toDisplayString(data.total_bayar), 1)
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
              createVNode(__nuxt_component_1$1, null, {
                default: withCtx(() => [
                  createVNode(__nuxt_component_2, {
                    icon: unref(mdiChartTimelineVariant),
                    title: "Overview",
                    main: ""
                  }, null, 8, ["icon"]),
                  createVNode("div", { class: "grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6" }, [
                    createVNode(_component_CardBoxWidget, {
                      trend: "12%",
                      "trend-type": "up",
                      color: "text-emerald-500",
                      icon: unref(mdiAccountMultiple),
                      number: unref(mahasiswa).length,
                      label: "Mahasiswa",
                      class: "border border-slate-200"
                    }, null, 8, ["icon", "number"]),
                    createVNode(_component_CardBoxWidget, {
                      trend: "12%",
                      "trend-type": "down",
                      color: "text-blue-500",
                      icon: unref(mdiCartOutline),
                      number: unref(transaksi).length,
                      prefix: "",
                      label: "Transaksi",
                      class: "border border-slate-200"
                    }, null, 8, ["icon", "number"]),
                    createVNode(_component_CardBoxWidget, {
                      trend: "Overflow",
                      "trend-type": "alert",
                      color: "text-red-500",
                      icon: unref(mdiChartTimelineVariant),
                      number: 256,
                      suffix: "%",
                      label: "Performance",
                      class: "border border-slate-200"
                    }, null, 8, ["icon"])
                  ]),
                  createVNode(__nuxt_component_3, {
                    "has-table": "",
                    class: "md:w-1/2 w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode("table", null, [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", null, "no"),
                            createVNode("th", null, "Pembayaran"),
                            createVNode("th", null, "Jumlah Uang")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(chartData), (data, i) => {
                            return openBlock(), createBlock("tr", { key: i }, [
                              createVNode("td", { "data-label": "no" }, toDisplayString(i + 1), 1),
                              createVNode("td", { "data-label": "pembayaran" }, toDisplayString(data.nama_pembayaran), 1),
                              createVNode("td", { "data-label": "jumlah uang" }, toDisplayString(data.total_bayar), 1)
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-c73f5bee.mjs.map
