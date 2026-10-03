/* =========================================================
   CHẠM VÀO HỒN VIỆT
   script.js
   Website thương mại điện tử gốm Bát Tràng
   ========================================================= */


/* =========================================================
   1. DỮ LIỆU SẢN PHẨM
   ========================================================= */

const products = [
    {
        id: 1,
        name: "Lục Bình Gốm Bát Tràng Hoa Văn Cổ",
        price: 3850000,
        category: "trang-tri",
        origin: "Bát Tràng, Hà Nội",
        type: "Lục bình trang trí",
        material: "Gốm sứ Bát Tràng",
        size: "Cao khoảng 45 cm",
        technique: "Vẽ và trang trí thủ công",
        use: "Trang trí phòng khách, phòng thờ, không gian truyền thống",
        description:
            "Lục bình gốm Bát Tràng mang phong cách truyền thống với hoa văn được chăm chút thủ công, phù hợp cho không gian sống sang trọng và mang đậm nét văn hóa Việt.",
        image:
            "https://xuonggomsuviet.vn/wp-content/uploads/2019/04/doc-dao-ky-thuat-trang-tri-tren-san-pham-gom-su-bat-trang-1.jpg"
    },

    {
        id: 2,
        name: "Bộ Bát Đĩa Bát Tràng Hoa Văn Xanh",
        price: 2980000,
        category: "gia-dung",
        origin: "Bát Tràng, Hà Nội",
        type: "Bộ bát đĩa",
        material: "Sứ cao cấp",
        size: "Bộ 20 món",
        technique: "Men trắng, họa tiết vẽ tay",
        use: "Dùng trong gia đình, làm quà tặng",
        description:
            "Bộ bát đĩa mang sắc trắng xanh thanh lịch, kết hợp giữa vẻ đẹp truyền thống và phong cách hiện đại, phù hợp với nhiều không gian bàn ăn.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2024/09/dong-san-pham-dac-trung-cua-bat-trang-13.jpg"
    },

    {
        id: 3,
        name: "Bộ Bát Đĩa Hoa Cúc Vẽ Tay",
        price: 2680000,
        category: "gia-dung",
        origin: "Bát Tràng, Hà Nội",
        type: "Bộ đồ ăn",
        material: "Sứ Bát Tràng",
        size: "Bộ 18 món",
        technique: "Vẽ hoa cúc thủ công",
        use: "Bàn ăn gia đình, nhà hàng, quà tặng",
        description:
            "Họa tiết hoa cúc được thể hiện nhẹ nhàng trên nền sứ trắng, tạo cảm giác thanh nhã và gần gũi với thiên nhiên.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2024/04/bo-bat-dia-gia-co-hoa-tiet-hoa-cuc-ve-tay-4.jpg"
    },

    {
        id: 4,
        name: "Bộ Bát Đĩa Hoa Sen Xanh",
        price: 2480000,
        category: "gia-dung",
        origin: "Bát Tràng, Hà Nội",
        type: "Bộ bát đĩa",
        material: "Sứ men trắng",
        size: "Bộ 18 món",
        technique: "Trang trí hoa sen",
        use: "Gia đình, tiệc trà, làm quà",
        description:
            "Hình ảnh hoa sen Việt Nam được đưa lên nền sứ trắng xanh, tạo nên bộ đồ ăn vừa trang nhã vừa mang giá trị văn hóa.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2024/04/bo-bat-dia-su-trang-hoa-tiet-hoa-sen-xanh-2.jpg"
    },

    {
        id: 5,
        name: "Bình Gốm Bát Tràng Hoa Văn Rồng",
        price: 4250000,
        category: "trang-tri",
        origin: "Bát Tràng, Hà Nội",
        type: "Bình trang trí",
        material: "Gốm sứ cao cấp",
        size: "Cao khoảng 50 cm",
        technique: "Chạm khắc và vẽ thủ công",
        use: "Trang trí phòng khách, phòng làm việc",
        description:
            "Bình gốm mang hình tượng rồng – biểu tượng quen thuộc trong văn hóa Á Đông, tạo điểm nhấn mạnh mẽ cho không gian nội thất.",
        image:
            "https://i1-vnexpress.vnecdn.net/2019/12/19/lang-gom-Bat-Trang-png-6590-1576729451.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=qNrvTb1lci5tRl9RRQ9COw"
    },

    {
        id: 6,
        name: "Bảo Bình Sen Cá Phú Quý",
        price: 4980000,
        category: "trang-tri",
        origin: "Bát Tràng, Hà Nội",
        type: "Bảo bình trang trí",
        material: "Gốm sứ Bát Tràng",
        size: "Cao khoảng 60 cm",
        technique: "Đắp nổi và vẽ thủ công",
        use: "Trang trí phòng khách, không gian phong thủy",
        description:
            "Bảo bình lấy cảm hứng từ hoa sen và cá, gợi ý nghĩa phú quý, sung túc và bình an trong đời sống.",
        image:
            "https://godinh.com/web/image/product.template/81280/image_512/B%E1%BA%A3o%20B%C3%ACnh%20Sen%20C%C3%A1%20Ph%C3%BA%20Qu%C3%BD%20Cao%2060%20%C4%90%C6%B0%E1%BB%9Dng%20K%C3%ADnh%2034%20%28cm%29?unique=a500000"
    },

    {
        id: 7,
        name: "Cốc Gốm Bát Tràng Men Hỏa Biến",
        price: 1250000,
        category: "gia-dung",
        origin: "Bát Tràng, Hà Nội",
        type: "Cốc uống nước",
        material: "Gốm men hỏa biến",
        size: "Dung tích khoảng 350 ml",
        technique: "Men hỏa biến",
        use: "Uống trà, cà phê, sử dụng hàng ngày",
        description:
            "Chiếc cốc có lớp men hỏa biến tạo nên sắc độ tự nhiên khác nhau trên từng sản phẩm, đem lại cảm giác độc bản.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2025/12/coc-su-bat-trang-men-hoa-bien-dang-tru-co-quai-ls-27-anh-dai-dien.jpg"
    },

    {
        id: 8,
        name: "Bộ Bình Hoa Gốm Men Xanh",
        price: 1850000,
        category: "trang-tri",
        origin: "Bát Tràng, Hà Nội",
        type: "Bộ bình hoa",
        material: "Gốm men màu",
        size: "Bộ 3 bình",
        technique: "Tạo hình thủ công, phủ men",
        use: "Cắm hoa, trang trí bàn và kệ",
        description:
            "Bộ ba bình hoa với nhiều sắc xanh khác nhau, thích hợp để tạo điểm nhấn nhẹ nhàng cho bàn ăn, kệ sách hoặc phòng khách.",
        image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShIutqHKIFFs45SDMVl9Jm8soG0eFnqgLoNSOd_asQBJE52M5j"
    },

    {
        id: 9,
        name: "Đĩa Gốm Trang Trí Sóng Cá",
        price: 3650000,
        category: "trang-tri",
        origin: "Bát Tràng, Hà Nội",
        type: "Đĩa trang trí",
        material: "Gốm sứ",
        size: "Đường kính khoảng 40 cm",
        technique: "Vẽ họa tiết thủ công",
        use: "Trang trí tường, tủ kệ",
        description:
            "Đĩa trang trí với họa tiết sóng nước và cá, mang cảm giác chuyển động mềm mại, phù hợp với không gian nội thất mang hơi hướng nghệ thuật.",
        image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMKFGtC66RZipOkQeJgtMMAfcENcr5WdIWRu9TFALRATRhGpBj"
    },

    {
        id: 10,
        name: "Bình Gốm Hoa Chim Hạnh Phúc",
        price: 4580000,
        category: "trang-tri",
        origin: "Bát Tràng, Hà Nội",
        type: "Bình nghệ thuật",
        material: "Gốm sứ cao cấp",
        size: "Cao khoảng 45 cm",
        technique: "Vẽ tay và đắp nổi",
        use: "Trang trí phòng khách, làm quà",
        description:
            "Họa tiết chim và hoa tạo nên câu chuyện về sự sum vầy, hạnh phúc và vẻ đẹp bình dị của đời sống Việt.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9W4D4mGP2J6ZGS1DJNzcZ5K1DYBdJGXJA46hAFzx7jOTK5egaFjWn5Hr&s=10"
    },

    {
        id: 11,
        name: "Bộ Ấm Chén Men Rạn Truyền Thống",
        price: 2680000,
        category: "tra-dao",
        origin: "Bát Tràng, Hà Nội",
        type: "Bộ ấm chén",
        material: "Gốm men rạn",
        size: "Bộ 7 món",
        technique: "Men rạn thủ công",
        use: "Thưởng trà, tiếp khách, quà tặng",
        description:
            "Bộ ấm chén sử dụng men rạn đặc trưng, mang vẻ đẹp cổ điển và phù hợp với không gian thưởng trà của gia đình Việt.",
        image:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqTjHmLxve9gZTwigiRXZm_VY3RcPht7_IgL5_YLOvPX-oAafI"
    },

    {
        id: 12,
        name: "Bộ Ấm Chén Gà Trống Men Nâu",
        price: 2950000,
        category: "tra-dao",
        origin: "Bát Tràng, Hà Nội",
        type: "Bộ ấm trà",
        material: "Gốm sứ men nâu",
        size: "Bộ 7 món",
        technique: "Vẽ họa tiết gà trống",
        use: "Thưởng trà, tiếp khách",
        description:
            "Họa tiết gà trống kết hợp cùng lớp men nâu tạo nên một bộ trà mang vẻ đẹp mộc mạc và đậm chất thủ công.",
        image:
            "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mifiykrms9ag43"
    },

    {
        id: 13,
        name: "Đôi Lục Bình Thuyền Buồm Men Đen Vàng",
        price: 6850000,
        category: "cao-cap",
        origin: "Bát Tràng, Hà Nội",
        type: "Lục bình cao cấp",
        material: "Gốm sứ cao cấp",
        size: "Đôi bình cao khoảng 60 cm",
        technique: "Đắp nổi, chạm khắc và dát màu",
        use: "Trang trí phòng khách, không gian sang trọng",
        description:
            "Đôi lục bình mang hình ảnh thuyền buồm, kết hợp sắc đen vàng tạo nên vẻ sang trọng, phù hợp với không gian nội thất cao cấp.",
        image:
            "https://bizweb.dktcdn.net/100/659/338/products/2e9c6da5-bca0-4a06-97a3-0c85f3d74a57.jpg?v=1773291686963"
    },

    {
        id: 14,
        name: "Đôi Lục Bình Thuyền Buồm Men Trắng Vàng",
        price: 7580000,
        category: "cao-cap",
        origin: "Bát Tràng, Hà Nội",
        type: "Lục bình cao cấp",
        material: "Gốm sứ cao cấp",
        size: "Đôi bình cao khoảng 60 cm",
        technique: "Đắp nổi và trang trí thủ công",
        use: "Trang trí phòng khách, phòng thờ",
        description:
            "Sắc trắng vàng thanh lịch kết hợp hình ảnh thuyền buồm và ngựa tạo nên tác phẩm mang tính nghệ thuật và giá trị trang trí cao.",
        image:
            "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/486496hTq/anh-mo-ta.png"
    },

    {
        id: 15,
        name: "Đĩa Gốm Nghệ Thuật Thuyền Buồm",
        price: 4850000,
        category: "cao-cap",
        origin: "Bát Tràng, Hà Nội",
        type: "Đĩa nghệ thuật",
        material: "Gốm sứ cao cấp",
        size: "Đường kính khoảng 45 cm",
        technique: "Vẽ và trang trí thủ công",
        use: "Trang trí tường, phòng khách",
        description:
            "Đĩa nghệ thuật mô tả hình ảnh thuyền buồm giữa không gian sông nước, mang ý nghĩa thuận buồm xuôi gió.",
        image:
            "https://product.hstatic.net/200000258799/product/z6560994619592_1dd138feeafdadd8b79ef6d63e0a82b1_28308021f6864719bf8ebce77630607a_master.jpg"
    },

    {
        id: 16,
        name: "Bình Hoa Gốm Hoa Vàng Cao Cấp",
        price: 3250000,
        category: "trang-tri",
        origin: "Bát Tràng, Hà Nội",
        type: "Bình hoa",
        material: "Gốm sứ",
        size: "Cao khoảng 40 cm",
        technique: "Trang trí hoa thủ công",
        use: "Cắm hoa, trang trí phòng khách",
        description:
            "Bình hoa với họa tiết hoa vàng nhẹ nhàng, phù hợp với những không gian yêu thích sự tinh tế và ấm áp.",
        image:
            "https://neon.vn/image/cache/catalog/products/D39-2-1100x1100.jpg.webp"
    }
];


/* =========================================================
   2. CẤU HÌNH CHUNG
   ========================================================= */

const CART_STORAGE_KEY = "chamHonVietCart";
const CONSULTATION_STORAGE_KEY = "chamHonVietConsultation";
const LAST_ORDER_STORAGE_KEY = "chamHonVietLastOrder";
const ORDERS_STORAGE_KEY = "chamHonVietOrders";


/* =========================================================
   3. HÀM TIỆN ÍCH
   ========================================================= */

function formatPrice(price) {
    return Number(price).toLocaleString("vi-VN") + " đ";
}


function getProduct(productId) {
    return products.find(product => Number(product.id) === Number(productId));
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


function getCategoryName(category) {
    const categories = {
        "all": "Tất cả",
        "trang-tri": "Đồ trang trí",
        "gia-dung": "Đồ gia dụng",
        "tra-dao": "Trà đạo",
        "cao-cap": "Cao cấp"
    };

    return categories[category] || "Gốm Bát Tràng";
}


/* =========================================================
   4. LOCAL STORAGE - GIỎ HÀNG
   ========================================================= */

function getCart() {
    try {
        const cart = JSON.parse(
            localStorage.getItem(CART_STORAGE_KEY)
        );

        return Array.isArray(cart) ? cart : [];
    } catch (error) {
        console.error("Không thể đọc giỏ hàng:", error);
        return [];
    }
}


function saveCart(cart) {
    try {
        localStorage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(cart)
        );
    } catch (error) {
        console.error("Không thể lưu giỏ hàng:", error);
    }
}


/* =========================================================
   5. TẠO THẺ SẢN PHẨM
   ========================================================= */

function createProductCard(product) {
    return `
        <article class="product-card" data-product-id="${product.id}">
            
            <div class="product-image">
                <img
                    src="${escapeHtml(product.image)}"
                    alt="${escapeHtml(product.name)}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://via.placeholder.com/600x600?text=Gom+Bat+Trang';"
                >
            </div>

            <div class="product-info">

                <div class="product-category">
                    ${escapeHtml(getCategoryName(product.category))}
                </div>

                <!-- TÊN SẢN PHẨM NẰM NGAY DƯỚI HÌNH ẢNH -->
                <h3 class="product-name">
                    ${escapeHtml(product.name)}
                </h3>

                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>

                <p class="product-description">
                    ${escapeHtml(product.description)}
                </p>

                <div class="product-actions">

                    <button
                        type="button"
                        class="btn-detail"
                        onclick="showProductDetail(${product.id})"
                    >
                        Xem chi tiết
                    </button>

                    <button
                        type="button"
                        class="btn-add-cart"
                        onclick="addToCart(${product.id})"
                    >
                        Thêm vào giỏ
                    </button>

                </div>

            </div>
        </article>
    `;
}


/* =========================================================
   6. TÌM CÁC KHU VỰC HIỂN THỊ SẢN PHẨM
   ========================================================= */

function getProductGrids() {
    const grids = [];

    const ids = [
        "product-list",
        "productGrid",
        "product-grid",
        "products-grid"
    ];

    ids.forEach(id => {
        const element = document.getElementById(id);

        if (element && !grids.includes(element)) {
            grids.push(element);
        }
    });

    document.querySelectorAll(".product-grid").forEach(element => {
        if (!grids.includes(element)) {
            grids.push(element);
        }
    });

    return grids;
}


/* =========================================================
   7. HIỂN THỊ SẢN PHẨM
   ========================================================= */

function renderProducts(category = "all", productList = products) {

    const grids = getProductGrids();

    if (!grids.length) {
        console.warn("Không tìm thấy khu vực hiển thị sản phẩm.");
        return;
    }

    let filteredProducts = productList;

    if (category !== "all") {
        filteredProducts = productList.filter(
            product => product.category === category
        );
    }

    const html = filteredProducts.length
        ? filteredProducts.map(createProductCard).join("")
        : `
            <div class="empty-products">
                <p>Không tìm thấy sản phẩm phù hợp.</p>
            </div>
        `;

    grids.forEach(grid => {
        grid.innerHTML = html;
    });
}


/* =========================================================
   8. LỌC SẢN PHẨM THEO DANH MỤC
   ========================================================= */

function filterProducts(category) {
    const searchInput = document.getElementById("productSearch");

    if (searchInput) {
        searchInput.value = "";
    }

    renderProducts(category);

    document.querySelectorAll(
        ".filter-btn, .category-btn, [data-category]"
    ).forEach(button => {
        button.classList.remove("active");
    });

    const activeButtons = document.querySelectorAll(
        `[data-category="${category}"]`
    );

    activeButtons.forEach(button => {
        button.classList.add("active");
    });
}


/* =========================================================
   9. TÌM KIẾM SẢN PHẨM
   ========================================================= */

function searchProducts(keyword) {

    const searchText = String(keyword || "")
        .trim()
        .toLowerCase();

    if (!searchText) {
        renderProducts("all");
        return;
    }

    const result = products.filter(product => {

        const searchableText = [
            product.name,
            product.origin,
            product.type,
            product.material,
            product.description,
            product.use,
            product.technique,
            getCategoryName(product.category)
        ]
            .join(" ")
            .toLowerCase();

        return searchableText.includes(searchText);
    });

    renderProducts("all", result);
}


/* =========================================================
   10. MODAL CHI TIẾT SẢN PHẨM
   ========================================================= */

function addProductModalCSS() {

    if (document.getElementById("product-modal-style")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "product-modal-style";

    style.textContent = `
        .product-modal {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .product-modal.show {
            display: flex;
        }

        .product-modal-overlay {
            position: absolute;
            inset: 0;
            background: rgba(44, 33, 24, 0.65);
            backdrop-filter: blur(3px);
        }

        .product-modal-content {
            position: relative;
            z-index: 2;
            width: min(1000px, 100%);
            max-height: 90vh;
            overflow-y: auto;
            background: #fffaf3;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 20px 60px rgba(0,0,0,.25);
        }

        .product-modal-close {
            position: absolute;
            right: 18px;
            top: 12px;
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 50%;
            background: #eee0d0;
            color: #5b402c;
            font-size: 25px;
            cursor: pointer;
        }

        .product-modal-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 35px;
            align-items: start;
        }

        .product-modal-image img {
            width: 100%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            border-radius: 16px;
            background: #f2e9dd;
        }

        .product-modal-info h2 {
            margin: 0 0 12px;
            color: #5a3e2b;
            line-height: 1.3;
        }

        .product-modal-price {
            color: #a26436;
            font-size: 25px;
            font-weight: 700;
            margin-bottom: 22px;
        }

        .product-modal-info p {
            line-height: 1.7;
            color: #66584d;
        }

        .product-specs {
            margin: 20px 0;
            border-top: 1px solid #e5d7c8;
        }

        .product-spec-row {
            display: grid;
            grid-template-columns: 130px 1fr;
            gap: 10px;
            padding: 9px 0;
            border-bottom: 1px solid #e5d7c8;
        }

        .product-spec-row strong {
            color: #5a3e2b;
        }

        .product-modal-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 20px;
        }

        .product-modal-buttons button {
            border: none;
            border-radius: 10px;
            padding: 12px 18px;
            cursor: pointer;
            font-weight: 600;
        }

        .modal-cart-btn {
            background: #8d603c;
            color: white;
        }

        .modal-order-btn {
            background: #e9d7c2;
            color: #5a3e2b;
        }

        @media (max-width: 768px) {
            .product-modal-content {
                padding: 20px;
            }

            .product-modal-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .product-spec-row {
                grid-template-columns: 110px 1fr;
            }
        }
    `;

    document.head.appendChild(style);
}


function createProductModal() {

    addProductModalCSS();

    if (document.getElementById("product-detail-modal")) {
        return document.getElementById("product-detail-modal");
    }

    const modal = document.createElement("div");

    modal.id = "product-detail-modal";
    modal.className = "product-modal";

    modal.innerHTML = `
        <div
            class="product-modal-overlay"
            onclick="closeProductDetail()"
        ></div>

        <div class="product-modal-content">

            <button
                type="button"
                class="product-modal-close"
                onclick="closeProductDetail()"
                aria-label="Đóng"
            >
                ×
            </button>

            <div id="product-detail-content"></div>

        </div>
    `;

    document.body.appendChild(modal);

    return modal;
}


function showProductDetail(productId) {

    const product = getProduct(productId);

    if (!product) {
        return;
    }

    const modal = createProductModal();

    const content = document.getElementById(
        "product-detail-content"
    );

    if (!content) {
        return;
    }

    content.innerHTML = `
        <div class="product-modal-grid">

            <div class="product-modal-image">

                <img
                    src="${escapeHtml(product.image)}"
                    alt="${escapeHtml(product.name)}"
                    onerror="this.onerror=null;this.src='https://via.placeholder.com/600x600?text=Gom+Bat+Trang';"
                >

            </div>

            <div class="product-modal-info">

                <div class="product-category">
                    ${escapeHtml(getCategoryName(product.category))}
                </div>

                <h2>
                    ${escapeHtml(product.name)}
                </h2>

                <div class="product-modal-price">
                    ${formatPrice(product.price)}
                </div>

                <p>
                    ${escapeHtml(product.description)}
                </p>

                <div class="product-specs">

                    <div class="product-spec-row">
                        <strong>Xuất xứ</strong>
                        <span>${escapeHtml(product.origin)}</span>
                    </div>

                    <div class="product-spec-row">
                        <strong>Loại sản phẩm</strong>
                        <span>${escapeHtml(product.type)}</span>
                    </div>

                    <div class="product-spec-row">
                        <strong>Chất liệu</strong>
                        <span>${escapeHtml(product.material)}</span>
                    </div>

                    <div class="product-spec-row">
                        <strong>Kích thước</strong>
                        <span>${escapeHtml(product.size)}</span>
                    </div>

                    <div class="product-spec-row">
                        <strong>Kỹ thuật</strong>
                        <span>${escapeHtml(product.technique)}</span>
                    </div>

                    <div class="product-spec-row">
                        <strong>Công dụng</strong>
                        <span>${escapeHtml(product.use)}</span>
                    </div>

                </div>

                <div class="product-modal-buttons">

                    <button
                        type="button"
                        class="modal-cart-btn"
                        onclick="addToCart(${product.id}); closeProductDetail();"
                    >
                        Thêm vào giỏ hàng
                    </button>

                    <button
                        type="button"
                        class="modal-order-btn"
                        onclick="selectProductForOrder(${product.id}); closeProductDetail();"
                    >
                        Đặt sản phẩm này
                    </button>

                </div>

            </div>

        </div>
    `;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeProductDetail() {

    const modal = document.getElementById(
        "product-detail-modal"
    );

    if (modal) {
        modal.classList.remove("show");
    }

    document.body.style.overflow = "";
}


/* =========================================================
   11. GIỎ HÀNG
   ========================================================= */

function addToCart(productId) {

    const product = getProduct(productId);

    if (!product) {
        return;
    }

    const cart = getCart();

    const existingItem = cart.find(
        item => Number(item.id) === Number(productId)
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            quantity: 1
        });
    }

    saveCart(cart);
    updateCart();
    showToast(`Đã thêm "${product.name}" vào giỏ hàng.`);

    const cartSidebar = document.getElementById("cart-sidebar")
        || document.getElementById("cartSidebar");

    if (cartSidebar) {
        cartSidebar.classList.add("open");
        cartSidebar.classList.add("active");
    }
}


function changeQuantity(productId, change) {

    const cart = getCart();

    const item = cart.find(
        cartItem => Number(cartItem.id) === Number(productId)
    );

    if (!item) {
        return;
    }

    item.quantity += Number(change);

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart(cart);
    updateCart();
}


function removeFromCart(productId) {

    let cart = getCart();

    cart = cart.filter(
        item => Number(item.id) !== Number(productId)
    );

    saveCart(cart);
    updateCart();

    showToast("Đã xóa sản phẩm khỏi giỏ hàng.");
}


function getCartTotal() {

    const cart = getCart();

    return cart.reduce((total, item) => {

        const product = getProduct(item.id);

        if (!product) {
            return total;
        }

        return total + product.price * item.quantity;

    }, 0);
}


function getCartCount() {

    const cart = getCart();

    return cart.reduce(
        (total, item) => total + Number(item.quantity || 0),
        0
    );
}


/* =========================================================
   12. CẬP NHẬT GIAO DIỆN GIỎ HÀNG
   ========================================================= */

function updateCart() {

    const cart = getCart();

    const cartItems =
        document.getElementById("cart-items")
        || document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cart-total")
        || document.getElementById("cartTotal");

    const cartCount =
        document.getElementById("cart-count")
        || document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = getCartCount();
    }

    if (cartTotal) {
        cartTotal.textContent = formatPrice(getCartTotal());
    }

    if (!cartItems) {
        return;
    }

    if (!cart.length) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Giỏ hàng đang trống.</p>
                <p>Hãy chọn một sản phẩm gốm bạn yêu thích nhé.</p>
            </div>
        `;

        return;
    }

    cartItems.innerHTML = cart.map(item => {

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
                        onerror="this.onerror=null;this.src='https://via.placeholder.com/120x120?text=Gom';"
                    >
                </div>

                <div class="cart-item-info">

                    <h4>
                        ${escapeHtml(product.name)}
                    </h4>

                    <div class="cart-item-price">
                        ${formatPrice(product.price)}
                    </div>

                    <div class="cart-item-quantity">

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
        `;

    }).join("");
}


/* =========================================================
   13. MỞ / ĐÓNG GIỎ HÀNG
   ========================================================= */

function toggleCart(forceState) {

    const cartSidebar =
        document.getElementById("cart-sidebar")
        || document.getElementById("cartSidebar");

    const cartOverlay =
        document.getElementById("cart-overlay")
        || document.getElementById("cartOverlay");

    if (!cartSidebar) {
        return;
    }

    const isOpen = cartSidebar.classList.contains("open")
        || cartSidebar.classList.contains("active");

    const shouldOpen =
        typeof forceState === "boolean"
            ? forceState
            : !isOpen;

    cartSidebar.classList.toggle("open", shouldOpen);
    cartSidebar.classList.toggle("active", shouldOpen);

    if (cartOverlay) {
        cartOverlay.classList.toggle("show", shouldOpen);
        cartOverlay.classList.toggle("active", shouldOpen);
    }

    if (shouldOpen) {
        updateCart();
    }
}


/* =========================================================
   14. CHỌN SẢN PHẨM ĐỂ ĐẶT HÀNG
   ========================================================= */

function selectProductForOrder(productId) {

    const product = getProduct(productId);

    if (!product) {
        return;
    }

    const orderProduct = document.getElementById("orderProduct");

    if (orderProduct) {
        orderProduct.value = String(product.id);
    }

    const orderSection =
        document.getElementById("order")
        || document.getElementById("order-section")
        || document.getElementById("checkout");

    if (orderSection) {

        orderSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

    showToast(
        `Đã chọn "${product.name}" để đặt hàng.`
    );
}


/* =========================================================
   15. THANH TOÁN / ĐẶT HÀNG TỪ GIỎ
   ========================================================= */

function checkout() {

    const cart = getCart();

    if (!cart.length) {
        showToast("Giỏ hàng đang trống.");
        return;
    }

    const orderSection =
        document.getElementById("order")
        || document.getElementById("order-section")
        || document.getElementById("checkout");

    if (orderSection) {

        orderSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

    const firstProduct = getProduct(cart[0].id);

    const orderProduct =
        document.getElementById("orderProduct");

    const orderQuantity =
        document.getElementById("orderQuantity");

    if (orderProduct && firstProduct) {
        orderProduct.value = String(firstProduct.id);
    }

    if (orderQuantity) {
        orderQuantity.value = cart[0].quantity || 1;
    }

    toggleCart(false);
}


/* =========================================================
   16. VALIDATE SỐ ĐIỆN THOẠI VIỆT NAM
   ========================================================= */

function isValidVietnamesePhone(phone) {

    const normalized = String(phone || "")
        .replace(/\s+/g, "")
        .replace(/^\+84/, "0");

    return /^0(3|5|7|8|9)[0-9]{8}$/.test(normalized);
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

    if (!nameInput || !phoneInput) {
        return false;
    }

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name) {
        showToast("Vui lòng nhập họ và tên.");
        nameInput.focus();
        return false;
    }

    if (!isValidVietnamesePhone(phone)) {
        showToast("Vui lòng nhập số điện thoại hợp lệ.");
        phoneInput.focus();
        return false;
    }

    const consultation = {
        name: name,
        phone: phone,
        createdAt: new Date().toISOString()
    };

    try {
        localStorage.setItem(
            CONSULTATION_STORAGE_KEY,
            JSON.stringify(consultation)
        );
    } catch (error) {
        console.error(
            "Không thể lưu thông tin tư vấn:",
            error
        );
    }

    showToast(
        "Cảm ơn bạn! Chúng tôi sẽ liên hệ tư vấn sớm."
    );

    const form =
        document.getElementById("consultationForm");

    if (form) {
        form.reset();
    }

    return false;
}


/* =========================================================
   18. FORM ĐẶT HÀNG
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

    if (
        !nameInput ||
        !phoneInput ||
        !addressInput ||
        !productInput ||
        !quantityInput ||
        !paymentInput
    ) {
        showToast("Không tìm thấy đầy đủ thông tin biểu mẫu.");
        return false;
    }

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();
    const productId = Number(productInput.value);
    const quantity = Number(quantityInput.value);
    const payment = paymentInput.value;
    const note = noteInput
        ? noteInput.value.trim()
        : "";

    const product = getProduct(productId);

    if (!name) {
        showToast("Vui lòng nhập họ và tên.");
        nameInput.focus();
        return false;
    }

    if (!isValidVietnamesePhone(phone)) {
        showToast("Vui lòng nhập số điện thoại hợp lệ.");
        phoneInput.focus();
        return false;
    }

    if (!address) {
        showToast("Vui lòng nhập địa chỉ giao hàng.");
        addressInput.focus();
        return false;
    }

    if (!product) {
        showToast("Vui lòng chọn sản phẩm.");
        productInput.focus();
        return false;
    }

    if (!Number.isInteger(quantity) || quantity < 1) {
        showToast("Số lượng sản phẩm không hợp lệ.");
        quantityInput.focus();
        return false;
    }

    if (!payment) {
        showToast("Vui lòng chọn phương thức thanh toán.");
        paymentInput.focus();
        return false;
    }

    const total = product.price * quantity;

    const order = {
        id: "CHV-" + Date.now(),
        customer: {
            name: name,
            phone: phone,
            address: address
        },
        product: {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        },
        paymentMethod: payment,
        note: note,
        total: total,
        createdAt: new Date().toISOString(),
        status: "Đang tiếp nhận"
    };

    try {

        localStorage.setItem(
            LAST_ORDER_STORAGE_KEY,
            JSON.stringify(order)
        );

        const oldOrders =
            JSON.parse(
                localStorage.getItem(ORDERS_STORAGE_KEY)
            ) || [];

        oldOrders.push(order);

        localStorage.setItem(
            ORDERS_STORAGE_KEY,
            JSON.stringify(oldOrders)
        );

    } catch (error) {

        console.error(
            "Không thể lưu đơn hàng:",
            error
        );

    }

    showToast(
        `Đặt hàng thành công! Mã đơn: ${order.id}`
    );

    const form =
        document.getElementById("orderForm");

    if (form) {
        form.reset();
    }

    /*
     * Nếu sản phẩm được đặt từ giỏ hàng,
     * xóa giỏ hàng sau khi hoàn tất đơn.
     */
    saveCart([]);
    updateCart();

    return false;
}


/* =========================================================
   19. ĐĂNG KÝ EMAIL
   ========================================================= */

function subscribeEmail(event) {

    if (event) {
        event.preventDefault();
    }

    const form = event
        ? event.target
        : document.getElementById("newsletterForm");

    if (!form) {
        return false;
    }

    const input =
        form.querySelector(
            'input[type="email"], input[name="email"]'
        );

    if (!input) {
        showToast("Không tìm thấy ô nhập email.");
        return false;
    }

    const email = input.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showToast("Vui lòng nhập email hợp lệ.");
        input.focus();
        return false;
    }

    try {

        localStorage.setItem(
            "chamHonVietNewsletter",
            JSON.stringify({
                email: email,
                subscribedAt: new Date().toISOString()
            })
        );

    } catch (error) {

        console.error(
            "Không thể lưu email:",
            error
        );

    }

    showToast(
        "Đăng ký thành công! Cảm ơn bạn đã quan tâm đến Chạm Vào Hồn Việt."
    );

    form.reset();

    return false;
}


/* =========================================================
   20. THÔNG BÁO TOAST
   ========================================================= */

function addToastCSS() {

    if (document.getElementById("toast-style")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "toast-style";

    style.textContent = `
        .chv-toast-container {
            position: fixed;
            right: 20px;
            bottom: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-width: 360px;
        }

        .chv-toast {
            padding: 14px 18px;
            background: #5c422e;
            color: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,.2);
            line-height: 1.5;
            animation: chvToastIn .3s ease;
        }

        .chv-toast.hide {
            animation: chvToastOut .3s ease forwards;
        }

        @keyframes chvToastIn {
            from {
                opacity: 0;
                transform: translateY(15px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes chvToastOut {
            from {
                opacity: 1;
                transform: translateY(0);
            }

            to {
                opacity: 0;
                transform: translateY(15px);
            }
        }
    `;

    document.head.appendChild(style);
}


function showToast(message) {

    addToastCSS();

    let container =
        document.querySelector(
            ".chv-toast-container"
        );

    if (!container) {

        container = document.createElement("div");

        container.className =
            "chv-toast-container";

        document.body.appendChild(container);
    }

    const toast =
        document.createElement("div");

    toast.className = "chv-toast";

    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("hide");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 3000);
}


/* =========================================================
   21. ĐIỀN DANH SÁCH SẢN PHẨM VÀO FORM ĐẶT HÀNG
   ========================================================= */

function populateOrderProducts() {

    const select =
        document.getElementById("orderProduct");

    if (!select) {
        return;
    }

    const currentValue = select.value;

    select.innerHTML = `
        <option value="">
            -- Chọn sản phẩm --
        </option>

        ${products.map(product => `
            <option value="${product.id}">
                ${escapeHtml(product.name)}
                - ${formatPrice(product.price)}
            </option>
        `).join("")}
    `;

    if (currentValue) {
        select.value = currentValue;
    }
}


/* =========================================================
   22. TÌM KIẾM - GẮN SỰ KIỆN
   ========================================================= */

function initializeSearch() {

    const searchInput =
        document.getElementById("productSearch");

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener(
        "input",
        function () {
            searchProducts(this.value);
        }
    );
}


/* =========================================================
   23. GẮN FORM TƯ VẤN
   ========================================================= */

function initializeConsultationForm() {

    const form =
        document.getElementById(
            "consultationForm"
        );

    if (!form) {
        return;
    }

    form.addEventListener(
        "submit",
        submitConsultation
    );
}


/* =========================================================
   24. GẮN FORM ĐẶT HÀNG
   ========================================================= */

function initializeOrderForm() {

    const form =
        document.getElementById(
            "orderForm"
        );

    if (!form) {
        return;
    }

    form.addEventListener(
        "submit",
        submitOrder
    );
}


/* =========================================================
   25. GẮN FORM NEWSLETTER
   ========================================================= */

function initializeNewsletterForm() {

    const form =
        document.getElementById(
            "newsletterForm"
        );

    if (!form) {
        return;
    }

    form.addEventListener(
        "submit",
        subscribeEmail
    );
}


/* =========================================================
   26. PHÍM ESC ĐỂ ĐÓNG MODAL / GIỎ HÀNG
   ========================================================= */

function initializeKeyboardEvents() {

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }

            closeProductDetail();

            const cartSidebar =
                document.getElementById("cart-sidebar")
                || document.getElementById("cartSidebar");

            if (cartSidebar) {
                cartSidebar.classList.remove("open");
                cartSidebar.classList.remove("active");
            }

            const cartOverlay =
                document.getElementById("cart-overlay")
                || document.getElementById("cartOverlay");

            if (cartOverlay) {
                cartOverlay.classList.remove("show");
                cartOverlay.classList.remove("active");
            }
        }
    );
}


/* =========================================================
   27. KHỞI TẠO WEBSITE
   ========================================================= */

function initializeWebsite() {

    renderProducts("all");

    updateCart();

    populateOrderProducts();

    initializeSearch();

    initializeConsultationForm();

    initializeOrderForm();

    initializeNewsletterForm();

    initializeKeyboardEvents();

    /*
     * Nếu HTML có các nút lọc sử dụng
     * data-category thì tự động gắn sự kiện.
     */
    document.querySelectorAll(
        "[data-category]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const category =
                    this.getAttribute(
                        "data-category"
                    );

                if (category) {
                    filterProducts(category);
                }

            }
        );
    });

    /*
     * Nếu HTML có nút mở giỏ hàng
     * với data-cart-toggle.
     */
    document.querySelectorAll(
        "[data-cart-toggle]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            function () {
                toggleCart();
            }
        );

    });

    /*
     * Overlay giỏ hàng.
     */
    const cartOverlay =
        document.getElementById("cart-overlay")
        || document.getElementById("cartOverlay");

    if (cartOverlay) {

        cartOverlay.addEventListener(
            "click",
            function () {
                toggleCart(false);
            }
        );

    }

    /*
     * Tự động cập nhật giỏ hàng
     * khi quay lại trang.
     */
    window.addEventListener(
        "storage",
        function (event) {

            if (
                event.key === CART_STORAGE_KEY
            ) {
                updateCart();
            }

        }
    );
}


/* =========================================================
   28. CHẠY SAU KHI HTML ĐƯỢC TẢI
   ========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeWebsite
    );

} else {

    initializeWebsite();

}


/* =========================================================
   29. CHO PHÉP HTML GỌI HÀM TRỰC TIẾP
   ========================================================= */

window.products = products;

window.renderProducts = renderProducts;
window.filterProducts = filterProducts;
window.searchProducts = searchProducts;

window.showProductDetail = showProductDetail;
window.closeProductDetail = closeProductDetail;

window.addToCart = addToCart;
window.changeQuantity = changeQuantity;
window.removeFromCart = removeFromCart;
window.updateCart = updateCart;
window.toggleCart = toggleCart;
window.checkout = checkout;

window.selectProductForOrder =
    selectProductForOrder;

window.submitConsultation =
    submitConsultation;

window.submitOrder =
    submitOrder;

window.subscribeEmail =
    subscribeEmail;

window.showToast =
    showToast;
