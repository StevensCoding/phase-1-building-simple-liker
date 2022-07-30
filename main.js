// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded",() => {
  const hearts = document.querySelectorAll(".like-glyph")

  hearts.forEach(hearts => hearts.addEventListener("click", fillHeart))

  function fillHeart(hearts){
    mimicServerCall()
    .then(() => {
      if (hearts.target.innerText === EMPTY_HEART){
        hearts.target.classList.add("activated-heart")
        hearts.target.innerText = FULL_HEART;
      }
      else {
      hearts.target.className = ""
      hearts.target.innerText = EMPTY_HEART;
      
      }
    
    })
    .catch((error) => {
      console.log(error)
      const getModal = document.getElementById("modal");
      getModal.classList.toggle("hidden")
      setTimeout(() => getModal.classList.toggle("hidden"), 3000)
  })
  }
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

