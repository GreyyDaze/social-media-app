// sidebar click
const menuItems = Array.from(document.getElementsByClassName("menu-item"));

// messages
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector(".messages #message-search");

//theme
const theme = document.querySelector("#theme");
const customizeThemeBox = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1 ");
const bg2 = document.querySelector(".bg-2 ");
const bg3 = document.querySelector(".bg-3 ");

const changeActiveClass = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

const removeBoxShadow = () => {
  messages.style.boxShadow = "none";
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveClass();
    item.classList.add("active");
    if (item.id == "notifications") {
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
      document.querySelector(".notifications-popup").style.display = "block";
    } else {
      document.querySelector(".notifications-popup").style.display = "none";
    }

    if (item.id == "messages-notifications") {
      document.querySelector(
        "#messages-notifications .notification-count"
      ).style.display = "none";
      messages.style.boxShadow = "0 0 1rem var(--color-primary)";
      setTimeout(removeBoxShadow, 1500);
    }
  });
});

//messages Search
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();

  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();

    console.log(name, val);
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

//theme customization
//open modal
const openThemeBox = () => {
  customizeThemeBox.style.display = "grid";
};

theme.addEventListener("click", openThemeBox);

//close modal
const closeThemeBox = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    customizeThemeBox.style.display = "none";
  }
};

customizeThemeBox.addEventListener("click", closeThemeBox);

// font sizes choose
const removeFontActiveClass = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    let fontSize;
    removeFontActiveClass();
    size.classList.add("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "12px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "18px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "20px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }

    document.querySelector("html").style.fontSize = fontSize;
  });
});

//change our primary colors
const removeColorActiveClass = () => {
  colorPalette.forEach((color) => {
    color.classList.remove("active");
  });
};

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;

    removeColorActiveClass();
    color.classList.add("active");

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

//background color choose
let whiteColorLightness, lightColorLightness, darkColorLightness;
let light, dim, lightsOut;

const changeBg = (e) => {
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);

  document.querySelector("body").style.color = "white";
}
  

bg2.addEventListener("click", (e) => {
  whiteColorLightness = "22%";
  lightColorLightness = "15%";
  darkColorLightness = "10%";

  bg2.classList.add("active");
  bg3.classList.remove("active");
  bg1.classList.remove("active");
  changeBg(e);
});

bg3.addEventListener("click", (e) => {
  whiteColorLightness = "09%";
  lightColorLightness = "0%";
  darkColorLightness = "0%";

  bg3.classList.add("active");
  bg2.classList.remove("active");
  bg1.classList.remove("active");
  changeBg(e);
});

bg1.addEventListener("click", () => {
  bg1.classList.add("active");
  bg3.classList.remove("active");
  bg2.classList.remove("active");
  
  window.location.reload();
});
