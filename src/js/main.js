// import { getParkData } from "./parkService.mjs";

// const parkData = getParkData();

// const disclaimer = document.querySelector(".disclaimer > a");
// disclaimer.href = parkData.url;
// disclaimer.innerHTML = parkData.fullName;

// document.title = parkData.fullName;

// document.querySelector(".hero-banner img").src = parkData.images[0].url;

// const heroInfo = document.querySelector(".hero-banner__info");
// heroInfo.innerHTML = `
//   <a href="/" class="hero-banner__title">${parkData.name}</a>
//   <p class="hero-banner__subtitle">
//     <span>${parkData.designation}</span>
//     <span>${parkData.states}</span>
//   </p>
// `;

// function setHeaderInfo(data) {
//     const disclaimer = document.querySelector(".disclaimer > a");
//     disclaimer.href = data.url;
//     disclaimer.innerHTML = data.fullName;

//     document.querySelector("head > title").textContent = data.fullName;
//     document.querySelector(".hero-banner > img").src = data.images[0].url;
//     document.querySelector(".hero-banner__content").innerHTML =
//         parkInfoTemplate(data);
// }

// setHeaderInfo(parkData);

import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";
const parkData = getParkData();

function setParkIntro(data) {
    const introEl = document.querySelector(".intro");
    introEl.innerHTML = `<h1>${parkData.fullName}</h1>
  <p>${parkData.description}</p>`;
}

function setParkInfoLinks(data) {
    const infoEl = document.querySelector(".info");
    // we have multiple links to build...so we map to transform the array of objects into an array of HTML strings.
    const html = data.map(mediaCardTemplate);
    // join the array of strings into one string and insert it into the section
    infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);

    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(links);
}

init();
