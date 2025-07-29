const isseat = document.getElementById("seat");
const isage = document.getElementById("age");
const isadhar = document.getElementById("adhar");
const isbutton = document.getElementById("button");
const isstatus = document.getElementById("status");

button.addEventListener("click", function () {
  let seatactive = isseat.checked;
  let ageactive = isage.checked;
  let adharactive = isadhar.checked;
  console.log(seatactive, ageactive, adharactive);
  let statement;
  if (seatactive) {
    console.log("seat is available ");
    if (ageactive) {
      console.log("you are aged above 50");
      if (adharactive) {
        console.log("has Adhar card");
        alert("please come inside of the bus ");
      } else {
        console.log("you donts have Adhar card.please check it.");
        statement = "you donts have Adhar card.please check it.";
      }
    } else {
      console.log("your age is not above 50");
      statement = "your age is not above 50";
    }
  } else {
    console.log("seat is nota availbale");
    statement = "seat is not availbale";
  }
  isstatus.textContent = statement;
});
