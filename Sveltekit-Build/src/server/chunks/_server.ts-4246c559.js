import { c as createConfiguration, d as distExports, H as HandleError } from './sdk-9eeff2de.js';
import { b as getToken } from './oauth-017ba109.js';
import { j as json } from './index-64aa7a5e.js';
import './_commonjsHelpers-2155838d.js';
import 'url';
import 'http';
import 'https';
import 'util';
import 'zlib';
import 'stream';
import 'events';
import 'os';
import 'path';
import 'fs';
import 'assert';
import 'tty';
import 'buffer';
import 'crypto';

async function POST({ request, cookies, params }) {
  try {
    const session = JSON.parse(cookies.get("session"));
    const idnSession = await getToken(cookies);
    const searchJson = await request.json();
    const limit = Number(params.limit || 2e4);
    const increment = limit < 250 ? limit : 250;
    const config = createConfiguration(session.baseUrl, idnSession.access_token);
    let api = new distExports.SearchApi(config);
    let search = searchJson;
    const val = (await distExports.Paginator.paginateSearchApi(api, search, increment, limit)).data;
    return json(val);
  } catch (err) {
    HandleError("issue arose during SDK search query", err);
  }
}

export { POST };
//# sourceMappingURL=_server.ts-4246c559.js.map
