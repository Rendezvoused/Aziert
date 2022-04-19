window.onload = function () {
                startTab();
            };

            function startTab() {
                document.getElementById("defaultOpen").click();

            }

function openEpochTab(evt, epochName) {
  // Declare all variables
  var i, epochinfotab, epochheadbutton;

  // Get all elements with class="epochinfotab" and hide them
  epochinfotab = document.getElementsByClassName("epochinfotab");
  for (i = 0; i < epochinfotab.length; i++) {
    epochinfotab[i].style.display = "none";
  }

  // Get all elements with class="epochheadbutton" and remove the class "active"
  epochheadbutton = document.getElementsByClassName("epochheadbutton");
  for (i = 0; i < epochheadbutton.length; i++) {
    epochheadbutton[i].className = epochheadbutton[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(epochName).style.display = "block";
  evt.currentTarget.className += " active";
}