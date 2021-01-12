<template>
    <v-main>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add User
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Information</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                v-model="user.first_name"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                        v-model="user.last_name"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                        v-model="user.email"

                  label="Email"
                  required
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="onSave"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    </v-main>
</template>
<script>

export default {
    data() {
        return {
            dialog: false,
            user: {
            first_name: null,
            last_name: null,
            email: null,
            },
        }
    },
    methods: {
    onSave() {
        const userData = {
            ...this.user,
        };
        this.$store.dispatch("addNewUswer", userData);
        console.log('userData', userData)
        this.user= {
            first_name: null,
            last_name: null,
            email: null,
            }, 
        this.dialog = false
        },
    },
}
</script>