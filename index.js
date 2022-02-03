fetch("data.csv")
  .then((response) => response.text())
  .then((text) => text.split(/\r?\n|\r/).map((item) => item.split(";").map((item) => parseInt(item))))
  .then((array) => {
    function getSum(data, option) {
      const options = {
        budget: 1,
        draw: 2,
      };

      const array = [];

      data.forEach((number) => {
        const index = options[option];

        return array.push(number[index]);
      });

      return array.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }

    function getTotal(items) {
      return items.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }

    function getParagraph(from, to) {
      return array.filter((item) => item[0] >= from && item[0] <= to);
    }

    // Paragraph arrays
    const paragraph1 = getParagraph(0, 1999);
    const paragraph2 = getParagraph(2000, 2999);
    const paragraph3 = getParagraph(3000, 3999);
    const paragraph4 = getParagraph(4000, 4999);
    const paragraph5 = getParagraph(5000, 5999);
    const paragraph6 = getParagraph(6000, 6999);

    // Sum of paragphs
    const sumOfParagraph1Budget = getSum(paragraph1, "budget");
    const sumOfParagraph2Budget = getSum(paragraph2, "budget");
    const sumOfParagraph3Budget = getSum(paragraph3, "budget");
    const sumOfParagraph4Budget = getSum(paragraph4, "budget");
    const sumOfParagraph5Budget = getSum(paragraph5, "budget");
    const sumOfParagraph6Budget = getSum(paragraph6, "budget");

    const sumOfParagraph1Draw = getSum(paragraph1, "draw");
    const sumOfParagraph2Draw = getSum(paragraph2, "draw");
    const sumOfParagraph3Draw = getSum(paragraph3, "draw");
    const sumOfParagraph4Draw = getSum(paragraph4, "draw");
    const sumOfParagraph5Draw = getSum(paragraph5, "draw");
    const sumOfParagraph6Draw = getSum(paragraph6, "draw");

    // Totals
    const sumOfBudget = getTotal([
      sumOfParagraph1Budget,
      sumOfParagraph2Budget,
      sumOfParagraph3Budget,
      sumOfParagraph4Budget,
      sumOfParagraph5Budget,
      sumOfParagraph6Budget,
    ]);
    const sumOfDraw = getTotal([
      sumOfParagraph1Draw,
      sumOfParagraph2Draw,
      sumOfParagraph3Draw,
      sumOfParagraph4Draw,
      sumOfParagraph5Draw,
      sumOfParagraph6Draw,
    ]);

    // Dom manipulation
    document.getElementById("sumOfParagraph1Budget").innerHTML = sumOfParagraph1Budget;
    document.getElementById("sumOfParagraph2Budget").innerHTML = sumOfParagraph2Budget;
    document.getElementById("sumOfParagraph3Budget").innerHTML = sumOfParagraph3Budget;
    document.getElementById("sumOfParagraph4Budget").innerHTML = sumOfParagraph4Budget;
    document.getElementById("sumOfParagraph5Budget").innerHTML = sumOfParagraph5Budget;
    document.getElementById("sumOfParagraph6Budget").innerHTML = sumOfParagraph6Budget;
    document.getElementById("sumOfBudget").innerHTML = sumOfBudget;

    document.getElementById("sumOfParagraph1Draw").innerHTML = sumOfParagraph1Draw;
    document.getElementById("sumOfParagraph2Draw").innerHTML = sumOfParagraph2Draw;
    document.getElementById("sumOfParagraph3Draw").innerHTML = sumOfParagraph3Draw;
    document.getElementById("sumOfParagraph4Draw").innerHTML = sumOfParagraph4Draw;
    document.getElementById("sumOfParagraph5Draw").innerHTML = sumOfParagraph5Draw;
    document.getElementById("sumOfParagraph6Draw").innerHTML = sumOfParagraph6Draw;
    document.getElementById("sumOfDraw").innerHTML = sumOfDraw;
  });
