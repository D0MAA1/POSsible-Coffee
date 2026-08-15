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
  return `<p class="category-number">${String(number).padStart(2, "0")}</p><h2 class="category-title">${data.title}</h2><div class="items">${data.items.map(([name, price, description], itemIndex) => `<div class="item" style="--item-image:url('${itemImages[(number + itemIndex - 1) % itemImages.length]}')"><strong class="item-name">${name}</strong><span class="item-price">${price}</span><p class="item-description">${description}</p></div>`).join("")}</div>`;
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
  document.querySelector("#theme-label").textContent = document.body.classList.contains("dark") ? text.light : text.dark;
  document.querySelector("#footer-rights").textContent = text.footer;
  render();
});

book.addEventListener("animationend", () => book.classList.remove("turn-forward", "turn-backward"));
document.querySelector("#theme-toggle").addEventListener("click", () => {
  const enabled = document.body.classList.toggle("dark");
  document.querySelector("#theme-label").textContent = enabled ? copy[language].light : copy[language].dark;
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
document.querySelector("#copyright-year").textContent = new Date().getFullYear();
render();
