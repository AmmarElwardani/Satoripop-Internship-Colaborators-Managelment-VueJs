import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue';
import SignIn from '../views/SignIn.vue';

import Profile from "../views/Profile.vue";
import Dashboard from '../views/dashboard.vue';
import Collaborateurs from '../views/collaborateurs.vue';
import AddCollaborator from '../views/addCollaborator.vue';
import ArchiveCollaborator from '../views/archiveCollaborator.vue';
import CollaboratorProfile from '../views/collaboratorProfile.vue';

import store from '@/store';
// import { component } from 'vue/types/umd';

Vue.use(BootstrapVue);
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: {
      name: "dashboard"
    }
    
    
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
    beforeEnter: (to, from, next) => {
      if(store.getters['auth/authenticated']) {
        return next({
          name: 'dashboard'
        }) 
      }else{
        next();
      }
    }
    
  },
  {
    path: '/dashboard',
    component: Layout,
    // beforeEnter: (to, from, next) => {
    //   if (!store.getters['auth/authenticated']) {
    //     return next({
    //       name: 'signin'
    //     })
    //   }
    //   next();
    // },
    children:[
      {
        path: "",
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: "collaborateurs",
        name: 'collaborateurs',
        component: Collaborateurs
      },
      {
        path: "collaborateur/ajout",
        name: "ajout-collaborateur",
        component: AddCollaborator
      },
      {
        path: "archive",
        name: "archive-collaborator",
        component: ArchiveCollaborator
      },
      {
        path: "collaborateur/:id",
        name: "collaborator-profile",
        component: CollaboratorProfile
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let loggedIn = store.getters["auth/authenticated"];
  let user = store.getters["auth/user"];
  if(to.name !== "signin" && !loggedIn) {
    next({ name: "signin" });
  } else if(user) {
    if(user.role !== 'User') next();
    else if(to.name !== "collaborator-profile" || to.params.id !== user.id) {
      next({ name: "collaborator-profile", params: { id: user.id } });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
