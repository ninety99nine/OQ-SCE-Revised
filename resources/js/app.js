require('./bootstrap');
import { createApp, h } from 'vue'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import AuthDashboardLayout from "./Layouts/AuthDashboard/AuthDashboardLayout"

//  Import pinia: https://pinia.vuejs.org/getting-started.html#installation
import { createPinia } from 'pinia'

//  Import Element (Vue Components): https://element.eleme.io
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

//  Components that must be registered Globally
import EventsEditor from "@eventsEditor";

createInertiaApp({
  /**
   *    Normally we would resolve each page as follows:
   *
   *    resolve: name => require(`./Pages/${name}`),
   *
   *    However we need to wrap each page within a layout.
   *    A layout typically slots the page content between
   *    the layout header and layout footer components
   */
  resolve: async name => {

    /**
     *  Lets capture the page that must be loaded.
     *
     *  Because we are using import() instead of require(),
     *  the import() returns a promise that we must wait to
     *  resolve before we can access the default property.
     */
    let page = (await import(`./Pages/${name}`)).default;

    //  Check if the page has a custom layout
    if( !page.layout ) {

        //  If it does not, set the auth dashboard layout
        page.layout = AuthDashboardLayout;

    }

    //  Return the page
    return page;

  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })

        //  Components that must be registered Globally
        .component('EventsEditor', EventsEditor)

        /**
         *  The mixin below allows us to offer ziggy support so that
         *  we can utilize the route() heler to access laravel named
         *  routes.
         *
         *  Reference 1: https://github.com/tighten/ziggy
         *  Reference 2: https://laracasts.com/discuss/channels/laravel/i-am-lost-with-ziggy-vue-3-setup
         */
        .mixin({ methods: { route: window.route } })
        .use(createPinia())
        .use(ElementPlus)
        .use(plugin)
        .mount(el)
  },
})

InertiaProgress.init({
    color: 'blue',
    showSpinner: true
})
