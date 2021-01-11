<template>
  <v-app>
    <v-main>
      <div class="Scorp">
        <v-container>
              <UserList/>
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
