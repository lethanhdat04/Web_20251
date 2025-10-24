document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const addProductBtn = document.getElementById("addProductBtn");
  const addProductForm = document.getElementById("addProductForm");
  const productList = document.getElementById("product-list");

  // Chức năng tìm kiếm sản phẩm
  function searchProducts() {
    const keyword = searchInput.value.toLowerCase().trim();
    const products = document.querySelectorAll(".product-item");

    products.forEach(item => {
      const name = item.querySelector(".product-name").textContent.toLowerCase();
      item.style.display = name.includes(keyword) ? "" : "none";
    });
  }

  searchBtn.addEventListener("click", searchProducts);
  searchInput.addEventListener("keyup", searchProducts);

  // Ẩn/hiện form thêm sản phẩm
  addProductBtn.addEventListener("click", () => {
    addProductForm.classList.toggle("hidden");
  });

  // Xử lý khi submit form thêm sản phẩm mới
  addProductForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("newName").value.trim();
    const img = document.getElementById("newImg").value.trim();
    const desc = document.getElementById("newDesc").value.trim();
    const price = document.getElementById("newPrice").value.trim();

    if (name && img && desc && price) {
      const newProduct = document.createElement("article");
      newProduct.className = "product-item";
      newProduct.innerHTML = `
        <h3 class="product-name">${name}</h3>
        <p><img src="${img}" alt="Hình ảnh ${name}"></p>
        <p>Mô tả: ${desc}</p>
        <p>Giá: <strong>${price}</strong></p>
      `;
      productList.appendChild(newProduct);

      // reset form + ẩn lại
      addProductForm.reset();
      addProductForm.classList.add("hidden");
      alert("Đã thêm sản phẩm mới!");
    }
  });
});
