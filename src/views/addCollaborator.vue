<template>
    <div >
        <div class="container">
            <form @submit.prevent="onSubmit" @keydown="collaborator.errors.clear($event.target.name)">
                <div class="intro h-100">
                    <div class="row">
                        <div class="col-md-6 ml-3 text-info">
                            <h3>Ajout collaborateur </h3>
                            
                        </div>
                    </div>

                    <div class="row h-50 align-items-center d-flex">
                        <div class="col-md-5">
                            <!-- <img src="../assets/user.png" width="250" alt="" class="img-fluid"> -->
                        </div>
                    </div>

                    <div class="container">
                            <div class="row align-items-center">
                            
                            <div class="col-md-4">
                                <img src="../assets/user.png" width="250" alt="" class="img-fluid">
                            </div>

                            <div class="col-md-8 row">
                            
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="" v-model="collaborator.firstName" placeholder="First name" class="form-control">
                                        <span class="text-danger small" v-if="collaborator.errors.has('firstName')" v-text="collaborator.errors.get('firstName')"></span>
                                    </div>
                                </div>

                                <div class="col-md-6 ">
                                    <div class="form-group">
                                        <input type="text" name="" v-model="collaborator.lastName" placeholder="Last name" class="form-control">
                                        <span class="text-danger small" v-if="collaborator.errors.has('lastName')" v-text="collaborator.errors.get('lastName')"></span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" name="" v-model="collaborator.email" placeholder="JhonDoe@gmail.com" class="form-control">
                                        <span class="text-danger small" v-if="collaborator.errors.has('email')" v-text="collaborator.errors.get('email')"></span>
                                    </div>
                                </div>


                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="password"  v-model="collaborator.password" placeholder="passowrd" class="form-control">
                                        <span class="text-danger small" v-if="collaborator.errors.has('password')" v-text="collaborator.errors.get('password')"></span>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="phone" v-model="collaborator.phone" placeholder="Phone" class="form-control">
                                        <span class="text-danger small" v-if="collaborator.errors.has('phone')" v-text="collaborator.errors.get('phone')"></span>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
            
                    </div>
                    
                </div>


                <div class="collaborator-content pt-5">

                    <ul class="nav nav-pills ml-3" id="myTab" role="tablist">

                        <li class="nav-item">
                        <a class="nav-link active" id="collaborator-tab" data-toggle="tab" href="#collaborator" role="tab" aria-controls="collaborator" aria-selected="true">Informations</a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link"  id="contract-tab" data-toggle="tab" href="#contract" role="tab" aria-controls="account" aria-selected="false">Contrat de travail</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" id="leave-tab" data-toggle="tab" href="#leave" role="tab" aria-controls="leave" aria-selected="false">Compteur de congés</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" id="skill-tab" data-toggle="tab" href="#skill" role="tab" aria-controls="skill" aria-selected="false">Compétences</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" id="formations-tab" data-toggle="tab" href="#formations" role="tab" aria-controls="formations" aria-selected="false">Formations</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" id="eval-tab" data-toggle="tab" href="#evaluation" role="tab" aria-controls="evaluation" aria-selected="false">Evaluations</a>
                        </li>
                    
                    </ul>

                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active pt-3" id="collaborator" role="tabpanel" aria-labelledby="collaborator-tab">

                            <div class="container">
                                
                                <div class="row">
                                    
                                    <div class="col-md-12 text-success">
                                        <h4>Info Personnelles</h4>
                                    </div>


                                    <div class="col-md-3">
                                    <div class="form-group">
                                        <p class="text-muted">Date de naissance</p>
                                        <input type="date" name="" v-model="collaborator.birthDate" class="form-control">
                                    </div>
                                    </div>

                                    <div class="col-md-3">
                                        <p class="text-muted">Etat Civil</p>
                                        <div class="form-group">
                                            <select name="" v-model="collaborator.civilState" class="form-control">
                                                <option value="single">Célibataire</option>
                                                <option value="maried">Marié(e)</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <p class="text-muted">Adresse</p>
                                            <input type="address" name="" v-model="collaborator.address" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <p class="text-muted">Genre</p>
                                        <div class="form-group">
                                            <select name="" v-model="collaborator.gender" class="form-control">
                                                <option value="1">Homme</option>
                                                <option value="0">Femme</option>
                                            </select>
                                            <span class="text-danger small" v-if="collaborator.errors.has('gender')" v-text="collaborator.errors.get('gender')"></span>
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <p class="text-muted">Nationalité</p>
                                        <div class="form-group">
                                            <input type="text" name="" v-model="collaborator.nationality" placeholder="nationality" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <p class="text-muted">N°CIN</p>
                                        <div class="form-group">
                                            <input type="text" name="" v-model="collaborator.nCin"  class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <p class="text-muted">N°Passport</p>
                                        <div class="form-group">
                                            <input type="text" name="" v-model="collaborator.nPassport"  class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <p class="text-muted">N°CNSS</p>
                                        <div class="form-group">
                                            <input type="text" name="" v-model="collaborator.nCnss"  class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-md-12 text-success">
                                        <h4>Info RH</h4>
                                    </div>

                                    <div class="col-md-3">
                                        <p class="text-muted">Ecole</p>
                                        <div class="form-group">
                                            <input type="text" name="" v-model="collaborator.school" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <p class="text-muted">Historique</p>
                                        <div class="form-group">
                                            <input type="text" name="" v-model="collaborator.history" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-3">
                                        <p class="text-muted">Niveau d'expérience</p>
                                        <div class="form-group">
                                            <select name="experienceLevel" id="experienceLevel" v-model="collaborator.experienceLevel" class="form-control" @change="collaborator.errors.clear('experienceLevel')">
                                                <option value="">Select</option>
                                                <option value="beginner">Beginner</option>
                                                <option value="intermediate">Intermediate</option>
                                                <option value="advanced">Advanced</option>
                                                <option value="expert">Expert</option>
                                            </select>
                                            <span class="text-danger small" v-if="collaborator.errors.has('experienceLevel')" v-text="collaborator.errors.get('experienceLevel')"></span>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-3">
                                        <p class="text-muted">Source</p>
                                        <div class="form-group">
                                            <input type="text" name="" v-model="collaborator.source" class="form-control">
                                        </div>
                                    </div>


                                </div>
                        </div>
                        
                        </div>

                        <div class="tab-pane fade pt-3" id="contract" role="tabpanel" aria-labelledby="contract-tab">
                            <div class="container">
                                
                                <div class="row">
                                    
                                    <div class="col-md-12 text-success">
                                        <h4>Info Contractuelles</h4>
                                    </div>


                                    <div class="col-md-3">
                                    <div class="form-group">
                                        <p class="text-muted">Date d'embauche</p>
                                        <input type="date" name="" v-model="collaborator.hiringDate" class="form-control">
                                        <span class="text-danger small" v-if="collaborator.errors.has('hiringDate')" v-text="collaborator.errors.get('hiringDate')"></span>
                                    </div>
                                    </div>

                                    <div class="col-md-3">
                                        <p class="text-muted">Departement</p>
                                        <div class="form-group">
                                            <select name="department_id" v-model="collaborator.department_id" class="form-control" @change="collaborator.errors.clear('department_id')">
                                                <option value="" default>Select</option>
                                                <option v-for="department in departments" :key="department.id" :value="department.id">{{ department.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <p class="text-muted">Post occupé</p>
                                            <input type="text" name="" v-model="collaborator.position" class="form-control">
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <p class="text-muted">Date fin de contract</p>
                                        <div class="form-group">
                                            <input type="date" name="" v-model="collaborator.endOfContractDate" class="form-control">
                                            <span class="text-danger small" v-if="collaborator.errors.has('endOfContractDate')" v-text="collaborator.errors.get('endOfContractDate')"></span>
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <p class="text-muted">Société</p>
                                        <div class="form-group">
                                            <select name="company_id" v-model="collaborator.company_id" class="form-control" @change="collaborator.errors.clear('company_id')">
                                                <option value="" default>Select</option>
                                                <option v-for="company in companies" :key="company.id" :value="company.id">{{ company.name }}</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <p class="text-muted">Type de contrat</p>
                                        <div class="form-group">
                                            <input type="text" name="" v-model="collaborator.contractType"  class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <p class="text-muted">Superviseur</p>
                                        <div class="form-group">
                                            <input type="number" name="" v-model="collaborator.supervisorId"  class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade pt-3" id="leave" role="tabpanel" aria-labelledby="leave-tab">
                            <div class="col-md-12 text-success">
                                        <h4>Compteurs de congés</h4>
                                    </div>
                            <div class="row">
                                <table class="table table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">Date debut congés</th>
                                            <th scope="col">Nombre de jours</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="(pendingLeave, index) in leavePendingData" :key="index">
                                        <tr>
                                            <td>{{ pendingLeave.startingFromDate }}</td>
                                            <td>{{ pendingLeave.nbDays }}</td>
                                            <td>
                                                <!-- Button trigger modal -->
                                                
                                                <button type="button" class="btn btn-sm btn-danger" @click="deleteFromPendingData(leavePendingData, index)">Delete</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>  
                                <div class="col-4 align-item-center mx-auto">
                                    
                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#leave-timer">
                                        Ajout congé
                                    </button>

                                    <!-- Modal -->
                                    <div class="modal fade" id="leave-timer" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title text-dark" id="leaveTimerTitle">Ajout Congés</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body form-group">
                                                <p class="text-muted">Date début</p>
                                                <input type="date" name="startingFromDate"  v-model="leave.startingFromDate" class="form-control">
                                                <span class="text-danger small" v-if="leave.errors.has('startingFromDate')" v-text="leave.errors.get('startingFromDate')"></span>
                                                <p class="text-muted mt-3">nombre</p>
                                                <input type="number" name="nbDays"  v-model="leave.nbDays" class="form-control">
                                                <span class="text-danger small" v-if="leave.errors.has('nbDays')" v-text="leave.errors.get('nbDays')"></span>
                                            </div>
                                             <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal" :disabled="leave.errors.any()">Close</button>
                                                <button type="button" class="btn btn-info" v-on:click="addingleavePendingData">Save changes</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div class="tab-pane fade pt-3" id="skill" role="tabpanel" aria-labelledby="skill-tab">
                            <div class="col-md-12 text-success">
                                        <h4>Compétences</h4>
                            </div>
                            <div class="row">
                                <table class="table table-dark col-6">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nom</th>
                                            <th scope="col">level</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="(pendingSkill, index) in skillPendingData" :key="index">
                                        <tr>
                                            <td>{{ pendingSkill.name }}</td>
                                            <td>{{ pendingSkill.level }}</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-danger" @click="deleteFromPendingData(skillPendingData, index)">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="col-4 align-item-center mx-auto">
                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#add-skill">
                                        Ajout Compétence
                                    </button>

                                    <!-- Modal -->
                                    <div class="modal fade" id="add-skill" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title text-dark" id="leaveTimerTitle">Ajout Compétence</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body form-group">
                                                    <p class="text-muted">Nom</p>
                                                    <input type="text" name="name"  v-model="skill.name" class="form-control">
                                                    <span class="text-danger small" v-if="skill.errors.has('name')" v-text="skill.errors.get('name')"></span>
                                                    <p class="text-muted">Description</p>
                                                    <input type="text" name="description"  v-model="skill.description" class="form-control">
                                                    <span class="text-danger small" v-if="skill.errors.has('description')" v-text="skill.errors.get('description')"></span>
                                                    <p class="text-muted mt-3">note</p>
                                                    <!-- <input type="" name="" id="rating"  v-model="skill.note"> -->
                                                     <select name="" v-model="skill.level" class="form-control">
                                                        <option value="beginner">Beginner</option>
                                                        <option value="intermediate">Intermediate</option>
                                                        <option value="advanced">Advanced</option>
                                                        <option value="expert">Expert</option>
                                                    </select>
                                                    <span class="text-danger small" v-if="skill.errors.has('level')" v-text="skill.errors.get('level')"></span>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal" :disabled="skill.errors.any()">Close</button>
                                                    <button type="button" class="btn btn-info" v-on:click="addingskillPendingData" >Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade pt-3" id="formations" role="tabpanel" aria-labelledby="formations-tab"></div>

                        <div class="tab-pane fade pt-3" id="evaluation" role="tabpanel" aria-labelledby="eval-tab">
                            <div class="col-md-12 text-success">
                                <h4>Evaluations</h4>
                            </div>
                            <div class="row">
                                <div class="col-4 ml-auto d-flex">
                                    <!-- Button trigger modal -->
                                    <div class="d-flex align-items-center">
                                        <h5 class="mr-3">Nouveau</h5>
                                        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#add-eval">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                    </div>

                                    <!-- Modal -->
                                    <div class="modal fade" id="add-eval" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title text-dark" id="add-eval">Ajout evaluation</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body form-group">
                                                    <p class="text-muted">Type</p>
                                                    <input type="text" name="type"  v-model="evaluation.type" class="form-control">
                                                    <span class="text-danger small" v-if="evaluation.errors.has('type')" v-text="evaluation.errors.get('type')"></span>
                                                    <p class="text-muted">Date</p>
                                                    <input type="date" name="evalDate" class="form-control" v-model="evaluation.evalDate">
                                                    <span class="text-danger small" v-if="evaluation.errors.has('evalDate')" v-text="evaluation.errors.get('evalDate')"></span>
                                                    <p class="text-muted mt-3">Result</p>
                                                    <input type="text" name="result" class="form-control" v-model="evaluation.result">
                                                    <span class="text-danger small" v-if="evaluation.errors.has('result')" v-text="evaluation.errors.get('result')"></span>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal" :disabled="evaluation.errors.any()">Close</button>
                                                    <button type="button" class="btn btn-info" v-on:click="addingevaluationPendingData">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="row">
                                <table class="table table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">Responsable</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Etat</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="(pendingEvaluation, index) in evaluationPendingData" :key="index">
                                        <tr>
                                        <td>{{ pendingEvaluation.type }}</td>
                                        <td>RH</td>
                                        <td>{{ pendingEvaluation.evalDate }}</td>
                                        <td>{{ pendingEvaluation.result }}</td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-secondary mr-1">Edit</button>
                                            <button type="button" class="btn btn-sm btn-danger" @click="deleteFromPendingData(evaluationPendingData, index)">Delete</button>
                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>


                    </div>
                    
                </div>
            

                <div class="col-md-4 align-item-center mx-auto">
                    <div class="form-group">
                        <input type="submit"   value="Ajout collaborateur" class="btn btn-success w-100" :disabled="collaborator.errors.any()||skill.errors.any()||evaluation.errors.any()">
                    </div>
                </div>

            </form>
        </div>

    </div>
</template>

<script>
import Form from '../core/Form';
import axios from 'axios';

export default {
    name: "ajout-collaborateur",
    data(){
    return {
        collaborator: new Form({
            firstName: '',
            lastName:  '',
            phone: '',
            email: '',
            password: '',
            gender:'',
            experienceLevel: '',
            hiringDate:'',
            endOfContractDate:'',
            department_id: '',
            company_id: '',
            // address:null,
        }
        // account:{
        //     name:null,
        //     email:null,
        //     photoUrl:null,
        //     emailVerified:null,
        //     password:null,
        //     confirmPassword:null,
        //     uid:null
        // }

        ),
        skill: new Form({
            name: '',
            description:'',
            level: ''
        }),
        evaluation: new Form({
            type: '',
            evalDate: '',
            result: ''

        }),
        leave: new Form({
            startingFromDate: '',
            nbDays: '',
        }),
        skillPendingData: [], // skillPendingData
        evaluationPendingData: [],
        leavePendingData: [],

        departments: [],
        companies: []      
    }
  },
  mounted() {
      const departmentsReq = axios.get('/departments');
      const companiesReq = axios.get('/companies');

      axios.all([departmentsReq, companiesReq]).then(responses => {
          this.departments = responses[0].data;
          this.companies = responses[1].data;
      })
  },
  methods:{
      deleteFromPendingData(table, index) {
          table.splice(index, 1);
      },
      addingskillPendingData(){
          this.skill.post('/manageCollaborator/validateSkill')
                    .then( () => {
                        let skill = {
                            name : this.skill.name,
                            description: this.skill.description,
                            level: this.skill.level
                        }
                        this.skillPendingData.push(skill);
                        this.skill.reset();
                    })
                    .catch( () => {
                        // this.skill.name = '',
                        // this.skill.description = '',
                        // this.skill.level = null
                    });
      },
      addingevaluationPendingData(){
          this.evaluation.post('/manageCollaborator/validateEvaluation')
                            .then( () => {
                                let evaluation = {
                                    type: this.evaluation.type,
                                    evalDate: this.evaluation.evalDate,
                                    result: this.evaluation.result
                                }
                                this.evaluationPendingData.push(evaluation);
                                this.evaluation.reset();
                            })
                            .catch( () => {
                                
                            });
      },
    addingleavePendingData(){
          this.leave.post('/manageCollaborator/validateLeave')
                            .then( () => {
                                let leave = {
                                    startingFromDate: this.leave.startingFromDate,
                                    nbDays: this.leave.nbDays
                                }
                                this.leavePendingData.push(leave);
                                this.leave.reset();
                            })
                            .catch( () => {
                                
                            });
      },
      onSubmit(){
          this.collaborator.post('user/register')
                .then(response => {
                        const collaborator_id = response.collaborator_id;
                    
                        this.skillPendingData.forEach(item => {
                            item['user_id'] = collaborator_id;

                            axios.post('/manageCollaborator/addSkill/', item).then(response => {
                                console.log(response.data);
                            }).catch(error => { console.log(error) });
                        });

                        this.evaluationPendingData.forEach(item => {
                            item['user_id'] = collaborator_id;

                            axios.post('/manageCollaborator/addEvaluation/', item).then(response => {
                                console.log('hello world');
                                console.log(response.data);
                            }).catch(error => { console.log(error) });
                        });

                        this.leavePendingData.forEach(item => {
                            item['user_id'] = collaborator_id;

                            axios.post('/manageCollaborator/addLeave/', item).then(response => {
                                console.log('hello world');
                                console.log(response.data);
                            }).catch(error => { console.log(error) });
                        });
                        
                        this.$router.push('/dashboard/collaborateurs');
                    // axios.post('manageCollaborator/addSkill', {
                    //     user_id : response.user_id,
                    //     name : this.skill.name,
                    //     note : this.skill.note
                    // })
                }).catch(error => { console.log(error) });
      },
      uploadImage(){}
  }
}

</script>

<style>

</style>