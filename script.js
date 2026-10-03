document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       DỮ LIỆU SẢN PHẨM
       KHÔNG CHIA DANH MỤC
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
            description: "Sản phẩm gốm Bát Tràng được chế tác và trang trí thủ công, mang đậm nét văn hóa truyền thống của làng nghề."
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
            description: "Dòng sản phẩm đặc trưng của Bát Tràng với kiểu dáng thanh lịch, phù hợp sử dụng trong gia đình hoặc làm quà tặng."
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
            description: "Bộ bát đĩa với họa tiết hoa cúc được vẽ thủ công, tạo cảm giác trang nhã và sang trọng."
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
            description: "Bộ bát đĩa sứ trắng họa tiết hoa sen xanh mang vẻ đẹp nhẹ nhàng, phù hợp với không gian ăn uống hiện đại."
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
            description: "Sản phẩm mang nét đặc trưng của làng nghề Bát Tràng, thích hợp làm vật dụng trang trí hoặc quà lưu niệm."
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
            description: "Bảo bình họa tiết sen cá mang ý nghĩa phú quý, thường được sử dụng để trang trí phòng khách hoặc phòng làm việc."
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
            description: "Bình gốm nghệ thuật có thiết kế nổi bật, phù hợp trang trí nội thất và làm quà tặng."
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
            description: "Cốc sứ Bát Tràng sử dụng kỹ thuật men hỏa biến tạo ra màu sắc tự nhiên và độc đáo."
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
            description: "Ấm trà mang phong cách truyền thống, thích hợp dùng thưởng trà hoặc làm quà biếu."
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
            description: "Bộ ấm chén có thiết kế thanh lịch, phù hợp sử dụng trong gia đình, văn phòng hoặc làm quà tặng."
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
            description: "Bộ đĩa gốm mang phong cách trang trí truyền thống, thích hợp trưng bày hoặc sử dụng."
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
            description: "Bộ bát đĩa phục vụ nhu cầu sử dụng hàng ngày với thiết kế trang nhã và chất liệu bền đẹp."
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
            description: "Bình gốm nghệ thuật với kiểu dáng nổi bật, phù hợp trang trí không gian phòng khách."
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
            description: "Sản phẩm gốm sứ mang phong cách đặc trưng Bát Tràng, thích hợp trang trí và làm quà tặng."
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
            description: "Bộ ấm chén có hoa văn tinh tế, thích hợp sử dụng khi thưởng trà hoặc tiếp khách."
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
            description: "Bình gốm trang trí mang phong cách nghệ thuật, phù hợp với nhiều không gian nội thất."
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
            description: "Bình gốm có kiểu dáng nghệ thuật, lớp men tạo hiệu ứng đẹp mắt và phù hợp với không gian sang trọng."
        }
    ];


    /* =====================================================
       GIỎ HÀNG
       ===================================================== */

    let cart = JSON.parse(
        localStorage.getItem("batTrangCart")
    ) || [];


    /* =====================================================
       FORMAT GIÁ
       ===================================================== */

    function formatPrice(price) {
        return Number(price).toLocaleString("vi-VN") + " ₫";
    }


    /* =====================================================
       XÓA CÁC PHẦN PHÂN LOẠI CŨ
       
       Nếu index.html của bạn còn:
       - Danh mục
       - Category
       - Bộ lọc loại sản phẩm
       
       script sẽ ẩn chúng.
       ===================================================== */

    const categorySelectors = [
        ".categories",
        ".category-list",
        ".category-filter",
        ".product-categories",
        "#categories",
        "#categoryFilter",
        "#productCategories",
        "[data-category]",
        "[data-categories]"
    ];

    categorySelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.style.display = "none";
        });
    });


    /* =====================================================
       TÌM VÙNG HIỂN THỊ SẢN PHẨM
       ===================================================== */

    let productGrid =
        document.querySelector("#productGrid") ||
        document.querySelector(".product-grid") ||
        document.querySelector("#products");


    /*
       Nếu HTML chưa có productGrid
       thì tự tạo luôn.
    */

    if (!productGrid) {

        productGrid = document.createElement("div");

        productGrid.id = "productGrid";

        document.body.appendChild(productGrid);
    }


    /* =====================================================
       ÉP PRODUCT GRID FULL MÀN HÌNH
       ===================================================== */

    productGrid.style.width = "100%";
    productGrid.style.maxWidth = "none";
    productGrid.style.margin = "0";
    productGrid.style.padding = "30px 4vw";
    productGrid.style.boxSizing = "border-box";

    productGrid.style.display = "grid";

    productGrid.style.gridTemplateColumns =
        "repeat(4, minmax(0, 1fr))";

    productGrid.style.gap = "28px";

    productGrid.style.alignItems = "start";


    /* =====================================================
       HIỂN THỊ SẢN PHẨM
       ===================================================== */

    function renderProducts() {

        productGrid.innerHTML = "";

        products.forEach(function (product) {

            const item =
                cart.find(
                    cartItem =>
                        cartItem.id === product.id
                );

            const quantity =
                item ? item.quantity : 0;


            const card =
                document.createElement("div");

            card.className =
                "bat-trang-product-card";


            card.innerHTML = `

                <div
                    class="bat-trang-product-image"
                    onclick="openProduct(${product.id})"
                >

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                </div>


                <div class="bat-trang-product-info">

                    <h3
                        onclick="openProduct(${product.id})"
                    >
                        ${product.name}
                    </h3>


                    <div class="bat-trang-price">
                        ${formatPrice(product.price)}
                    </div>


                    <div class="bat-trang-buy-row">

                        <div class="bat-trang-quantity">

                            <button
                                onclick="changeQuantity(${product.id}, -1)"
                            >
                                −
                            </button>

                            <span>
                                ${quantity}
                            </span>

                            <button
                                onclick="changeQuantity(${product.id}, 1)"
                            >
                                +
                            </button>

                        </div>


                        <button
                            class="bat-trang-add"
                            onclick="addToCart(${product.id})"
                        >
                            Thêm giỏ hàng
                        </button>

                    </div>


                    <button
                        class="bat-trang-detail"
                        onclick="openProduct(${product.id})"
                    >
                        Xem chi tiết
                    </button>

                </div>
            `;


            productGrid.appendChild(card);

        });

    }


    /* =====================================================
       THAY ĐỔI SỐ LƯỢNG
       ===================================================== */

    window.changeQuantity =
        function (productId, change) {

            const existing =
                cart.find(
                    item =>
                        item.id === productId
                );


            if (!existing) {

                if (change > 0) {

                    cart.push({
                        id: productId,
                        quantity: 1
                    });

                }

            } else {

                existing.quantity += change;

                if (existing.quantity <= 0) {

                    cart =
                        cart.filter(
                            item =>
                                item.id !== productId
                        );

                }

            }


            saveCart();
            renderProducts();
            renderCart();

        };


    /* =====================================================
       THÊM GIỎ HÀNG
       ===================================================== */

    window.addToCart =
        function (productId) {

            const existing =
                cart.find(
                    item =>
                        item.id === productId
                );


            if (existing) {

                existing.quantity++;

            } else {

                cart.push({
                    id: productId,
                    quantity: 1
                });

            }


            saveCart();
            renderProducts();
            renderCart();

            showNotice(
                "Đã thêm sản phẩm vào giỏ hàng."
            );

        };


    /* =====================================================
       LƯU GIỎ
       ===================================================== */

    function saveCart() {

        localStorage.setItem(
            "batTrangCart",
            JSON.stringify(cart)
        );

    }


    /* =====================================================
       XÓA GIỎ
       ===================================================== */

    window.removeFromCart =
        function (productId) {

            cart =
                cart.filter(
                    item =>
                        item.id !== productId
                );

            saveCart();

            renderProducts();
            renderCart();

        };


    /* =====================================================
       HIỂN THỊ GIỎ HÀNG
       ===================================================== */

    function renderCart() {

        const cartItems =
            document.querySelector("#cartItems");

        const cartCount =
            document.querySelector("#cartCount");

        const cartTotal =
            document.querySelector("#cartTotal");


        const totalQuantity =
            cart.reduce(
                (sum, item) =>
                    sum + item.quantity,
                0
            );


        const totalPrice =
            cart.reduce(
                (sum, item) => {

                    const product =
                        products.find(
                            p =>
                                p.id === item.id
                        );

                    if (!product) {
                        return sum;
                    }

                    return (
                        sum +
                        product.price *
                        item.quantity
                    );

                },
                0
            );


        if (cartCount) {

            cartCount.textContent =
                totalQuantity;

        }


        if (cartTotal) {

            cartTotal.textContent =
                formatPrice(totalPrice);

        }


        if (!cartItems) {
            return;
        }


        if (cart.length === 0) {

            cartItems.innerHTML = `
                <p class="empty-cart">
                    Giỏ hàng đang trống.
                </p>
            `;

            return;
        }


        cartItems.innerHTML = "";


        cart.forEach(function (item) {

            const product =
                products.find(
                    p =>
                        p.id === item.id
                );


            if (!product) {
                return;
            }


            const row =
                document.createElement("div");

            row.className =
                "bat-trang-cart-item";


            row.innerHTML = `

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div>

                    <strong>
                        ${product.name}
                    </strong>

                    <p>
                        ${formatPrice(product.price)}
                    </p>

                    <div>

                        <button
                            onclick="changeQuantity(${product.id}, -1)"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeQuantity(${product.id}, 1)"
                        >
                            +
                        </button>

                    </div>

                    <button
                        onclick="removeFromCart(${product.id})"
                    >
                        Xóa
                    </button>

                </div>
            `;


            cartItems.appendChild(row);

        });

    }


    /* =====================================================
       CHI TIẾT SẢN PHẨM
       ===================================================== */

    window.openProduct =
        function (productId) {

            const product =
                products.find(
                    p =>
                        p.id === productId
                );


            if (!product) {
                return;
            }


            let modal =
                document.querySelector(
                    "#batTrangProductModal"
                );


            if (!modal) {

                modal =
                    document.createElement("div");

                modal.id =
                    "batTrangProductModal";

                document.body.appendChild(
                    modal
                );

            }


            modal.innerHTML = `

                <div class="bat-trang-modal-overlay">

                    <div class="bat-trang-modal">

                        <button
                            class="bat-trang-modal-close"
                            onclick="closeProduct()"
                        >
                            ×
                        </button>


                        <div class="bat-trang-modal-image">

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                            >

                        </div>


                        <div class="bat-trang-modal-info">

                            <h2>
                                ${product.name}
                            </h2>


                            <div class="bat-trang-modal-price">
                                ${formatPrice(product.price)}
                            </div>


                            <div class="bat-trang-description">

                                <p>
                                    <b>Xuất xứ:</b>
                                    ${product.origin}
                                </p>

                                <p>
                                    <b>Chất liệu:</b>
                                    ${product.material}
                                </p>

                                <p>
                                    <b>Kích thước:</b>
                                    ${product.size}
                                </p>

                                <p>
                                    <b>Kỹ thuật:</b>
                                    ${product.technique}
                                </p>

                                <p>
                                    <b>Thông tin:</b>
                                    ${product.description}
                                </p>

                            </div>


                            <button
                                class="bat-trang-add modal-add"
                                onclick="addToCart(${product.id}); closeProduct();"
                            >
                                Thêm vào giỏ hàng
                            </button>

                        </div>

                    </div>

                </div>
            `;


            modal.style.display = "block";

            document.body.style.overflow =
                "hidden";

        };


    /* =====================================================
       ĐÓNG CHI TIẾT
       ===================================================== */

    window.closeProduct =
        function () {

            const modal =
                document.querySelector(
                    "#batTrangProductModal"
                );


            if (modal) {

                modal.style.display =
                    "none";

            }


            document.body.style.overflow =
                "";

        };


    /* =====================================================
       THÔNG BÁO
       ===================================================== */

    function showNotice(message) {

        let notice =
            document.querySelector(
                "#batTrangNotice"
            );


        if (!notice) {

            notice =
                document.createElement("div");

            notice.id =
                "batTrangNotice";


            document.body.appendChild(
                notice
            );

        }


        notice.textContent =
            message;


        notice.classList.add(
            "show"
        );


        setTimeout(function () {

            notice.classList.remove(
                "show"
            );

        }, 2500);

    }


    /* =====================================================
       CSS
       ===================================================== */

    const style =
        document.createElement("style");


    style.textContent = `

        /* =========================================
           ÉP TOÀN TRANG KHÔNG BÓ SẢN PHẨM
           ========================================= */

        html,
        body {
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding: 0;
        }


        /* =========================================
           KHỐI SẢN PHẨM FULL WIDTH
           ========================================= */

        #productGrid,
        .product-grid,
        #products {

            width: 100% !important;

            max-width: none !important;

            margin-left: 0 !important;
            margin-right: 0 !important;

            padding: 35px 4vw !important;

            box-sizing: border-box;

            display: grid !important;

            grid-template-columns:
                repeat(4, minmax(0, 1fr)) !important;

            gap: 28px !important;

            align-items: start;

        }


        /* =========================================
           CARD
           ========================================= */

        .bat-trang-product-card {

            width: 100%;

            min-width: 0;

            box-sizing: border-box;

            background: #ffffff;

            border: 1px solid #e3d4c5;

            border-radius: 16px;

            overflow: hidden;

            box-shadow:
                0 5px 18px
                rgba(78, 48, 25, .10);

            transition:
                transform .25s ease,
                box-shadow .25s ease;

        }


        .bat-trang-product-card:hover {

            transform:
                translateY(-5px);

            box-shadow:
                0 12px 30px
                rgba(78, 48, 25, .16);

        }


        /* =========================================
           HÌNH FULL KHUNG
           ========================================= */

        .bat-trang-product-image {

            width: 100%;

            height: 330px;

            overflow: hidden;

            background: #eee6dc;

            cursor: pointer;

        }


        .bat-trang-product-image img {

            width: 100%;

            height: 100%;

            display: block;

            object-fit: cover;

            transition:
                transform .35s ease;

        }


        .bat-trang-product-card:hover
        .bat-trang-product-image img {

            transform:
                scale(1.05);

        }


        /* =========================================
           THÔNG TIN BÊN DƯỚI HÌNH
           ========================================= */

        .bat-trang-product-info {

            padding: 16px;

            box-sizing: border-box;

        }


        .bat-trang-product-info h3 {

            margin: 0 0 9px;

            color: #5c351b;

            font-family: inherit;

            font-size: 18px;

            line-height: 1.4;

            cursor: pointer;

        }


        .bat-trang-product-info h3:hover {

            color: #9a5b25;

        }


        .bat-trang-price {

            color: #a35f25;

            font-size: 19px;

            font-weight: 700;

            margin-bottom: 14px;

        }


        /* =========================================
           SỐ LƯỢNG + GIỎ
           ========================================= */

        .bat-trang-buy-row {

            display: flex;

            width: 100%;

            gap: 8px;

            align-items: stretch;

        }


        .bat-trang-quantity {

            height: 42px;

            display: flex;

            align-items: center;

            border: 1px solid #d6c4b2;

            border-radius: 9px;

            overflow: hidden;

            flex-shrink: 0;

        }


        .bat-trang-quantity button {

            width: 32px;

            height: 100%;

            border: 0;

            background: #faf7f3;

            color: #603a20;

            font-size: 20px;

            cursor: pointer;

        }


        .bat-trang-quantity span {

            width: 28px;

            text-align: center;

            color: #5c351b;

            font-weight: 600;

        }


        .bat-trang-add {

            flex: 1;

            min-width: 0;

            height: 42px;

            border: 0;

            border-radius: 9px;

            background: #6b4423;

            color: white;

            padding: 0 10px;

            font-family: inherit;

            font-weight: 600;

            cursor: pointer;

        }


        .bat-trang-add:hover {

            background: #4d2e17;

        }


        /* =========================================
           XEM CHI TIẾT
           ========================================= */

        .bat-trang-detail {

            width: 100%;

            height: 40px;

            margin-top: 9px;

            border: 1px solid #c9b29b;

            border-radius: 9px;

            background: white;

            color: #6b4423;

            font-family: inherit;

            cursor: pointer;

        }


        .bat-trang-detail:hover {

            background: #f6eee7;

        }


        /* =========================================
           MODAL
           ========================================= */

        #batTrangProductModal {

            position: fixed;

            inset: 0;

            z-index: 99999;

        }


        .bat-trang-modal-overlay {

            position: fixed;

            inset: 0;

            background:
                rgba(30, 20, 12, .70);

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 25px;

            box-sizing: border-box;

        }


        .bat-trang-modal {

            position: relative;

            width: min(950px, 100%);

            max-height: 90vh;

            overflow-y: auto;

            background: white;

            border-radius: 18px;

            padding: 24px;

            box-sizing: border-box;

            display: grid;

            grid-template-columns:
                1fr 1fr;

            gap: 25px;

        }


        .bat-trang-modal-close {

            position: absolute;

            right: 15px;

            top: 12px;

            width: 40px;

            height: 40px;

            border: 0;

            border-radius: 50%;

            background: #f1e8df;

            color: #5c351b;

            font-size: 27px;

            cursor: pointer;

            z-index: 5;

        }


        .bat-trang-modal-image {

            height: 450px;

            overflow: hidden;

            border-radius: 14px;

            background: #eee6dc;

        }


        .bat-trang-modal-image img {

            width: 100%;

            height: 100%;

            object-fit: cover;

        }


        .bat-trang-modal-info {

            color: #6b4423;

            padding: 15px;

        }


        .bat-trang-modal-info h2 {

            margin-top: 0;

            color: #5c351b;

            line-height: 1.4;

        }


        .bat-trang-modal-price {

            color: #a35f25;

            font-size: 25px;

            font-weight: 700;

            margin-bottom: 20px;

        }


        .bat-trang-description {

            border: 1px solid #d8c6b4;

            border-radius: 12px;

            padding: 15px;

            line-height: 1.7;

            color: #6b4423;

        }


        .bat-trang-description p {

            margin: 0 0 9px;

        }


        .modal-add {

            width: 100%;

            margin-top: 18px;

        }


        /* =========================================
           THÔNG BÁO
           ========================================= */

        #batTrangNotice {

            position: fixed;

            right: 25px;

            bottom: 25px;

            z-index: 100000;

            background: #6b4423;

            color: white;

            padding: 14px 20px;

            border-radius: 10px;

            opacity: 0;

            transform:
                translateY(15px);

            pointer-events: none;

            transition:
                all .3s ease;

        }


        #batTrangNotice.show {

            opacity: 1;

            transform:
                translateY(0);

        }


        /* =========================================
           DESKTOP RẤT RỘNG
           ========================================= */

        @media (min-width: 1600px) {

            #productGrid,
            .product-grid,
            #products {

                grid-template-columns:
                    repeat(5, minmax(0, 1fr))
                    !important;

                padding-left: 3vw !important;
                padding-right: 3vw !important;

            }

        }


        /* =========================================
           TABLET
           ========================================= */

        @media (max-width: 1100px) {

            #productGrid,
            .product-grid,
            #products {

                grid-template-columns:
                    repeat(3, minmax(0, 1fr))
                    !important;

            }

        }


        /* =========================================
           TABLET NHỎ
           ========================================= */

        @media (max-width: 750px) {

            #productGrid,
            .product-grid,
            #products {

                grid-template-columns:
                    repeat(2, minmax(0, 1fr))
                    !important;

                gap: 15px !important;

                padding: 20px 15px !important;

            }


            .bat-trang-product-image {

                height: 260px;

            }


            .bat-trang-product-info {

                padding: 12px;

            }


            .bat-trang-product-info h3 {

                font-size: 16px;

            }


            .bat-trang-buy-row {

                flex-direction: column;

            }


            .bat-trang-quantity {

                width: 100%;

                justify-content: center;

            }


            .bat-trang-add {

                width: 100%;

            }


            .bat-trang-modal {

                grid-template-columns: 1fr;

                padding: 15px;

            }


            .bat-trang-modal-image {

                height: 300px;

            }

        }


        /* =========================================
           ĐIỆN THOẠI
           ========================================= */

        @media (max-width: 480px) {

            #productGrid,
            .product-grid,
            #products {

                grid-template-columns:
                    repeat(2, minmax(0, 1fr))
                    !important;

                gap: 10px !important;

                padding: 15px 10px !important;

            }


            .bat-trang-product-image {

                height: 210px;

            }


            .bat-trang-product-info {

                padding: 10px;

            }


            .bat-trang-product-info h3 {

                font-size: 14px;

            }


            .bat-trang-price {

                font-size: 16px;

            }

        }

    `;


    document.head.appendChild(style);


    /* =====================================================
       KHỞI CHẠY
       ===================================================== */

    renderProducts();

    renderCart();

});
