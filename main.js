// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartIcons = document.querySelectorAll(".like-glyph");
const errorModal = document.querySelector("#modal");
const modalMessage = document.querySelector("#modal-message");

const serverResults = (e) => {
  mimicServerCall()
  .then(() => {
    if (e.target.textContent === EMPTY_HEART) {
      e.target.textContent = FULL_HEART;
      e.target.classList.add("activated-heart");
    } else {
      e.target.textContent = EMPTY_HEART;
      e.target.classList.remove("activated-heart");
    }
  })
  .catch(err => {
    modalMessage.textContent = err;
    errorModal.classList.remove("hidden");
    setTimeout(() => {
      modalMessage.textContent = "";
      errorModal.classList.add("hidden");
    }, 3000)

  })
}

heartIcons.forEach(item => {
  item.addEventListener("click", serverResults)
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
