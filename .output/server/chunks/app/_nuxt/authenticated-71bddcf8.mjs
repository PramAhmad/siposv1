import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { f as useSupabaseUser, d as useSupabaseClient, n as navigateTo } from '../server.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, withModifiers, useSSRContext, createTextVNode, toDisplayString, renderSlot, computed, resolveDynamicComponent, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlotInner, ssrRenderVNode } from 'vue/server-renderer';
import { mdiBackburger, mdiForwardburger, mdiMenu, mdiMonitor, mdiAccountCircle, mdiHandCoin, mdiHistory, mdiAlarm, mdiMailbox, mdiThemeLightDark, mdiLogout, mdiClose, mdiDotsVertical, mdiChevronUp, mdiChevronDown, mdiMinus, mdiPlus } from '@mdi/js';
import { useRouter, RouterLink } from 'vue-router';
import { u as useMainStore } from './main-a14f7ca0.mjs';
import { u as useStyleStore } from './style-4fabede4.mjs';
import { B as BaseIcon, f as getButtonColor } from './colors-5bbb644a.mjs';
import { c as containerMaxW } from './config-d8473645.mjs';
import { B as BaseDivider } from './BaseDivider-52c813b9.mjs';
import { B as BaseLevel } from './BaseLevel-555d04eb.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@supabase/supabase-js';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const menuAside = [
  {
    to: "/admin",
    icon: mdiMonitor,
    label: "Dashboard"
  },
  {
    label: "Mahasiwa",
    icon: mdiAccountCircle,
    menu: [
      {
        to: "/admin/mahasiswa",
        label: "List Mahasiswa"
      },
      {
        to: "/admin/mahasiswa/tambah",
        label: "Tambah Mahasiswa  "
      }
    ]
  },
  {
    to: "/admin/payment",
    label: "Pembayaran",
    icon: mdiHandCoin
  },
  {
    to: "/admin/activity",
    label: "Activity",
    icon: mdiHistory
  },
  {
    to: "/admin/event",
    label: "Event",
    icon: mdiAlarm
  },
  {
    to: "/admin/masukan",
    label: "Masukan",
    icon: mdiMailbox
  }
];
const menuNavBar = [
  {
    isCurrentUser: true
  },
  {
    icon: mdiThemeLightDark,
    label: "Light/Dark",
    isDesktopNoLabel: true,
    isToggleLightDark: true
  },
  {
    icon: mdiLogout,
    label: "Log out",
    isDesktopNoLabel: true,
    isLogout: true
  }
];
const _sfc_main$c = {
  __name: "UserAvatar",
  __ssrInlineRender: true,
  props: {
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default: null
    },
    api: {
      type: String,
      default: "avataaars"
    }
  },
  setup(__props) {
    const props = __props;
    const avatar = computed(
      () => {
        var _a;
        return (_a = props.avatar) != null ? _a : `https://avatars.dicebear.com/api/${props.api}/${props.username.replace(
          /[^a-z0-9]+/i,
          "-"
        )}.svg`;
      }
    );
    const username = computed(() => props.username);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><img${ssrRenderAttr("src", avatar.value)}${ssrRenderAttr("alt", username.value)} class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserAvatar.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const UserAvatar = _sfc_main$c;
const _sfc_main$b = {
  __name: "UserAvatarCurrentUser",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(UserAvatar, mergeProps({
        username: unref(mainStore).userName,
        avatar: unref(mainStore).userAvatar
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserAvatarCurrentUser.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const UserAvatarCurrentUser = _sfc_main$b;
const _sfc_main$a = {
  __name: "NavBarItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const props = __props;
    const is = computed(() => {
      if (props.item.href) {
        return "a";
      }
      if (props.item.to) {
        return RouterLink;
      }
      return "div";
    });
    const styleStore = useStyleStore();
    const componentClass = computed(() => {
      const base = [
        isDropdownActive.value ? `${styleStore.navBarItemLabelActiveColorStyle} dark:text-slate-400` : `${styleStore.navBarItemLabelStyle} dark:text-white dark:hover:text-slate-400 ${styleStore.navBarItemLabelHoverStyle}`,
        props.item.menu ? "lg:py-2 lg:px-3" : "py-2 px-3"
      ];
      if (props.item.isDesktopNoLabel) {
        base.push("lg:w-16", "lg:justify-center");
      }
      return base;
    });
    const itemLabel = computed(
      () => props.item.isCurrentUser ? useMainStore().userName : props.item.label
    );
    const isDropdownActive = ref(false);
    const menuClick = (event) => {
      emit("menu-click", event, props.item);
      if (props.item.menu) {
        isDropdownActive.value = !isDropdownActive.value;
      }
    };
    const menuClickDropdown = (event, item) => {
      emit("menu-click", event, item);
    };
    const root = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      if (__props.item.isDivider) {
        _push(ssrRenderComponent(BaseDivider, mergeProps({ "nav-bar": "" }, _attrs), null, _parent));
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(is.value), mergeProps({
          ref_key: "root",
          ref: root,
          class: ["block lg:flex items-center relative cursor-pointer", componentClass.value],
          to: (_a = __props.item.to) != null ? _a : null,
          href: (_b = __props.item.href) != null ? _b : null,
          target: (_c = __props.item.target) != null ? _c : null,
          onClick: menuClick
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([{
                "bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0": __props.item.menu
              }, "flex items-center"])}"${_scopeId}>`);
              if (__props.item.isCurrentUser) {
                _push2(ssrRenderComponent(UserAvatarCurrentUser, { class: "w-6 h-6 mr-3 inline-flex" }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (__props.item.icon) {
                _push2(ssrRenderComponent(BaseIcon, {
                  path: __props.item.icon,
                  class: "transition-colors"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="${ssrRenderClass([{ "lg:hidden": __props.item.isDesktopNoLabel && __props.item.icon }, "px-2 transition-colors"])}"${_scopeId}>${ssrInterpolate(itemLabel.value)}</span>`);
              if (__props.item.menu) {
                _push2(ssrRenderComponent(BaseIcon, {
                  path: isDropdownActive.value ? unref(mdiChevronUp) : unref(mdiChevronDown),
                  class: "hidden lg:inline-flex transition-colors"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (__props.item.menu) {
                _push2(`<div class="${ssrRenderClass([{ "lg:hidden": !isDropdownActive.value }, "text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(NavBarMenuList, {
                  menu: __props.item.menu,
                  onMenuClick: menuClickDropdown
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("div", {
                  class: ["flex items-center", {
                    "bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0": __props.item.menu
                  }]
                }, [
                  __props.item.isCurrentUser ? (openBlock(), createBlock(UserAvatarCurrentUser, {
                    key: 0,
                    class: "w-6 h-6 mr-3 inline-flex"
                  })) : createCommentVNode("", true),
                  __props.item.icon ? (openBlock(), createBlock(BaseIcon, {
                    key: 1,
                    path: __props.item.icon,
                    class: "transition-colors"
                  }, null, 8, ["path"])) : createCommentVNode("", true),
                  createVNode("span", {
                    class: ["px-2 transition-colors", { "lg:hidden": __props.item.isDesktopNoLabel && __props.item.icon }]
                  }, toDisplayString(itemLabel.value), 3),
                  __props.item.menu ? (openBlock(), createBlock(BaseIcon, {
                    key: 2,
                    path: isDropdownActive.value ? unref(mdiChevronUp) : unref(mdiChevronDown),
                    class: "hidden lg:inline-flex transition-colors"
                  }, null, 8, ["path"])) : createCommentVNode("", true)
                ], 2),
                __props.item.menu ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ["text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700", { "lg:hidden": !isDropdownActive.value }]
                }, [
                  createVNode(NavBarMenuList, {
                    menu: __props.item.menu,
                    onMenuClick: menuClickDropdown
                  }, null, 8, ["menu"])
                ], 2)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }), _parent);
      }
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBarItem.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const NavBarItem = _sfc_main$a;
const _sfc_main$9 = {
  __name: "NavBarMenuList",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.menu, (item, index) => {
        _push(ssrRenderComponent(NavBarItem, {
          key: index,
          item,
          onMenuClick: menuClick
        }, null, _parent));
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBarMenuList.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const NavBarMenuList = _sfc_main$9;
const _sfc_main$8 = {
  __name: "NavBarItemPlain",
  __ssrInlineRender: true,
  props: {
    display: {
      type: String,
      default: "flex"
    },
    useMargin: Boolean
  },
  setup(__props) {
    const styleStore = useStyleStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [[
          __props.display,
          unref(styleStore).navBarItemLabelStyle,
          unref(styleStore).navBarItemLabelHoverStyle,
          __props.useMargin ? "my-2 mx-3" : "py-2 px-3"
        ], "items-center cursor-pointer dark:text-white dark:hover:text-slate-400"]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBarItemPlain.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const NavBarItemPlain = _sfc_main$8;
const _sfc_main$7 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    const isMenuNavBarActive = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800" }, _attrs))}><div class="${ssrRenderClass([unref(containerMaxW), "flex lg:items-stretch"])}"><div class="flex flex-1 items-stretch h-14">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="flex-none items-stretch flex h-14 lg:hidden">`);
      _push(ssrRenderComponent(NavBarItemPlain, {
        onClick: ($event) => isMenuNavBarActive.value = !isMenuNavBarActive.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(BaseIcon, {
              path: isMenuNavBarActive.value ? unref(mdiClose) : unref(mdiDotsVertical),
              size: "24"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(BaseIcon, {
                path: isMenuNavBarActive.value ? unref(mdiClose) : unref(mdiDotsVertical),
                size: "24"
              }, null, 8, ["path"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([[isMenuNavBarActive.value ? "block" : "hidden"], "max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800"])}">`);
      _push(ssrRenderComponent(NavBarMenuList, {
        menu: __props.menu,
        onMenuClick: menuClick
      }, null, _parent));
      _push(`</div></div></nav>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const NavBar = _sfc_main$7;
const _imports_0 = "" + buildAssetsURL("logo.5d61848a.png");
const _sfc_main$6 = {
  __name: "AsideMenuItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    isDropdownList: Boolean
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const props = __props;
    const styleStore = useStyleStore();
    const hasColor = computed(() => props.item && props.item.color);
    const asideMenuItemActiveStyle = computed(
      () => hasColor.value ? "" : styleStore.asideMenuItemActiveStyle
    );
    const isDropdownActive = ref(false);
    const componentClass = computed(() => [
      props.isDropdownList ? "py-3 px-6 text-sm" : "py-3",
      hasColor.value ? getButtonColor(props.item.color, false, true) : `${styleStore.asideMenuItemStyle} dark:text-slate-300 dark:hover:text-white`
    ]);
    const hasDropdown = computed(() => !!props.item.menu);
    const menuClick = (event) => {
      emit("menu-click", event, props.item);
      if (hasDropdown.value) {
        isDropdownActive.value = !isDropdownActive.value;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<li${ssrRenderAttrs(_attrs)}>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.item.to ? unref(RouterLink) : "a"), {
        to: (_a = __props.item.to) != null ? _a : null,
        href: (_b = __props.item.href) != null ? _b : null,
        target: (_c = __props.item.target) != null ? _c : null,
        class: ["flex cursor-pointer", componentClass.value],
        onClick: menuClick
      }, {
        default: withCtx((vSlot, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.item.icon) {
              _push2(ssrRenderComponent(BaseIcon, {
                path: __props.item.icon,
                class: ["flex-none", [vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""]],
                w: "w-16",
                size: 18
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="${ssrRenderClass([[
              { "pr-12": !hasDropdown.value },
              vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""
            ], "grow text-ellipsis line-clamp-1"])}"${_scopeId}>${ssrInterpolate(__props.item.label)}</span>`);
            if (hasDropdown.value) {
              _push2(ssrRenderComponent(BaseIcon, {
                path: isDropdownActive.value ? unref(mdiMinus) : unref(mdiPlus),
                class: ["flex-none", [vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""]],
                w: "w-12"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.item.icon ? (openBlock(), createBlock(BaseIcon, {
                key: 0,
                path: __props.item.icon,
                class: ["flex-none", [vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""]],
                w: "w-16",
                size: 18
              }, null, 8, ["path", "class"])) : createCommentVNode("", true),
              createVNode("span", {
                class: ["grow text-ellipsis line-clamp-1", [
                  { "pr-12": !hasDropdown.value },
                  vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""
                ]]
              }, toDisplayString(__props.item.label), 3),
              hasDropdown.value ? (openBlock(), createBlock(BaseIcon, {
                key: 1,
                path: isDropdownActive.value ? unref(mdiMinus) : unref(mdiPlus),
                class: ["flex-none", [vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""]],
                w: "w-12"
              }, null, 8, ["path", "class"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
      if (hasDropdown.value) {
        _push(ssrRenderComponent(AsideMenuList, {
          menu: __props.item.menu,
          class: [
            unref(styleStore).asideMenuDropdownStyle,
            isDropdownActive.value ? "block dark:bg-slate-800/50" : "hidden"
          ],
          "is-dropdown-list": ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AsideMenuItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const AsideMenuItem = _sfc_main$6;
const _sfc_main$5 = {
  __name: "AsideMenuList",
  __ssrInlineRender: true,
  props: {
    isDropdownList: Boolean,
    menu: {
      type: Array,
      required: true
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.menu, (item, index) => {
        _push(ssrRenderComponent(AsideMenuItem, {
          key: index,
          item,
          "is-dropdown-list": __props.isDropdownList,
          onMenuClick: menuClick
        }, null, _parent));
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AsideMenuList.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AsideMenuList = _sfc_main$5;
const _sfc_main$4 = {
  __name: "AsideMenuLayer",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  emits: ["menu-click", "aside-lg-close-click"],
  setup(__props, { emit }) {
    const styleStore = useStyleStore();
    const logoutItem = computed(() => ({
      label: "Logout",
      icon: mdiLogout,
      color: "info",
      isLogout: true
    }));
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    console.log(user);
    const Logout = async () => {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.log(error);
      } else {
        navigateTo("/admin/login");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        id: "aside",
        class: "lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"
      }, _attrs))}><div class="${ssrRenderClass([unref(styleStore).asideStyle, "lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900"])}"><div class="${ssrRenderClass([unref(styleStore).asideBrandStyle, "flex flex-row h-14 items-center justify-between dark:bg-slate-900"])}"><div class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0"><img${ssrRenderAttr("src", _imports_0)} class="w-[200px] h-[150px]" alt=""></div><button class="hidden lg:inline-block xl:hidden p-3">`);
      _push(ssrRenderComponent(BaseIcon, { path: unref(mdiClose) }, null, _parent));
      _push(`</button></div><div class="${ssrRenderClass([
        unref(styleStore).darkMode ? "aside-scrollbars-[slate]" : unref(styleStore).asideScrollbarsStyle,
        "flex-1 overflow-y-auto overflow-x-hidden"
      ])}">`);
      _push(ssrRenderComponent(AsideMenuList, {
        menu: __props.menu,
        onMenuClick: menuClick
      }, null, _parent));
      _push(`</div><ul>`);
      _push(ssrRenderComponent(AsideMenuItem, {
        item: logoutItem.value,
        onClick: Logout,
        class: "bg-blue-600"
      }, null, _parent));
      _push(`</ul></div></aside>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AsideMenuLayer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AsideMenuLayer = _sfc_main$4;
const _sfc_main$3 = {
  __name: "OverlayLayer",
  __ssrInlineRender: true,
  props: {
    zIndex: {
      type: String,
      default: "z-50"
    },
    type: {
      type: String,
      default: "flex"
    }
  },
  emits: ["overlay-click"],
  setup(__props, { emit }) {
    const styleStore = useStyleStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [[__props.type, __props.zIndex], "items-center flex-col justify-center overflow-hidden fixed inset-0"]
      }, _attrs))}><div class="${ssrRenderClass([unref(styleStore).overlayStyle, "absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700"])}"></div>`);
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OverlayLayer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const OverlayLayer = _sfc_main$3;
const _sfc_main$2 = {
  __name: "AsideMenu",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      required: true
    },
    isAsideMobileExpanded: Boolean,
    isAsideLgActive: Boolean
  },
  emits: ["menu-click", "aside-lg-close-click"],
  setup(__props, { emit }) {
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    const asideLgCloseClick = (event) => {
      emit("aside-lg-close-click", event);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(AsideMenuLayer, {
        menu: __props.menu,
        class: [
          __props.isAsideMobileExpanded ? "left-0" : "-left-60 lg:left-0",
          { "lg:hidden xl:flex": !__props.isAsideLgActive }
        ],
        onMenuClick: menuClick,
        onAsideLgCloseClick: asideLgCloseClick
      }, null, _parent));
      _push(ssrRenderComponent(OverlayLayer, {
        style: __props.isAsideLgActive ? null : { display: "none" },
        "z-index": "z-30",
        onOverlayClick: asideLgCloseClick
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AsideMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AsideMenu = _sfc_main$2;
const _sfc_main$1 = {
  __name: "FooterBar",
  __ssrInlineRender: true,
  setup(__props) {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: ["py-2 px-6", unref(containerMaxW)]
      }, _attrs))}>`);
      _push(ssrRenderComponent(BaseLevel, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center md:text-left"${_scopeId}><b${_scopeId}>\xA9${ssrInterpolate(unref(year))}, <a href="https://justboil.me/" target="_blank"${_scopeId}>Information System 2023</a>.</b>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="md:py-2"${_scopeId}><a href="https://justboil.me"${_scopeId}></a></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center md:text-left" }, [
                createVNode("b", null, [
                  createTextVNode("\xA9" + toDisplayString(unref(year)) + ", ", 1),
                  createVNode("a", {
                    href: "https://justboil.me/",
                    target: "_blank"
                  }, "Information System 2023"),
                  createTextVNode(".")
                ]),
                renderSlot(_ctx.$slots, "default")
              ]),
              createVNode("div", { class: "md:py-2" }, [
                createVNode("a", { href: "https://justboil.me" })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterBar = _sfc_main$1;
const layoutAsidePadding = "xl:pl-60";
const _sfc_main = {
  __name: "authenticated",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useSupabaseUser();
    useMainStore().setUser({
      name: user.value.email,
      email: "john@example.com",
      avatar: "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93"
    });
    const styleStore = useStyleStore();
    const router = useRouter();
    const isAsideMobileExpanded = ref(false);
    const isAsideLgActive = ref(false);
    router.beforeEach(() => {
      isAsideMobileExpanded.value = false;
      isAsideLgActive.value = false;
    });
    const menuClick = (event, item) => {
      if (item.isToggleLightDark) {
        styleStore.setDarkMode();
      }
      if (item.isLogout)
        ;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: {
          dark: unref(styleStore).darkMode,
          "overflow-hidden lg:overflow-visible": isAsideMobileExpanded.value
        }
      }, _attrs))}><div class="${ssrRenderClass([[layoutAsidePadding, { "ml-60 lg:ml-0": isAsideMobileExpanded.value }], "pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"])}">`);
      _push(ssrRenderComponent(NavBar, {
        menu: unref(menuNavBar),
        class: [
          layoutAsidePadding,
          { "ml-60 lg:ml-0": isAsideMobileExpanded.value }
        ],
        onMenuClick: menuClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(NavBarItemPlain, {
              display: "flex lg:hidden",
              onClick: ($event) => isAsideMobileExpanded.value = !isAsideMobileExpanded.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(BaseIcon, {
                    path: isAsideMobileExpanded.value ? unref(mdiBackburger) : unref(mdiForwardburger),
                    size: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(BaseIcon, {
                      path: isAsideMobileExpanded.value ? unref(mdiBackburger) : unref(mdiForwardburger),
                      size: "24"
                    }, null, 8, ["path"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(NavBarItemPlain, {
              display: "hidden lg:flex xl:hidden",
              onClick: ($event) => isAsideLgActive.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(BaseIcon, {
                    path: unref(mdiMenu),
                    size: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(BaseIcon, {
                      path: unref(mdiMenu),
                      size: "24"
                    }, null, 8, ["path"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(NavBarItemPlain, { "use-margin": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-xl font-bold text-gray-900 dark:text-gray-200"${_scopeId2}>Information System</h2>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-xl font-bold text-gray-900 dark:text-gray-200" }, "Information System")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(NavBarItemPlain, {
                display: "flex lg:hidden",
                onClick: withModifiers(($event) => isAsideMobileExpanded.value = !isAsideMobileExpanded.value, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(BaseIcon, {
                    path: isAsideMobileExpanded.value ? unref(mdiBackburger) : unref(mdiForwardburger),
                    size: "24"
                  }, null, 8, ["path"])
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(NavBarItemPlain, {
                display: "hidden lg:flex xl:hidden",
                onClick: withModifiers(($event) => isAsideLgActive.value = true, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(BaseIcon, {
                    path: unref(mdiMenu),
                    size: "24"
                  }, null, 8, ["path"])
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(NavBarItemPlain, { "use-margin": "" }, {
                default: withCtx(() => [
                  createVNode("h2", { class: "text-xl font-bold text-gray-900 dark:text-gray-200" }, "Information System")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AsideMenu, {
        "is-aside-mobile-expanded": isAsideMobileExpanded.value,
        "is-aside-lg-active": isAsideLgActive.value,
        menu: unref(menuAside),
        onMenuClick: menuClick,
        onAsideLgCloseClick: ($event) => isAsideLgActive.value = false
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div class="fixed bottom-4 right-4 z-50"><button class="flex items-center justify-center w-10 h-10 rounded-full text-white bg-blue-600 dark:bg-blue-600 shadow-lg"><svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7071 4.29289C11.0976 3.90237 11.0976 3.2692 10.7071 2.87868C10.3166 2.48815 9.68342 2.48815 9.29289 2.87868L4.58579 7.58579C4.39052 7.78106 4.39052 8.09763 4.58579 8.29289L9.29289 13.00001C9.68342 13.3905 10.3166 13.3905 10.7071 13.0001C11.0976 12.6096 11.0976 11.9764 10.7071 11.5858L7.41421 8.29289H15C15.5523 8.29289 16 7.84521 16 7.29289C16 6.74057 15.5523 6.29289 15 6.29289H7.41421L10.7071 3.00001C11.0976 2.60948 11.0976 1.97631 10.7071 1.58579Z"></path></svg></button></div>`);
      _push(ssrRenderComponent(FooterBar, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/authenticated.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=authenticated-71bddcf8.mjs.map
