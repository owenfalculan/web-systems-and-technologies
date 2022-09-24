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
      <SectionTable :items="items" :fields="STUDENT_FIELDS" />
    </section>
  </article>
</template>

<script>
import SectionTable from "~/components/commons/SectionTable.vue"
import { SECTION_MAPPING, STUDENT_FIELDS } from "~/utils/variables.js"

export default {
  name: "SectionPersonalWebsite",
  components: {
    SectionTable,
  },
  data() {
    return {
      STUDENT_FIELDS,
      items: SECTION_MAPPING[this.$route.params.section],
    }
  },
}
</script>
