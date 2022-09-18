<template>
  <section class="my-5">
    <h5 class="my-3">Overview</h5>
    <ul>
      <li>Web development is the building and maintenance of websites.</li>
      <li>In web development, we have frontend and backend.</li>
      <li>
        Frontend or client-side is anything you see when you open a website.
      </li>
      <li>
        Backend or server-side is responsible for storing and organizing data.
        This is where the frontend gets the data to be displayed on the website
        and also where it sends the data to be stored into the database. Any
        data related processes are done in the backend.
      </li>
      <li>
        <div>Frontend vs Backend</div>
        <img
          class="my-4 mw-100"
          src="~/assets/images/frontend-vs-backend.jpg"
          alt="frontend-vs-backend"
        />
      </li>
      <li>
        <div>Frontend and Backend Diagram</div>
        <div>
          <div>
            - frontend communicates with backend through HTTP requests and
            responses.
          </div>
          <div>
            <div>
              - HTTP request is just requesting or sending data to backend.
            </div>
            <i
              >(eg. fetching data for frontend to display or sending the
              username and password from frontend to backend for
              verification).</i
            >
          </div>
          <div>
            <div>- HTTP response is the response from backend.</div>
            <i
              >(eg. data requested by the frontend or message if the user
              successfully logged in or anything)</i
            >
          </div>
        </div>
        <img
          class="my-4 w-100"
          src="~/assets/images/webdev-diagram.png"
          alt="webdev-diagram"
        />
      </li>
      <li>
        <div>
          Fullstack Development Software Tools/Languages
          <i>(fullstack means both frontend and backend)</i>
        </div>
        <img
          class="my-4 w-100"
          src="~/assets/images/webdev-tools.png"
          alt="webdev-tools"
        />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Overview",
}
</script>
