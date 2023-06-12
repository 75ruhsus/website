const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cartitemscontainer");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

cartBtn.addEventListener("click", function () {
  cartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {
      cartItem.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});


let list = document.querySelectorAll('.boxcontainer .box');
list.forEach(box => {
  box.addEventListener('click', function(event){
    if(event.target.classList.contains('btn')){
      var itemNew = box.cloneNode(true);

      // silme iconu
      var deleteIcon = document.createElement('i');
      deleteIcon.classList.add('fas', 'fa-times');

      // ürun resmi
      var img = itemNew.children[0].children[0];

      // ürün ismi
      var productTitle = itemNew.children[0].children[2];

      // ürün fiyatı
      var priceText = itemNew.children[0].children[3].children[0].textContent;

      // ürün fiyat div
      var priceDiv = document.createElement('div');
      priceDiv.classList.add('price');
      priceDiv.textContent = priceText;

      // content div
      var contentDiv = document.createElement('div');
      contentDiv.classList.add('content');
      contentDiv.appendChild(productTitle);
      contentDiv.appendChild(priceDiv);

      // cart-item
      var cartItemDiv = document.createElement('div');
      cartItemDiv.classList.add('cart-item');
      cartItemDiv.appendChild(deleteIcon);
      cartItemDiv.appendChild(img);
      cartItemDiv.appendChild(contentDiv);

      document.querySelector('.cartitemscontainer').appendChild(cartItemDiv);
    }
  })
}
)


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}