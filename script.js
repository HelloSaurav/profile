// function for Tab Menu and tab content
function changeTab(tabIndex) {
  // Hide all tab content panes
  var tabPanes = document.getElementsByClassName("tab-pane");
  for (var i = 0; i < tabPanes.length; i++) {
    tabPanes[i].classList.remove("active");
  }

  // Show the selected tab content pane
  var selectedTabPane = document.getElementById("tab-content-" + tabIndex);
  selectedTabPane.classList.add("active");

  // Set the active tab in the header
  var tabItems = document.getElementsByClassName("tab-item");

  for (var i = 0; i < tabItems.length; i++) {
    tabItems[i].classList.remove("active");
  }

  // Set the selected tab as active in the header
  var selectedTabItem =
    document.getElementsByClassName("tab-item")[tabIndex - 1];
  selectedTabItem.classList.add("active");

  // Update the page heading
  var pageHeading = document.getElementById("active_tab_menu");
  pageHeading.innerHTML = "/ " + selectedTabItem.innerHTML;
}

// function for infromtion card
function showCardInformation() {
  document.getElementById("infoCard").style.display = "block";
  document.getElementById("showInformation").style.visibility = "hidden";
  document.getElementById("header").style.opacity = ".5";
  document.getElementById("header").style.pointerEvents = "none";
  document.getElementById("main").style.pointerEvents = "none";
  document.getElementById("main").style.opacity = ".5";
}

function hideCardInformation() {
  document.getElementById("infoCard").style.display = "none";
  document.getElementById("showInformation").style.visibility = "visible";
  document.getElementById("header").style.opacity = "1";
  document.getElementById("header").style.pointerEvents = "auto";
  document.getElementById("main").style.pointerEvents = "auto";
  document.getElementById("main").style.opacity = "1";
}
