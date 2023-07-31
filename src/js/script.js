// Array de links
var links = [
  {
    text: "Page Cerâmica Glória",
    url: "https://portfolio-ceramica-gloria.vercel.app/",
  },

  { 
    text: "Fixo/Administrativo", 
    url: "tel:+553535217751" 
  },

  {
    text: "Vendas/Deborah",
    url: "https://api.whatsapp.com/send?phone=5535984161644",
  },

  {
    text: "Vendas/Heurio",
    url: "https://api.whatsapp.com/send?phone=5535984188064",
  },

  {
    text: "Vendas/Jaqueline",
    url: "https://api.whatsapp.com/send?phone=5535984212943",
  },

  {
    text: "Facebook",
    url: "https://www.facebook.com/CeramicaGloriaLtda/?locale=pt_BR",
  },

  { 
    text: "Email", 
    url: "mailto:ceramicaglorialtda@outlook.com" 
  },

  { 
    text: "Instagram", 
    url: "https://www.instagram.com/ceramicagloria/?hl=pt" 
  },

  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/company/ceramicaglorialtda",
  },
  
  {
    text: "Localização",
    url: "https://www.google.com/maps/place/Cer%C3%A2mica+Gl%C3%B3ria/@-20.72224,-46.605943,15z/data=!4m14!1m7!3m6!1s0x94b6c3cbbb066ec5:0xb13322f83bbf6811!2zQ2Vyw6JtaWNhIEdsw7NyaWE!8m2!3d-20.72224!4d-46.605943!16s%2Fg%2F1vgqf5m4!3m5!1s0x94b6c3cbbb066ec5:0xb13322f83bbf6811!8m2!3d-20.72224!4d-46.605943!16s%2Fg%2F1vgqf5m4",
  },

 
];

var linkList = document.getElementById("link-list");


links.forEach(function (link) {
  var listItem = document.createElement("li");
  var linkItem = document.createElement("a");

  linkItem.textContent = link.text;
  linkItem.href = link.url;
  listItem.classList.add("link-item");
  listItem.appendChild(linkItem);

  linkList.appendChild(listItem);
});
