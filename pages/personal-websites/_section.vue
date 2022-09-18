<template>
  <article class="container my-4">
    <section class="my-5">
      <section class="d-flex align-items-center justify-content-between">
        <div>
          <h3>Personal Websites</h3>
          <p>{{ $route.params.section.toUpperCase() }}</p>
        </div>
        <div>
          <NuxtLink to="/" class="btn btn-sm btn-dark">Back</NuxtLink>
        </div>
      </section>
      <b-table
        striped
        hover
        :items="items"
        :fields="fields"
        class="text-center"
      >
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
    </section>
  </article>
</template>

<script>
import { SECTION_MAPPING } from "~/utils/variables.js"
export default {
  name: "SectionPersonalWebsite",
  data() {
    return {
      fields: [
        { key: "code", label: "SRCODE" },
        { key: "name", label: "Name" },
        { key: "activities", label: "Link" },
      ],
      items: SECTION_MAPPING[this.$route.params.section],
    }
  },
}
</script>
