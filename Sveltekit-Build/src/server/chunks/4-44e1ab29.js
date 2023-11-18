import { r as redirect } from './index-64aa7a5e.js';
import { g as generateAuthLink } from './oauth-017ba109.js';
import './_commonjsHelpers-2155838d.js';
import 'util';
import 'stream';
import 'path';
import 'http';
import 'https';
import 'url';
import 'fs';
import 'assert';
import 'tty';
import 'os';
import 'zlib';
import 'events';
import 'buffer';
import 'crypto';

const actions = {
  default: async ({ cookies, request, url }) => {
    const data = await request.formData();
    const baseUrl = data.get("baseUrl");
    const tenant = data.get("tenant");
    data.get("domain");
    const tenantUrl = data.get("tenantUrl");
    const sessionString = cookies.get("idnSession");
    if (sessionString) {
      console.log("sessionString", sessionString);
      const session = JSON.parse(sessionString);
      if (session.org == tenant) {
        console.debug("Credential Cache Hit");
        throw redirect(302, "/home");
      } else {
        console.debug("Credential Cache Miss");
      }
    }
    cookies.set("session", JSON.stringify({ baseUrl, tenantUrl }));
    throw redirect(302, generateAuthLink(tenantUrl));
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-de10b13f.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/4.579169aa.js","_app/immutable/chunks/scheduler.10bc074a.js","_app/immutable/chunks/index.7b3d626a.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.47bc9baa.js","_app/immutable/chunks/index.09b1afef.js","_app/immutable/chunks/navigation.ad74cec2.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.ae9fcbec.js","_app/immutable/chunks/LightSwitch.9a354e21.js"];
const stylesheets = ["_app/immutable/assets/ProgressBar.4f1e9ba5.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-44e1ab29.js.map
