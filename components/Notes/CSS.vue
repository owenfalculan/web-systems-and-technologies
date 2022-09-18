<template>
  <section class="my-5">
    <h5 class="my-3">CSS</h5>
    <ul>
      <li>
        CSS is the one that give styles to HTML elements. Styles include
        background color, text color, padding, margin etc.
      </li>
      <li>
        <div>Sample CSS code.</div>
        <div class="mt-3">
          <code>
            <pre class="mb-0">
body {
  background-color: lightblue;
}
h1 {
  color: white;
  text-align: center;
}
p {
  font-family: verdana;
  font-size: 20px;
}
                </pre
            >
          </code>
        </div>
      </li>
      <li>
        Read
        <a
          href="https://www.w3schools.com/css/css_selectors.asp"
          target="_blank"
          >here</a
        >
        how CSS selects HTML elements to style.
        <i>(through html element name, id or class)</i>
      </li>
      <li>
        <div>Ways to insert CSS to HTML.</div>
        <ol class="my-2">
          <li>
            <div>
              External CSS - you create separate file for css
              <i>(eg. styles.css)</i> then link it in your HTML file inside the
              head tag.
            </div>
            <div class="my-3">
              <code>
                <pre>
&lt;head&gt;
  &lt;link rel="stylesheet" href="styles.css"/&gt;
&lt;/head&gt;
                    </pre
                >
              </code>
            </div>
          </li>
          <li>
            <div>
              Internal CSS - you add CSS styles in style tag inside head tag.
            </div>
            <div class="my-3">
              <code>
                <pre>
&lt;head&gt;
  &lt;style&gt;
  body {
    background-color: linen;
  }

  h1 {
    color: maroon;
    margin-left: 40px;
  }
  &lt;/style&gt;
&lt;/head&gt;
                    </pre
                >
              </code>
            </div>
          </li>
          <li>Inline CSS - adding style directly in an HTML element.</li>
          <div class="my-3">
            <code>
              &lt;h1 style="color: blue; text-align: center"&gt; This is a
              heading &lt;/h1&gt;
            </code>
          </div>
        </ol>
      </li>
      <li>
        Explore CSS
        <a href="https://www.w3schools.com/css/default.asp" target="_blank"
          >here.</a
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "CSS",
}
</script>
