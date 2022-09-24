<template>
  <section class="my-3">
    <div class="input-group mb-5">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <img
            src="https://img.icons8.com/ios-filled/24/343a40/search--v1.png"
          />
        </span>
      </div>
      <input
        v-model="search"
        type="text"
        class="form-control"
        placeholder="Search by SRCODE or name"
      />
    </div>
    <h3>Personal Websites</h3>
    <section v-if="search">
      <div v-if="filteredStudents.length">
        <SectionTable :items="filteredStudents" :fields="STUDENT_FIELDS" />
      </div>
      <div v-else>
        <div class="text-center">No results found.</div>
      </div>
    </section>
    <section v-else>
      <b-table
        striped
        hover
        :items="items"
        :fields="fields"
        class="text-center"
      >
        <template #cell(link)="data">
          <NuxtLink
            :to="`/personal-websites/${data.item.section.toLowerCase()}`"
            class="btn btn-sm btn-secondary"
            >Open</NuxtLink
          >
        </template>
      </b-table>
      <p>
        <i
          >GitHub Repository:
          <a
            href="https://github.com/owenfalculan/web-systems-and-technologies"
            target="_blank"
          >
            https://github.com/owenfalculan/web-systems-and-technologies
          </a>
        </i>
      </p>
    </section>
  </section>
</template>

<script>
import _ from "lodash"
import SectionTable from "~/components/commons/SectionTable.vue"
import { SECTION_MAPPING, STUDENT_FIELDS } from "~/utils/variables.js"

export default {
  name: "PersonalWebsites",
  components: {
    SectionTable,
  },
  data() {
    return {
      STUDENT_FIELDS,
      fields: ["section", { key: "link", label: "" }],
      items: [
        { section: "CS-3101" },
        { section: "CS-3102" },
        { section: "IT-3101" },
        { section: "IT-3102" },
        { section: "IT-3103" },
        { section: "IT-3104" },
        { section: "IT-3105" },
        { section: "IT-3106" },
        { section: "IT-3107" },
      ],
      search: "",
      students: _.flattenDeep(_.values(SECTION_MAPPING)),
      filteredStudents: [],
    }
  },
  watch: {
    search(val) {
      if (val) {
        this.filteredStudents = _.filter(this.students, (student) => {
          return (
            student.code.includes(val) ||
            student.name.toLowerCase().includes(val.toLowerCase())
          )
        })
      }
    },
  },
}
</script>
