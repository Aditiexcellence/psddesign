import Vue from "vue";
import router from "vue-router";
import Zeamo from './components/zeamo.vue'
import Filtergyms from './components/filtergyms.vue'
import Gymdetail from './components/gymdetail.vue'

Vue.use(router);
export default new router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Zeamo',
            component: Zeamo
        },
        {
            path: '/filtergyms',
            name: 'Filtergyms',
            component: Filtergyms
        },
        {
            path: '/gymdetail',
            name: 'Gymdetail',
            component: Gymdetail
        }
    ]
})