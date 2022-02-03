fetch("../data.csv")
  .then((response) => response.text())
  .then((text) => text.split(/\r?\n|\r/).map((item) => item.split(";").map((item) => parseInt(item))))
  .then((array) => {
    function getParagraph(from, to) {
      return array.filter((item) => item[0] >= from && item[0] <= to);
    }

    // Paragraph arrays
    const paragraph = getParagraph(2000, 2999);

    // Dom manipulation
    paragraph.forEach((item) => {
      const tr = document.createElement("tr");
      const td = item.map((item) => `<td>${item}</td>`).join("");

      tr.innerHTML = td;

      document.querySelector("table").appendChild(tr);
    });
  });
