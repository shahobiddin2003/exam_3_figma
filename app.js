const InfoFormEl = document.querySelector("#info_form");
const InfoFormInputFname = document.querySelector("#fname");
const InfoFormInputFprice = document.querySelector("#fprice");
const InfoFormInputFpicture = document.querySelector("#fpicture");
const InfoFormInputFchief = document.querySelector("#fchief");
const InfoFormInputFrestaurant = document.querySelector("#frestaurant");
const InfoFormInputContainer = document.querySelector("#info_blank_container");

InfoFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const Infoformblink = document.createElement("div");
  Infoformblink.innerHTML = `<b> Taom nomi:<b/> ${InfoFormInputFname.value} <br/> 
  <b>Taom narxi:</b> ${InfoFormInputFprice.value} <br/>
  <b>Taom taom oshpazi:</b> ${InfoFormInputFchief.value} ;
  <b>Taom tayyorlangan restoran:</b> ${InfoFormInputFrestaurant.value} <br/>`;

  Infoformblink.className = "Infoformblink_item ";
  InfoFormInputContainer.appendChild(Infoformblink);
});
