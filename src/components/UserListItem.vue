<template>
    <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left">
                Id
            </th>
            <th class="text-left">
                Name
            </th>
            <th class="text-left">
                Surname
            </th>
            <th class="text-left">
                Email
            </th>
                <th><v-text-field v-model="searchText" label="Search" required></v-text-field></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in filteredUserList" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.email }}</td>
            <td>
            </td>
            <td>
                <UpdateUserInfo :userUp="user" />
            </td>
            <td>
            <v-btn @click="deleteUser(user.id)" color="error"> <v-icon small>
                mdi-delete
                </v-icon></v-btn>
            </td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
</template>

<script>
import UpdateUserInfo from "./UpdateUserInfo";

export default {
    components:{UpdateUserInfo},
    props: ["userList"],
    data() {
        return {
        searchText: "",
        };
    },
    methods:{
        deleteUser(userId){
        const willDelete = confirm(`Do you really want to delete record ${userId}? `)
        if (willDelete) {
        this.$store.dispatch("deleteUser",userId)
        }
        },
    },
    computed:{
        filteredUserList(){
        return this.userList.filter((user) =>
            user.first_name.toLowerCase().includes(this.searchText.toLowerCase()) ||
            user.last_name.toLowerCase().includes(this.searchText.toLowerCase()) ||
            user.email.includes(this.searchText)
        );
        }
    }
};
</script>

<style lang="scss" scoped></style>
