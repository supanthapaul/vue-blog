import Vue from "vue";
import App from "./App.vue";
import vueResource from "vue-resource";
import vueRouter from "vue-router";
import Routes from "./routes";

Vue.use(vueResource);
Vue.use(vueRouter);

const router = new vueRouter({
  routes: Routes
});

// Custom Directive
Vue.directive("rainbow", {
  bind(el, binding, vnode) {
    el.style.color =
      "#" +
      Math.random()
        .toString()
        .slice(2, 8);
  }
});

// Filters
Vue.filter("truncate", function(value) {
  return value.slice(0, 110) + "...";
});

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
