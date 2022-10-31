export let filterData = {
  from: "",
  to: "",
  price_from: "",
  price_to: "",
  title: "",
};
if (localStorage.getItem("reqParams")) {
  filterData = JSON.parse(localStorage.getItem("reqParams"));
}
