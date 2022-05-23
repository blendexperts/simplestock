<template>
  <b-card title="Warehouses">
  <b-card-text>Warehouse are where stock is stored or manufacturing operations are carried out. You will need at least one warehouse configured to be able to manage stock and create recipe batches.</b-card-text>
    <b-table class="table-bordered table-striped" responsive="sm"  :items="items" />
    <b-button
      variant="primary"
      :to="{ name: 'create-warehouse'}"
    >
      Create Warehouse
    </b-button>
  </b-card>
</template>

<script>
import { BCard, BCardText, BTable, BButton } from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardText,
    BTable,
    BButton,
  },
  data() {
    return {
      items: [
        {
          age: 40, first_name: 'Dickerson', last_name: 'Macdonald', Occupation: 'Job',
        },
        {
          age: 21, first_name: 'Larsen', last_name: 'Shaw', Occupation: 'Job',
        },
        {
          age: 89, first_name: 'Geneva', last_name: 'Wilson', Occupation: 'Bussiness',
        },
        {
          age: 38, first_name: 'Jami', last_name: 'Carney', Occupation: 'Bussiness',
        },
        {
          age: 40, first_name: 'James', last_name: 'Thomson', Occupation: 'Job',
        },
      ],
    }
  },
}
</script>
