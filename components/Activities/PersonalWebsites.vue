<template>
  <section class="my-5">
    <h3>Personal Websites</h3>
    <b-table striped hover :items="items" :fields="fields" class="text-center">
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
</template>

<script>
export default {
  name: "PersonalWebsites",
  data() {
    return {
      fields: ["section", { key: "link", label: "" }],
      items: [
        { section: "CS-3101" },
        { section: "CS-3102" },
        { section: "IT-3103" },
        { section: "IT-3104" },
        { section: "IT-3105" },
        { section: "IT-3106" },
        { section: "IT-3107" },
      ],
    }
  },
}
</script>
