import { j as json } from './index-64aa7a5e.js';

const GET = async ({ fetch, params }) => {
  const source = await (await fetch(`/api/sailpoint/source/${params.sourceID}`)).json();
  const eventNames = [
    "Aggregate Source Account Passed",
    "Aggregate Source Account Started",
    "Aggregate Source Entitlement Passed",
    "Aggregate Source Entitlement Started"
  ];
  const promises = [];
  const allEvents = [];
  for (const event of eventNames) {
    const search = {
      indices: ["events"],
      query: {
        query: `target.name: "${source.name}" AND name:"${event}"`
      },
      sort: ["created"]
    };
    promises.push(
      fetch("/api/sailpoint/search/1", {
        method: "POST",
        body: JSON.stringify(search)
      }).then((response) => response.json()).then((data) => {
        return data;
      })
    );
  }
  await Promise.allSettled(promises).then((results) => {
    for (const event of results) {
      if (event.status == "fulfilled" && event.value.length > 0) {
        allEvents.push(event.value[0]);
      }
    }
  });
  const sourceEvents = {
    name: source.name,
    accounts: { started: void 0, passed: void 0 },
    entitlements: { started: void 0, passed: void 0 }
  };
  for (const event of allEvents) {
    if (event.attributes.sourceName === source.name) {
      switch (event.technicalName) {
        case "SOURCE_ACCOUNT_AGGREGATE_STARTED":
          if (!sourceEvents.accounts.started) {
            sourceEvents.accounts.started = event || void 0;
          }
          break;
        case "SOURCE_ACCOUNT_AGGREGATE_PASSED":
          if (!sourceEvents.accounts.passed) {
            sourceEvents.accounts.passed = event || void 0;
          }
          break;
        case "SOURCE_ENTITLEMENT_AGGREGATE_STARTED":
          if (!sourceEvents.entitlements.started) {
            sourceEvents.entitlements.started = event || void 0;
          }
          break;
        case "SOURCE_ENTITLEMENT_AGGREGATE_PASSED":
          if (!sourceEvents.entitlements.passed) {
            sourceEvents.entitlements.passed = event || void 0;
          }
          break;
      }
    }
  }
  return json({ source, sourceEvents });
};

export { GET };
//# sourceMappingURL=_server.ts-2955f0bd.js.map
