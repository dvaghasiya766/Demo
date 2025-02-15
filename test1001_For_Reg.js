let currentTabId = "subForm3";
let tabProperty = {
  fullFilledsubForm1: true,
  fullFilledsubForm2: true,
  fullFilledsubForm3: true,
};
function lastIndex(obj) {
  return obj.length - 1;
}
function tabChange(tabId) {
  // Extract the last character of tabId (e.g., '1' from 'subForm1')
  let idn = lastIndex(tabId);

  // Get all tab elements
  let allTabs = [
    document.getElementById("subForm1"),
    document.getElementById("subForm2"),
    document.getElementById("subForm3"),
  ];

  // Get all tab tile elements
  let allTabTiles = [
    document.getElementById("tab1"),
    document.getElementById("tab2"),
    document.getElementById("tab3"),
  ];

  // Hide all tabs
  for (let eachTab of allTabs) {
    eachTab.classList.add("d-none");
  }

  // Deselect all tab tiles
  for (let eachTabTile of allTabTiles) {
    eachTabTile.classList.add("tab");
    eachTabTile.classList.remove("selectedTab");
  }

  if (tabProperty[`fullFilledsubForm${tabId[idn]}`]) {
    document.getElementById(`subForm${tabId[idn]}`).classList.remove("d-none");
    document.getElementById(`tab${tabId[idn]}`).classList.remove("tab");
    document.getElementById(`tab${tabId[idn]}`).classList.add("selectedTab");
  } else {
    document.getElementById(`subForm1`).classList.remove("d-none");
    document.getElementById(`tab1`).classList.remove("tab");
    document.getElementById(`tab1`).classList.add("selectedTab");
    currentTabId = tabId;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let reStudMob = document.getElementById("reStudMob");
  let studmob = document.getElementById("studmob");

  reStudMob.value = 1234567890; // Set initial value
  function changeMob() {
    let newMobile = localStorage.getItem("studmob");
    if (reStudMob) {
      reStudMob.value = newMobile || ""; // Set value or empty if null
    }
  }
  studmob.addEventListener("change", function (event) {
    let mobile = event.target.value;
    localStorage.setItem("studmob", mobile);
    changeMob();
  });
});
