const btn = document.querySelector("#get-joke-btn");
const jokebox = document.querySelector("p");

btn.addEventListener("click", () => {
  fetch("https://api.api-ninjas.com/v1/dadjokes", {
    headers: {
      "X-Api-Key": "ND9N9MqLTKdMzTTWYFellg==Do0xGUBsR1Cy5Glh",
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      data.forEach((jokeobj) => {
        jokebox.innerText = jokeobj.joke;
        
      });
    })
    .catch(error => {
      console.error(error);
    });
    jokebox.classList.add("one")
});
