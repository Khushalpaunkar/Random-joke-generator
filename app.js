document.querySelectorAll(".box button").forEach((btn) => {
  btn.addEventListener("click", () => {
    let parentBox = btn.parentElement; 
    let img = parentBox.querySelector("img");

    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then(res => res.json())
      .then(data => {
        let joke = `${data.setup} - ${data.punchline}`;
        
        
        if (img) img.remove();
        btn.remove();

        
        let jokePara = document.createElement("p");
        jokePara.textContent = joke;
        jokePara.style.fontWeight = "bold";
        jokePara.style.color = "darkgreen";
        parentBox.appendChild(jokePara);
      })
      .catch(() => {
        alert("Network problem ");
      });
  });
});
