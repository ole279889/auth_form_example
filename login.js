function openTab(event, actionType) {
  
  var i, tabcontent, tablinks, slider, slidesContainer;
  
  slidesContainer = document.getElementById("slides");
  if (actionType === 'SIGN_IN') {
    slidesContainer.style.left = '0px';
  } else if (actionType === 'SIGN_UP') {
    slidesContainer.style.left = '-526px';
  }

  slider = document.getElementById("slider");
  if (slider) {
	  slider.style.left = event.target.offsetLeft.toString() + "px";
  }

  tablinks = document.getElementsByClassName("login-tablinks");
  if (tablinks && tablinks.length) {
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  }
  
  event.currentTarget.className += " active";
}