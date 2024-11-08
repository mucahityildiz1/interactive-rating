const stars = document.querySelectorAll(".star");
const rateNumber = document.querySelector(".rateNumber");
const rating = document.querySelector(".rating");

for (const star of stars) {
  star.addEventListener("click", handleFeedback);
}

submitBtn.addEventListener("click", handleSecondScreen);

let selectedRating = null;

function handleFeedback() {
  selectedRating = this.innerText;

  for (const star of stars) {
    star.classList.remove("selected");
    star.classList.add("selected");
  }
}

const ratingContainer = document.querySelector(".rating");


function handleSecondScreen() {
  if (!selectedRating) {
    alert("Please provide feedback.");
    return;
    
  }
  console.log(selectedRating);
  rating.innerHTML = `
   <div class="thankContainer">
        <div class="headTxt">
          <div class="thank-img">
            <img src="assets/img/rating-img.png">
          </div>
          <p>You selected <span class="rateNumber">${selectedRating}</span> out of 5</p>
        </div>
        <div class="thankContent">
          <h3>Thank you!</h3>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
            touch!</p>
        </div>
      </div>
  `;
}
