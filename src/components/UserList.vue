<template>
    <div>
        <template>
            <AddModal/>
            <UserListItem :userList="userList" />
            <!-- <v-pagination
                v-model="page"
                :length="userList.length "
            ></v-pagination> -->
        </template>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserListItem from "./UserListItem";
import AddModal from "./AddModal";

export default {
    components: {
        UserListItem,
        AddModal
            },
    created() {
            this.$store.dispatch("fetchUserList");
    },
    computed:{
        ...mapGetters({
            userList: "_userList",
        }),
        // page: {
        //     get(){
        //         return this.$store.getters.getPage
        //     },
        //     set(value){
        //         return this.$store.commit("setPage",value)
        //     }   
        // }
    },
    // watch:{
    //     page(){
    //         this.$store.dispatch("fetchUserList");
    //     }
    // }
};
</script>

<style lang="scss" scoped></style>
