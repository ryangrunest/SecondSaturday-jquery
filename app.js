// click events
const navLinkClick = () => {
  event.preventDefault();
  alert("helloworld");
};
$(".Nav-link").on("click", navLinkClick);
