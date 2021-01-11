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
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in userList" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.email }}</td>
            <td>
            </td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
</template>

<script>

export default {
    props: ["userList"],

};
</script>

<style lang="scss" scoped></style>
