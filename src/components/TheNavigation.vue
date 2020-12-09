<template>

  <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark flex-row fixed-top">
            <a class="navbar-brand mr-auto" href="#">
                Satoripop
            </a>
            <ul class="navbar-nav flex-row mr-lg-0 ">
                <!-- <li class="nav-item">
                    <a class="nav-link pr-2"><i class="fas fa-cogs"></i></a>
                </li> -->

                <li class="nav-item">
                    <a class="nav-link pr-2"><i class="fas fa-clock"></i></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link pr-2"><i class="fas fa-envelope"></i></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link pr-2"><i class="fas fa-bell"></i></a>
                </li>

                <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle mr-3 mr-lg-0" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i><span class="caret"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">User</a>
                        <a class="dropdown-item" href="#" @click.prevent="signOut">Sign Out</a>
                    </div>
                </li> -->
            </ul>
        </nav>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "TheNavigation",
        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user'
            })
        },

        methods: {
            ...mapActions({
                signOutAction: 'auth/signOut'
            }),

            signOut () {
                this.signOutAction().then(() => {
                    this.$router.replace({
                        name: 'home'
                    })
                } )
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>