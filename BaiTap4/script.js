// --- TÌM KIẾM SẢN PHẨM ---
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", searchProducts);
searchInput.addEventListener("keyup", searchProducts);

function searchProducts() {
  const keyword = searchInput.value.toLowerCase().trim();
  const products = document.querySelectorAll(".product-item");
  products.forEach(item => {
    const name = item.querySelector(".product-name").textContent.toLowerCase();
    item.style.display = name.includes(keyword) ? "" : "none";
  });
}

// --- ẨN/HIỆN FORM THÊM SẢN PHẨM ---
const addProductBtn = document.getElementById("addProductBtn");
const addProductForm = document.getElementById("addProductForm");
const cancelBtn = document.getElementById("cancelBtn");

addProductBtn.addEventListener("click", () => {
  addProductForm.classList.toggle("hidden");
});
cancelBtn.addEventListener("click", () => {
  addProductForm.classList.add("hidden");
});

// --- XỬ LÝ THÊM SẢN PHẨM ---
addProductForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("newName").value.trim();
  const price = document.getElementById("newPrice").value.trim();
  const desc = document.getElementById("newDesc").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Validation
  if (name === "" || price === "" || isNaN(price) || Number(price) <= 0) {
    errorMsg.textContent = "Vui lòng nhập tên và giá hợp lệ!";
    return;
  }
  errorMsg.textContent = "";

  // Tạo sản phẩm mới
  const newItem = document.createElement("article");
  newItem.className = "product-item";
  newItem.innerHTML = `
    <h3 class="product-name">${name}</h3>
    <p class="product-desc">${desc}</p>
    <p class="product-price">Giá: <strong>${Number(price).toLocaleString()}₫</strong></p>
  `;

  // Chèn vào đầu danh sách
  const productList = document.getElementById("product-list");
  productList.prepend(newItem);

  // Reset và ẩn form
  addProductForm.reset();
  addProductForm.classList.add("hidden");
});
