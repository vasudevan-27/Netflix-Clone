const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select Tab Content
function SelectItem(e) {
  removeBorder();
  removeShow();

  //Add Border
  this.classList.add("tab-border");

  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

tabItems.forEach((item) => item.addEventListener("click", SelectItem));
