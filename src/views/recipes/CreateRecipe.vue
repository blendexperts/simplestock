<template>
<div>
  <b-card
    title="Recipe Detail"
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
            :to="{ name: 'recipes'}"
          >
            Cancel
          </b-button>
        </b-col>
      </b-row>
    </b-form>
    </b-card>
    <b-card
      title="Ingredients"
    >
      <b-form
        ref="form"
        :style="{height: trHeight}"
        class="repeater-form"
        @submit.prevent="repeateAgain"
      >

        <!-- Row Loop -->
        <b-row
          v-for="(item, index) in items"
          :id="item.id"
          :key="item.id"
          ref="row"
        >

          <!-- Item Name -->
          <b-col md="4">
            <b-form-group
              label="Item Name"
              label-for="item-name"
            >
              <b-form-input
                id="item-name"
                type="text"
                placeholder="Vuexy Admin Template"
              />
            </b-form-group>
          </b-col>

          <!-- Cost -->
          <b-col md="2">
            <b-form-group
              label="Cost"
              label-for="cost"
            >
              <b-form-input
                id="cost"
                type="number"
                placeholder="32"
              />
            </b-form-group>
          </b-col>

          <!-- Quantity -->
          <b-col md="2">
            <b-form-group
              label="Quantity"
              label-for="quantity"
            >
              <b-form-input
                id="quantity"
                type="number"
                placeholder="1"
              />
            </b-form-group>
          </b-col>

          <!-- Profession -->
          <b-col
            lg="2"
            md="1"
          >
            <b-form-group
              label="Price"
              label-for="price"
            >
              <b-form-input
                id="pzrice"
                value="32$"
                plaintext
              />
            </b-form-group>
          </b-col>

          <!-- Remove Button -->
          <b-col
            lg="2"
            md="3"
            class="mb-50"
          >
            <b-button
              v-ripple.400="'rgba(234, 84, 85, 0.15)'"
              variant="outline-danger"
              class="mt-0 mt-md-2"
              @click="removeItem(index)"
            >
              <feather-icon
                icon="XIcon"
                class="mr-25"
              />
              <span>Delete</span>
            </b-button>
          </b-col>
          <b-col cols="12">
            <hr>
          </b-col>
        </b-row>

      </b-form>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      @click="repeateAgain"
    >
      <feather-icon
        icon="PlusIcon"
        class="mr-25"
      />
      <span>Add New</span>
    </b-button>
  </b-card>
  </div>
</template>

<script>
import {
  BCard, BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BCard,
    BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      items: [{
        id: 1,
        selected: 'male',
        selected1: 'designer',
        prevHeight: 0,
      }],
      nextTodoId: 2,
    }
  },
  mounted() {
    this.initTrHeight()
  },
  created() {
    window.addEventListener('resize', this.initTrHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
  },
  methods: {
    repeateAgain() {
      this.items.push({
        id: this.nextTodoId += this.nextTodoId,
      })

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
    },
    removeItem(index) {
      this.items.splice(index, 1)
      this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}
</style>
</script>
