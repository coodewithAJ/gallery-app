let arr = ["images/one (1).jpg", 'images/one (2).jpg', "images/one (3).jpg", "images/one (4).jpg", "images/one (5).jpg", "images/one (6).jpg", "images/one (7).jpg", "images/one(8).jpg", "images/one(9).jpg", "images/one(10).jpg", "images/one(11).jpg", "images/one(12).jpg"]
let currentId = 0;



function insertImages() {
  let container = document.querySelector(".container");
  for (let i = 1; i <= arr.length; i++) {
    let image = document.createElement('img');
    image.classList.add("imageContainer")
    image.src = arr[i - 1];
    image.onclick = (function (i) {
      return function () {
        handlePopUp(i);
      }
    })(i)
    container.appendChild(image)
  }
}

insertImages()

function hideOrVisible(currentIdValue, button) {
  if (currentId == currentIdValue) {
    document.getElementById(`${button}`).style.visibility = "hidden"
  } else {
    document.getElementById(`${button}`).style.visibility = "visible"
  }
}

function showPopUp(className, displayValue) {
  document.querySelector(`.${className}`).style.display = `${displayValue}`;
}




function handlePopUp(id) {
  currentId = id;
  hideOrVisible(1, "pre");
  hideOrVisible(arr.length, "next");

  showPopUp("popup", "flex");
  showPopUp("popUpContainer", "flex");
  document.getElementById("popUpImage").src = arr[id - 1];
}
if (currentId != 0) {
  document.getElementById("pre").style.visibility = "visible"
}
document.querySelector(".popup").addEventListener("click", () => {
  showPopUp("popUpContainer", "none");
  showPopUp("popup", "none");
})

function handleNext(value) {
  if (value == "next" && currentId <= arr.length - 1) {
    if (currentId == arr.length - 1) {
      document.getElementById("next").style.visibility = "hidden"
    }
    currentId++;
    document.getElementById("popUpImage").src = arr[currentId - 1];
  }else if (value == "pre" && currentId > 1) {
    if (currentId != arr.length - 1) {
      document.getElementById("next").style.visibility = "visible"
    }
    currentId--;
    document.getElementById("popUpImage").src = arr[currentId - 1];
  }


  if (currentId > 0) {
    document.getElementById("pre").style.visibility = "visible"
  }
  if (currentId == 1) {
    document.getElementById("pre").style.visibility = "hidden"
  }
}





