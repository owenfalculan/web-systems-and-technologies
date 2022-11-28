<template>
  <section>
    <section class="my-3">
      <h3>Notes</h3>
      <section class="my-4">
        <h5 class="my-3">Contents</h5>
        <ul>
          <li><a v-scroll-to="'#overview'" href="">Overview</a></li>
          <li><a v-scroll-to="'#editor'" href="">Code editor</a></li>
          <li><a v-scroll-to="'#html'" href="">HTML</a></li>
          <li><a v-scroll-to="'#css'" href="">CSS</a></li>
          <li><a v-scroll-to="'#bootstrap'" href="">Bootstrap</a></li>
          <li><a v-scroll-to="'#git'" href="">Git</a></li>
          <li><a v-scroll-to="'#git-commands'" href="">Git commands</a></li>
          <li>
            <a v-scroll-to="'#github-pages'" href=""
              >Deploying to GitHub Pages</a
            >
          </li>
          <li>
            <a v-scroll-to="'#contributing'" href=""
              >Contributing to Repository</a
            >
          </li>
        </ul>
      </section>
    </section>
    <hr id="overview" />
    <Overview />
    <hr id="editor" />
    <CodeEditor />
    <hr id="html" />
    <HTML />
    <hr id="css" />
    <CSS />
    <hr id="bootstrap" />
    <Bootstrap />
    <hr id="git" />
    <Git />
    <hr id="git-commands" />
    <GitCommands />
    <hr id="github-pages" />
    <GithubPages />
    <hr id="contributing" />
    <Contributing />
    <div
      v-if="displayBackToTopButton"
      class="fixed-bottom d-flex justify-content-center"
    >
      <button
        type="button"
        class="btn btn-sm btn-secondary my-4"
        @click="scrollToTop"
      >
        Back to top
      </button>
    </div>
  </section>
</template>

<script>
import Overview from "~/components/Notes/Overview.vue"
import CodeEditor from "~/components/Notes/CodeEditor.vue"
import HTML from "~/components/Notes/HTML.vue"
import CSS from "~/components/Notes/CSS.vue"
import Bootstrap from "~/components/Notes/Bootstrap.vue"
import Git from "~/components/Notes/Git.vue"
import GitCommands from "~/components/Notes/GitCommands.vue"
import GithubPages from "~/components/Notes/GithubPages.vue"
import Contributing from "~/components/Notes/Contributing.vue"
export default {
  name: "Notes",
  components: {
    Overview,
    CodeEditor,
    HTML,
    CSS,
    Bootstrap,
    Git,
    GitCommands,
    GithubPages,
    Contributing,
  },
  data() {
    return {
      scrollTop: 0,
    }
  },
  computed: {
    displayBackToTopButton() {
      return this.scrollTop > 20
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll(e) {
      this.scrollTop = window.scrollY
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    },
  },
}
</script>
