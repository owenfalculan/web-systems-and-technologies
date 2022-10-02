<template>
  <section class="container my-4 pb-3">
    <header class="my-5">
      <h1>Web Systems and Technologies Repository</h1>
      <div class="my-3">
        <div class="my-1"><strong>Course Instructors:</strong></div>
        <div>Erwin Enriquez</div>
        <div>Poul Isaac De Chavez</div>
        <div>Dean Charliemagne Ramos</div>
        <div>Gerald James Daño</div>
        <div>Owen Patrick Falculan</div>
      </div>
    </header>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Personal Websites" active>
          <PersonalWebsites />
        </b-tab>
        <b-tab title="Notes">
          <Notes />
        </b-tab>
      </b-tabs>
    </b-card>
  </section>
</template>

<script>
import PersonalWebsites from "~/components/Activities/PersonalWebsites.vue"
import Notes from "~/components/Notes/index.vue"
export default {
  name: "IndexPage",
  components: { PersonalWebsites, Notes },
}
</script>
