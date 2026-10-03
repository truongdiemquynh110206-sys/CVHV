/* =========================================================
   CHẠM VÀO HỒN VIỆT
   Website gốm Bát Tràng
   ========================================================= */

/* =========================================================
   1. DỮ LIỆU SẢN PHẨM
   ========================================================= */

const products = [
    {
        id: 1,
        name: "Đôi Lục Bình Tứ Cảnh Men Lam Cổ",
        price: 3850000,
        category: "binh",
        origin: "Bát Tràng",
        type: "Lục bình",
        material: "Gốm sứ cao cấp",
        size: "Cao khoảng 50–60 cm",
        technique: "Men lam vẽ tay",
        use: "Trang trí phòng khách, phòng thờ",
        description:
            "Đôi lục bình mang vẻ đẹp cổ điển với họa tiết trang trí tinh xảo, phù hợp với không gian sống mang phong cách truyền thống và sang trọng.",
        image:
            "https://xuonggomsuviet.vn/wp-content/uploads/2019/04/doc-dao-ky-thuat-trang-tri-tren-san-pham-gom-su-bat-trang-1.jpg"
    },

    {
        id: 2,
        name: "Bộ Bát Đĩa Men Lam Hoa Văn Bát Tràng",
        price: 2980000,
        category: "bat",
        origin: "Bát Tràng",
        type: "Bát đĩa",
        material: "Sứ cao cấp",
        size: "Bộ nhiều món",
        technique: "Men lam trang trí",
        use: "Dùng trong gia đình, làm quà tặng",
        description:
            "Bộ bát đĩa mang vẻ đẹp thanh lịch của men lam truyền thống, kết hợp họa tiết trang nhã phù hợp với những bữa cơm gia đình.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2024/09/dong-san-pham-dac-trung-cua-bat-trang-13.jpg"
    },

    {
        id: 3,
        name: "Bộ Bát Đĩa Hoa Cúc Vẽ Tay Men Trắng",
        price: 2680000,
        category: "bat",
        origin: "Bát Tràng",
        type: "Bát đĩa",
        material: "Sứ cao cấp",
        size: "Bộ nhiều món",
        technique: "Vẽ tay",
        use: "Dùng trong gia đình, nhà hàng",
        description:
            "Họa tiết hoa cúc được vẽ tay trên nền men trắng tạo cảm giác nhẹ nhàng, tinh tế và gần gũi.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2024/04/bo-bat-dia-gia-co-hoa-tiet-hoa-cuc-ve-tay-4.jpg"
    },

    {
        id: 4,
        name: "Bộ Bát Đĩa Hoa Sen Xanh Men Trắng",
        price: 2480000,
        category: "bat",
        origin: "Bát Tràng",
        type: "Bát đĩa",
        material: "Sứ cao cấp",
        size: "Bộ nhiều món",
        technique: "Vẽ hoa văn",
        use: "Dùng trong gia đình",
        description:
            "Bộ bát đĩa lấy cảm hứng từ hoa sen Việt Nam, mang sắc xanh dịu nhẹ và vẻ đẹp thanh khiết.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2024/04/bo-bat-dia-su-trang-hoa-tiet-hoa-sen-xanh-2.jpg"
    },

    {
        id: 5,
        name: "Bảo Bình Sen Cá Phú Quý",
        price: 4250000,
        category: "binh",
        origin: "Bát Tràng",
        type: "Bảo bình",
        material: "Gốm sứ cao cấp",
        size: "Cao khoảng 50–60 cm",
        technique: "Men trang trí",
        use: "Trang trí phòng khách",
        description:
            "Bảo bình lấy hình tượng sen và cá làm chủ đề, tạo nên vẻ đẹp trang trọng và giàu tính nghệ thuật.",
        image:
            "https://i1-vnexpress.vnecdn.net/2019/12/19/lang-gom-Bat-Trang-png-6590-1576729451.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=qNrvTb1lci5tRl9RRQ9COw"
    },

    {
        id: 6,
        name: "Bảo Bình Sen Cá Phú Quý Cao Cấp",
        price: 4980000,
        category: "binh",
        origin: "Bát Tràng",
        type: "Bảo bình",
        material: "Gốm sứ cao cấp",
        size: "Cao khoảng 60 cm",
        technique: "Trang trí thủ công",
        use: "Trang trí nội thất",
        description:
            "Phiên bản cao cấp với đường nét trang trí cầu kỳ, thích hợp làm điểm nhấn cho không gian sang trọng.",
        image:
            "https://godinh.com/web/image/product.template/81280/image_512/B%E1%BA%A3o%20B%C3%ACnh%20Sen%20C%C3%A1%20Ph%C3%BA%20Qu%C3%BD%20Cao%2060%20%C4%90%C6%B0%E1%BB%9Dng%20K%C3%ADnh%2034%20%28cm%29?unique=a500000"
    },

    {
        id: 7,
        name: "Cốc Sứ Bát Tràng Men Hỏa Biến Dáng Trụ",
        price: 1250000,
        category: "am",
        origin: "Bát Tràng",
        type: "Cốc sứ",
        material: "Sứ",
        size: "Dung tích khoảng 300 ml",
        technique: "Men hỏa biến",
        use: "Uống trà, cà phê",
        description:
            "Chiếc cốc dáng trụ với lớp men hỏa biến tạo nên sắc độ tự nhiên khác nhau trên từng sản phẩm.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2025/12/coc-su-bat-trang-men-hoa-bien-dang-tru-co-quai-ls-27-anh-dai-dien.jpg"
    },

    {
        id: 8,
        name: "Bộ Ba Bình Hoa Men Ngọc Trang Trí",
        price: 1850000,
        category: "binh",
        origin: "Bát Tràng",
        type: "Bình hoa",
        material: "Gốm sứ",
        size: "Bộ 3 bình",
        technique: "Men ngọc",
        use: "Trang trí bàn, kệ",
        description:
            "Bộ ba bình hoa với màu men ngọc nhẹ nhàng, thích hợp trang trí những góc nhỏ trong không gian sống.",
        image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShIutqHKIFFs45SDMVl9Jm8soG0eFnqgLoNSOd_asQBJE52M5j"
    },

    {
        id: 9,
        name: "Đĩa Trang Trí Cá Sóng Men Lam",
        price: 3650000,
        category: "bat",
        origin: "Bát Tràng",
        type: "Đĩa trang trí",
        material: "Gốm sứ",
        size: "Đĩa trang trí cỡ lớn",
        technique: "Men lam",
        use: "Trang trí tường, tủ",
        description:
            "Đĩa trang trí nổi bật với hình ảnh cá và sóng nước, mang đậm tinh thần mỹ thuật truyền thống.",
        image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMKFGtC66RZipOkQeJgtMMAfcENcr5WdIWRu9TFALRATRhGpBj"
    },

    {
        id: 10,
        name: "Bình Trang Trí Hoa Điểu Họa Tiết Hope",
        price: 4580000,
        category: "binh",
        origin: "Bát Tràng",
        type: "Bình trang trí",
        material: "Gốm sứ cao cấp",
        size: "Cao khoảng 50 cm",
        technique: "Trang trí thủ công",
        use: "Trang trí nội thất",
        description:
            "Bình trang trí kết hợp hình ảnh hoa và chim với bố cục hài hòa, tạo điểm nhấn nghệ thuật cho không gian.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9W4D4mGP2J6ZGS1DJNzcZ5K1DYBdJGXJA46hAFzx7jOTK5egaFjWn5Hr&s=10"
    },

    {
        id: 11,
        name: "Bộ Ấm Chén Men Rạn Họa Tiết Cổ",
        price: 2680000,
        category: "am",
        origin: "Bát Tràng",
        type: "Ấm chén",
        material: "Gốm men rạn",
        size: "Bộ nhiều món",
        technique: "Men rạn",
        use: "Thưởng trà, tiếp khách",
        description:
            "Bộ ấm chén mang nét đẹp hoài cổ với lớp men rạn đặc trưng của gốm Bát Tràng.",
        image:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqTjHmLxve9gZTwigiRXZm_VY3RcPht7_IgL5_YLOvPX-oAafI"
    },

    {
        id: 12,
        name: "Bộ Ấm Trà Gà Trống Men Nâu Xanh",
        price: 2950000,
        category: "am",
        origin: "Bát Tràng",
        type: "Ấm trà",
        material: "Gốm sứ",
        size: "Bộ nhiều món",
        technique: "Men màu",
        use: "Thưởng trà",
        description:
            "Hình tượng gà trống kết hợp sắc men nâu xanh tạo nên một bộ ấm trà đậm chất truyền thống.",
        image:
            "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mifiykrms9ag43"
    },

    {
        id: 13,
        name: "Đôi Lục Bình Hắc Kim Thuyền Hải Hành",
        price: 6850000,
        category: "binh",
        origin: "Bát Tràng",
        type: "Lục bình",
        material: "Gốm sứ cao cấp",
        size: "Cao khoảng 60 cm",
        technique: "Men hắc kim",
        use: "Trang trí phòng khách",
        description:
            "Đôi lục bình hắc kim mang sắc thái mạnh mẽ, sang trọng với hình ảnh thuyền hải hành.",
        image:
            "https://bizweb.dktcdn.net/100/659/338/products/2e9c6da5-bca0-4a06-97a3-0c85f3d74a57.jpg?v=1773291686963"
    },

    {
        id: 14,
        name: "Đôi Lục Bình Bạch Kim Thuyền Mã",
        price: 7580000,
        category: "binh",
        origin: "Bát Tràng",
        type: "Lục bình",
        material: "Gốm sứ cao cấp",
        size: "Cao khoảng 60 cm",
        technique: "Men bạch kim",
        use: "Trang trí nội thất",
        description:
            "Đôi lục bình bạch kim với họa tiết thuyền và ngựa, tạo vẻ đẹp trang trọng và nổi bật.",
        image:
            "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/486496hTq/anh-mo-ta.png"
    },

    {
        id: 15,
        name: "Đĩa Nghệ Thuật Thuyền Buồm Vượt Sóng",
        price: 4850000,
        category: "bat",
        origin: "Bát Tràng",
        type: "Đĩa nghệ thuật",
        material: "Gốm sứ",
        size: "Đĩa trang trí cỡ lớn",
        technique: "Vẽ và đắp nổi",
        use: "Trang trí tường",
        description:
            "Tác phẩm mô tả hình ảnh thuyền buồm vượt sóng, gợi cảm giác mạnh mẽ và khát vọng vươn xa.",
        image:
            "https://product.hstatic.net/200000258799/product/z6560994619592_1dd138feeafdadd8b79ef6d63e0a82b1_28308021f6864719bf8ebce77630607a_master.jpg"
    },

    {
        id: 16,
        name: "Bình Hoa Men Trắng Viền Vàng Kèm Cốc",
        price: 3250000,
        category: "binh",
        origin: "Bát Tràng",
        type: "Bình hoa",
        material: "Gốm sứ cao cấp",
        size: "Bình cỡ vừa",
        technique: "Men trắng viền vàng",
        use: "Trang trí, cắm hoa",
        description:
            "Bình hoa men trắng kết hợp đường viền vàng thanh lịch, đi kèm cốc nhỏ tạo thành một bộ trang trí hài hòa.",
        image:
            "https://neon.vn/image/cache/catalog/products/D39-2-1100x1100.jpg.webp"
    }
];


/* =========================================================
   2. BIẾN TOÀN CỤC
   ========================================================= */

let cart = JSON.parse(localStorage.getItem("chamHonVietCart")) || [];

/*
 * Số lượng tạm thời được chọn trên từng card sản phẩm.
 * Không ảnh hưởng trực tiếp đến giỏ hàng cho tới khi bấm "Thêm vào giỏ".
 */
const productQuantities = {};


/* =========================================================
   3. HÀM TIỆN ÍCH
   ========================================================= */

function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(price);
}


function getProduct(id) {
    return products.find(product => Number(product.id) === Number(id));
}


function saveCart() {
    localStorage.setItem("chamHonVietCart", JSON.stringify(cart));
}


function getCategoryName(category) {
    const categories = {
        binh: "Bình & Lục bình",
        bat: "Bát & Đĩa",
        am: "Ấm & Chén",
        khac: "Đồ gốm khác"
    };

    return categories[category] || "Gốm Bát Tràng";
}


function escapeHtml(value) {
    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   4. QUANTITY TRÊN CARD SẢN PHẨM
   ========================================================= */

function getProductQuantity(id) {
    const numericId = Number(id);

    if (!productQuantities[numericId]) {
        productQuantities[numericId] = 1;
    }

    return productQuantities[numericId];
}


function changeProductCardQuantity(id, delta) {
    const numericId = Number(id);
    const current = getProductQuantity(numericId);

    const next = Math.max(1, Math.min(99, current + Number(delta)));

    productQuantities[numericId] = next;

    document
        .querySelectorAll(
            `.product-qty-value[data-product-id="${numericId}"]`
        )
        .forEach(element => {
            element.textContent = next;
        });
}


function addProductWithQuantity(id) {
    const product = getProduct(id);

    if (!product) {
        return;
    }

    const quantity = getProductQuantity(id);

    addToCart(id, quantity);

    productQuantities[id] = 1;

    document
        .querySelectorAll(
            `.product-qty-value[data-product-id="${Number(id)}"]`
        )
        .forEach(element => {
            element.textContent = "1";
        });
}


/* =========================================================
   5. TẠO CARD SẢN PHẨM
   ========================================================= */

function createProductCard(product) {
    const quantity = getProductQuantity(product.id);

    return `
        <article
            class="product-card chv-product-card"
            data-product-id="${product.id}"
            onclick="showProductDetail(${product.id})"
        >

            <div class="product-image chv-product-image">
                <img
                    src="${escapeHtml(product.image)}"
                    alt="${escapeHtml(product.name)}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='';this.parentElement.classList.add('image-error');"
                >
            </div>

            <!-- TÊN SẢN PHẨM NGAY DƯỚI HÌNH -->
            <div class="product-info chv-product-info">

                <h3 class="product-name chv-product-name">
                    ${escapeHtml(product.name)}
                </h3>

                <p class="product-origin">
                    ${escapeHtml(product.origin)}
                </p>

                <!-- GIÁ + CỘNG TRỪ SỐ LƯỢNG -->
                <div class="product-purchase-row">

                    <div class="product-price chv-product-price">
                        ${formatPrice(product.price)}
                    </div>

                    <div
                        class="product-qty-control"
                        onclick="event.stopPropagation()"
                    >

                        <button
                            type="button"
                            class="product-qty-btn"
                            aria-label="Giảm số lượng"
                            onclick="changeProductCardQuantity(${product.id}, -1)"
                        >
                            −
                        </button>

                        <span
                            class="product-qty-value"
                            data-product-id="${product.id}"
                        >
                            ${quantity}
                        </span>

                        <button
                            type="button"
                            class="product-qty-btn"
                            aria-label="Tăng số lượng"
                            onclick="changeProductCardQuantity(${product.id}, 1)"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    type="button"
                    class="add-cart-btn chv-add-cart-btn"
                    onclick="event.stopPropagation(); addProductWithQuantity(${product.id})"
                >
                    Thêm vào giỏ
                </button>

            </div>
        </article>
    `;
}


/* =========================================================
   6. TÌM KHU VỰC HIỂN THỊ SẢN PHẨM
   ========================================================= */

function getProductGrids() {
    const grids = [];

    const ids = [
        "product-list",
        "productGrid",
        "productsGrid"
    ];

    ids.forEach(id => {
        const element = document.getElementById(id);

        if (element && !grids.includes(element)) {
            grids.push(element);
        }
    });

    document
        .querySelectorAll(".product-grid")
        .forEach(element => {
            if (!grids.includes(element)) {
                grids.push(element);
            }
        });

    return grids;
}


/* =========================================================
   7. HIỂN THỊ SẢN PHẨM
   ========================================================= */

function renderProducts(list = products) {
    const grids = getProductGrids();

    if (!grids.length) {
        return;
    }

    const html = list.length
        ? list.map(createProductCard).join("")
        : `
            <div class="empty-products">
                Không tìm thấy sản phẩm phù hợp.
            </div>
        `;

    grids.forEach(grid => {
        grid.innerHTML = html;
    });
}


/* =========================================================
   8. LỌC SẢN PHẨM
   ========================================================= */

function filterProducts(category) {
    const buttons = document.querySelectorAll(
        "[data-category], .category-btn, .filter-btn"
    );

    buttons.forEach(button => {
        const buttonCategory =
            button.dataset.category ||
            button.dataset.filter;

        if (buttonCategory === category) {
            button.classList.add("active");
        } else if (
            buttonCategory &&
            buttonCategory !== "all"
        ) {
            button.classList.remove("active");
        }
    });

    if (!category || category === "all") {
        renderProducts(products);
        return;
    }

    const filtered = products.filter(
        product => product.category === category
    );

    renderProducts(filtered);
}


/* =========================================================
   9. TÌM KIẾM SẢN PHẨM
   ========================================================= */

function searchProducts(keyword) {
    const searchValue = String(keyword || "")
        .trim()
        .toLowerCase();

    if (!searchValue) {
        renderProducts(products);
        return;
    }

    const result = products.filter(product => {
        const content = `
            ${product.name}
            ${product.origin}
            ${product.type}
            ${product.material}
            ${product.description}
        `.toLowerCase();

        return content.includes(searchValue);
    });

    renderProducts(result);
}


/* =========================================================
   10. MODAL CHI TIẾT SẢN PHẨM
   ========================================================= */

function createProductModal() {
    if (document.getElementById("productDetailModal")) {
        return;
    }

    const modal = document.createElement("div");

    modal.id = "productDetailModal";

    modal.className = "chv-modal";

    modal.innerHTML = `
        <div
            class="chv-modal-overlay"
            onclick="closeProductDetail()"
        ></div>

        <div class="chv-modal-content">

            <button
                type="button"
                class="chv-modal-close"
                onclick="closeProductDetail()"
                aria-label="Đóng"
            >
                ×
            </button>

            <div id="productDetailContent"></div>

        </div>
    `;

    document.body.appendChild(modal);
}


function changeDetailQuantity(id, delta) {
    const numericId = Number(id);
    const current = getProductQuantity(numericId);

    const next = Math.max(
        1,
        Math.min(99, current + Number(delta))
    );

    productQuantities[numericId] = next;

    const quantityElement = document.getElementById(
        "detailProductQuantity"
    );

    if (quantityElement) {
        quantityElement.textContent = next;
    }

    document
        .querySelectorAll(
            `.product-qty-value[data-product-id="${numericId}"]`
        )
        .forEach(element => {
            element.textContent = next;
        });
}


function showProductDetail(id) {
    const product = getProduct(id);

    if (!product) {
        return;
    }

    createProductModal();

    const content = document.getElementById(
        "productDetailContent"
    );

    const quantity = getProductQuantity(product.id);

    content.innerHTML = `
        <div class="product-detail-layout">

            <div class="product-detail-image">
                <img
                    src="${escapeHtml(product.image)}"
                    alt="${escapeHtml(product.name)}"
                >
            </div>

            <div class="product-detail-info">

                <span class="product-detail-category">
                    ${escapeHtml(getCategoryName(product.category))}
                </span>

                <h2>
                    ${escapeHtml(product.name)}
                </h2>

                <p class="product-detail-description">
                    ${escapeHtml(product.description)}
                </p>

                <div class="product-detail-price">
                    ${formatPrice(product.price)}
                </div>

                <div class="detail-quantity-row">

                    <span>Số lượng</span>

                    <div class="product-qty-control">

                        <button
                            type="button"
                            class="product-qty-btn"
                            onclick="changeDetailQuantity(${product.id}, -1)"
                        >
                            −
                        </button>

                        <span
                            id="detailProductQuantity"
                            class="product-qty-value"
                        >
                            ${quantity}
                        </span>

                        <button
                            type="button"
                            class="product-qty-btn"
                            onclick="changeDetailQuantity(${product.id}, 1)"
                        >
                            +
                        </button>

                    </div>

                </div>

                <div class="product-detail-meta">

                    <div>
                        <strong>Xuất xứ:</strong>
                        ${escapeHtml(product.origin)}
                    </div>

                    <div>
                        <strong>Loại:</strong>
                        ${escapeHtml(product.type)}
                    </div>

                    <div>
                        <strong>Chất liệu:</strong>
                        ${escapeHtml(product.material)}
                    </div>

                    <div>
                        <strong>Kích thước:</strong>
                        ${escapeHtml(product.size)}
                    </div>

                    <div>
                        <strong>Kỹ thuật:</strong>
                        ${escapeHtml(product.technique)}
                    </div>

                    <div>
                        <strong>Công dụng:</strong>
                        ${escapeHtml(product.use)}
                    </div>

                </div>

                <div class="product-detail-actions">

                    <button
                        type="button"
                        class="detail-add-cart"
                        onclick="
                            addProductWithQuantity(${product.id});
                            closeProductDetail();
                        "
                    >
                        Thêm vào giỏ
                    </button>

                    <button
                        type="button"
                        class="detail-order-btn"
                        onclick="
                            selectProductForOrder(${product.id});
                            closeProductDetail();
                        "
                    >
                        Đặt sản phẩm này
                    </button>

                </div>

            </div>

        </div>
    `;

    const modal = document.getElementById(
        "productDetailModal"
    );

    modal.classList.add("show");

    document.body.classList.add("modal-open");
}


function closeProductDetail() {
    const modal = document.getElementById(
        "productDetailModal"
    );

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.classList.remove("modal-open");
}


/* =========================================================
   11. GIỎ HÀNG
   ========================================================= */

function addToCart(id, quantity = 1) {
    const product = getProduct(id);

    if (!product) {
        return;
    }

    const amount = Math.max(
        1,
        parseInt(quantity, 10) || 1
    );

    const existing = cart.find(
        item => Number(item.id) === Number(id)
    );

    if (existing) {
        existing.quantity += amount;
    } else {
        cart.push({
            id: product.id,
            quantity: amount
        });
    }

    saveCart();
    updateCart();

    showToast(
        `Đã thêm ${amount} sản phẩm vào giỏ hàng`
    );
}


function changeQuantity(id, delta) {
    const item = cart.find(
        cartItem => Number(cartItem.id) === Number(id)
    );

    if (!item) {
        return;
    }

    item.quantity += Number(delta);

    if (item.quantity <= 0) {
        cart = cart.filter(
            cartItem => Number(cartItem.id) !== Number(id)
        );
    }

    saveCart();
    updateCart();
}


function removeFromCart(id) {
    cart = cart.filter(
        item => Number(item.id) !== Number(id)
    );

    saveCart();
    updateCart();

    showToast("Đã xóa sản phẩm khỏi giỏ hàng");
}


function getCartTotal() {
    return cart.reduce((total, item) => {
        const product = getProduct(item.id);

        if (!product) {
            return total;
        }

        return total + product.price * item.quantity;
    }, 0);
}


function getCartCount() {
    return cart.reduce(
        (total, item) => total + item.quantity,
        0
    );
}


/* =========================================================
   12. CẬP NHẬT GIAO DIỆN GIỎ HÀNG
   ========================================================= */

function updateCart() {
    const cartItems =
        document.getElementById("cart-items") ||
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cart-total") ||
        document.getElementById("cartTotal");

    const cartCount =
        document.getElementById("cart-count") ||
        document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = getCartCount();
    }

    if (cartTotal) {
        cartTotal.textContent = formatPrice(
            getCartTotal()
        );
    }

    if (!cartItems) {
        updateOrderSummary();
        return;
    }

    if (!cart.length) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛍</div>
                <p>Giỏ hàng của bạn đang trống.</p>
                <button
                    type="button"
                    onclick="toggleCart(false)"
                >
                    Tiếp tục xem sản phẩm
                </button>
            </div>
        `;

        updateOrderSummary();
        return;
    }

    cartItems.innerHTML = cart
        .map(item => {
            const product = getProduct(item.id);

            if (!product) {
                return "";
            }

            return `
                <div class="cart-item">

                    <div class="cart-item-image">
                        <img
                            src="${escapeHtml(product.image)}"
                            alt="${escapeHtml(product.name)}"
                        >
                    </div>

                    <div class="cart-item-info">

                        <h4>
                            ${escapeHtml(product.name)}
                        </h4>

                        <div class="cart-item-price">
                            ${formatPrice(product.price)}
                        </div>

                        <div class="cart-item-bottom">

                            <div class="cart-quantity">

                                <button
                                    type="button"
                                    onclick="changeQuantity(${product.id}, -1)"
                                >
                                    −
                                </button>

                                <span>
                                    ${item.quantity}
                                </span>

                                <button
                                    type="button"
                                    onclick="changeQuantity(${product.id}, 1)"
                                >
                                    +
                                </button>

                            </div>

                            <button
                                type="button"
                                class="cart-remove"
                                onclick="removeFromCart(${product.id})"
                            >
                                Xóa
                            </button>

                        </div>

                    </div>

                </div>
            `;
        })
        .join("");

    updateOrderSummary();
}


/* =========================================================
   13. MỞ / ĐÓNG GIỎ HÀNG
   ========================================================= */

function toggleCart(force) {
    const sidebar =
        document.getElementById("cart-sidebar") ||
        document.getElementById("cartSidebar");

    const overlay =
        document.getElementById("cart-overlay") ||
        document.getElementById("cartOverlay");

    if (!sidebar) {
        return;
    }

    const shouldOpen =
        typeof force === "boolean"
            ? force
            : !sidebar.classList.contains("open");

    sidebar.classList.toggle("open", shouldOpen);

    if (overlay) {
        overlay.classList.toggle("show", shouldOpen);
    }

    document.body.classList.toggle(
        "cart-open",
        shouldOpen
    );
}


/* =========================================================
   14. CHỌN SẢN PHẨM CHO FORM ĐẶT HÀNG
   ========================================================= */

function selectProductForOrder(id) {
    const product = getProduct(id);

    if (!product) {
        return;
    }

    const select = document.getElementById(
        "orderProduct"
    );

    if (select) {
        select.value = String(product.id);
    }

    const orderSection =
        document.getElementById("order") ||
        document.getElementById("order-section") ||
        document.getElementById("orderForm");

    if (orderSection) {
        orderSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

    updateOrderSummary();
}


/* =========================================================
   15. CHECKOUT
   ========================================================= */

function checkout() {
    if (!cart.length) {
        showToast("Giỏ hàng đang trống");
        return;
    }

    const firstItem = cart[0];

    selectProductForOrder(firstItem.id);

    const quantityInput =
        document.getElementById("orderQuantity");

    if (quantityInput) {
        quantityInput.value = firstItem.quantity;
    }

    toggleCart(false);

    showToast(
        "Đã chuyển sản phẩm sang phần đặt đơn"
    );
}


/* =========================================================
   16. KIỂM TRA SỐ ĐIỆN THOẠI VIỆT NAM
   ========================================================= */

function isValidVietnamesePhone(phone) {
    const normalized = String(phone || "")
        .replace(/\s+/g, "")
        .replace(/-/g, "");

    return /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/.test(
        normalized
    );
}


/* =========================================================
   17. FORM TƯ VẤN
   ========================================================= */

function submitConsultation(event) {
    if (event) {
        event.preventDefault();
    }

    const nameInput =
        document.getElementById("consultName");

    const phoneInput =
        document.getElementById("consultPhone");

    const name =
        nameInput?.value.trim() || "";

    const phone =
        phoneInput?.value.trim() || "";

    if (!name) {
        showToast("Vui lòng nhập họ tên");
        nameInput?.focus();
        return false;
    }

    if (!phone) {
        showToast("Vui lòng nhập số điện thoại");
        phoneInput?.focus();
        return false;
    }

    if (!isValidVietnamesePhone(phone)) {
        showToast(
            "Số điện thoại chưa đúng định dạng"
        );
        phoneInput?.focus();
        return false;
    }

    const consultation = {
        name,
        phone,
        hotline: "0855337455",
        createdAt: new Date().toISOString()
    };

    localStorage.setItem(
        "chamHonVietConsultation",
        JSON.stringify(consultation)
    );

    showToast(
        "Đã nhận thông tin. Chúng tôi sẽ liên hệ lại qua số 0855 337 455."
    );

    if (nameInput) {
        nameInput.value = "";
    }

    if (phoneInput) {
        phoneInput.value = "";
    }

    return false;
}


/* =========================================================
   18. FORM ĐẶT ĐƠN
   ========================================================= */

function submitOrder(event) {
    if (event) {
        event.preventDefault();
    }

    const nameInput =
        document.getElementById("orderName");

    const phoneInput =
        document.getElementById("orderPhone");

    const addressInput =
        document.getElementById("orderAddress");

    const productInput =
        document.getElementById("orderProduct");

    const quantityInput =
        document.getElementById("orderQuantity");

    const paymentInput =
        document.getElementById("paymentMethod");

    const noteInput =
        document.getElementById("orderNote");

    const name =
        nameInput?.value.trim() || "";

    const phone =
        phoneInput?.value.trim() || "";

    const address =
        addressInput?.value.trim() || "";

    const productId =
        productInput?.value || "";

    const quantity = Math.max(
        1,
        parseInt(quantityInput?.value, 10) || 1
    );

    const payment =
        paymentInput?.value || "";

    const note =
        noteInput?.value.trim() || "";

    if (!name) {
        showToast("Vui lòng nhập họ tên");
        nameInput?.focus();
        return false;
    }

    if (!phone) {
        showToast("Vui lòng nhập số điện thoại");
        phoneInput?.focus();
        return false;
    }

    if (!isValidVietnamesePhone(phone)) {
        showToast(
            "Vui lòng nhập số điện thoại hợp lệ"
        );
        phoneInput?.focus();
        return false;
    }

    if (!address) {
        showToast("Vui lòng nhập địa chỉ nhận hàng");
        addressInput?.focus();
        return false;
    }

    if (!productId) {
        showToast("Vui lòng chọn sản phẩm");
        productInput?.focus();
        return false;
    }

    const product = getProduct(productId);

    if (!product) {
        showToast("Sản phẩm không tồn tại");
        return false;
    }

    if (!payment) {
        showToast(
            "Vui lòng chọn phương thức thanh toán"
        );
        paymentInput?.focus();
        return false;
    }

    const paymentNames = {
        COD: "Thanh toán khi nhận hàng (COD)",
        bank: "Chuyển khoản ngân hàng",
        "e-wallet": "Thanh toán điện tử"
    };

    const order = {
        id:
            "CHV-" +
            Date.now().toString().slice(-8),

        customer: {
            name,
            phone,
            address
        },

        product: {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity
        },

        payment: {
            code: payment,
            name:
                paymentNames[payment] ||
                payment
        },

        note,

        total: product.price * quantity,

        createdAt: new Date().toISOString()
    };

    localStorage.setItem(
        "chamHonVietLastOrder",
        JSON.stringify(order)
    );

    const previousOrders = JSON.parse(
        localStorage.getItem("chamHonVietOrders") ||
        "[]"
    );

    previousOrders.push(order);

    localStorage.setItem(
        "chamHonVietOrders",
        JSON.stringify(previousOrders)
    );

    showToast(
        `Đặt hàng thành công. Mã đơn ${order.id}`
    );

    if (nameInput) {
        nameInput.value = "";
    }

    if (phoneInput) {
        phoneInput.value = "";
    }

    if (addressInput) {
        addressInput.value = "";
    }

    if (productInput) {
        productInput.value = "";
    }

    if (quantityInput) {
        quantityInput.value = "1";
    }

    if (paymentInput) {
        paymentInput.value = "";
    }

    if (noteInput) {
        noteInput.value = "";
    }

    updateOrderSummary();

    return false;
}


/* =========================================================
   19. ĐĂNG KÝ EMAIL
   ========================================================= */

function subscribeEmail(event) {
    if (event) {
        event.preventDefault();
    }

    const form =
        event?.target ||
        document.getElementById("newsletterForm");

    const input =
        form?.querySelector(
            'input[type="email"]'
        );

    const email =
        input?.value.trim() || "";

    if (!email) {
        showToast("Vui lòng nhập email");
        input?.focus();
        return false;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showToast("Email chưa đúng định dạng");
        input?.focus();
        return false;
    }

    const subscribers = JSON.parse(
        localStorage.getItem(
            "chamHonVietSubscribers"
        ) || "[]"
    );

    if (!subscribers.includes(email)) {
        subscribers.push(email);
    }

    localStorage.setItem(
        "chamHonVietSubscribers",
        JSON.stringify(subscribers)
    );

    showToast(
        "Đăng ký thành công. Cảm ơn bạn đã đồng hành cùng Chạm Vào Hồn Việt."
    );

    if (input) {
        input.value = "";
    }

    return false;
}


/* =========================================================
   20. TOAST THÔNG BÁO
   ========================================================= */

function showToast(message) {
    let toast =
        document.getElementById("chvToast");

    if (!toast) {
        toast = document.createElement("div");

        toast.id = "chvToast";

        toast.className = "chv-toast";

        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(
        window.chvToastTimer
    );

    window.chvToastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3200);
}


/* =========================================================
   21. ĐỔ DỮ LIỆU VÀO SELECT ĐẶT HÀNG
   ========================================================= */

function populateOrderProducts() {
    const select =
        document.getElementById("orderProduct");

    if (!select) {
        return;
    }

    const currentValue = select.value;

    /*
     * Giữ option mặc định nếu HTML đã có.
     */
    const firstOption =
        select.querySelector("option");

    select.innerHTML = "";

    const placeholder =
        document.createElement("option");

    placeholder.value = "";

    placeholder.textContent =
        "— Chọn sản phẩm —";

    select.appendChild(placeholder);

    products.forEach(product => {
        const option =
            document.createElement("option");

        option.value = product.id;

        option.textContent =
            `${product.name} — ${formatPrice(product.price)}`;

        select.appendChild(option);
    });

    if (
        currentValue &&
        getProduct(currentValue)
    ) {
        select.value = currentValue;
    }
}


/* =========================================================
   22. TÓM TẮT ĐƠN HÀNG
   ========================================================= */

function updateOrderSummary() {
    const productElement =
        document.getElementById(
            "orderSummaryProduct"
        );

    const priceElement =
        document.getElementById(
            "orderSummaryPrice"
        );

    const quantityElement =
        document.getElementById(
            "orderSummaryQuantity"
        );

    const totalElement =
        document.getElementById(
            "orderSummaryTotal"
        );

    const productSelect =
        document.getElementById(
            "orderProduct"
        );

    const quantityInput =
        document.getElementById(
            "orderQuantity"
        );

    const product =
        productSelect
            ? getProduct(productSelect.value)
            : null;

    const quantity = Math.max(
        1,
        parseInt(quantityInput?.value, 10) || 1
    );

    if (!product) {
        if (productElement) {
            productElement.textContent =
                "Chưa chọn sản phẩm";
        }

        if (priceElement) {
            priceElement.textContent =
                formatPrice(0);
        }

        if (quantityElement) {
            quantityElement.textContent = "1";
        }

        if (totalElement) {
            totalElement.textContent =
                formatPrice(0);
        }

        return;
    }

    if (productElement) {
        productElement.textContent =
            product.name;
    }

    if (priceElement) {
        priceElement.textContent =
            formatPrice(product.price);
    }

    if (quantityElement) {
        quantityElement.textContent =
            quantity;
    }

    if (totalElement) {
        totalElement.textContent =
            formatPrice(
                product.price * quantity
            );
    }
}


/* =========================================================
   23. KHUNG FORM LỚN + Ô NHỎ BÊN TRONG
   ========================================================= */

function enhanceFormBoxes() {
    const forms = [
        document.getElementById("consultationForm"),
        document.getElementById("orderForm")
    ].filter(Boolean);

    forms.forEach(form => {
        form.classList.add("chv-form-shell");

        /*
         * Nếu HTML đã có form-group / form-field,
         * chỉ cần thêm class để CSS tạo ô nhỏ.
         */
        form.querySelectorAll(
            ".form-group, .form-field, .field-group, .input-group"
        ).forEach(group => {
            group.classList.add(
                "chv-field-box"
            );
        });

        /*
         * Các input/select/textarea không nằm trong
         * một nhóm có sẵn vẫn được hiển thị như
         * những ô nhỏ, không thay đổi cấu trúc HTML.
         */
        form.querySelectorAll(
            "input:not([type='hidden']), select, textarea"
        ).forEach(field => {
            field.classList.add(
                "chv-form-control"
            );
        });
    });
}


/* =========================================================
   24. CSS CHO CARD SẢN PHẨM
       KHÔNG THAY ĐỔI FONT
   ========================================================= */

function addProductQuantityCSS() {
    if (
        document.getElementById(
            "chvDynamicStyles"
        )
    ) {
        return;
    }

    const style =
        document.createElement("style");

    style.id = "chvDynamicStyles";

    style.textContent = `

        /* =========================================
           KHÔNG ĐẶT FONT-FAMILY Ở ĐÂY
           Toàn bộ chữ kế thừa font hiện tại.
           ========================================= */

        .chv-product-card {
            position: relative;
            overflow: hidden;
        }

        .chv-product-card .chv-product-image {
            position: relative;
            overflow: hidden;
        }

        .chv-product-card .chv-product-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition:
                transform .55s ease,
                opacity .35s ease;
        }

        .chv-product-card:hover
        .chv-product-image img {
            transform: scale(1.045);
        }

        /*
         * TÊN NẰM NGAY DƯỚI HÌNH
         */
        .chv-product-card .chv-product-name {
            margin-top: 0 !important;
            margin-bottom: 7px !important;
            line-height: 1.45;
        }

        .chv-product-info {
            display: flex;
            flex-direction: column;
        }

        .chv-product-info .product-origin {
            margin-bottom: 13px;
        }

        /*
         * GIÁ + CỘNG TRỪ CÙNG MỘT HÀNG
         */
        .product-purchase-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            width: 100%;
            margin-top: 3px;
        }

        .chv-product-price {
            flex: 1;
            min-width: 0;
        }

        .product-qty-control {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0;
            flex-shrink: 0;
            height: 34px;
            border: 1px solid #d8c7b5;
            border-radius: 10px;
            overflow: hidden;
            background: #fffdf9;
        }

        .product-qty-btn {
            width: 30px;
            height: 32px;
            border: 0;
            background: transparent;
            color: #6f513d;
            cursor: pointer;
            font: inherit;
            font-size: 18px;
            line-height: 1;
            transition:
                background .2s ease,
                color .2s ease;
        }

        .product-qty-btn:hover {
            background: #efe4d7;
            color: #4e3627;
        }

        .product-qty-value {
            min-width: 27px;
            text-align: center;
            font: inherit;
            font-size: 14px;
            font-weight: 600;
            color: #5e4637;
        }

        .chv-add-cart-btn {
            width: 100%;
            margin-top: 13px;
            font: inherit;
            cursor: pointer;
            transition:
                transform .2s ease,
                box-shadow .2s ease,
                background .2s ease;
        }

        .chv-add-cart-btn:hover {
            transform: translateY(-1px);
        }

        /*
         * ==========================================
         * FORM TƯ VẤN + ĐẶT HÀNG
         * ==========================================
         */

        #consultationForm.chv-form-shell,
        #orderForm.chv-form-shell {
            position: relative;
            background: #fffdf9;
            border: 1px solid #dfd0c0;
            border-radius: 24px;
            padding: 28px;
            box-shadow:
                0 18px 45px rgba(84, 58, 40, .08);
        }

        #consultationForm.chv-form-shell::before,
        #orderForm.chv-form-shell::before {
            content: "";
            display: block;
            width: 48px;
            height: 3px;
            margin-bottom: 20px;
            border-radius: 99px;
            background: #b89a7c;
            opacity: .7;
        }

        /*
         * Các khung nhỏ bên trong
         */
        #consultationForm .chv-field-box,
        #orderForm .chv-field-box {
            background: #fbf7f1;
            border: 1px solid #e6d9cc;
            border-radius: 15px;
            padding: 12px 14px;
            transition:
                border-color .2s ease,
                box-shadow .2s ease;
        }

        #consultationForm .chv-field-box:focus-within,
        #orderForm .chv-field-box:focus-within {
            border-color: #b99b7e;
            box-shadow:
                0 0 0 3px rgba(185, 155, 126, .10);
        }

        #consultationForm
        .chv-form-control,
        #orderForm
        .chv-form-control {
            width: 100%;
            box-sizing: border-box;
            font: inherit;
        }

        /*
         * Nếu form không có form-group,
         * input/select/textarea vẫn thành các ô nhỏ.
         */
        #consultationForm
        > input:not([type="hidden"]),
        #consultationForm
        > select,
        #consultationForm
        > textarea,
        #orderForm
        > input:not([type="hidden"]),
        #orderForm
        > select,
        #orderForm
        > textarea {
            background: #fbf7f1;
            border: 1px solid #e6d9cc;
            border-radius: 14px;
            padding: 13px 14px;
            font: inherit;
            outline: none;
            transition:
                border-color .2s ease,
                box-shadow .2s ease;
        }

        #consultationForm
        > input:focus,
        #consultationForm
        > select:focus,
        #consultationForm
        > textarea:focus,
        #orderForm
        > input:focus,
        #orderForm
        > select:focus,
        #orderForm
        > textarea:focus {
            border-color: #b99b7e;
            box-shadow:
                0 0 0 3px rgba(185, 155, 126, .10);
        }

        /*
         * ==========================================
         * MODAL CHI TIẾT
         * ==========================================
         */

        .chv-modal {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 22px;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition:
                opacity .3s ease,
                visibility .3s ease;
        }

        .chv-modal.show {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        .chv-modal-overlay {
            position: absolute;
            inset: 0;
            background: rgba(53, 39, 29, .52);
            backdrop-filter: blur(5px);
        }

        .chv-modal-content {
            position: relative;
            z-index: 2;
            width: min(1000px, 100%);
            max-height: 90vh;
            overflow-y: auto;
            background: #fffdf9;
            border: 1px solid #e1d3c5;
            border-radius: 25px;
            box-shadow:
                0 30px 80px rgba(45, 30, 20, .20);
            transform: translateY(18px) scale(.985);
            transition:
                transform .35s ease;
        }

        .chv-modal.show
        .chv-modal-content {
            transform: translateY(0) scale(1);
        }

        .chv-modal-close {
            position: absolute;
            z-index: 5;
            top: 14px;
            right: 15px;
            width: 38px;
            height: 38px;
            border: 1px solid #dfd0c0;
            border-radius: 50%;
            background: rgba(255, 253, 249, .92);
            color: #6c5140;
            font: inherit;
            font-size: 24px;
            line-height: 1;
            cursor: pointer;
        }

        .product-detail-layout {
            display: grid;
            grid-template-columns:
                minmax(300px, .9fr)
                minmax(320px, 1.1fr);
            gap: 34px;
            padding: 35px;
        }

        .product-detail-image {
            min-height: 400px;
            border-radius: 20px;
            overflow: hidden;
            background: #f4eee7;
        }

        .product-detail-image img {
            width: 100%;
            height: 100%;
            min-height: 400px;
            object-fit: cover;
            display: block;
        }

        .product-detail-category {
            display: inline-block;
            padding: 6px 11px;
            border-radius: 999px;
            background: #f0e5d9;
            color: #725541;
            font: inherit;
            font-size: 12px;
        }

        .product-detail-info h2 {
            margin: 13px 0 12px;
            color: #4c392d;
            line-height: 1.3;
        }

        .product-detail-description {
            color: #765f4e;
            line-height: 1.7;
        }

        .product-detail-price {
            margin: 20px 0;
            color: #8b5f43;
            font: inherit;
            font-size: 25px;
            font-weight: 700;
        }

        .detail-quantity-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            padding: 13px 0;
            border-top: 1px solid #eee3d8;
            border-bottom: 1px solid #eee3d8;
            color: #5f4939;
        }

        .product-detail-meta {
            display: grid;
            gap: 9px;
            margin-top: 18px;
            color: #705a49;
            line-height: 1.55;
        }

        .product-detail-meta strong {
            color: #503c2e;
        }

        .product-detail-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 23px;
        }

        .detail-add-cart,
        .detail-order-btn {
            min-height: 44px;
            padding: 11px 18px;
            border-radius: 12px;
            border: 1px solid #bfa68e;
            font: inherit;
            cursor: pointer;
        }

        .detail-add-cart {
            background: #72533d;
            color: #fff;
        }

        .detail-order-btn {
            background: #f4ebe2;
            color: #644a39;
        }

        /*
         * ==========================================
         * TOAST
         * ==========================================
         */

        .chv-toast {
            position: fixed;
            left: 50%;
            bottom: 28px;
            z-index: 10000;
            max-width: min(90vw, 500px);
            padding: 13px 20px;
            border: 1px solid #d9c7b6;
            border-radius: 13px;
            background: #fffdf9;
            color: #5c4535;
            box-shadow:
                0 14px 40px rgba(57, 40, 27, .16);
            font: inherit;
            text-align: center;
            opacity: 0;
            visibility: hidden;
            transform: translate(-50%, 15px);
            transition:
                opacity .25s ease,
                transform .25s ease,
                visibility .25s ease;
        }

        .chv-toast.show {
            opacity: 1;
            visibility: visible;
            transform: translate(-50%, 0);
        }

        /*
         * ==========================================
         * HIỆU ỨNG MỞ TRANG
         * ==========================================
         */

        .chv-page-intro {
            position: fixed;
            inset: 0;
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background:
                radial-gradient(
                    circle at center,
                    #fffdf9 0%,
                    #f4ebe1 48%,
                    #e8d9ca 100%
                );
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transition:
                opacity .75s ease,
                visibility .75s ease;
        }

        .chv-page-intro.hide {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }

        .chv-intro-content {
            position: relative;
            z-index: 3;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 30px;
        }

        .chv-intro-image-wrap {
            position: relative;
            width: min(270px, 62vw);
            aspect-ratio: 1 / 1;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .chv-intro-image-ring {
            position: absolute;
            inset: 0;
            border: 1px solid rgba(130, 98, 74, .25);
            border-radius: 50%;
            animation:
                chvIntroRotate 14s linear infinite;
        }

        .chv-intro-image-ring::before,
        .chv-intro-image-ring::after {
            content: "";
            position: absolute;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #9e7c61;
        }

        .chv-intro-image-ring::before {
            top: 8px;
            left: 50%;
            transform: translateX(-50%);
        }

        .chv-intro-image-ring::after {
            bottom: 8px;
            left: 50%;
            transform: translateX(-50%);
        }

        .chv-intro-image {
            position: relative;
            width: 76%;
            height: 76%;
            object-fit: cover;
            border-radius: 50%;
            border: 7px solid rgba(255, 253, 249, .85);
            box-shadow:
                0 20px 55px rgba(75, 51, 34, .18);
            animation:
                chvIntroImage 2.2s ease both;
        }

        .chv-intro-title {
            margin: 0;
            color: #5c4434;
            font: inherit;
            font-size: clamp(20px, 3vw, 30px);
            font-weight: 600;
            letter-spacing: .08em;
            animation:
                chvIntroText 1.1s ease .35s both;
        }

        .chv-intro-subtitle {
            margin: 9px 0 0;
            color: #806a59;
            font: inherit;
            font-size: 12px;
            letter-spacing: .18em;
            animation:
                chvIntroText 1.1s ease .6s both;
        }

        .chv-intro-line {
            width: 55px;
            height: 1px;
            margin-top: 18px;
            background: #a98c72;
            transform-origin: center;
            animation:
                chvIntroLine .9s ease .8s both;
        }

        .chv-intro-glow {
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background:
                radial-gradient(
                    circle,
                    rgba(255,255,255,.65) 0%,
                    rgba(255,255,255,0) 70%
                );
            animation:
                chvIntroGlow 3s ease-in-out infinite;
        }

        @keyframes chvIntroImage {
            0% {
                opacity: 0;
                transform: scale(.72) rotate(-7deg);
            }

            60% {
                opacity: 1;
                transform: scale(1.035) rotate(2deg);
            }

            100% {
                opacity: 1;
                transform: scale(1) rotate(0);
            }
        }

        @keyframes chvIntroRotate {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        @keyframes chvIntroText {
            from {
                opacity: 0;
                transform: translateY(15px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes chvIntroLine {
            from {
                opacity: 0;
                transform: scaleX(0);
            }

            to {
                opacity: 1;
                transform: scaleX(1);
            }
        }

        @keyframes chvIntroGlow {
            0%,
            100% {
                transform: scale(.92);
                opacity: .55;
            }

            50% {
                transform: scale(1.06);
                opacity: .85;
            }
        }

        /*
         * Mobile
         */
        @media (max-width: 700px) {

            #consultationForm.chv-form-shell,
            #orderForm.chv-form-shell {
                padding: 20px;
                border-radius: 19px;
            }

            .product-purchase-row {
                gap: 7px;
            }

            .product-qty-control {
                height: 32px;
            }

            .product-qty-btn {
                width: 28px;
                height: 30px;
            }

            .product-qty-value {
                min-width: 23px;
            }

            .product-detail-layout {
                grid-template-columns: 1fr;
                padding: 22px;
                gap: 22px;
            }

            .product-detail-image,
            .product-detail-image img {
                min-height: 300px;
            }

            .product-detail-actions {
                flex-direction: column;
            }

            .detail-add-cart,
            .detail-order-btn {
                width: 100%;
            }

            .chv-intro-image-wrap {
                width: min(220px, 65vw);
            }
        }

        /*
         * Người dùng bật giảm chuyển động:
         * vẫn giữ intro nhưng bỏ animation mạnh.
         */
        @media (prefers-reduced-motion: reduce) {

            .chv-page-intro *,
            .chv-product-card *,
            .chv-modal *,
            .chv-toast {
                animation: none !important;
                transition-duration: .01ms !important;
            }

        }

    `;

    document.head.appendChild(style);
}


/* =========================================================
   25. HIỆU ỨNG INTRO KHI MỚI VÀO TRANG
   ========================================================= */

function createPageIntro() {
    /*
     * Không tạo lại intro nếu đã tồn tại.
     */
    if (
        document.getElementById(
            "chvPageIntro"
        )
    ) {
        return;
    }

    const intro =
        document.createElement("div");

    intro.id = "chvPageIntro";

    intro.className = "chv-page-intro";

    intro.innerHTML = `
        <div class="chv-intro-glow"></div>

        <div class="chv-intro-content">

            <div class="chv-intro-image-wrap">

                <div
                    class="chv-intro-image-ring"
                ></div>

                <img
                    class="chv-intro-image"
                    src="${escapeHtml(products[0].image)}"
                    alt="Gốm Bát Tràng"
                >

            </div>

            <h1 class="chv-intro-title">
                CHẠM VÀO HỒN VIỆT
            </h1>

            <p class="chv-intro-subtitle">
                GỐM BÁT TRÀNG · TINH HOA VIỆT
            </p>

            <div class="chv-intro-line"></div>

        </div>
    `;

    document.body.prepend(intro);

    /*
     * Khóa cuộn trong lúc intro chạy.
     */
    document.body.style.overflow = "hidden";

    /*
     * Cho intro chạy khoảng 1,7 giây.
     */
    window.setTimeout(() => {
        intro.classList.add("hide");

        document.body.style.overflow = "";

        window.setTimeout(() => {
            intro.remove();
        }, 800);

    }, 1700);
}


/* =========================================================
   26. SỰ KIỆN TÌM KIẾM
   ========================================================= */

function setupSearch() {
    const searchInputs =
        document.querySelectorAll(
            "#productSearch, .product-search input, input[data-product-search]"
        );

    searchInputs.forEach(input => {
        input.addEventListener(
            "input",
            event => {
                searchProducts(
                    event.target.value
                );
            }
        );
    });
}


/* =========================================================
   27. SỰ KIỆN LỌC DANH MỤC
   ========================================================= */

function setupCategoryFilters() {
    document
        .querySelectorAll(
            "[data-category], .category-btn, .filter-btn"
        )
        .forEach(button => {

            if (
                button.dataset.chvBound
            ) {
                return;
            }

            const category =
                button.dataset.category ||
                button.dataset.filter;

            if (!category) {
                return;
            }

            button.dataset.chvBound = "true";

            button.addEventListener(
                "click",
                event => {
                    event.preventDefault();
                    filterProducts(category);
                }
            );
        });
}


/* =========================================================
   28. SỰ KIỆN FORM
   ========================================================= */

function setupForms() {
    const consultationForm =
        document.getElementById(
            "consultationForm"
        );

    if (consultationForm) {
        consultationForm.addEventListener(
            "submit",
            submitConsultation
        );
    }

    const orderForm =
        document.getElementById(
            "orderForm"
        );

    if (orderForm) {
        orderForm.addEventListener(
            "submit",
            submitOrder
        );
    }

    const newsletterForm =
        document.getElementById(
            "newsletterForm"
        );

    if (newsletterForm) {
        newsletterForm.addEventListener(
            "submit",
            subscribeEmail
        );
    }
}


/* =========================================================
   29. SỰ KIỆN THAY ĐỔI FORM ĐẶT HÀNG
   ========================================================= */

function setupOrderSummaryEvents() {
    const productSelect =
        document.getElementById(
            "orderProduct"
        );

    const quantityInput =
        document.getElementById(
            "orderQuantity"
        );

    if (productSelect) {
        productSelect.addEventListener(
            "change",
            updateOrderSummary
        );
    }

    if (quantityInput) {
        quantityInput.addEventListener(
            "input",
            updateOrderSummary
        );

        quantityInput.addEventListener(
            "change",
            updateOrderSummary
        );
    }
}


/* =========================================================
   30. PHÍM ESC ĐỂ ĐÓNG MODAL / CART
   ========================================================= */

function setupKeyboardEvents() {
    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }

            closeProductDetail();

            const sidebar =
                document.getElementById(
                    "cart-sidebar"
                ) ||
                document.getElementById(
                    "cartSidebar"
                );

            if (
                sidebar &&
                sidebar.classList.contains(
                    "open"
                )
            ) {
                toggleCart(false);
            }
        }
    );
}


/* =========================================================
   31. KHỞI TẠO WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
         * CSS động trước.
         */
        addProductQuantityCSS();

        /*
         * Intro hình ảnh động.
         */
        createPageIntro();

        /*
         * Hiển thị sản phẩm.
         */
        renderProducts(products);

        /*
         * Giỏ hàng.
         */
        updateCart();

        /*
         * Select sản phẩm.
         */
        populateOrderProducts();

        /*
         * Tóm tắt đơn hàng.
         */
        updateOrderSummary();

        /*
         * Form dạng khung lớn + ô nhỏ.
         */
        enhanceFormBoxes();

        /*
         * Search.
         */
        setupSearch();

        /*
         * Bộ lọc.
         */
        setupCategoryFilters();

        /*
         * Form.
         */
        setupForms();

        /*
         * Order summary.
         */
        setupOrderSummaryEvents();

        /*
         * ESC.
         */
        setupKeyboardEvents();

        /*
         * Khi ảnh sản phẩm lỗi, không để
         * icon ảnh vỡ làm xấu giao diện.
         */
        document.addEventListener(
            "error",
            event => {
                if (
                    event.target.tagName === "IMG"
                ) {
                    event.target.classList.add(
                        "chv-image-failed"
                    );
                }
            },
            true
        );

        /*
         * Nếu có nút đóng overlay giỏ hàng.
         */
        const cartOverlay =
            document.getElementById(
                "cart-overlay"
            ) ||
            document.getElementById(
                "cartOverlay"
            );

        if (cartOverlay) {
            cartOverlay.addEventListener(
                "click",
                () => toggleCart(false)
            );
        }

        /*
         * Cập nhật lại số lượng sản phẩm
         * nếu người dùng quay lại trang bằng
         * browser cache.
         */
        window.addEventListener(
            "pageshow",
            () => {
                cart =
                    JSON.parse(
                        localStorage.getItem(
                            "chamHonVietCart"
                        )
                    ) || [];

                updateCart();
            }
        );
    }
);


/* =========================================================
   32. HỖ TRỢ GỌI HÀM TỪ HTML
   ========================================================= */

window.products = products;

window.renderProducts = renderProducts;
window.filterProducts = filterProducts;
window.searchProducts = searchProducts;

window.showProductDetail =
    showProductDetail;

window.closeProductDetail =
    closeProductDetail;

window.changeProductCardQuantity =
    changeProductCardQuantity;

window.addProductWithQuantity =
    addProductWithQuantity;

window.changeDetailQuantity =
    changeDetailQuantity;

window.addToCart =
    addToCart;

window.changeQuantity =
    changeQuantity;

window.removeFromCart =
    removeFromCart;

window.updateCart =
    updateCart;

window.toggleCart =
    toggleCart;

window.selectProductForOrder =
    selectProductForOrder;

window.checkout =
    checkout;

window.submitConsultation =
    submitConsultation;

window.submitOrder =
    submitOrder;

window.subscribeEmail =
    subscribeEmail;

window.showToast =
    showToast;

window.updateOrderSummary =
    updateOrderSummary;
