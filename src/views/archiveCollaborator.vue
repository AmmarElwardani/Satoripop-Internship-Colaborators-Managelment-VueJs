<template>
    <table class="table table-striped table-dark">
        <thead>
            <tr>
                <td>Name</td>
                <td>Deleted At</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            <template v-if="archivedUsers.length > 0">
                <tr v-for="(user, rowIndex) in archivedUsers" :key="user.id">
                    <td>{{ user.firstName + ' ' + user.lastName }}</td>
                    <td>{{ user.deleted_at }}</td>
                    <td>
                        <a href="#" class="btn btn-sm btn-secondary mr-1" @click="restore(rowIndex)">Restore</a>
                        <a href="#" class="btn btn-sm btn-danger" @click="deletePermantly(rowIndex)">Delete permantly</a>
                    </td>
                </tr>
            </template>
            <tr v-else>
                <th colspan="3" class="text-center text-danger">
                    <template>There's no archived collaborators.</template>
                </th>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            archivedUsers: []
        }
    },
    methods: {
        getArchivedUsers() {
            axios.get('/user/archive').then(response => {
                this.archivedUsers = response.data.data;
            }).catch(error => console.log(error));
        },
        restore(index) {
            axios.get(`/user/${this.archivedUsers[index].id}/restore`).then(() => { // /user/1/restore
                this.archivedUsers.splice(index,1);
            })
        },
        deletePermantly(index) {
            axios.delete(`/user/${this.archivedUsers[index].id}/delete-permantly`).then(() => {
                this.archivedUsers.splice(index, 1);
            }).catch(error => {
                console.log(error);
            });
        },
    },
    mounted() {
        this.getArchivedUsers();
        
    }
}
</script>