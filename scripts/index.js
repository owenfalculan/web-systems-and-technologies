const section = sessionStorage.getItem("section");
const students = SECTION_MAPPING[section];

for (const student of students) {
  $("#table-content").append(`
    <tr>
      <td>${student.code}</td>
      <td>${student.name}</td>
      <td>
        <a
          href="${student.links.website.link}"
          target="_blank"
          class="btn btn-sm btn-${
            student.links.website.link ? "success" : "danger"
          }"
        >
          ${student.links.website.link ? "Open" : "Not Available"}
        </a>
      </td>
    </tr>
  `);
}
