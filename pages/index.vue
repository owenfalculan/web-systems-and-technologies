<template>
  <section class="container my-4 pb-3">
    <header class="my-5">
      <h1>Web Systems and Technologies Repository</h1>
      <div>
        <div>Instructors:</div>
        <div>Owen Patrick Falculan</div>
        <div>Erwin Enriquez</div>
      </div>
    </header>
    <PersonalWebsites />
    <hr />
    <Notes />
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
