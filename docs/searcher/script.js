const mainImage = document.getElementById('main-image');
const thumbnailsContainer = document.getElementById('thumbnail');

let images = [
  "https://raw.githubusercontent.com/FOSS-CCS/FOSS-CCS.github.io/main/cards/Arch-Linux.png",
  "https://raw.githubusercontent.com/FOSS-CCS/FOSS-CCS.github.io/main/cards/NMCLI.png",
  "https://raw.githubusercontent.com/FOSS-CCS/FOSS-CCS.github.io/main/cards/Neofetch.png",
  "https://raw.githubusercontent.com/FOSS-CCS/FOSS-CCS.github.io/main/cards/ROOT.png",
  "https://raw.githubusercontent.com/FOSS-CCS/FOSS-CCS.github.io/main/cards/chown.png",
  "https://raw.githubusercontent.com/FOSS-CCS/FOSS-CCS.github.io/main/cards/dwm.png",
  "https://raw.githubusercontent.com/FOSS-CCS/FOSS-CCS.github.io/main/cards/gnome.png",
  "https://raw.githubusercontent.com/FOSS-CCS/FOSS-CCS.github.io/main/cards/hyprland.png",
  "https://raw.githubusercontent.com/FOSS-CCS/FOSS-CCS.github.io/main/cards/kde-plasma.png",
  "https://raw.githubusercontent.com/FOSS-CCS/FOSS-CCS.github.io/main/cards/rm.png"
  
];

function displayImage(imagePath) {
  mainImage.src = imagePath;
}

function createThumbnail(imagePath) {
  const img = document.createElement('img');
  img.src = imagePath;
  img.addEventListener('click', () => {
    displayImage(imagePath);
    removeSelectedClass();
    img.classList.add('selected');
  });
  thumbnailsContainer.appendChild(img);
}

function removeSelectedClass() {
  const selected = thumbnailsContainer.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
}

images.forEach(imagePath => createThumbnail(imagePath));

displayImage(images[0]);
thumbnailsContainer.firstChild.classList.add('selected');

