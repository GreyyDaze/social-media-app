// sidebar click
const menuItems = Array.from(document.getElementsByClassName("menu-item"));

// messages
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector(".messages #message-search");

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
