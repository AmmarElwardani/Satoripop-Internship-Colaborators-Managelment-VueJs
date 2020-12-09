<template>
  <div class="container justify-content-center align-items-center">
    <form action="" v-if="collaborator" @submit.prevent="updateCollaborator()">
      <div class="d-flex mb-5 ">
            <div class="ml-auto" v-if="user">
                <button v-if="user.permissions.includes('update')" button type="button" class="btn btn-sm btn-success mr-3" @click="readOnly=false">Modifier Collaborateur</button>
                <button v-if="user.permissions.includes('delete')" button type="button" class="btn btn-sm btn-danger " @click="deleteCollaborator()">Supprimer Collaborateur</button>
        </div>
      </div>
      
        <div class="container">
            <div class="row align-items-center">
                
                <div class="col-md-12 text-success">
                    <h4>Info Personnelles</h4>
                </div>

                <div class="col-md-3">
                <img src="../assets/user.png" width="250" alt="" class="img-fluid">
                </div>

                <div class="col-md-9 row">
                
                    <div class="col-md-4">
                        <div class="form-group">
                            <label :for="collaborator.lastName" class="text-muted mb-1">Nom</label>
                            <input type="text" :name="collaborator.lastName" v-model="collaborator.lastName"  class="form-control" :disabled="readOnly">
                            <span class="text-danger small" v-if="collaborator.errors.has('lastName')" v-text="collaborator.errors.get('lastName')"></span>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="form-group">
                            <label :for="collaborator.firstName" class="text-muted mb-1">Prenom</label>
                            <input type="text" :name="collaborator.firstName" v-model="collaborator.firstName"  class="form-control" :disabled="readOnly">
                            <span class="text-danger small" v-if="collaborator.errors.has('firstName')" v-text="collaborator.errors.get('firstName')"></span>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label :for="collaborator.email" class="text-muted mb-1">Email</label>
                            <input type="email" :name="collaborator.email" v-model="collaborator.email"  class="form-control" :disabled="readOnly">
                            <span class="text-danger small" v-if="collaborator.errors.has('email')" v-text="collaborator.errors.get('email')"></span>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="form-group">
                            <label :for="collaborator.password" class="text-muted mb-1">Mot de passe</label>
                            <input type="password"  :name="collaborator.password" v-model="collaborator.password" class="form-control" :disabled="readOnly">
                            <span class="text-danger small" v-if="collaborator.errors.has('password')" v-text="collaborator.errors.get('password')"></span>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label :for="collaborator.phone" class="text-muted mb-1">Telephone</label>
                            <input type="text" :name="collaborator.phone" v-model="collaborator.phone" class="form-control" :disabled="readOnly">
                            <span class="text-danger small" v-if="collaborator.errors.has('phone')" v-text="collaborator.errors.get('phone')"></span>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                    <div class="form-group">
                        <label class="text-muted mb-1">Date de naissance</label>
                        <input type="text" name="" v-model="collaborator.birthDate" class="form-control" :disabled="readOnly">
                    </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                                <label class="text-muted mb-1">Etat Civil</label>
                                <select name="" v-model="collaborator.civilState" class="form-control" :disabled="readOnly">
                                    <option value="single">Célibataire</option>
                                    <option value="maried">Marié(e)</option>
                                </select>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="text-muted mb-1">Adresse</label>
                            <input type="address" name="" v-model="collaborator.address" class="form-control" :disabled="readOnly">
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="text-muted mb-1">Genre</label>
                            <select name="" v-model="collaborator.gender" class="form-control" :disabled="readOnly">
                                <option value="1">Homme</option>
                                <option value="0">Femme</option>
                            </select>
                            <span class="text-danger small" v-if="collaborator.errors.has('gender')" v-text="collaborator.errors.get('gender')"></span>
                        </div>
                    </div>

                </div>

                <div class="justify-content-center align-items-center mt-5">
                <div class="col-md-12 text-success">
                    <h4>Info Contractuelles</h4>
                </div>
                
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="text-muted mb-1">Société</label>
                            <select name="company_id" v-model="collaborator.company_id" class="form-control" @change="collaborator.errors.clear('company_id')" :disabled="readOnly">
                                <option value="" default>Select</option>
                                <option v-for="company in companies" :key="company.id" :value="company.id">{{ company.name }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="text-muted mb-1">Departement</label>
                            <select name="department_id" v-model="collaborator.department_id" class="form-control" @change="collaborator.errors.clear('department_id')" :disabled="readOnly">
                                <option value="" default>Select</option>
                                <option v-for="department in departments" :key="department.id" :value="department.id">{{ department.name }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="text-muted mb-1">Niveau d'expérience</label>
                            <select name="experienceLevel" id="experienceLevel" v-model="collaborator.experienceLevel" class="form-control" @change="collaborator.errors.clear('experienceLevel')" :disabled="readOnly">
                                <option value="">Select</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                                <option value="expert">Expert</option>
                            </select>
                            <span class="text-danger small" v-if="collaborator.errors.has('experienceLevel')" v-text="collaborator.errors.get('experienceLevel')"></span>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="text-muted mb-1">Post occupé</label>
                            <input type="text" name="" v-model="collaborator.position" class="form-control" :disabled="readOnly">
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="text-muted mb-1">Date d'embauche</label>
                            <input type="date" name="" v-model="collaborator.hiringDate" class="form-control" :disabled="readOnly">
                            <span class="text-danger small" v-if="collaborator.errors.has('hiringDate')" v-text="collaborator.errors.get('hiringDate')"></span>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="text-muted mb-1">Date fin de contract</label>
                            <input type="date" name="" v-model="collaborator.endOfContractDate" class="form-control" :disabled="readOnly">
                            <span class="text-danger small" v-if="collaborator.errors.has('endOfContractDate')" v-text="collaborator.errors.get('endOfContractDate')"></span>
                        </div>
                    </div>
                </div>
                </div>

                <div class="col-md-12 text-success mt-5">
                <h4>Compétences</h4>
                </div>

                <div class="justify-content-center align-items-center mx-auto overflow-hidden shadow-sm w-100">
                    <button v-if=!readOnly  button type="button" class="btn btn-sm btn-success rounded-0" data-toggle="modal" data-target="#edit-skill-modal"
                    @click="clearForm(editSkill);addingNewElement=true;url='manageCollaborator/addSkill'">Ajout Compétence</button>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">level</th>
                            <th v-if=!readOnly>Actions</th>
                        </tr>
                    </thead>
                    <tbody v-for="(skill, index) in skills" :key="index">
                        <tr>
                            <td>{{ skill.name }}</td>
                            <td>{{ skill.level }}</td>
                            <td v-if=!readOnly>
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-sm btn-secondary mr-2 rounded-0"  data-toggle="modal" data-target="#edit-skill-modal" 
                                        @click="loadSkillData(index);currentPatchedId=skill.id;addingNewElement=false;url='manageCollaborator/updateSkill'">Edit</button>
                                <button type="button" class="btn btn-sm btn-danger rounded-0" @click="deleteFromPendingData(skills, index, 'Skill')">Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>  

                <!-- Modal -->
                    <edit-modal v-if=!readOnly name="skill" :modalData="editSkill" :url="url" :newElement="addingNewElement" :id="currentPatchedId" @onSuccess="fetchSkills()" >
                        <template v-slot:modal-body>
                            <form>
                                <div class="form-group">
                                    <label for="#">Name</label>
                                    <input class="form-control" type="text" v-model="editSkill.name">
                                    <span class="text-danger small" v-if="editSkill.errors.has('name')" v-text="editSkill.errors.get('name')"></span>
                                </div>
                                <div class="form-group">
                                    <label for="#">Level</label>
                                    <select class="form-control" v-model="editSkill.level">
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                        <option value="expert">Expert</option>
                                    </select>
                                </div>


                            </form>
                        </template>
                    </edit-modal>

                </div>
            </div>
            
                <div class="col-md-12 text-success mt-5">
                    <h4>Evaluation</h4>
                </div>

                <div class="justify-content-center align-items-center mx-auto overflow-hidden shadow-sm w-100">
                    <button  v-if=!readOnly button type="button" class="btn btn-sm btn-success rounded-0" data-toggle="modal" data-target="#edit-evaluation-modal"
                        @click="clearForm(editEvaluation);addingNewElement=true;url='manageCollaborator/addEvaluation'">Ajout Evaluation</button>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Date</th>
                            <th scope="col">Etat</th>
                            <th v-if=!readOnly scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody v-for="(evaluation, index) in evaluations" :key="index">
                        <tr>
                            <td>{{ evaluation.type }}</td>
                            <td>{{ evaluation.evalDate }}</td>
                            <td>{{ evaluation.result }}</td>
                            <td v-if=!readOnly> 
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-sm btn-secondary mr-2 rounded-0"  data-toggle="modal" data-target="#edit-evaluation-modal" 
                                    @click="loadEvaluationData(index);currentPatchedId=evaluation.id;addingNewElement=false;url='manageCollaborator/updateEvaluation'">Edit</button>
                                <button type="button" class="btn btn-sm btn-danger rounded-0" @click="deleteFromPendingData(evaluations, index, 'Evaluation')">Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>  

                <!-- Modal -->
                    <edit-modal v-if=!readOnly name="evaluation" :modalData="editEvaluation" :url="url" :newElement="addingNewElement" :id="currentPatchedId" @onSuccess="fetchEvaluations()" >
                        <template v-slot:modal-body>
                            <form>
                                <div class="form-group">
                                    <label for="#">Type</label>
                                    <input class="form-control" type="text" v-model="editEvaluation.type">
                                    <span class="text-danger small" v-if="editEvaluation.errors.has('type')" v-text="editEvaluation.errors.get('type')"></span>
                                </div>
                                <div class="form-group">
                                    <label for="#">Evaluation Date</label>
                                    <input class="form-control" type="text" v-model="editEvaluation.evalDate">
                                    <span class="text-danger small" v-if="editEvaluation.errors.has('evalDate')" v-text="editEvaluation.errors.get('evalDate')"></span>
                                </div>
                                <div class="form-group">
                                    <label for="#">Result</label>
                                    <input class="form-control" type="text" v-model="editEvaluation.result">
                                    <span class="text-danger small" v-if="editEvaluation.errors.has('result')" v-text="editEvaluation.errors.get('result')"></span>
                                </div>


                            </form>
                        </template>
                    </edit-modal>

                </div>

                <div class="col-md-12 text-success mt-5">
                    <h4>Compteur de congés</h4>
                </div>
                
                <div class="justify-content-center align-items-center overflow-hidden shadow-sm w-100">
                    <button v-if=!readOnly   button type="button" class="btn btn-sm btn-success rounded-0" data-toggle="modal" data-target="#edit-leave-modal"
                        @click="clearForm(editLeave);addingNewElement=true;url='manageCollaborator/addLeave'">Ajout Congé</button>
                
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Date debut congés</th>
                            <th scope="col">Nombre de jours</th>
                            <th v-if=!readOnly scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody v-for="(leave, index) in leaves" :key="index">
                        <tr>
                            <td>{{ leave.startingFromDate }}</td>
                            <td>{{ leave.nbDays }}</td>
                            <td v-if=!readOnly>
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-sm btn-secondary mr-2 rounded-0"  data-toggle="modal" data-target="#edit-leave-modal"
                                    @click="loadLeaveData(index);currentPatchedId=leave.id ; addingNewElement=false;url='manageCollaborator/updateLeave'">Edit</button>
                                <button type="button" class="btn btn-sm btn-danger rounded-0" @click="deleteFromPendingData(leaves, index,'Leave')">Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>  

                <!-- Modal -->
                    <edit-modal v-if=!readOnly name="leave" :modalData="editLeave" :url="url" :newElement="addingNewElement" :id="currentPatchedId" @onSuccess="fetchLeaves()">
                        <template v-slot:modal-body>
                            <form>
                                <div class="form-group">
                                    <label for="#">Date Début</label>
                                    <input class="form-control" type="text" v-model="editLeave.startingFromDate">
                                    <span class="text-danger small" v-if="editLeave.errors.has('startingFromDate')" v-text="editLeave.errors.get('startingFromDate')"></span>
                                </div>
                                <div class="form-group">
                                    <label for="#">Nombre de jours</label>
                                    <input class="form-control" type="number" v-model="editLeave.nbDays">
                                    <span class="text-danger small" v-if="editLeave.errors.has('nbDays')" v-text="editLeave.errors.get('nbDays')"></span>
                                </div>
                            </form>
                        </template>
                    </edit-modal>

            </div>
        </div>
        <button  v-if="!readOnly" type="submit" class="btn btn-sm btn-success mr-3">Enregistrer les modifications</button>
    </form>
  </div>
</template>

<script>
import Form from '../core/Form';
import axios from 'axios';
import EditModal from './EditModal';
import {mapGetters} from 'vuex';

export default {
  name: 'collaborator-profile',
  components: {
      'edit-modal': EditModal,
  },
  computed:{
      ...mapGetters({user: 'auth/user'})
  },
  data(){
    return {
        user_id: this.$route.params.id,
        url: null,
      collaborator: null,
      readOnly: true,

      currentPatchedId: null,
        addingNewElement: false,
       
      skills:[],
      departments: [],
      companies: [],
      evaluations : [],
      leaves: [],  
    
      editSkill: new Form( {
          name: '',
          level: '',
          user_id: null,
      }),
      editEvaluation: new Form({
          type: '',
          evalDate: '',
          result: '',
          user_id: null
      }),
      editLeave: new Form ({
          startingFromDate: '',
          nbDays: '',
          user_id: null
      })
      
    }
  },
 mounted() {
      const departmentsReq = axios.get('/departments');
      const companiesReq = axios.get('/companies');
      
      axios.all([departmentsReq, companiesReq]).then(responses => {
          this.departments = responses[0].data;
          this.companies = responses[1].data;
      })

      this.user_id = this.editSkill.user_id = this.editEvaluation.user_id= this.editLeave.user_id = this.$route.params.id;
  },
  methods:{
    clearForm(form){
        form.reset()
    },
    loadSkillData(index) {
        this.editSkill.name = this.skills[index].name;
        this.editSkill.level = this.skills[index].level;
    },
    loadEvaluationData(index){
        this.editEvaluation.type = this.evaluations[index].type;
        console.log(this.evaluations[index].evalDate);
        this.editEvaluation.evalDate = this.evaluations[index].evalDate;
        this.editEvaluation.result = this.evaluations[index].result;
        
    },
    loadLeaveData(index){
        this.editLeave.startingFromDate = this.leaves[index].startingFromDate;
        this.editLeave.nbDays = this.leaves[index].nbDays;
       
        
    },

    async fetchUser(){
      axios.get('user/show/'+this.user_id).then( response => {
        this.user = response.data;
        response.data['password'] = null;
        this.collaborator = new Form(response.data);

        console.log(this.user);
      });
    // console.log(this.user_id);
    },

    fetchSkills(){
      axios.get('manageCollaborator/skill/show/' +this.user_id)
              .then( response => {
                this.skills = response.data;
              })
              .catch( error => {
                console.log(error)
              });
    },
    fetchEvaluations(){
      axios.get('manageCollaborator/evaluation/show/' +this.user_id)
              .then( response => {
                this.evaluations = response.data.data;
                
              })
              .catch( error => {
                console.log(error)
              });
    },
    fetchLeaves(){
      axios.get('manageCollaborator/leave/show/' +this.user_id)
              .then( response => {
                this.leaves = response.data.data;
                
              })
              .catch( error => {
                console.log(error)
              });
    },
    deleteFromPendingData(table, index, name) {
            axios.delete('/manageCollaborator/delete' + name + '/' + table[index].id)
                .then( response => {
                    console.log(response);
                    table.splice(index, 1);
                })
                .catch(error => {
                    console.log(error)
                });
      },
      deleteCollaborator(){
        if(confirm('Êtes-vous sûr de vouloir supprimer ce collaborateur?')) {
          axios.delete('/user/delete/'+this.user_id)
                .then(response => {
                    this.$router.replace('/dashboard');
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                });
        }
      },
      updateCollaborator(){
          this.collaborator.patch('/user/update/' + this.user_id)
                .then(response => {
                    this.$router.replace('/dashboard');
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
      }
  },
  created (){
    this.fetchUser();
    this.fetchSkills();
    this.fetchEvaluations();
    this.fetchLeaves();
   
  }
}
</script>


<style>

</style>