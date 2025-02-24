let states_of_india = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
let tabObjectIndicator = {
  canMoveTab1: true,
  canMoveTab2: false,
  canMoveTab3: false,
  fullFilledsubForm1: false,
  fullFilledsubForm2: false,
  fullFilledsubForm3: false,
};
function optionCreator(parentElement, selectedItem, ...listOfOptions) {
  listOfOptions.forEach((eachOption) => {
    let option = document.createElement("option"); // create a new option
    option.value = eachOption; // set the value of the option
    option.textContent = eachOption; // set the text content of the option
    parentElement.appendChild(option); // add the option to the select element
    if (eachOption === selectedItem) {
      option.selected = true; // set the selected attribute of the option to true for Gujarat
    }
  });
}
function addClass(element, ...classNames) {
  if (element) {
    classNames.forEach((eachClass) => {
      element.classList.add(eachClass);
    });
  }
}
function removeClass(element, ...classNames) {
  if (element) {
    classNames.forEach((eachClass) => {
      element.classList.remove(eachClass);
    });
  }
}
function tabChanged(tabID) {
  let uniquesID = tabID[tabID.length - 1];
  if (!tabObjectIndicator[`canMoveTab${uniquesID}`]) {
    console.warn(`Tab ${uniquesID} is not allowed to be selected.`);
    return;
  }

  // Hide all tabs
  addClass(document.getElementById("tab1"), "d-none");
  addClass(document.getElementById("tab2"), "d-none");
  addClass(document.getElementById("tab3"), "d-none");
  // Remove active state from tab containers
  removeClass(document.getElementById("tabContainer1"), "selectedTabContainer");
  removeClass(document.getElementById("tabContainer2"), "selectedTabContainer");
  removeClass(document.getElementById("tabContainer3"), "selectedTabContainer");
  // Show the selected tab
  let selectedTab = document.getElementById(tabID);
  removeClass(selectedTab, "d-none");

  // Highlight the corresponding tab container
  let selectedTabContainer = document.getElementById(
    `tabContainer${uniquesID}`
  );
  addClass(selectedTabContainer, "selectedTabContainer");
}
// Default to tab 1
tabChanged("tab1");
function tabImageChanged() {
  if (tabObjectIndicator.fullFilledsubForm1) {
    document.getElementById("tabImage1").src = "Assets/Images/Frame 102.png";
  }
  if (tabObjectIndicator.fullFilledsubForm2) {
    document.getElementById("tabImage2").src = "Assets/Images/Frame 102.png";
  }
  if (tabObjectIndicator.fullFilledsubForm2) {
    document.getElementById("tabImage2").src = "Assets/Images/Frame 102.png";
  }
}
// Define a States
let state, HSCBoard, sscBoard;
state = document.getElementById("state"); // get the state
HSCBoard = document.getElementById("HSCBoard"); // get the HSCBoard
sscBoard = document.getElementById("sscBoard"); // get the sscBoard
// Get Options
optionCreator(state, "Gujarat", ...states_of_india);
optionCreator(
  HSCBoard,
  "State Board",
  "State Board",
  "ICSE",
  "CBSE",
  "IB",
  "IGCSE"
);
optionCreator(
  sscBoard,
  "State Board",
  "State Board",
  "ICSE",
  "CBSE",
  "IB",
  "IGCSE"
);

// Example of AJAX call to a server

// Validation Element
function validateField(
  inputFieldElement,
  errorElement,
  labelElement,
  suggestionTxt,
  isnull,
  regex,
  focus
) {
  if (!inputFieldElement || !errorElement) return false;

  let x = labelElement ? labelElement.firstElementChild : null;
  let value = inputFieldElement.value.trim(); // Trim to remove extra spaces

  if (!isnull && value === "") {
    errorElement.textContent = "This field is required.";
    addClass(errorElement, "text-danger");
    addClass(inputFieldElement, "errorField");
    if (x) addClass(x, "text-danger");
    if (focus) {
      inputFieldElement.focus();
    }
    return false;
  }

  if (regex instanceof RegExp && !regex.test(value)) {
    errorElement.textContent = "Invalid Input Format.";
    addClass(errorElement, "text-danger");
    addClass(inputFieldElement, "errorField");
    if (x) addClass(x, "text-danger");
    if (focus) {
      inputFieldElement.focus();
    }
    return false;
  }

  // If valid
  errorElement.textContent = suggestionTxt;
  removeClass(errorElement, "text-danger");
  removeClass(inputFieldElement, "errorField");
  if (x) removeClass(x, "text-danger");
  return true;
}
// All Fields array
let FieldsArray1 = [
  {
    inputFieldElement: "studentFN",
    errorElement: "studentFNsug",
    labelElement: "field1",
    suggestionTxt: "Ex: Sachin",
    isnull: false,
    regex: /^[A-Za-z]{2,50}$/,
  },
  {
    inputFieldElement: "studentSN",
    errorElement: "studentSNsug",
    labelElement: "field2",
    suggestionTxt: "Ex: Tendulkar",
    isnull: false,
    regex: /^[A-Za-z]{2,50}$/,
  },
  {
    inputFieldElement: "studentIRC",
    errorElement: "studentIRCsug",
    labelElement: "field3",
    suggestionTxt:
      "Please enter your name as in government-issued ID. We may contact you to verify your identity.",
    isnull: false,
    regex: /^[A-Za-z\s]{4,100}$/,
  },
  {
    inputFieldElement: "studentDOB",
    errorElement: "studentDOBsug",
    labelElement: "field5",
    suggestionTxt: "Ex: 29-05-1990",
    isnull: false,
    regex: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
  },
  {
    inputFieldElement: "studentLinkedIn",
    errorElement: "studentLinkedInsug",
    labelElement: "field6",
    suggestionTxt: "Ex: https://www.linkedin.com/in/rahulattuluri/",
    isnull: false,
    regex: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/,
  },
  {
    inputFieldElement: "studentTwitter",
    errorElement: "studentTwittersug",
    labelElement: "field7",
    suggestionTxt: "Ex: https://twitter.com/rahulattuluri",
    isnull: false,
    regex: /^https?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_]{1,15}$/,
  },
  {
    inputFieldElement: "studentMob",
    errorElement: "studentMobsug",
    labelElement: "field8",
    suggestionTxt: "Ex: 92******07",
    isnull: false,
    regex: /^[0-9]{10}$/,
  },
  {
    inputFieldElement: "studentEM",
    errorElement: "studentEMsug",
    labelElement: "field9",
    suggestionTxt: "Ex: 1234567890@gmail.com",
    isnull: false,
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  {
    inputFieldElement: "parentFN",
    errorElement: "parentFNsug",
    labelElement: "field10",
    suggestionTxt: "Ex: Sachin",
    isnull: false,
    regex: /^[A-Za-z]{2,50}$/,
  },
  {
    inputFieldElement: "parentSN",
    errorElement: "parentSNsug",
    labelElement: "field11",
    suggestionTxt: "Ex: Tendulkar",
    isnull: false,
    regex: /^[A-Za-z]{2,50}$/,
  },
  {
    inputFieldElement: "studentRN",
    errorElement: "studentRNsug",
    labelElement: "field12",
    suggestionTxt: "Eg: Father, Mother, Uncle etc.",
    isnull: false,
    regex: /^[A-Za-z]{2,50}$/,
  },
  {
    inputFieldElement: "parentOCC",
    errorElement: "parentOCCsug",
    labelElement: "field13",
    suggestionTxt: "Eg: Engineer, Doctor, Teacher etc.",
    isnull: false,
    regex: /^[A-Za-z]{2,50}$/,
  },
  {
    inputFieldElement: "parentMob",
    errorElement: "parentMobsug",
    labelElement: "field14",
    suggestionTxt: "Ex: 92******07",
    isnull: false,
    regex: /^[0-9]{10}$/,
  },
  {
    inputFieldElement: "parentEM",
    errorElement: "parentEMsug",
    labelElement: "field15",
    suggestionTxt: "Ex: sachin01@gmail.com",
    isnull: false,
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  {
    inputFieldElement: "pinCode",
    errorElement: "pinCodesug",
    labelElement: "field17",
    suggestionTxt: "Ex: 360002",
    isnull: false,
    regex: /^[0-9]{6}$/,
  },
];
let FieldsArray2 = [
  {
    inputFieldElement: "sscSchoolName",
    errorElement: "studentFNsug",
    labelElement: "field19",
    suggestionTxt: "",
    isnull: false,
    regex: /^[A-Za-z0-9\s\-\.]+$/,
  },
  {
    inputFieldElement: "sscResult",
    errorElement: "studentFNsug",
    labelElement: "field21",
    suggestionTxt: "",
    isnull: false,
    regex: /^[0-9]{1,3}$/,
  },
  {
    inputFieldElement: "hscSchoolName",
    errorElement: "studentFNsug",
    labelElement: "field23",
    suggestionTxt: "",
    isnull: false,
    regex: /^[A-Za-z0-9\s\-\.]+$/,
  },
  {
    inputFieldElement: "hscResult",
    errorElement: "studentFNsug",
    labelElement: "field25",
    suggestionTxt: "",
    isnull: false,
    regex: /^[0-9]{1,3}$/,
  },
];
let FieldsArray3 = [
  {
    inputFieldElement: "psw",
    errorElement: "pswsug",
    labelElement: "field27",
    suggestionTxt: "Ex. Sachin&490.",
    isnull: false,
    regex: /^[0-9]{1,3}$/,
  },
  {
    inputFieldElement: "rpsw",
    errorElement: "rpswsug",
    labelElement: "field28",
    suggestionTxt: "Re-enter the password.",
    isnull: false,
    regex: /^[0-9]{1,3}$/,
  },
  {
    inputFieldElement: "mentorID",
    errorElement: "mentorIDsug",
    labelElement: "field29",
    suggestionTxt: "Ex. 1XXX3D",
    isnull: false,
    regex: /^[A-Za-z0-9]{1,6}$/,
  },
];
document.getElementById("next1001").addEventListener("click", function () {
  let valid = [];
  FieldsArray1.forEach((eachField) => {
    valid.push(
      validateField(
        document.getElementById(eachField.inputFieldElement),
        document.getElementById(eachField.errorElement),
        document.getElementById(eachField.labelElement),
        eachField.suggestionTxt,
        eachField.isnull,
        eachField.regex,
        true
      )
    );
  });
  let date = new Date(document.getElementById("studentDOB").value);
  let fiveYearsAgo = new Date();
  fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);

  if (date > fiveYearsAgo) {
    valid.push(false);
    document.getElementById("studentDOBsug").textContent =
      "Date must be before 5 years ago.";
    addClass(document.getElementById("studentDOBsug"), "text-danger");
    addClass(document.getElementById("studentDOB"), "errorField");
    addClass(document.getElementById("field5"), "text-danger");
    document.getElementById("studentDOB").focus();
  } else {
    document.getElementById("studentDOBsug").textContent = "Ex: 29-05-1990";
    removeClass(document.getElementById("studentDOBsug"), "text-danger");
    removeClass(document.getElementById("studentDOB"), "errorField");
    removeClass(document.getElementById("field5"), "text-danger");
  }
  if (!valid.includes(false)) {
    tabObjectIndicator["canMoveTab2"] = true;
    tabObjectIndicator["fullFilledsubForm1"] = true;
    tabChanged("tab2");
    tabImageChanged();
  } else {
    return;
  }
});

document.getElementById("next1002").addEventListener("click", function () {
  let valid = [];
  FieldsArray2.forEach((eachField) => {
    valid.push(
      validateField(
        document.getElementById(eachField.inputFieldElement),
        document.getElementById(eachField.errorElement),
        document.getElementById(eachField.labelElement),
        eachField.suggestionTxt,
        eachField.isnull,
        eachField.regex,
        true
      )
    );
  });
  if (!valid.includes(false)) {
    tabObjectIndicator["canMoveTab3"] = true;
    tabObjectIndicator["fullFilledsubForm2"] = true;
    tabChanged("tab3");
    tabImageChanged();
  } else {
    return;
  }
});
let allFields = [...FieldsArray1, ...FieldsArray2, ...FieldsArray3];
allFields.forEach((eachField) => {
  let field = document.getElementById(eachField.inputFieldElement);
  field.onblur = function () {
    validateField(
      document.getElementById(eachField.inputFieldElement),
      document.getElementById(eachField.errorElement),
      document.getElementById(eachField.labelElement),
      eachField.suggestionTxt,
      eachField.isnull,
      eachField.regex,
      false
    );
  };
  field.onkeydown = function () {
    validateField(
      document.getElementById(eachField.inputFieldElement),
      document.getElementById(eachField.errorElement),
      document.getElementById(eachField.labelElement),
      eachField.suggestionTxt,
      eachField.isnull,
      eachField.regex,
      false
    );
  };
});
