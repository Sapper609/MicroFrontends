import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mfe/react",
  app: () =>
    System.import("@mfe/react"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
