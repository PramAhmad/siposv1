import { i as defineNuxtRouteMiddleware, f as useSupabaseUser, n as navigateTo } from '../server.mjs';
import 'vue';
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
import 'vue/server-renderer';

const auth = /* @__PURE__ */ defineNuxtRouteMiddleware((to, _from) => {
  const user = useSupabaseUser();
  if (!user.value) {
    return navigateTo("/");
  }
});

export { auth as default };
//# sourceMappingURL=auth-f6193e59.mjs.map
