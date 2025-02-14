let currentTabId = "subForm3";
let tabProperty = {
  fullFilledsubForm1: true,
  fullFilledsubForm2: false,
  fullFilledsubForm3: false,
};
function lastIndex(obj) {
  return obj.length - 1;
}
function tabChange(tabId) {
  // Extract the last character of tabId (e.g., '1' from 'subForm1')
  let idn = tabId.slice(-1);

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
    if (eachTabTile.classList.contains("selectedTab")) {
      eachTabTile.classList.remove("selectedTab");
    }
  }

  // Show the tab with the corresponding id
  document.getElementById(tabId).classList.remove("d-none");
  document.getElementById(`tab${idn}`).classList.remove("tab");
  document.getElementById(`tab${idn}`).classList.add("selectedTab");
}
