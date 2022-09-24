<template>
  <b-table striped hover :items="items" :fields="fields" class="text-center">
    <template #cell(activities)="data">
      <b-button
        :href="data.value.website.link"
        target="_blank"
        size="sm"
        :variant="data.value.website.link ? 'success' : 'danger'"
        :disabled="!data.value.website.link"
      >
        {{ data.value.website.link ? "Open" : "Not available" }}
      </b-button>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "SectionTable",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    fields: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
