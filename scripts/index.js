const section = window.location.pathname.split("/")[3];
const students = SECTION_MAPPING[section];

for (const student of students) {
  $("#table-content").append(`
    <tr>
      <td>${student.code}</td>
      <td>${student.name}</td>
      <td>
        <a
          href="/web-systems-and-technologies/personal-websites/${section}/${
    student.links.website
  }"
          target="_blank"
          class="btn btn-sm btn-${student.links.website ? "success" : "danger"}"
        >
          ${student.links.website ? "Open" : "Not Available"}
        </a>
      </td>
    </tr>
  `);
}
