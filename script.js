/* =========================================================
   BÁT TRÀNG CERAMIC SHOP
   FILE DUY NHẤT: script.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    /* =====================================================
       1. DỮ LIỆU SẢN PHẨM
       ===================================================== */

    const products = [
        {
            id: 1,
            name: "Bộ Gốm Bát Tràng Họa Tiết Truyền Thống",
            price: 1850000,
            image: "https://xuonggomsuviet.vn/wp-content/uploads/2019/04/doc-dao-ky-thuat-trang-tri-tren-san-pham-gom-su-bat-trang-1.jpg",
            origin: "Làng gốm Bát Tràng, Gia Lâm, Hà Nội",
            material: "Gốm sứ Bát Tràng cao cấp",
            size: "Bộ sản phẩm tiêu chuẩn",
            technique: "Trang trí thủ công",
            description:
                "Sản phẩm gốm Bát Tràng được chế tác và trang trí thủ công, mang đậm nét văn hóa truyền thống của làng nghề."
        },

        {
            id: 2,
            name: "Bộ Gốm Sứ Bát Tràng Cao Cấp",
            price: 2450000,
            image: "https://battrangvietnam.vn/wp-content/uploads/2024/09/dong-san-pham-dac-trung-cua-bat-trang-13.jpg",
            origin: "Bát Tràng, Gia Lâm, Hà Nội",
            material: "Gốm sứ cao cấp",
            size: "Bộ sản phẩm",
            technique: "Tạo hình và nung thủ công",
            description:
                "Dòng sản phẩm đặc trưng của Bát Tràng với kiểu dáng thanh lịch, phù hợp sử dụng trong gia đình hoặc làm quà tặng."
        },

        {
            id: 3,
            name: "Bộ Bát Đĩa Hoa Cúc Vẽ Tay",
            price: 2890000,
            image: "https://battrangvietnam.vn/wp-content/uploads/2024/04/bo-bat-dia-gia-co-hoa-tiet-hoa-cuc-ve-tay-4.jpg",
            origin: "Bát Tràng, Gia Lâm, Hà Nội",
            material: "Sứ trắng cao cấp",
            size: "Bộ nhiều món",
            technique: "Vẽ tay thủ công",
            description:
                "Bộ bát đĩa với họa tiết hoa cúc được vẽ thủ công, tạo cảm giác trang nhã và sang trọng cho bàn ăn."
        },

        {
            id: 4,
            name: "Bộ Bát Đĩa Sứ Hoa Sen Xanh",
            price: 2750000,
            image: "https://battrangvietnam.vn/wp-content/uploads/2024/04/bo-bat-dia-su-trang-hoa-tiet-hoa-sen-xanh-2.jpg",
            origin: "Bát Tràng, Gia Lâm, Hà Nội",
            material: "Sứ trắng",
            size: "Bộ nhiều món",
            technique: "Trang trí họa tiết hoa sen",
            description:
                "Bộ bát đĩa sứ trắng họa tiết hoa sen xanh mang vẻ đẹp nhẹ nhàng, phù hợp với không gian ăn uống hiện đại."
        },

        {
            id: 5,
            name: "Đồ Gốm Trang Trí Làng Nghề Bát Tràng",
            price: 1650000,
            image: "https://i1-vnexpress.vnecdn.net/2019/12/19/lang-gom-Bat-Trang-png-6590-1576729451.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=qNrvTb1lci5tRl9RRQ9COw",
            origin: "Làng gốm Bát Tràng",
            material: "Gốm đất nung",
            size: "Nhiều kích thước",
            technique: "Thủ công truyền thống",
            description:
                "Sản phẩm mang nét đặc trưng của làng nghề Bát Tràng, thích hợp làm vật dụng trang trí hoặc quà lưu niệm."
        },

        {
            id: 6,
            name: "Bảo Bình Sen Cá Phú Quý Cao 60cm",
            price: 12800000,
            image: "https://godinh.com/web/image/product.template/81280/image_512/B%E1%BA%A3o%20B%C3%ACnh%20Sen%20C%C3%A1%20Ph%C3%BA%20Qu%C3%BD%20Cao%2060%20%C4%90%C6%B0%E1%BB%9Dng%20K%C3%ADnh%2034%20%28cm%29?unique=a500000",
            origin: "Bát Tràng, Hà Nội",
            material: "Gốm sứ cao cấp",
            size: "Cao khoảng 60cm, đường kính khoảng 34cm",
            technique: "Đắp nổi và vẽ trang trí",
            description:
                "Bảo bình họa tiết sen cá mang ý nghĩa phú quý, thường được sử dụng để trang trí phòng khách, phòng làm việc hoặc không gian sang trọng."
        },

        {
            id: 7,
            name: "Bình Gốm Nghệ Thuật Bát Tràng",
            price: 4250000,
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShIutqHKIFFs45SDMVl9Jm8soG0eFnqgLoNSOd_asQBJE52M5j",
            origin: "Bát Tràng, Gia Lâm, Hà Nội",
            material: "Gốm sứ",
            size: "Kích thước trang trí",
            technique: "Tạo hình thủ công",
            description:
                "Bình gốm nghệ thuật có thiết kế nổi bật, phù hợp trang trí nội thất và làm quà tặng."
        },

        {
            id: 8,
            name: "Cốc Sứ Bát Tràng Men Hỏa Biến",
            price: 385000,
            image: "https://battrangvietnam.vn/wp-content/uploads/2025/12/coc-su-bat-trang-men-hoa-bien-dang-tru-co-quai-ls-27-anh-dai-dien.jpg",
            origin: "Bát Tràng, Gia Lâm, Hà Nội",
            material: "Sứ men hỏa biến",
            size: "Cốc uống nước",
            technique: "Men hỏa biến",
            description:
                "Cốc sứ Bát Tràng sử dụng kỹ thuật men hỏa biến tạo ra màu sắc tự nhiên và độc đáo trên từng sản phẩm."
        },

        {
            id: 9,
            name: "Ấm Trà Gốm Bát Tràng Cao Cấp",
            price: 1680000,
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMKFGtC66RZipOkQeJgtMMAfcENcr5WdIWRu9TFALRATRhGpBj",
            origin: "Bát Tràng, Hà Nội",
            material: "Gốm sứ cao cấp",
            size: "Ấm trà gia đình",
            technique: "Tạo hình thủ công",
            description:
                "Ấm trà mang phong cách truyền thống, thích hợp dùng thưởng trà hoặc làm quà biếu."
        },

        {
            id: 10,
            name: "Bộ Ấm Chén Gốm Men Cao Cấp",
            price: 2150000,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9W4D4mGP2J6ZGS1DJNzcZ5K1DYBdJGXJA46hAFzx7jOTK5egaFjWn5Hr&s=10",
            origin: "Bát Tràng, Gia Lâm, Hà Nội",
            material: "Gốm sứ",
            size: "Bộ ấm chén",
            technique: "Nung men thủ công",
            description:
                "Bộ ấm chén có thiết kế thanh lịch, phù hợp sử dụng trong gia đình, văn phòng hoặc làm quà tặng."
        },

        {
            id: 11,
            name: "Bộ Đĩa Gốm Trang Trí Cao Cấp",
            price: 2350000,
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqTjHmLxve9gZTwigiRXZm_VY3RcPht7_IgL5_YLOvPX-oAafI",
            origin: "Bát Tràng, Hà Nội",
            material: "Gốm sứ",
            size: "Bộ đĩa trang trí",
            technique: "Trang trí thủ công",
            description:
                "Bộ đĩa gốm mang phong cách trang trí truyền thống, thích hợp trưng bày hoặc sử dụng trong gia đình."
        },

        {
            id: 12,
            name: "Bộ Bát Đĩa Gốm Sứ Gia Đình",
            price: 2490000,
            image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mifiykrms9ag43",
            origin: "Bát Tràng, Gia Lâm, Hà Nội",
            material: "Sứ cao cấp",
            size: "Bộ gia đình",
            technique: "Nung nhiệt độ cao",
            description:
                "Bộ bát đĩa phục vụ nhu cầu sử dụng hàng ngày với thiết kế trang nhã và chất liệu bền đẹp."
        },

        {
            id: 13,
            name: "Bình Gốm Trang Trí Nghệ Thuật",
            price: 4950000,
            image: "https://bizweb.dktcdn.net/100/659/338/products/2e9c6da5-bca0-4a06-97a3-0c85f3d74a57.jpg?v=1773291686963",
            origin: "Bát Tràng, Hà Nội",
            material: "Gốm sứ nghệ thuật",
            size: "Bình trang trí",
            technique: "Tạo hình và trang trí thủ công",
            description:
                "Bình gốm nghệ thuật với kiểu dáng nổi bật, phù hợp trang trí không gian phòng khách và sảnh."
        },

        {
            id: 14,
            name: "Bộ Gốm Sứ Trang Trí Bát Tràng",
            price: 3250000,
            image: "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/486496hTq/anh-mo-ta.png",
            origin: "Bát Tràng, Gia Lâm, Hà Nội",
            material: "Gốm sứ",
            size: "Sản phẩm trang trí",
            technique: "Thủ công",
            description:
                "Sản phẩm gốm sứ mang phong cách đặc trưng Bát Tràng, thích hợp trang trí và làm quà tặng."
        },

        {
            id: 15,
            name: "Bộ Ấm Chén Sứ Hoa Văn Cao Cấp",
            price: 1950000,
            image: "https://product.hstatic.net/200000258799/product/z6560994619592_1dd138feeafdadd8b79ef6d63e0a82b1_28308021f6864719bf8ebce77630607a_master.jpg",
            origin: "Bát Tràng, Hà Nội",
            material: "Sứ cao cấp",
            size: "Bộ ấm chén",
            technique: "Trang trí hoa văn",
            description:
                "Bộ ấm chén có hoa văn tinh tế, thích hợp sử dụng khi thưởng trà hoặc tiếp khách."
        },

        {
            id: 16,
            name: "Bình Gốm Bát Tràng Trang Trí",
            price: 5650000,
            image: "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/",
            origin: "Bát Tràng, Gia Lâm, Hà Nội",
            material: "Gốm sứ",
            size: "Bình trang trí",
            technique: "Chế tác thủ công",
            description:
                "Bình gốm trang trí mang phong cách nghệ thuật, phù hợp với nhiều không gian nội thất."
        },

        {
            id: 17,
            name: "Bình Gốm Men Cao Cấp Dáng Nghệ Thuật",
            price: 6250000,
            image: "https://neon.vn/image/cache/catalog/products/D39-2-1100x1100.jpg.webp",
            origin: "Bát Tràng, Hà Nội",
            material: "Gốm men cao cấp",
            size: "Bình trang trí",
            technique: "Men và tạo hình thủ công",
            description:
                "Bình gốm có kiểu dáng nghệ thuật, lớp men tạo hiệu ứng đẹp mắt và phù hợp với không gian sang trọng."
        }
    ];


    /* =====================================================
       2. BIẾN
       ===================================================== */

    let cart = JSON.parse(localStorage.getItem("batTrangCart")) || [];
    let currentSearch = "";
    let currentSort = "default";


    /* =====================================================
       3. HÀM ĐỊNH DẠNG
       ===================================================== */

    function formatPrice(price) {
        return Number(price).toLocaleString("vi-VN") + " ₫";
    }


    function escapeHTML(text) {
        if (!text) return "";

        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    /* =====================================================
       4. HIỂN THỊ SẢN PHẨM
       ===================================================== */

    function renderProducts() {
        const grid =
            document.querySelector("#productGrid") ||
            document.querySelector(".product-grid") ||
            document.querySelector("#products");

        if (!grid) {
            console.warn("Không tìm thấy khu vực hiển thị sản phẩm.");
            return;
        }

        let list = [...products];

        /* Tìm kiếm */
        if (currentSearch.trim() !== "") {
            const keyword = currentSearch
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

            list = list.filter(product => {
                const text = `
                    ${product.name}
                    ${product.origin}
                    ${product.material}
                    ${product.description}
                `
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "");

                return text.includes(keyword);
            });
        }

        /* Sắp xếp */
        if (currentSort === "price-asc") {
            list.sort((a, b) => a.price - b.price);
        }

        if (currentSort === "price-desc") {
            list.sort((a, b) => b.price - a.price);
        }

        if (currentSort === "name") {
            list.sort((a, b) =>
                a.name.localeCompare(b.name, "vi")
            );
        }

        /* Không chia danh mục */
        grid.innerHTML = "";

        if (list.length === 0) {
            grid.innerHTML = `
                <div class="no-products">
                    Không tìm thấy sản phẩm phù hợp.
                </div>
            `;
            return;
        }

        list.forEach(product => {
            const cartItem = cart.find(item => item.id === product.id);
            const quantity = cartItem ? cartItem.quantity : 0;

            const card = document.createElement("article");
            card.className = "product-card";

            card.innerHTML = `
                <div class="product-image-box"
                     onclick="openProductDetail(${product.id})">

                    <img
                        src="${escapeHTML(product.image)}"
                        alt="${escapeHTML(product.name)}"
                        loading="lazy"
                        onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="500">
                                <rect width="100%" height="100%" fill="#eee7dc"/>
                                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
                                      font-family="Arial" font-size="22" fill="#6b4423">
                                    Hình ảnh sản phẩm
                                </text>
                            </svg>
                        `)}';"
                    >
                </div>

                <div class="product-content">

                    <h3
                        class="product-name"
                        onclick="openProductDetail(${product.id})"
                    >
                        ${escapeHTML(product.name)}
                    </h3>

                    <div class="product-price">
                        ${formatPrice(product.price)}
                    </div>

                    <div class="product-actions">

                        <div class="quantity-control">

                            <button
                                type="button"
                                class="quantity-btn"
                                onclick="changeQuantity(${product.id}, -1)"
                            >
                                −
                            </button>

                            <span id="quantity-${product.id}">
                                ${quantity}
                            </span>

                            <button
                                type="button"
                                class="quantity-btn"
                                onclick="changeQuantity(${product.id}, 1)"
                            >
                                +
                            </button>

                        </div>

                        <button
                            type="button"
                            class="add-cart-btn"
                            onclick="addToCart(${product.id})"
                        >
                            Thêm giỏ hàng
                        </button>

                    </div>

                    <button
                        type="button"
                        class="detail-btn"
                        onclick="openProductDetail(${product.id})"
                    >
                        Xem chi tiết
                    </button>

                </div>
            `;

            grid.appendChild(card);
        });
    }


    /* =====================================================
       5. TÌM KIẾM
       ===================================================== */

    function setupSearch() {
        const searchInput =
            document.querySelector("#searchInput") ||
            document.querySelector("#productSearch") ||
            document.querySelector(".search-input");

        if (!searchInput) return;

        searchInput.addEventListener("input", event => {
            currentSearch = event.target.value;
            renderProducts();
        });
    }


    /* =====================================================
       6. SẮP XẾP
       ===================================================== */

    function setupSort() {
        const sortSelect =
            document.querySelector("#sortSelect") ||
            document.querySelector("#sortProducts");

        if (!sortSelect) return;

        sortSelect.addEventListener("change", event => {
            currentSort = event.target.value;
            renderProducts();
        });
    }


    /* =====================================================
       7. SỐ LƯỢNG SẢN PHẨM
       ===================================================== */

    window.changeQuantity = function (productId, amount) {
        const product = products.find(item => item.id === productId);

        if (!product) return;

        let item = cart.find(item => item.id === productId);

        if (!item) {
            if (amount <= 0) return;

            item = {
                id: productId,
                quantity: amount
            };

            cart.push(item);
        } else {
            item.quantity += amount;

            if (item.quantity <= 0) {
                cart = cart.filter(item => item.id !== productId);
            }
        }

        saveCart();
        renderProducts();
        renderCart();
    };


    /* =====================================================
       8. THÊM GIỎ HÀNG
       ===================================================== */

    window.addToCart = function (productId) {
        const product = products.find(item => item.id === productId);

        if (!product) return;

        const existing = cart.find(item => item.id === productId);

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id: productId,
                quantity: 1
            });
        }

        saveCart();
        renderProducts();
        renderCart();

        showMessage("Đã thêm sản phẩm vào giỏ hàng.");
    };


    /* =====================================================
       9. LƯU GIỎ HÀNG
       ===================================================== */

    function saveCart() {
        localStorage.setItem(
            "batTrangCart",
            JSON.stringify(cart)
        );
    }


    /* =====================================================
       10. TÍNH GIỎ HÀNG
       ===================================================== */

    function getCartTotal() {
        return cart.reduce((total, item) => {
            const product = products.find(
                product => product.id === item.id
            );

            if (!product) return total;

            return total + product.price * item.quantity;
        }, 0);
    }


    /* =====================================================
       11. HIỂN THỊ GIỎ HÀNG
       ===================================================== */

    function renderCart() {
        const cartContainer =
            document.querySelector("#cartItems") ||
            document.querySelector(".cart-items");

        const cartTotal =
            document.querySelector("#cartTotal") ||
            document.querySelector(".cart-total");

        const cartCount =
            document.querySelector("#cartCount") ||
            document.querySelector(".cart-count");

        if (cartCount) {
            const count = cart.reduce(
                (total, item) => total + item.quantity,
                0
            );

            cartCount.textContent = count;
        }

        if (!cartContainer) return;

        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    Giỏ hàng đang trống.
                </div>
            `;

            if (cartTotal) {
                cartTotal.textContent = formatPrice(0);
            }

            return;
        }

        cartContainer.innerHTML = "";

        cart.forEach(item => {
            const product = products.find(
                product => product.id === item.id
            );

            if (!product) return;

            const itemElement = document.createElement("div");

            itemElement.className = "cart-item";

            itemElement.innerHTML = `
                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                >

                <div class="cart-item-info">

                    <h4>
                        ${escapeHTML(product.name)}
                    </h4>

                    <p>
                        ${formatPrice(product.price)}
                    </p>

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
                        class="remove-cart-btn"
                        onclick="removeFromCart(${product.id})"
                    >
                        Xóa
                    </button>

                </div>
            `;

            cartContainer.appendChild(itemElement);
        });

        if (cartTotal) {
            cartTotal.textContent =
                formatPrice(getCartTotal());
        }
    }


    /* =====================================================
       12. XÓA SẢN PHẨM KHỎI GIỎ
       ===================================================== */

    window.removeFromCart = function (productId) {
        cart = cart.filter(
            item => item.id !== productId
        );

        saveCart();
        renderProducts();
        renderCart();
    };


    /* =====================================================
       13. XÓA TOÀN BỘ GIỎ
       ===================================================== */

    window.clearCart = function () {
        cart = [];

        saveCart();
        renderProducts();
        renderCart();
    };


    /* =====================================================
       14. MODAL CHI TIẾT SẢN PHẨM
       ===================================================== */

    window.openProductDetail = function (productId) {
        const product = products.find(
            item => item.id === productId
        );

        if (!product) return;

        let modal = document.querySelector("#productModal");

        if (!modal) {
            modal = document.createElement("div");

            modal.id = "productModal";
            modal.className = "product-modal";

            document.body.appendChild(modal);
        }

        modal.innerHTML = `
            <div class="modal-overlay"
                 onclick="closeProductDetail(event)">

                <div class="product-modal-content"
                     onclick="event.stopPropagation()">

                    <button
                        type="button"
                        class="modal-close"
                        onclick="closeProductDetail()"
                    >
                        ×
                    </button>

                    <div class="modal-product-image">
                        <img
                            src="${escapeHTML(product.image)}"
                            alt="${escapeHTML(product.name)}"
                        >
                    </div>

                    <div class="modal-product-info">

                        <h2>
                            ${escapeHTML(product.name)}
                        </h2>

                        <div class="modal-price">
                            ${formatPrice(product.price)}
                        </div>

                        <div class="product-description">

                            <p>
                                <strong>Xuất xứ:</strong>
                                ${escapeHTML(product.origin)}
                            </p>

                            <p>
                                <strong>Chất liệu:</strong>
                                ${escapeHTML(product.material)}
                            </p>

                            <p>
                                <strong>Kích thước:</strong>
                                ${escapeHTML(product.size)}
                            </p>

                            <p>
                                <strong>Kỹ thuật:</strong>
                                ${escapeHTML(product.technique)}
                            </p>

                            <p>
                                <strong>Mô tả:</strong>
                                ${escapeHTML(product.description)}
                            </p>

                        </div>

                        <div class="modal-actions">

                            <button
                                type="button"
                                class="add-cart-btn"
                                onclick="addToCart(${product.id}); closeProductDetail();"
                            >
                                Thêm vào giỏ hàng
                            </button>

                            <button
                                type="button"
                                class="buy-now-btn"
                                onclick="buyNow(${product.id})"
                            >
                                Mua ngay
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        `;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";
    };


    window.closeProductDetail = function (event) {
        if (
            event &&
            event.target &&
            !event.target.classList.contains("modal-overlay")
        ) {
            return;
        }

        const modal =
            document.querySelector("#productModal");

        if (modal) {
            modal.classList.remove("active");
        }

        document.body.style.overflow = "";
    };


    /* =====================================================
       15. MUA NGAY
       ===================================================== */

    window.buyNow = function (productId) {
        const product = products.find(
            item => item.id === productId
        );

        if (!product) return;

        const existing = cart.find(
            item => item.id === productId
        );

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id: productId,
                quantity: 1
            });
        }

        saveCart();
        renderProducts();
        renderCart();

        closeProductDetail();

        const orderForm =
            document.querySelector("#orderForm");

        if (orderForm) {
            orderForm.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else {
            showMessage(
                "Đã thêm sản phẩm. Vui lòng kiểm tra giỏ hàng để đặt mua."
            );
        }
    };


    /* =====================================================
       16. FORM ĐẶT HÀNG
       ===================================================== */

    function setupOrderForm() {
        const form =
            document.querySelector("#orderForm");

        if (!form) return;

        form.addEventListener("submit", event => {
            event.preventDefault();

            if (cart.length === 0) {
                showMessage(
                    "Vui lòng thêm sản phẩm vào giỏ hàng trước khi đặt hàng."
                );

                return;
            }

            const name =
                form.querySelector('[name="name"]')?.value.trim();

            const phone =
                form.querySelector('[name="phone"]')?.value.trim();

            const address =
                form.querySelector('[name="address"]')?.value.trim();

            const payment =
                form.querySelector('[name="payment"]')?.value;

            if (!name || !phone || !address) {
                showMessage(
                    "Vui lòng nhập đầy đủ họ tên, số điện thoại và địa chỉ."
                );

                return;
            }

            const order = {
                customer: {
                    name,
                    phone,
                    address
                },

                payment: payment || "Thanh toán khi nhận hàng",

                products: cart.map(item => {
                    const product = products.find(
                        product => product.id === item.id
                    );

                    return {
                        id: product.id,
                        name: product.name,
                        quantity: item.quantity,
                        price: product.price,
                        total:
                            product.price *
                            item.quantity
                    };
                }),

                total: getCartTotal(),

                createdAt: new Date().toISOString()
            };

            console.log(
                "ĐƠN HÀNG:",
                order
            );

            localStorage.setItem(
                "lastBatTrangOrder",
                JSON.stringify(order)
            );

            showMessage(
                "Đặt hàng thành công! Cảm ơn bạn đã mua sản phẩm."
            );

            cart = [];

            saveCart();
            renderProducts();
            renderCart();

            form.reset();
        });
    }


    /* =====================================================
       17. FORM TƯ VẤN
       ===================================================== */

    function setupConsultationForm() {
        const form =
            document.querySelector("#consultationForm");

        if (!form) return;

        form.addEventListener("submit", event => {
            event.preventDefault();

            const name =
                form.querySelector('[name="name"]')?.value.trim();

            const phone =
                form.querySelector('[name="phone"]')?.value.trim();

            if (!name || !phone) {
                showMessage(
                    "Vui lòng nhập họ tên và số điện thoại."
                );

                return;
            }

            const consultation = {
                name,
                phone,
                createdAt: new Date().toISOString()
            };

            localStorage.setItem(
                "lastConsultation",
                JSON.stringify(consultation)
            );

            console.log(
                "YÊU CẦU TƯ VẤN:",
                consultation
            );

            showMessage(
                "Đã gửi yêu cầu tư vấn. Chúng tôi sẽ liên hệ với bạn."
            );

            form.reset();
        });
    }


    /* =====================================================
       18. THÔNG BÁO
       ===================================================== */

    function showMessage(message) {
        let box =
            document.querySelector("#siteMessage");

        if (!box) {
            box = document.createElement("div");

            box.id = "siteMessage";

            box.style.position = "fixed";
            box.style.right = "20px";
            box.style.bottom = "20px";
            box.style.zIndex = "99999";
            box.style.background = "#6b4423";
            box.style.color = "#fff";
            box.style.padding = "14px 20px";
            box.style.borderRadius = "12px";
            box.style.boxShadow =
                "0 8px 25px rgba(0,0,0,.2)";
            box.style.fontFamily =
                "inherit";
            box.style.transition =
                "opacity .3s ease";

            document.body.appendChild(box);
        }

        box.textContent = message;
        box.style.opacity = "1";

        clearTimeout(
            window.messageTimeout
        );

        window.messageTimeout = setTimeout(() => {
            box.style.opacity = "0";
        }, 3000);
    }


    /* =====================================================
       19. NÚT MỞ / ĐÓNG GIỎ HÀNG
       ===================================================== */

    function setupCartButtons() {
        const openButtons =
            document.querySelectorAll(
                "#cartButton, .cart-button, [data-cart-open]"
            );

        const cartBox =
            document.querySelector("#cartBox") ||
            document.querySelector(".cart-box");

        const closeButtons =
            document.querySelectorAll(
                "#closeCart, .close-cart, [data-cart-close]"
            );

        openButtons.forEach(button => {
            button.addEventListener("click", () => {
                if (!cartBox) return;

                cartBox.classList.add("active");
                renderCart();
            });
        });

        closeButtons.forEach(button => {
            button.addEventListener("click", () => {
                if (!cartBox) return;

                cartBox.classList.remove("active");
            });
        });
    }


    /* =====================================================
       20. NÚT ESC ĐÓNG MODAL
       ===================================================== */

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeProductDetail();

            const cartBox =
                document.querySelector("#cartBox") ||
                document.querySelector(".cart-box");

            if (cartBox) {
                cartBox.classList.remove("active");
            }
        }
    });


    /* =====================================================
       21. TẠO CSS CƠ BẢN TỪ CHÍNH SCRIPT.JS
       
       Không cần sửa CSS nếu muốn dùng giao diện mặc định.
       ===================================================== */

    const style = document.createElement("style");

    style.textContent = `

        /* ================================
           PRODUCT GRID
           ================================ */

        .product-grid,
        #productGrid,
        #products {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 24px;
            width: 100%;
        }


        /* ================================
           PRODUCT CARD
           ================================ */

        .product-card {
            background: #fff;
            border: 1px solid #eadfd2;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(80, 50, 25, .08);
            transition:
                transform .25s ease,
                box-shadow .25s ease;
        }

        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 30px rgba(80, 50, 25, .15);
        }


        /* ================================
           HÌNH FULL KHUNG
           ================================ */

        .product-image-box {
            width: 100%;
            height: 330px;
            overflow: hidden;
            background: #f3eee7;
            cursor: pointer;
        }

        .product-image-box img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            transition: transform .35s ease;
        }

        .product-card:hover
        .product-image-box img {
            transform: scale(1.04);
        }


        /* ================================
           PRODUCT CONTENT
           ================================ */

        .product-content {
            padding: 17px;
        }

        .product-name {
            margin: 0 0 9px;
            color: #5b351b;
            font-size: 18px;
            line-height: 1.4;
            font-weight: 700;
            cursor: pointer;
        }

        .product-name:hover {
            color: #8b5a2b;
        }

        .product-price {
            color: #9a5b25;
            font-size: 19px;
            font-weight: 700;
            margin-bottom: 15px;
        }


        /* ================================
           QUANTITY + ADD CART
           ================================ */

        .product-actions {
            display: flex;
            align-items: center;
            gap: 9px;
        }

        .quantity-control {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #d8c7b5;
            border-radius: 10px;
            overflow: hidden;
            min-width: 92px;
            height: 42px;
            background: #fff;
        }

        .quantity-control button {
            width: 30px;
            height: 100%;
            border: 0;
            background: transparent;
            color: #6b4423;
            font-size: 21px;
            cursor: pointer;
        }

        .quantity-control button:hover {
            background: #f2e8dc;
        }

        .quantity-control span {
            min-width: 28px;
            text-align: center;
            color: #4c301c;
            font-weight: 600;
        }

        .add-cart-btn,
        .buy-now-btn {
            border: 0;
            border-radius: 10px;
            padding: 11px 14px;
            background: #6b4423;
            color: #fff;
            cursor: pointer;
            font-family: inherit;
            font-weight: 600;
            transition: background .2s ease;
        }

        .add-cart-btn:hover,
        .buy-now-btn:hover {
            background: #4e3019;
        }


        /* ================================
           DETAIL BUTTON
           ================================ */

        .detail-btn {
            width: 100%;
            margin-top: 11px;
            padding: 10px;
            border: 1px solid #c9ad92;
            border-radius: 10px;
            background: transparent;
            color: #6b4423;
            cursor: pointer;
            font-family: inherit;
            font-weight: 600;
        }

        .detail-btn:hover {
            background: #f6eee6;
        }


        /* ================================
           MODAL
           ================================ */

        .product-modal {
            position: fixed;
            inset: 0;
            z-index: 9990;
            display: none;
        }

        .product-modal.active {
            display: block;
        }

        .modal-overlay {
            position: absolute;
            inset: 0;
            background: rgba(35, 24, 15, .65);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 25px;
        }

        .product-modal-content {
            width: min(950px, 100%);
            max-height: 90vh;
            overflow-y: auto;
            background: #fff;
            border-radius: 20px;
            position: relative;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            padding: 25px;
            color: #6b4423;
        }

        .modal-close {
            position: absolute;
            right: 15px;
            top: 10px;
            width: 40px;
            height: 40px;
            border: 0;
            border-radius: 50%;
            background: #f1e8df;
            color: #5b351b;
            font-size: 27px;
            cursor: pointer;
            z-index: 2;
        }

        .modal-product-image {
            width: 100%;
            min-height: 400px;
            border-radius: 14px;
            overflow: hidden;
            background: #f2ece5;
        }

        .modal-product-image img {
            width: 100%;
            height: 100%;
            min-height: 400px;
            object-fit: cover;
            display: block;
        }

        .modal-product-info {
            padding: 20px 15px;
        }

        .modal-product-info h2 {
            color: #5b351b;
            margin-top: 0;
            line-height: 1.35;
        }

        .modal-price {
            color: #9a5b25;
            font-size: 25px;
            font-weight: 700;
            margin-bottom: 20px;
        }

        .product-description {
            border: 1px solid #d8c7b5;
            border-radius: 14px;
            padding: 16px;
            color: #6b4423;
            line-height: 1.65;
        }

        .product-description p {
            margin: 0 0 10px;
        }

        .product-description p:last-child {
            margin-bottom: 0;
        }

        .modal-actions {
            display: flex;
            gap: 10px;
            margin-top: 18px;
        }


        /* ================================
           CART
           ================================ */

        .cart-item {
            display: flex;
            gap: 12px;
            padding: 13px 0;
            border-bottom: 1px solid #eadfd2;
        }

        .cart-item img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 10px;
        }

        .cart-item-info {
            flex: 1;
        }

        .cart-item-info h4 {
            margin: 0 0 5px;
            color: #5b351b;
        }

        .cart-item-info p {
            margin: 0 0 8px;
            color: #9a5b25;
            font-weight: 700;
        }

        .cart-quantity {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .cart-quantity button {
            border: 1px solid #d8c7b5;
            background: #fff;
            width: 30px;
            height: 30px;
            border-radius: 7px;
            cursor: pointer;
        }

        .remove-cart-btn {
            margin-top: 7px;
            border: 0;
            background: none;
            color: #a33;
            cursor: pointer;
        }


        /* ================================
           EMPTY
           ================================ */

        .empty-cart,
        .no-products {
            padding: 30px;
            text-align: center;
            color: #765b42;
            border-radius: 14px;
            background: #f8f3ed;
        }


        /* ================================
           RESPONSIVE
           ================================ */

        @media (max-width: 1100px) {
            .product-grid,
            #productGrid,
            #products {
                grid-template-columns: repeat(3, minmax(0, 1fr));
            }
        }

        @media (max-width: 800px) {
            .product-grid,
            #productGrid,
            #products {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .product-image-box {
                height: 280px;
            }

            .product-modal-content {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 520px) {
            .product-grid,
            #productGrid,
            #products {
                grid-template-columns: 1fr;
            }

            .product-image-box {
                height: 330px;
            }

            .product-actions {
                flex-direction: column;
                align-items: stretch;
            }

            .quantity-control {
                width: 100%;
            }

            .modal-overlay {
                padding: 10px;
            }

            .product-modal-content {
                padding: 15px;
            }
        }

    `;

    document.head.appendChild(style);


    /* =====================================================
       22. KHỞI CHẠY
       ===================================================== */

    renderProducts();
    renderCart();

    setupSearch();
    setupSort();
    setupOrderForm();
    setupConsultationForm();
    setupCartButtons();


    /* =====================================================
       23. CHO PHÉP HTML GỌI LẠI DỮ LIỆU
       ===================================================== */

    window.batTrangProducts = products;

    window.batTrangCart = cart;

});
