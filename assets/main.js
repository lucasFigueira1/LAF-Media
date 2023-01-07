/*===== CHANGE LANGUAGE =====*/ 
const languageFlags = document.querySelector(".language-btn");
const dataSections = document.querySelectorAll("[data-section]");

// Getting the language selected
const changeLanguage = async (language) => {
  const requestJson = await fetch(`assets/languages/${language}.json`);
  const text = await requestJson.json();

  for (const dataSection of dataSections) {
    const section = dataSection.dataset.section;
    const value = dataSection.dataset.value;

    dataSection.innerHTML = text[section][value];
  }
};

// Previously selected lang (if user selected)
/*const selectedLang = localStorage.getItem('selected-lang')
const selectedFlag = localStorage.getItem('selected-flag')*/

function changeFlagAnimation(language) {
  const esFlag = document.getElementById("esFlag");
  const ukFlag = document.getElementById("ukFlag");

  if (language == "es") {
    ukFlag.classList.remove('flag-active');
    esFlag.classList.toggle("flag-active");

  } else if (language == "en") {
    esFlag.classList.remove("flag-active");
    ukFlag.classList.toggle('flag-active');
  }
}

// We obtain the current lang by validating the value of 
window.addEventListener('load', function() {
  changeLanguage(getCurrentLang())
  changeFlagAnimation(getCurrentLang())
});

const getCurrentLang = () => window.localStorage.getItem('selected-lang') == 'es' ? 'es' : 'en' 

// Change language when click one or another flag
languageFlags.addEventListener("click", (e) => {
  const actualLang = e.target.dataset.language;

  changeLanguage(actualLang);

  // Add or remove Active flag animation
  changeFlagAnimation(actualLang);

  // Saving current lang that user chose
  window.localStorage.setItem('selected-lang', actualLang)
});

// SCROLL REVEAL ANIMATION 
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '2500',
  delay: '400'
})

sr.reveal(`.text-col`)
sr.reveal(`.img-col`)
sr.reveal(`.other-services-col`)
sr.reveal(`.why-twitter-col`)
sr.reveal(`.call-info-col`)
sr.reveal(`.call-info-img`)
