const init = () => {
  document.querySelector("#aboutLink").addEventListener("click", () => {
    alert(data.project);
    alert("You clicked about");
  });
  document.querySelector("#educationLink").addEventListener("click", () => {
    alert("You clicked education");
  })
  document.querySelector("#experienceLink").addEventListener("click", () => {
    alert("You clicked experience");
  })
  document.querySelector("#projectsLink").addEventListener("click", () => {
    alert("You clicked project");
  })
  document.querySelector("#contactLink").addEventListener("click", () => {
    alert("You clicked contact");
  })
  document.querySelector("#configLink").addEventListener("click", () => {
    alert("You clicked config");
  })
};
