function discover() {
    window.location.href = "./page2.html";
}

function iphone(event, element) {
    event.stopPropagation(); // منع انتشار الحدث للعناصر الأب

    const productCard = element.closest('.pro1');
    if (!productCard) return;

    // الحصول على بيانات المنتج من داخل البطاقة المختارة فقط
    const image = productCard.querySelector('.product-img')?.src || "";
    const name = productCard.querySelector('.product-name')?.textContent || "Unknown Product";
    const price = productCard.querySelector('.product-price')?.textContent || "N/A";
    const oldPrice = productCard.querySelector('.product-oldprice s')?.textContent || "";

    localStorage.setItem('image', image);
    localStorage.setItem('name', name);
    localStorage.setItem('price', price);
    localStorage.setItem('oldPrice', oldPrice);

    window.location.href = "./productspage.html";
}

function searchProducts() {
    const input = document.getElementById('search-input').value.toUpperCase();
    const products = document.getElementsByClassName('pro1');
    
    for (let product of products) {
        const productName = product.querySelector('.product-name')?.textContent.toUpperCase() || "";
        product.style.display = productName.includes(input) ? "" : "none";
    }
}

function storeProductName(productName) {
    if (!productName) return;
    localStorage.setItem('storedProductName', productName);
    window.location.href = "productspage.html";
}
