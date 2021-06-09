"Use Strict";
const submitBtn = document.getElementById("submit");
const output = document.querySelector(".nameFormatted");

// function
const nameFormatter = function (str) {
  const result = [];
  // LastName
  str = str.toLowerCase().split(/\s+/);
  // console.log(str);
  let lastName = str.slice(0, 1);
  lastName = String(lastName).toUpperCase();
  result.push(lastName);

  // OtherNames
  let otherNames = str.slice(1);
  for (let i = 0; i < otherNames.length; i++) {
    const otherNamesSplit = otherNames[i];
    const replaceCase = otherNamesSplit.replace(
      otherNamesSplit[0],
      otherNamesSplit[0].toUpperCase()
    );
    result.push(replaceCase);
  }
  let result1 = result.join(" ");
  return result1;
};

// DOM
submitBtn.addEventListener("click", function () {
  const input = document.getElementById("input").value;
  output.innerHTML = `✔${nameFormatter(input)}`;
});

// A formatter that takes the name irrespective of space left within nwords and formats them.
