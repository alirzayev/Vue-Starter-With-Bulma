import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '../components/layouts/Main'
import Home from '../views/home'


Vue.use(Router)

/* eslint-disable */
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: MainLayout,
            children: [
                {
                    path: '',
                    component: Home
                },
            ]


        }
    ]
})
