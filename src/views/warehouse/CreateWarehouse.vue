<template>

  <b-card
    title="Vertical Form"
  >
    <b-form @submit.prevent>
      <b-row>

        <!-- first name -->
        <b-col cols="12">
          <b-form-group
            label="First Name"
            label-for="v-first-name"
          >
            <b-form-input
              id="v-first-name"
              placeholder="First Name"
            />
          </b-form-group>
        </b-col>

        <!-- email -->
        <b-col cols="12">
          <b-form-group
            label="Email"
            label-for="v-email"
          >
            <b-form-input
              id="v-email"
              type="email"
              placeholder="Email"
            />
          </b-form-group>
        </b-col>

        <!-- mobile -->
        <b-col cols="12">
          <b-form-group
            label="Mobile"
            label-for="v-mobile"
          >
            <b-form-input
              id="v-mobile"
              type="number"
              placeholder="Mobile"
            />
          </b-form-group>
        </b-col>

        <!-- password -->
        <b-col cols="12">
          <b-form-group
            label="Password"
            label-for="v-password"
          >
            <b-form-input
              id="v-password"
              type="password"
              placeholder="Password"
            />
          </b-form-group>
        </b-col>

        <!-- submit and cancel -->
        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
          >
            Submit
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="warning"
          >
            Cancel
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import {
  BCard, BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
