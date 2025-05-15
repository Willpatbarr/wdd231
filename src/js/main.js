import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

document.title = parkData.fullName;

document.querySelector(".hero-banner img").src = parkData.images[0].url;

const heroInfo = document.querySelector(".hero-banner__info");
heroInfo.innerHTML = `
  <a href="/" class="hero-banner__title">${parkData.name}</a>
  <p class="hero-banner__subtitle">
    <span>${parkData.designation}</span>
    <span>${parkData.states}</span>
  </p>
`;

