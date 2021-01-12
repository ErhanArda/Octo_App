<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="success"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon small>
              mdi-account-edit
            </v-icon>
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
                v-model="userUp.first_name"
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
                        v-model="userUp.last_name"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                        v-model="userUp.email"

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
            @click="onUpdate"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>

export default {
    props:["userUp"],
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
    onUpdate() {
        const userData = {
            id:this.userUp.id,
            first_name: this.userUp.first_name,
            last_name: this.userUp.last_name,
            email: this.userUp.email,
        };
        console.log('userData', userData)
        this.$store.dispatch("updateUser", userData);
        this.dialog = false
        },
    },
}
</script>