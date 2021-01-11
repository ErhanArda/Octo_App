<template>
    <div>
        <template>
            <UserListItem :userList="userList" />
        </template>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserListItem from "./UserListItem";
export default {
    components: {
        UserListItem
            },
    created() {
            this.$store.dispatch("fetchUserList");
    },
    computed:{
        ...mapGetters({
            userList: "_userList",
        })
    }
};
</script>

<style lang="scss" scoped></style>
