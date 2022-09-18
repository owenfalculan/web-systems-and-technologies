<template>
  <section class="my-5">
    <h5 class="my-3">Bootstrap</h5>
    <ul>
      <li>
        Bootstrap is a CSS framework which is used for faster and easier web
        development
      </li>
      <li>
        When using a CSS framework, you mostly don't need to do CSS unless you
        need custom styles.
      </li>
      <li>
        <div>
          Has ready-to-use classes for styling HTML elements.
          <i
            >(eg. just adding "btn btn-primary" class to a button results to
            this)</i
          >
        </div>
        <button type="button" class="btn btn-primary my-3">Click me!</button>
      </li>
      <li>
        <div>
          Adding Bootstrap to HTML is easy. Just add this CSS link inside head
          tag.
        </div>
        <div class="my-3">
          <code>
            &lt;link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"&gt;
          </code>
        </div>
      </li>
      <li>
        <div>
          Some features of Bootstrap requires JavaScript
          <i>(eg. modals)</i>. So you need to add a script link for it to work.
        </div>
        <div class="my-3">
          <code>
            &lt;script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
          </code>
        </div>
        <b-button v-b-modal.modal-1 variant="primary" class="mb-3"
          >Open Modal</b-button
        >
        <b-modal id="modal-1" title="Modal Example">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </li>
      <li>
        Explore Bootstrap 5
        <a href="https://www.w3schools.com/bootstrap5/index.php" target="_blank"
          >here</a
        >.
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Bootstrap",
}
</script>
