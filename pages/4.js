fetch("../data.csv")
  .then((response) => response.text())
  .then((text) => text.split(/\r?\n|\r/).map((item) => item.split(";").map((item) => parseInt(item))))
  .then((array) => {
    function getParagraph(from, to) {
      return array.filter((item) => item[0] >= from && item[0] <= to);
    }

    // Paragraph arrays
    const paragraph = getParagraph(4000, 4999);

    // pagination
    const list_element = document.getElementById("tbody");
    const pagination_element = document.getElementById("pagination");

    let current_page = 1;
    let rows = 20;

    function DisplayList(items, wrapper, rows_per_page, page) {
      wrapper.innerHTML = "";
      page--;

      let start = rows_per_page * page;
      let end = start + rows_per_page;
      let paginatedItems = items.slice(start, end);

      for (let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];

        // Dom manipulation
        const td = item.map((item) => `<td>${item}</td>`).join("");
        const tr = document.createElement("tr");
        tr.innerHTML = td;
        document.querySelector("tbody").appendChild(tr);
        wrapper.appendChild(tr);
      }
    }
    // Dom button manipulation
    function SetupPagination(items, wrapper, rows_per_page) {
      wrapper.innerHTML = "";

      let page_count = Math.ceil(items.length / rows_per_page);
      for (let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
      }
    }
    //  button click on page manipulation
    function PaginationButton(page, items) {
      let button = document.createElement("button");
      button.innerText = page;

      if (current_page == page) button.classList.add("active");

      button.addEventListener("click", function () {
        current_page = page;
        DisplayList(items, list_element, rows, current_page);
      });

      return button;
    }

    DisplayList(paragraph, list_element, rows, current_page);
    SetupPagination(paragraph, pagination_element, rows);
  });
