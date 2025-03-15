"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const elements = {
    basketIcon: document.querySelector(".basket_logo i"),
    shoppingCard: document.querySelector(".shopping_card"),
    closeBtn: document.querySelector(".close"),
    checkOutBtn: document.querySelector(".check_out"),
    addButtons: document.querySelectorAll(".add_button button"),
    totalAmount: document.querySelector(".amount"),
    upperSide: document.querySelector(".upper-side"),
  };

  // Create cart items container
  const cartItemsContainer = document.createElement("div");
  cartItemsContainer.classList.add("cart-items-container");
  elements.upperSide.appendChild(cartItemsContainer);

  // Cart state
  let cart = [];

  // Load cart from local storage if available
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  // Initialize cart
  initCart();

  function initCart() {
    // Show shopping card by default
    const shoppingCardVisibility = localStorage.getItem("shoppingCardVisibility");
    if (shoppingCardVisibility === "visible") {
      elements.shoppingCard.style.display = "block";
    } else {
      elements.shoppingCard.style.display = "none";
    }

    // Initialize total amount from local storage
    const savedTotal = localStorage.getItem("totalAmount");
    if (savedTotal) {
      elements.totalAmount.textContent = savedTotal;
    } else {
      elements.totalAmount.textContent = "$0.00";
    }

    // Add event listeners
    elements.basketIcon.addEventListener("click", toggleCart);
    elements.closeBtn.addEventListener("click", toggleCart);
    elements.checkOutBtn.addEventListener("click", handleCheckout);

    // Add event listeners for all add buttons
    elements.addButtons.forEach((button) => {
      button.addEventListener("click", addToCart);
    });

    // Initial UI update
    updateCartUI();
  }

  function toggleCart() {
    const isVisible = elements.shoppingCard.style.display === "block";
    elements.shoppingCard.style.display = isVisible ? "none" : "block";

    // Save the shopping card visibility state to local storage
    localStorage.setItem("shoppingCardVisibility", isVisible ? "hidden" : "visible");

    if (!isVisible) {
      updateCartUI();
    }
  }

  function addToCart(event) {
    const card = event.target.closest(".card");
    const title = card.querySelector(".title h3").textContent;
    const price = parseFloat(
      card.querySelector(".price p").textContent.replace("$", "")
    );

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex((item) => item.title === title);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ title, price, quantity: 1 });
    }

    // Visual feedback
    animateAddToCart(card);

    // Update cart UI if visible
    if (elements.shoppingCard.style.display === "block") {
      updateCartUI();
    }

    // Save cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function animateAddToCart(card) {
    // Add animation class
    card.classList.add("added-to-cart");

    // Remove animation class after animation completes
    setTimeout(() => {
      card.classList.remove("added-to-cart");
    }, 300);
  }

  function updateCartUI() {
    cartItemsContainer.innerHTML = "";

    // Just leave empty container if cart is empty - no message
    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <div class="item-details">
          <span class="item-title">${item.title}</span>
          <div class="item-controls">
            <button class="quantity-btn minus" data-index="${index}">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn plus" data-index="${index}">+</button>
          </div>
        </div>
        <div class="item-price">
          <span>$${(item.price * item.quantity).toFixed(2)}</span>
          <button class="remove" data-index="${index}">✕</button>
        </div>
      `;
      cartItemsContainer.appendChild(cartItem);
    });

    // Add event listeners for quantity buttons and remove buttons
    document.querySelectorAll(".quantity-btn.minus").forEach((btn) => {
      btn.addEventListener("click", decreaseQuantity);
    });

    document.querySelectorAll(".quantity-btn.plus").forEach((btn) => {
      btn.addEventListener("click", increaseQuantity);
    });

    document.querySelectorAll(".remove").forEach((btn) => {
      btn.addEventListener("click", removeItem);
    });
  }

  function decreaseQuantity(event) {
    const index = parseInt(event.target.dataset.index);
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      // If quantity would go below 1, show alert and remove item
      alert("The number of items cannot be less than 0");
      cart.splice(index, 1);
    }
    updateCartUI();
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function increaseQuantity(event) {
    const index = parseInt(event.target.dataset.index);
    cart[index].quantity += 1;
    updateCartUI();
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function removeItem(event) {
    const index = parseInt(event.target.dataset.index);
    cart.splice(index, 1);
    updateCartUI();
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function calculateTotal() {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }

  function handleCheckout() {
    // Calculate and update total only when checkout button is pressed
    const total = calculateTotal();
    elements.totalAmount.textContent = `$${total.toFixed(2)}`;

    // Save total to local storage
    localStorage.setItem("totalAmount", `$${total.toFixed(2)}`);

    if (cart.length === 0) {
      alert("Your cart is empty!");
    }
  }
});
