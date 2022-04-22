const init = () => {
  console.log("the dom has logged in");
  const inputForm = document.querySelector("form");
  const callBack = (event) => {
    event.preventDefault();
    console.log("this is a submit");
    fetch(`http://localhost:3000/movies/${event.target.children[1].value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");
        title.innerText = data.title;
        summary.innerText = data.summary;
        // LOG: (3) [{…}, {…}, {…}]
      });
  };

  inputForm.addEventListener("submit", callBack);
};

document.addEventListener("DOMContentLoaded", init);
