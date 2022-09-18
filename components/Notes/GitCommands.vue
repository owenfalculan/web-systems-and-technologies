<template>
  <section class="my-5">
    <h5 class="my-3">Git commands</h5>
    <ul>
      <li>You will be working on Git Bash which is a terminal for Git.</li>
      <li>This will be installed along with Git.</li>
      <li>
        <span>To check if git is properly installed, run </span>
        <div class="my-3">
          <code>git --version</code>
        </div>
      </li>
      <li>
        <div>
          <strong>git config</strong>
        </div>
        <div>
          - Now let Git know who you are. This is important for version control
          systems, as each Git commit uses this information:
        </div>
        <section class="my-3">
          <div class="my-2">Example:</div>
          <code>
            <div>git config --global user.name "Owen Patrick Falculan"</div>
            <div>
              git config --global user.email
              owenpatrick.falculan@g.batstate-u.edu.ph"
            </div>
          </code>
        </section>
      </li>
      <li>
        <div>
          <strong>git init</strong>
        </div>
        <div class="mb-3">
          - Makes the project folder a git repository. Changes inside this
          folder will be tracked by Git.
        </div>
      </li>
      <li>
        <div>
          <strong>git add</strong>
        </div>
        <div>- This will add the files to staging environment.</div>
        <div>
          - Files in staging environment ar files that are ready to be commited.
        </div>
        <div>
          - You can add a single file <i>(eg. git add "filename")</i> or all
          files inside the folder <i>(eg. git add .)</i>
        </div>
        <section class="my-3">
          <div class="my-2">Example:</div>
          <code>
            <div>git add index.html</div>
            <div>git add .</div>
          </code>
        </section>
      </li>
      <li>
        <div>
          <strong>git status</strong>
        </div>
        <div class="mb-3">- Checks the status of files</div>
      </li>
      <li>
        <div>
          <strong>git commit</strong>
        </div>
        <div>
          - Commit is a save point or it is the version that we want to save.
        </div>
        <div>
          - It is a point in the project you can go back to if you find a bug.
        </div>
        <div>- When we commit, we should always include a message.</div>
        <section class="my-3">
          <div class="my-2">Example:</div>
          <code>
            <div>git commit -m "Add a back button"</div>
          </code>
        </section>
      </li>
      <li>
        <div>
          <strong>git clone</strong>
        </div>
        <div>- Clones the repository and saves it to your local machine.</div>
        <section class="my-3">
          <div class="my-2">Example:</div>
          <code>
            <div>
              git clone
              git@github.com:owenfalculan/web-systems-and-technologies.git
            </div>
          </code>
        </section>
      </li>
      <li>
        <div>
          <strong>git branch</strong>
        </div>
        <div>
          - Creates a branch or a new/separate version of the main repository.
        </div>
        <section class="my-3">
          <div class="my-2">Example:</div>
          <code>
            <div>git branch "add-about-me-section"</div>
            <div>git checkout "add-about-me-section"</div>
          </code>
        </section>
        <section class="my-3">
          <div class="my-2">- Shortcut (create branch then switch):</div>
          <code>
            <div>git checkout -b "add-about-me-section"</div>
          </code>
        </section>
      </li>
      <li>
        <div>
          <strong>git push</strong>
        </div>
        <div class="mb-3">
          - Pushes or uploads your changes/branch/commit to remote repository
          <i>(eg. GitHub and Gitlab)</i>.
        </div>
      </li>
      <li>
        <div>
          <strong>git pull</strong>
        </div>
        <div class="mb-3">- Updates the local repository.</div>
      </li>
      <li>
        Access my git commands cheat sheet
        <a
          href="https://gist.github.com/markbirds/b155fce1a3b810488667e56d3331b134"
          target="_blank"
          >here.</a
        >
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "GitCommands",
}
</script>
