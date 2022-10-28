import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { App } from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const bootstrap = [lifecycles.bootstrap];

export async function mount(props) {
    return lifecycles.mount(props);
}

export const unmount = [lifecycles.unmount];

export const update = [lifecycles.update];
