var table = document.createElement("table");
table.setAttribute("id", "data-table");
table.setAttribute("class", "table");

//Table header tag
var thead = document.createElement("thead");

//Table row
var tr = document.createElement("tr");

//Indivudial table headers
var firstNameHeader = document.createElement("th");
firstNameHeader.innerHTML = "First Name";

var lastNameHeader = document.createElement("th");
lastNameHeader.innerHTML = "Last Name";

var addressHeader = document.createElement("th");
addressHeader.innerHTML = "Address";

var pinCodeHeader = document.createElement("th");
pinCodeHeader.innerHTML = "Pin Code";

var stateHeader = document.createElement("th");
stateHeader.innerHTML = "State";

var countryHeader = document.createElement("th");
countryHeader.innerHTML = "Country";

var genderHeader = document.createElement("th");
genderHeader.innerHTML = "Gender";

var choiceOfFoodHeader = document.createElement("th");
choiceOfFoodHeader.innerHTML = "Choice of food";

//Appending DOM elements
tr.append(
  firstNameHeader,
  lastNameHeader,
  addressHeader,
  pinCodeHeader,
  stateHeader,
  countryHeader,
  genderHeader,
  choiceOfFoodHeader
);

//Create tbody tag
var tbody = document.createElement("tbody");

table.append(thead, tr, tbody);

document.body.append(table);

//Function addData()
function addData() {
  // Get the input values from the form
  var firstName_Value = document.getElementById("first-name").value;
  var lastName_Value = document.getElementById("last-name").value;
  var address_Value = document.getElementById("address").value;
  var pinCode_Value = document.getElementById("pincode").value;
  var state_Value = document.getElementById("state").value;
  var country_Value = document.getElementById("country").value;
  var gender_Value = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  //var choiceOfFood_Value = document.getElementById("choiceOfFood").value;
  //var choiceOfFoodNodeList = document.querySelectorAll(".food:checked");

  //document.querySelector('.messageCheckbox').checked;

  let selected_food = document.getElementsByClassName("form-check-input food");
  console.log(selected_food);

  if (selected_food.length < 2) {
    alert("Please choose atleast two food items among the five");
  } else {
    let result = "";
    for (var i = 0; i < selected_food.length; i++) {
      if (selected_food[i].checked) {
        result += selected_food[i].value + ",";
      }
    }
    var choiceOfFood_Value = result;
  }

  // Get the table and its body
  var table = document.getElementById("data-table");
  var tbody = table.getElementsByTagName("tbody")[0];

  // Create a new row
  var newRow = tbody.insertRow();

  // Insert cells for each of the table header
  var firstName_Cell = newRow.insertCell(0);
  var lastName_Cell = newRow.insertCell(1);
  var address_Cell = newRow.insertCell(2);
  var pinCode_Cell = newRow.insertCell(3);
  var state_Cell = newRow.insertCell(4);
  var country_Cell = newRow.insertCell(5);
  var gender_Cell = newRow.insertCell(6);
  var choiceOfFood_Cell = newRow.insertCell(7);

  // Add input values to the cells
  firstName_Cell.innerHTML = firstName_Value;
  lastName_Cell.innerHTML = lastName_Value;
  address_Cell.innerHTML = address_Value;
  pinCode_Cell.innerHTML = pinCode_Value;
  state_Cell.innerHTML = state_Value;
  country_Cell.innerHTML = country_Value;
  gender_Cell.innerHTML = gender_Value;
  choiceOfFood_Cell.innerHTML = choiceOfFood_Value;

  // Clear form fields
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
  document.querySelector('input[name="gender"]:checked').value = "";
  // document.getElementById(
  //   'input[class="form-check-input food"]:checked'
  // ).value = "";

  tbody.append(
    firstName_Cell,
    lastName_Cell,
    address_Cell,
    pinCode_Cell,
    state_Cell,
    country_Cell,
    gender_Cell,
    choiceOfFood_Cell
  );
}
