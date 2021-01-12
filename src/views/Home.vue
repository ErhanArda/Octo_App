<template>
  <v-app>
    <v-main>
      <div class="Scorp">
        <v-container>
          <v-col lg="8" offset-lg="2" xl="8" offset-xl="2" md="12" >
            <v-card outlined height="70vh" min-height="60vh" class="mb-10">
              <UserList/>
            </v-card>
          </v-col>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import UserList from '../components/UserList'
export default {
  name: 'Home',
  components: {
    UserList
  }
}
</script>
