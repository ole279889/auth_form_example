function openTab(event, actionType) {
  
  var i, tabcontent, tablinks, slider, slidesContainer;
  
  slidesContainer = document.getElementById("slides");
  if (actionType === 'SIGN_IN') {
	slidesContainer.classList.remove("slides-choose-signup");
	slidesContainer.classList.add("slides-choose-signin");
  } else if (actionType === 'SIGN_UP') {
	slidesContainer.classList.remove("slides-choose-signin");
	slidesContainer.classList.add("slides-choose-signup");
  }

  slider = document.getElementById("slider");
  if (slider) {
	  slider.style.left = event.target.offsetLeft + "px";
  }

  tablinks = document.getElementsByClassName("login-tablinks");
  if (tablinks && tablinks.length) {
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("login-tablinks-active");
    }
  }
  
  event.currentTarget.classList.add("login-tablinks-active");
}