import axios from 'axios';

const state = {
    users: []
};

const getters = {
    allUsers: (state) => state.users
};


const mutations = {
    setUsers: (state, users) => (state.users = users)
};

const actions = {
    async fetchUsers({ commit }){
        try{
        const response = await axios.get('user/index');
        
        commit('setUsers', response.data.data);
        }catch(error){
            console.log(error.response);
        }
    },
};


export default{
    
    state,
    getters,
    actions,
    mutations
};