
  let btn = document.getElementById("btn")
  
  btn.addEventListener("click", ()=> {
      // fetch("http://www.boredapi.com/api/activity/")
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        document.getElementById("activity").textContent = data.activity
        document.getElementById("title").textContent = "💪 HappyBot 🦵"
        // document.body.classList.add("fun")
  })
  })


