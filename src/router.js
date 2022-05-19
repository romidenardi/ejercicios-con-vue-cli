import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

export default new router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/vista1",
            name: "Vista 1",
            component: () => import("./views/Vista1.vue")
        },
        {
            path: "/vista2",
            name: "Vista 2",
            component: () => import("./views/Vista2.vue")
        }
    ],
})
