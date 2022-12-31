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

// We obtain the current lang by validating the value of 
/*const getCurrentLang = () => languageFlags.contains("es") ? 'es' : 'en'*/

// Change language when click one or another flag
languageFlags.addEventListener("click", (e) => {
  const esFlag = document.getElementById("esFlag");
  const ukFlag = document.getElementById("ukFlag");
  const actualLang = e.target.dataset.language;

  changeLanguage(actualLang);

  // Add or remove Active flag animation
  if (actualLang == "es") {
    ukFlag.classList.remove('flag-active');
    esFlag.classList.toggle("flag-active");

  } else if (actualLang == "en") {
    esFlag.classList.remove("flag-active");
    ukFlag.classList.toggle('flag-active');
  }

  // Saving current flag and lang that user chose
  /*localStorage.setItem('selected-lang', getCurrentLang())
  localStorage.setItem('selected-flag', getCurrentFlag()) */
});