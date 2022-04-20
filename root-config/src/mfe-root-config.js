import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mfe/react",
  app: () =>
    System.import(
      "http://localhost:8082/mfe-react.js"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
