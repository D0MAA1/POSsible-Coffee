// Restaurant settings: update these values when reusing this menu.
const restaurantConfig = {
  name: "POSsible Coffee",
  whatsapp: "201026779104",
  currency: "EGP",
  storageKey: "possible-coffee-cart",
  orderSequenceKey: "possible-coffee-order-sequence",
  fields: { customerName: { required: true }, tableNumber: { required: true }, orderType: { required: true }, notes: { required: false } }
};

// Edit menu items, prices, and descriptions here.
const menu = [
  { en: { title: "Coffee", items: [
    ["Espresso", "45 EGP", "A short, rich shot with a velvety crema."],
    ["Americano", "55 EGP", "Espresso softened with hot water."],
    ["Cappuccino", "75 EGP", "Espresso, steamed milk, and a light foam."],
    ["Spanish Latte", "85 EGP", "Creamy espresso with a touch of sweetness."],
    ["Flat White", "80 EGP", "Double espresso with silky microfoam."]
  ]}, ar: { title: "القهوة", items: [
    ["إسبريسو", "٤٥ ج.م", "جرعة قصيرة وغنية بطبقة كريما ناعمة."],
    ["أمريكانو", "٥٥ ج.م", "إسبريسو متوازن مع الماء الساخن."],
    ["كابتشينو", "٧٥ ج.م", "إسبريسو وحليب مبخر ورغوة خفيفة."],
    ["سبانيش لاتيه", "٨٥ ج.م", "إسبريسو كريمي بلمسة من الحلاوة."],
    ["فلات وايت", "٨٠ ج.م", "إسبريسو مزدوج مع رغوة حليب مخملية."]
  ]}},
  { en: { title: "Hot Drinks", items: [
    ["Hot Chocolate", "75 EGP", "Dark chocolate, warm milk, and cocoa."],
    ["Matcha Latte", "95 EGP", "Ceremonial matcha with steamed milk."],
    ["Chai Latte", "80 EGP", "Fragrant spiced tea with creamy milk."],
    ["English Breakfast Tea", "50 EGP", "A classic full-bodied black tea."],
    ["Herbal Infusion", "55 EGP", "A calming seasonal blend."]
  ]}, ar: { title: "المشروبات الساخنة", items: [
    ["هوت شوكليت", "٧٥ ج.م", "شوكولاتة داكنة وحليب دافئ وكاكاو."],
    ["ماتشا لاتيه", "٩٥ ج.م", "ماتشا فاخرة مع حليب مبخر."],
    ["تشاي لاتيه", "٨٠ ج.م", "شاي متبل عطري مع حليب كريمي."],
    ["شاي إنجليزي", "٥٠ ج.م", "شاي أسود كلاسيكي غني النكهة."],
    ["أعشاب دافئة", "٥٥ ج.م", "خليط موسمي هادئ من الأعشاب."]
  ]}},
  { en: { title: "Cold Drinks", items: [
    ["Iced Latte", "85 EGP", "Double espresso, milk, and ice."],
    ["Iced Spanish Latte", "95 EGP", "A sweet, creamy cold coffee favourite."],
    ["Cold Brew", "90 EGP", "Slow-steeped for a smooth, chocolatey finish."],
    ["Iced Matcha", "105 EGP", "Bright matcha shaken over ice and milk."],
    ["Fresh Lemonade", "65 EGP", "Fresh lemon, mint, and sparkling water."]
  ]}, ar: { title: "المشروبات الباردة", items: [
    ["آيس لاتيه", "٨٥ ج.م", "إسبريسو مزدوج وحليب وثلج."],
    ["آيس سبانيش لاتيه", "٩٥ ج.م", "قهوة باردة كريمية وحلوة."],
    ["كولد برو", "٩٠ ج.م", "محضر ببطء لنكهة ناعمة وغنية."],
    ["آيس ماتشا", "١٠٥ ج.م", "ماتشا منعشة مع الثلج والحليب."],
    ["ليمونادة طازجة", "٦٥ ج.م", "ليمون طازج ونعناع ومياه فوارة."]
  ]}},
  { en: { title: "Desserts", items: [
    ["San Sebastian Cheesecake", "110 EGP", "Burnt top, soft centre, deeply indulgent."],
    ["Chocolate Brownie", "75 EGP", "Fudgy dark chocolate with a crisp edge."],
    ["Cinnamon Roll", "70 EGP", "Freshly baked with cinnamon glaze."],
    ["Tiramisu", "105 EGP", "Coffee-soaked ladyfingers and mascarpone."],
    ["Cookie of the Day", "55 EGP", "Ask us about today’s fresh bake."]
  ]}, ar: { title: "الحلويات", items: [
    ["تشيزكيك سان سيباستيان", "١١٠ ج.م", "وجه محمّر وقلب طري لا يقاوم."],
    ["براوني شوكولاتة", "٧٥ ج.م", "شوكولاتة داكنة غنية بحواف مقرمشة."],
    ["سينامون رول", "٧٠ ج.م", "مخبوز طازج مع طبقة قرفة."],
    ["تيراميسو", "١٠٥ ج.م", "بسكويت بالقهوة وكريمة ماسكاربوني."],
    ["كوكيز اليوم", "٥٥ ج.م", "اسألنا عن مخبوزات اليوم الطازجة."]
  ]}},
  { en: { title: "Food", items: [
    ["Turkey & Cheese Croissant", "125 EGP", "Smoked turkey, cheese, and rocket."],
    ["Halloumi Toast", "115 EGP", "Grilled halloumi, tomato, and pesto."],
    ["Avocado Toast", "120 EGP", "Smashed avocado, herbs, and chilli flakes."],
    ["Chicken Caesar Sandwich", "135 EGP", "Grilled chicken, parmesan, and crisp lettuce."],
    ["Butter Croissant", "45 EGP", "Flaky, golden, and baked fresh daily."]
  ]}, ar: { title: "الطعام", items: [
    ["كرواسون ديك رومي وجبن", "١٢٥ ج.م", "ديك رومي مدخن وجبن وجرجير."],
    ["توست حلوم", "١١٥ ج.م", "حلوم مشوي وطماطم وبيستو."],
    ["توست أفوكادو", "١٢٠ ج.م", "أفوكادو مهروس وأعشاب ورقائق فلفل."],
    ["ساندوتش سيزر دجاج", "١٣٥ ج.م", "دجاج مشوي وبارميزان وخس مقرمش."],
    ["كرواسون بالزبدة", "٤٥ ج.م", "ذهبي وهش ومخبوز طازج يومياً."]
  ]}}
];

const copy = {
  en: { eyebrow: "OUR MENU", heading: "Made for your moment.", previous: "Previous", next: "Next", page: "Page", of: "of", footer: "All rights reserved.", switch: "العربية", dark: "Dark", light: "Light" },
  ar: { eyebrow: "قائمتنا", heading: "صُنعت للحظتك.", previous: "السابق", next: "التالي", page: "صفحة", of: "من", footer: "جميع الحقوق محفوظة.", switch: "English", dark: "داكن", light: "فاتح" }
};

// These food photographs are used as subtle card backgrounds. Replace URLs here if desired.
const itemImages = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517701550927-30cf4ba1a1e3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
];

const productImages = {
  "menu-1-2": "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=900&q=80"
};

function imageForProduct(id, categoryIndex, itemIndex) {
  return productImages[id] || itemImages[(categoryIndex + itemIndex) % itemImages.length];
}

let language = "en";
let spread = 0;
const pageLeft = document.querySelector("#page-left");
const pageRight = document.querySelector("#page-right");
const book = document.querySelector("#book");
const prev = document.querySelector("#previous");
const next = document.querySelector("#next");
const compactView = window.matchMedia("(max-width: 680px)");

function pageMarkup(category, number) {
  const data = category[language];
  return '<p class="category-number">' + String(number).padStart(2, "0") + '</p><h2 class="category-title">' + data.title + '</h2><div class="items">' + data.items.map(([name, price, description], itemIndex) => { const id = "menu-" + number + "-" + (itemIndex + 1); const quantity = selectedQuantity(id); return '<div class="item" style="--item-image:url(' + imageForProduct(id, number - 1, itemIndex) + ')"><strong class="item-name">' + name + '</strong><span class="item-price">' + price + '</span><p class="item-description">' + description + '</p><div class="product-actions"><div class="product-controls" data-product-controls data-product-id="' + id + '"><button type="button" data-product-action="decrease" data-product-id="' + id + '" aria-label="Decrease quantity"' + (quantity === 1 ? ' disabled' : '') + '>&minus;</button><b data-product-quantity>' + quantity + '</b><button type="button" data-product-action="increase" data-product-id="' + id + '" aria-label="Increase quantity">+</button></div><button type="button" class="add-to-cart" data-product-action="add" data-product-id="' + id + '">' + cartCopy().add + '</button></div></div>'; }).join("") + '</div>';
}

function render(animation = "") {
  const single = compactView.matches;
  const index = single ? spread : spread * 2;
  pageLeft.innerHTML = !single ? pageMarkup(menu[index], index + 1) : "";
  pageRight.innerHTML = !single && menu[index + 1]
    ? pageMarkup(menu[index + 1], index + 2)
    : pageMarkup(menu[index], index + 1);
  pageLeft.style.visibility = !single ? "visible" : "hidden";

  const total = single ? menu.length : Math.ceil(menu.length / 2);
  const visiblePage = single ? index + 1 : spread + 1;
  document.querySelector("#page-indicator").textContent = `${copy[language].page} ${visiblePage} ${copy[language].of} ${total}`;
  prev.disabled = spread === 0;
  next.disabled = spread >= total - 1;
  prev.setAttribute("aria-label", copy[language].previous);
  next.setAttribute("aria-label", copy[language].next);
  if (animation) {
    book.classList.remove("turn-forward", "turn-backward");
    void pageRight.offsetWidth;
    book.classList.add(animation);
  }
}

function changePage(direction) {
  const total = compactView.matches ? menu.length : Math.ceil(menu.length / 2);
  const newSpread = spread + direction;
  if (newSpread < 0 || newSpread >= total) return;
  spread = newSpread;
  render(direction > 0 ? "turn-forward" : "turn-backward");
}

prev.addEventListener("click", () => changePage(-1));
next.addEventListener("click", () => changePage(1));
document.querySelector("#language-toggle").addEventListener("click", () => {
  language = language === "en" ? "ar" : "en";
  const text = copy[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.querySelector("#language-toggle").textContent = text.switch;
  document.querySelector("#language-toggle").setAttribute("aria-label", `Switch to ${language === "en" ? "Arabic" : "English"}`);
  document.querySelector("#menu-subtitle").textContent = text.eyebrow;
  document.querySelector("#menu-heading").textContent = text.heading;
  document.querySelector("#previous-label").textContent = text.previous;
  document.querySelector("#next-label").textContent = text.next;
  document.querySelector("#footer-rights").textContent = text.footer;
  render();
  updateCartInterface();
});

book.addEventListener("animationend", () => book.classList.remove("turn-forward", "turn-backward"));
document.querySelector("#theme-toggle").addEventListener("click", () => {
  const enabled = document.body.classList.toggle("dark");
  document.querySelector("#theme-toggle").firstElementChild.textContent = enabled ? "☀" : "☾";
  document.querySelector("#theme-toggle").setAttribute("aria-label", enabled ? "Enable light mode" : "Enable dark mode");
});

// Swipe across the menu book to turn pages; vertical scrolling remains untouched.
let swipeStartX = null;
let swipeStartY = null;
book.addEventListener("pointerdown", (event) => {
  if (!event.isPrimary) return;
  swipeStartX = event.clientX;
  swipeStartY = event.clientY;
  book.setPointerCapture?.(event.pointerId);
});
book.addEventListener("pointerup", (event) => {
  if (swipeStartX === null) return;
  const horizontalDistance = event.clientX - swipeStartX;
  const verticalDistance = event.clientY - swipeStartY;
  if (Math.abs(horizontalDistance) > 55 && Math.abs(horizontalDistance) > Math.abs(verticalDistance)) {
    changePage(horizontalDistance < 0 ? 1 : -1);
  }
  swipeStartX = null;
  swipeStartY = null;
});
book.addEventListener("pointercancel", () => { swipeStartX = null; swipeStartY = null; });

compactView.addEventListener("change", () => { spread = 0; render(); });

// Cart and ordering are deliberately frontend-only, so this works on GitHub Pages.
let cart = loadCart();
const productSelections = {};
const cartLayer = document.querySelector("#cart-layer");
const checkoutLayer = document.querySelector("#checkout-layer");

function cartCopy() {
  return language === "ar"
    ? { add: "أضف للسلة", cart: "السلة", empty: "سلتك فارغة.", subtotal: "الإجمالي الفرعي", checkout: "إتمام الطلب", complete: "أكمل طلبك", customer: "اسم العميل", table: "رقم الطاولة", orderType: "نوع الطلب", dineIn: "داخل المكان", takeaway: "تيك أواي", notes: "ملاحظات", summary: "ملخص الطلب", total: "الإجمالي", confirm: "تأكيد الطلب", remove: "حذف", required: "يرجى إكمال الحقول المطلوبة." }
    : { add: "Add to Cart", cart: "Your cart", empty: "Your cart is empty.", subtotal: "Subtotal", checkout: "Checkout", complete: "Complete your order", customer: "Customer Name", table: "Table Number", orderType: "Order Type", dineIn: "Dine In", takeaway: "Takeaway", notes: "Notes", summary: "Order summary", total: "Total", confirm: "Confirm Order", remove: "Remove", required: "Please complete the required fields." };
}

function getProductById(id) {
  const match = /^menu-(\d+)-(\d+)$/.exec(id);
  if (!match) return null;
  const categoryIndex = Number(match[1]) - 1;
  const itemIndex = Number(match[2]) - 1;
  const english = menu[categoryIndex] && menu[categoryIndex].en.items[itemIndex];
  if (!english) return null;
  return { id, categoryIndex, itemIndex, price: Number.parseInt(english[1], 10), image: imageForProduct(id, categoryIndex, itemIndex) };
}

function productLabel(product) {
  return menu[product.categoryIndex][language].items[product.itemIndex][0];
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(restaurantConfig.storageKey) || "[]");
    return Array.isArray(saved) ? saved.filter((item) => getProductById(item.id) && Number.isInteger(item.quantity) && item.quantity > 0) : [];
  } catch { return []; }
}

function saveCart() {
  localStorage.setItem(restaurantConfig.storageKey, JSON.stringify(cart));
}

function calculateTotal() {
  return cart.reduce((total, item) => {
    const product = getProductById(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function formatPrice(price) {
  return price + " " + restaurantConfig.currency;
}

function cartQuantity(id) {
  const item = cart.find((entry) => entry.id === id);
  return item ? item.quantity : 0;
}

function selectedQuantity(id) {
  return productSelections[id] || 1;
}

function updateProductControls() {
  document.querySelectorAll("[data-product-controls]").forEach((controls) => {
    const quantity = selectedQuantity(controls.dataset.productId);
    controls.querySelector("[data-product-quantity]").textContent = quantity;
    controls.querySelector('[data-product-action="decrease"]').disabled = quantity === 1;
  });
}

function addToCart(id) {
  const product = getProductById(id);
  if (!product) return;
  const quantity = selectedQuantity(id);
  const current = cart.find((item) => item.id === id);
  if (current) current.quantity += quantity;
  else cart.push({ id, quantity });
  productSelections[id] = 1;
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
}

function increaseQuantity(id) {
  const item = cart.find((entry) => entry.id === id);
  if (item) { item.quantity += 1; saveCart(); renderCart(); }
}

function decreaseQuantity(id) {
  const item = cart.find((entry) => entry.id === id);
  if (!item) return;
  if (item.quantity === 1) removeFromCart(id);
  else { item.quantity -= 1; saveCart(); renderCart(); }
}

function changeSelectedQuantity(id, amount) {
  productSelections[id] = Math.max(1, selectedQuantity(id) + amount);
  updateProductControls();
}

function renderCart() {
  const text = cartCopy();
  const cartItems = document.querySelector("#cart-items");
  cartItems.innerHTML = cart.length ? cart.map((item) => {
    const product = getProductById(item.id);
    return '<article class="cart-item"><img src="' + product.image + '" alt="" /><div class="cart-item-details"><strong>' + productLabel(product) + '</strong><span>' + formatPrice(product.price) + '</span><div class="quantity-controls"><button type="button" data-cart-action="decrease" data-product-id="' + item.id + '" aria-label="Decrease quantity">−</button><b>' + item.quantity + '</b><button type="button" data-cart-action="increase" data-product-id="' + item.id + '" aria-label="Increase quantity">+</button><button type="button" class="remove-item" data-cart-action="remove" data-product-id="' + item.id + '">' + text.remove + '</button></div></div><strong>' + formatPrice(product.price * item.quantity) + '</strong></article>';
  }).join("") : '<p class="empty-cart">' + text.empty + '</p>';
  document.querySelector("#cart-total").textContent = formatPrice(calculateTotal());
  document.querySelector("#subtotal-label").textContent = text.subtotal;
  document.querySelector("#cart-title").textContent = text.cart;
  document.querySelector("#checkout-button").textContent = text.checkout;
  document.querySelector("#checkout-button").disabled = cart.length === 0;
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const badge = document.querySelector("#cart-badge");
  badge.textContent = count;
  badge.hidden = count === 0;
  updateProductControls();
}

function updateCartInterface() {
  renderCart();
  updateCheckoutInterface();
}

function openCart() {
  renderCart();
  cartLayer.classList.add("is-open");
  cartLayer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartLayer.classList.remove("is-open");
  cartLayer.setAttribute("aria-hidden", "true");
}

function openCheckout() {
  if (!cart.length) return;
  closeCart();
  updateCheckoutInterface();
  checkoutLayer.classList.add("is-open");
  checkoutLayer.setAttribute("aria-hidden", "false");
}

function closeCheckout() {
  checkoutLayer.classList.remove("is-open");
  checkoutLayer.setAttribute("aria-hidden", "true");
}

function updateCheckoutInterface() {
  const text = cartCopy();
  const fields = restaurantConfig.fields;
  const labels = { customerName: "customer", tableNumber: "table", orderType: "orderType", notes: "notes" };
  Object.keys(labels).forEach((field) => {
    const control = document.querySelector('[name="' + field + '"]');
    const wrapper = document.querySelector("#" + field.replace("Name", "").replace("Number", "") + "-field");
    if (control) control.required = fields[field].required;
    if (wrapper) wrapper.hidden = fields[field].hidden === true;
  });
  document.querySelector("#cart-title").textContent = text.cart;
  document.querySelector("#checkout-title").textContent = text.complete;
  document.querySelector("#customer-label").textContent = text.customer;
  document.querySelector("#table-label").textContent = text.table;
  document.querySelector("#order-type-label").textContent = text.orderType;
  document.querySelector("#notes-label").textContent = text.notes;
  document.querySelector('[name="orderType"] option[value="dineIn"]').textContent = text.dineIn;
  document.querySelector('[name="orderType"] option[value="takeaway"]').textContent = text.takeaway;
  document.querySelector("#summary-title").textContent = text.summary;
  document.querySelector("#total-label").textContent = text.total;
  document.querySelector("#confirm-button").textContent = text.confirm;
  document.querySelector("#checkout-order-id").textContent = "Order ID: " + nextOrderId();
  document.querySelector("#summary-items").innerHTML = cart.map((item) => {
    const product = getProductById(item.id);
    return '<div class="summary-line"><span>' + item.quantity + ' × ' + productLabel(product) + '</span><strong>' + formatPrice(product.price * item.quantity) + '</strong></div>';
  }).join("");
  document.querySelector("#summary-total").textContent = formatPrice(calculateTotal());
}

function nextOrderId() {
  const today = new Date();
  const dateKey = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let sequence = { date: dateKey, number: 0 };
  try { sequence = JSON.parse(localStorage.getItem(restaurantConfig.orderSequenceKey)) || sequence; } catch {}
  const number = sequence.date === dateKey ? sequence.number + 1 : 1;
  return "PZ-" + today.getDate() + "-" + (today.getMonth() + 1) + "/" + String(number).padStart(4, "0");
}

function saveOrderId(orderId) {
  const today = new Date();
  const dateKey = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  localStorage.setItem(restaurantConfig.orderSequenceKey, JSON.stringify({ date: dateKey, number: Number(orderId.split("/")[1]) }));
}

function generateWhatsAppMessage(formData, orderId) {
  const text = cartCopy();
  const orderLines = cart.map((item) => {
    const product = getProductById(item.id);
    return item.quantity + "x " + productLabel(product) + " — " + formatPrice(product.price * item.quantity);
  }).join("\n");
  const details = [
    "New Order – " + restaurantConfig.name,
    "Order ID: " + orderId,
    "",
    text.customer + ": " + (formData.customerName || "-"),
    text.table + ": " + (formData.tableNumber || "-"),
    text.orderType + ": " + (formData.orderType === "takeaway" ? text.takeaway : text.dineIn),
    "",
    "Order:",
    orderLines,
    "",
    text.notes + ":",
    formData.notes || "-",
    "",
    text.total + ": " + formatPrice(calculateTotal())
  ];
  return details.join("\n");
}

function submitOrder(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form));
  const visibleRequired = Object.entries(restaurantConfig.fields).filter(([key, setting]) => setting.required && !setting.hidden);
  const error = document.querySelector("#form-error");
  if (visibleRequired.some(([key]) => !String(data[key] || "").trim())) {
    error.textContent = cartCopy().required;
    return;
  }
  error.textContent = "";
  const orderId = nextOrderId();
  saveOrderId(orderId);
  const url = "https://wa.me/" + restaurantConfig.whatsapp + "?text=" + encodeURIComponent(generateWhatsAppMessage(data, orderId));
  window.open(url, "_blank", "noopener");
  cart = [];
  saveCart();
  form.reset();
  closeCheckout();
  renderCart();
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-action]");
  if (!button) return;
  event.preventDefault();
  if (button.dataset.productAction === "increase") changeSelectedQuantity(button.dataset.productId, 1);
  if (button.dataset.productAction === "decrease") changeSelectedQuantity(button.dataset.productId, -1);
  if (button.dataset.productAction === "add") addToCart(button.dataset.productId);
});
document.querySelector("#cart-toggle").addEventListener("click", openCart);
document.querySelectorAll("[data-cart-close]").forEach((element) => element.addEventListener("click", closeCart));
document.querySelectorAll("[data-checkout-close]").forEach((element) => element.addEventListener("click", closeCheckout));
document.querySelector("#checkout-button").addEventListener("click", openCheckout);
document.querySelector("#cart-items").addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;
  const id = button.dataset.productId;
  if (button.dataset.cartAction === "increase") increaseQuantity(id);
  if (button.dataset.cartAction === "decrease") decreaseQuantity(id);
  if (button.dataset.cartAction === "remove") removeFromCart(id);
});
document.querySelector("#checkout-form").addEventListener("submit", submitOrder);
document.querySelector("#copyright-year").textContent = new Date().getFullYear();
render();
renderCart();
