const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//create map
const map = L.map("mapid", options).setView([-25.398825, -51.4760324], 15);

//create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSise: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker
L.marker([-25.398825, -51.4760324], { icon }).addTo(map);

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget;

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  // selecionar a image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar o container de image
  imageContainer.src = image.src;

  // adicionar a classe .active para este botão
  button.classList.add("active");
}
