const mainImage = document.getElementById('main-image');
const thumbnailsContainer = document.getElementById('thumbnail');

let images = [
  "https://raw.githubusercontent.com/TootiFruti/FOSS-CCS/main/FOSS-CCS%20-%20Arch%20Linux.png",
  "https://raw.githubusercontent.com/TootiFruti/FOSS-CCS/main/FOSS-CCS%20-%20CHOWN.png",
  "https://raw.githubusercontent.com/TootiFruti/FOSS-CCS/main/FOSS-CCS%20-%20NMCLI.png",
  "https://raw.githubusercontent.com/TootiFruti/FOSS-CCS/main/FOSS-CCS%20-%20rm.png",
  "https://raw.githubusercontent.com/TootiFruti/FOSS-CCS/main/FOSS-CCS%20-%20Neofetch.png",
  "https://raw.githubusercontent.com/TootiFruti/FOSS-CCS/main/FOSS-CCS%20-%20ROOT.png",
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

