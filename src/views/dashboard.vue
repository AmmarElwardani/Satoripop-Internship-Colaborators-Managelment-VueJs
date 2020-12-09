<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-4">
                   <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                        <div class="card-header container">
                            <div class="row d-flex">
                                
                                <div class="col">Total:</div>
                                
                                <div class="col">{{genderCount ? total : 0}}</div>
                                
                                <div class="col">
                                    <i class="fas fa-user-friends ml-auto"></i>
                                </div>
                            </div>
                        </div>
                        <div class="card-body container">
                            <div class="row d-flex justify-content-center">
                                    <div class="col">
                                        <p class="card-text"> {{genderCount ? genderCount.male : 0}} </p>
                                    </div>        

                                    <div class="col">
                                        <i class="fas fa-male"></i>
                                    </div>              
                                    
                                    <div class="col" >
                                        <p class="card-text"> {{genderCount ? genderCount.female : 0}}</p>
                                    </div>
                                
                                    <div class="col">
                                        <i class="fas fa-female"></i>
                                    </div>
                                
                            </div>
                        </div>    
                    </div> 
                </div>

                <div class="col-4" v-for="(department, index) in departments.data" :key="index">
                    <div :class="`card text-white bg-${departments.designColors[index]} mb-3`" style="max-width: 18rem;">
                        <div class="card-header container">
                            <div class="row d-flex">
                                
                                <div class="col">{{ department.Nb }}</div>
                                
                                <div class="col"><i :class="departments.icons[index]"></i></div>
                                

                            </div>
                        </div>
                        <div class="card-body align-items-center d-flex justify-content-center">
                            <div class="card-text">
                                {{ department.Id }}
                            </div>        
                        </div>    
                    </div> 
                </div>
              </div>
        </div>

            <table class="table table-striped table-dark mt-5">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Département</th>
                <th scope="col">Date d'empoi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in allUsers" :key="user.id">
                <th scope="row"> {{user.id}} </th>
                <td> {{user.firstName}} </td>
                <td>{{user.department_name}}</td>
                <td>{{user.hiringDate}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';
export default {
    name: 'dashboard',
    components: {
        //
    },
    data: () => {
        return{
            genderCount: null,
            departments: {
                designColors: [
                    'danger',
                    'success',
                    'info',
                    'warning'
                ],
                data: [],
                icons: [
                    "fas fa-paint-brush",
                    "far fa-gem",
                    "fas fa-network-wired",
                    "fas fa-magic"
                ]
            }
        }
    },
    methods: {
        ...mapActions(['fetchUsers']),
        async fetchGenderCount(){
            this.genderCount = await axios.get('user/genderCount').then(
                response=> this.genderCount = response.data
            );
        },
        async fetchDepartmentStats(){
            await axios.get('user/departmentStat').then(
                response => {
                    console.log(response.data[0]);
                    this.departments.data = response.data
                }
            );
        }
    },
    computed: {
        ...mapGetters(['allUsers']),
        total(){
            return this.genderCount.male + this.genderCount.female;
        }
    },
    created(){
        this.fetchUsers();
        this.fetchGenderCount();
        this.fetchDepartmentStats();
    }
}
</script>

<style>

</style>