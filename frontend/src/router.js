import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from '@/views/Home';
//import EditComponent from '@/components/Edit';
import CreateComponent from '@/components/Create';
import PostComponent from '@/components/Post';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/create', name: 'Create', component: CreateComponent },
    //{ path: '/edit/:id', name: 'Edit', component: EditComponent },
    { path: '/post/:id', name: 'Post', component: PostComponent }
  ]
});
