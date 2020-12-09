<template>
    <div>
        <div class="container">
            <div class="form-row d-flex p-3">
                <router-link to="/dashboard/collaborateur/ajout" tag="button" v-if="user.permissions.includes('add')"><i class="fas fa-plus"></i></router-link>
                <div>
                    <div class="input-group">
                        <input type="text" class="form-control search-menu" @keyup="searchCollaborator" v-model="q"
                        placeholder="Search for collaborator ..">
                        <div class="input-group-append">
                            <span class="input-group-text">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grid-container  d-flex" >
                <div class="grid " v-for="(user, index) in collaborators.data" :key="user.id">
                   <div class="card text-white bg-info rounded-lg shadow-sm border-0 mb-3" style="max-width: 20rem; height:100%;">

                        <div class="card-body container">
                            <div class="row d-flex justify-content-center align-items-center text-center">
                                <div class="user-pic col-12 mb-4">
                                    <img class="img-responsive rounded-circle shadow-sm" src="../assets/user.png" alt="User picture">
                                </div>
                                
                                <div class="col-12">
                                    <h3>{{user.firstName}} {{user.lastName}}</h3>
                                    <h4 class="font-weight-light">{{user.department_name}}</h4>
                                    <h6 v-if='index % 2 == 0'>Project manager</h6>
                                </div>              
                                <router-link :to="'/dashboard/collaborateur/'+user.id" class="stretched-link"></router-link>
                            </div>
                        </div>    
                    </div> 
                </div>
                
            </div>

            <pagination :data="collaborators" @pagination-change-page="getResults" class="mt-5"></pagination>

        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';

import pagination from 'laravel-vue-pagination'

export default {
    name: 'collaborateurs',
    components: {
        pagination
    },
    data(){
        return{
            collaborators: {},
            q: ''
        }
    },
    mounted() {
		// Fetch initial results
		this.getResults();
	},
    methods: {
        ...mapActions(['fetchUsers']),

        getResults(page = 1) {
			axios.get('user/index?page=' + page)
				.then(response => {
					this.collaborators = response.data;
				});
        },
        async searchCollaborator(){
            if(this.q.length > 3){
                    axios.get('user/index/' + this.q)
                        .then(response => this.collaborators = response.data)
                        .catch(error => console.log(error));
                } else {
                    axios.get('user/index')
                        .then(response => {
                            this.collaborators = response.data;
                            console.log(response.data);
                            })
                        .catch(error => console.log(error));
                } 
        },
    },
    computed: {
        ...mapGetters({user: 'auth/user'})
    },
    // created(){
    //     this.fetchUsers();
    //     this.collaborators = this.allUsers;
    // }
}
</script>

<style>
.grid-container{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    
}

.grid{
    padding: 1em;
}
</style>