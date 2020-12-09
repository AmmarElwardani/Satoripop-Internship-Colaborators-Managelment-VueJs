<template>
  <div class="layout">
    <TheNavigation></TheNavigation>
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
            <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
                <i class="fas fa-bars"></i>
            </a>
            <nav id="sidebar" class="sidebar-wrapper">
                <div class="sidebar-content">
                    <!-- sidebar-brand  -->
                    <div class="sidebar-item sidebar-brand">
                        <a href="#">{{user.role}} </a>
                        <div id="close-sidebar" @click="closeMenu">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                    <!-- sidebar-header  -->
                    <div class="sidebar-item sidebar-header">
                        <div class="user-pic">
                            <img class="img-responsive img-rounded" src="../assets/user.png" alt="User picture">
                        </div>
                        <div class="user-info" v-if="user">
                            <span class="user-name">
                                <strong>{{user.name}}</strong>
                            </span>
                            <span class="user-role"> {{user.email}} </span>
                            <span class="user-status">
                                <i class="fa fa-circle"></i>
                                <span>Online</span>
                            </span>
                        </div>
                    </div>
                  
                    
                    <!-- sidebar-menu  -->
                    <div class=" sidebar-item sidebar-menu">
                        <ul>
                            <li class="header-menu">
                                <span>Menu</span>
                            </li>
                            
                            <li class="submenu" v-if="user.role !== 'User'">
                                <a data-toggle="collapse" href="#multiCollapseCollaborateurs" role="button" aria-expanded="false" aria-controls="multiCollapseCollaborateurs">
                                    <i class="fab fa-dropbox"></i>
                                    <span>Collaborateurs
                                        <i id="collabArrow" class="fas fa-chevron-right ml-3 "  ></i>
                                    </span>
                                </a>
                                <div class="collapse" id="multiCollapseCollaborateurs">
                                    <router-link to="/dashboard" class="card card-body">
                                        <i class="fab fa-dashcube"></i>
                                        <span>Dashboard</span>
                                    </router-link>
                                    <router-link to="/dashboard/collaborateurs" class="card card-body">
                                        <i class="fas fa-user-friends"></i>
                                        <span>Collaborateurs</span>
                                    </router-link>
                                    <router-link to="/dashboard/archive" class="card card-body">
                                        <i class="fas fa-archive"></i>
                                        <span>Archive</span>
                                    </router-link>
                                </div>
                            </li>

                           
                            <li v-if="user.role !== 'User'">
                                <router-link to="/dashboard/recrutement">
                                    <i class="fas fa-address-card"></i>
                                    <span>Recrutements</span>
                                </router-link>
                            </li>
                            <li v-if="user.role !== 'User'">
                                <router-link to="/dashboard/formation">
                                    <i class="fab fa-leanpub"></i>
                                    <span>Formation</span>
                                </router-link>
                            </li>

                            <li v-if="user.role !== 'User'">
                                <router-link to="/dashboard/evaluation">
                                    <i class="fas fa-graduation-cap"></i>
                                    <span>Evaluation&Carière</span>
                                </router-link>
                            </li>

                            <li v-if="user.role !== 'User'">
                                <router-link to="/dashboard/leave">
                                    <i class="fas fa-calendar-alt"></i>
                                    <span>Congés et abs</span>
                                </router-link>
                            </li>

                            <li v-if="user.role !== 'User'">
                                <router-link to="/dashboard/time">
                                    <i class="fas fa-clock"></i>
                                    <span>Temps & activités</span>
                                </router-link>
                            </li>

                            <li v-if="user.role !== 'User'">
                                <router-link to="/dashboard/eval">
                                    <i class="fas fa-chart-line"></i>
                                    <span>Suivi RH & reporting</span>
                                </router-link>
                            </li>

                            <li v-if="user.role !== 'User'">
                                <router-link to="/dashboard/profile">
                                    <i class="fa fa-user"></i>
                                    <span>Profile</span>
                                </router-link>
                            </li>
                            <li>
                                <a href="#" @click="signOut()">
                                    <i class="fa fa-power-off"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- sidebar-menu  -->
                </div>
          
            </nav>
            <!-- sidebar-content  -->
            <main class="page-content pt-5 mt-5">
                <router-view/>
            </main>
            <!-- page-content" -->
    </div>
    <!-- page-wrapper -->




  
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import $ from 'jquery';
  import TheNavigation from "@/components/TheNavigation.vue"
export default {
  name: "layout",
  data(){
      return{
          name:null,
          email:null,
      }
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user'
    })
  },
  components: {
    TheNavigation,
  },
  methods:{
      closeMenu(){
        $(".page-wrapper").toggleClass("toggled");
      },
      ...mapActions({
                signOutAction: 'auth/signOut'
            }),

            signOut () {
                this.signOutAction().then(() => {
                    this.$router.replace({
                        name: 'signin'
                    })
                } )
            },
  },
};
</script>

<style>

</style>

