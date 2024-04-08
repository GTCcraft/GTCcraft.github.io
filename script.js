$(document).ready(function() {
  let currentHouseAnimationFrame = 0;

  const homeButton = $("#home-button");
  const questionsButton = $("#questions-button");
  const postsButton = $("#posts-button");

  const homepage = document.getElementById("homepage");
  const questionspage = document.getElementById("questionspage");
  const postspage = document.getElementById("postspage");

  const houseArtSmoke = $("#house-art-smoke");

  const popupWindow = document.getElementById("popupWindow");

  const pages = [homepage, questionspage, postspage];

  setInterval(function() {
    switch (currentHouseAnimationFrame) {
      case 0:
        houseArtSmoke.text("                  #\n                    #\n                  #");
        currentHouseAnimationFrame = 1;
        break;
      case 1:
        houseArtSmoke.text("                    #\n                  #\n                    #");
        currentHouseAnimationFrame = 0;
        break;
      default:
        houseArtSmoke.text("                  #\n                    #\n                  #");
    }
  }, 700);

  function changeScreen(currentPage) {
    for (let i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
    }
    currentPage.style.display = "flex";
  }

  function openImage(clickedImage) {
    popupWindow.style.display = "block";
    $('#popupBox').html('<img src="' + clickedImage.attr('src') + '" width="100%" height="100%">');
  }
  $("#popupWindow").click(function closeImage() {
    popupWindow.style.display = "none";
    console.log("girl");
  });

  $('img').click(function() {
    openImage($(this));
  });

  homeButton.click(function() {
    changeScreen(homepage);
  });

  questionsButton.click(function() {
    changeScreen(questionspage);
  });

  postsButton.click(function() {
    changeScreen(postspage);
  });

});
