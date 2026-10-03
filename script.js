/* =========================================================
   CHẠM VÀO HỒN VIỆT
   script.js

   Chức năng:
   - Dữ liệu 16 sản phẩm
   - Hiển thị sản phẩm
   - Lọc sản phẩm
   - Tìm kiếm
   - Xem chi tiết sản phẩm
   - Giỏ hàng
   - Tư vấn khách hàng
   - Đặt đơn hàng
   - Kiểm tra số điện thoại
   - Tóm tắt đơn hàng
   - Đăng ký email
   - LocalStorage

   LƯU Ý:
   - Không tự ý thay đổi font chữ.
   - Tên sản phẩm nằm ngay dưới hình ảnh.
   - Khu vực giá có cụm số lượng +/-.
   - Nút xem chi tiết nằm cạnh khu vực giá.
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
        origin: "Làng nghề Bát Tràng, Gia Lâm, Hà Nội",
        type: "Đồ trang trí - đôi lục bình",
        material: "Gốm Bát Tràng, men lam truyền thống",
        size: "Cao khoảng 45 - 50 cm",
        technique: "Tạo hình thủ công, vẽ họa tiết và phủ men",
        description:
            "Đôi lục bình mang phong cách cổ điển với gam trắng - lam và các họa tiết trang trí truyền thống. Sản phẩm tạo điểm nhấn trang trọng cho phòng khách, sảnh hoặc không gian trưng bày.",
        use:
            "Trang trí phòng khách, sảnh, tủ kệ; thích hợp làm quà tân gia và quà biếu.",
        image:
            "https://xuonggomsuviet.vn/wp-content/uploads/2019/04/doc-dao-ky-thuat-trang-tri-tren-san-pham-gom-su-bat-trang-1.jpg"
    },

    {
        id: 2,
        name: "Bộ Bát Đĩa Men Lam Hoa Văn Bát Tràng",
        price: 2980000,
        category: "bat",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bộ đồ ăn gia đình cao cấp",
        material: "Gốm/sứ Bát Tràng, men trắng vẽ lam",
        size: "Bộ nhiều món",
        technique: "Tạo hình, nung nhiệt cao, trang trí họa tiết",
        description:
            "Bộ bát đĩa mang vẻ đẹp thanh lịch với nền trắng và họa tiết xanh lam. Thiết kế phù hợp cho bàn ăn gia đình, nhà hàng phong cách truyền thống hoặc làm quà biếu.",
        use:
            "Dùng trong bữa ăn, tiếp khách, nhà hàng hoặc làm quà tặng.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2024/09/dong-san-pham-dac-trung-cua-bat-trang-13.jpg"
    },

    {
        id: 3,
        name: "Bộ Bát Đĩa Hoa Cúc Vẽ Tay Men Trắng",
        price: 2680000,
        category: "bat",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bộ bát đĩa gia dụng - quà tặng",
        material: "Sứ trắng Bát Tràng, men bóng",
        size: "Bộ gia đình nhiều món",
        technique: "Vẽ họa tiết hoa cúc, nung nhiệt cao",
        description:
            "Bộ bát đĩa lấy hoa cúc làm điểm nhấn. Các họa tiết được bố trí hài hòa trên nền men trắng, tạo cảm giác nhẹ nhàng, thanh lịch và gần gũi.",
        use:
            "Dùng cho gia đình, tiếp khách, quà cưới hoặc quà tân gia.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2024/04/bo-bat-dia-gia-co-hoa-tiet-hoa-cuc-ve-tay-4.jpg"
    },

    {
        id: 4,
        name: "Bộ Bát Đĩa Hoa Sen Xanh Men Trắng",
        price: 2480000,
        category: "bat",
        origin: "Làng gốm Bát Tràng, Hà Nội",
        type: "Bộ đồ ăn cao cấp",
        material: "Sứ trắng Bát Tràng, men bóng",
        size: "Bộ gia đình nhiều món",
        technique: "Tạo hình, vẽ họa tiết hoa sen, nung nhiệt cao",
        description:
            "Bộ bát đĩa hoa sen xanh mang biểu tượng thanh nhã của văn hóa Việt. Nền men trắng làm nổi bật sắc xanh, tạo cảm giác tinh tế trên bàn ăn.",
        use:
            "Dùng cho gia đình, tiếp khách, bàn ăn và quà tặng.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2024/04/bo-bat-dia-su-trang-hoa-tiet-hoa-sen-xanh-2.jpg"
    },

    {
        id: 5,
        name: "Bảo Bình Sen Cá Phú Quý",
        price: 4250000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bình trang trí nghệ thuật",
        material: "Gốm Bát Tràng, men màu trang trí",
        size: "Cao khoảng 60 cm, đường kính khoảng 34 cm",
        technique: "Tạo hình thủ công, trang trí và phủ men",
        description:
            "Bảo bình kích thước lớn lấy hình tượng sen và cá làm chủ đề trang trí. Thiết kế phù hợp với không gian phòng khách, sảnh hoặc khu vực tiếp khách.",
        use:
            "Trang trí nội thất, quà tân gia, quà doanh nghiệp.",
        image:
            "https://i1-vnexpress.vnecdn.net/2019/12/19/lang-gom-Bat-Trang-png-6590-1576729451.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=qNrvTb1lci5tRl9RRQ9COw"
    },

    {
        id: 6,
        name: "Bảo Bình Sen Cá Phú Quý Cao Cấp",
        price: 4980000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bình phong thủy - nghệ thuật",
        material: "Gốm Bát Tràng, men trang trí cao cấp",
        size: "Dòng bình lớn",
        technique: "Tạo hình thủ công, trang trí, nung nhiệt cao",
        description:
            "Mẫu bảo bình lấy sen và cá làm điểm nhấn, hướng đến vẻ đẹp trang trọng và ý nghĩa cát tường. Phù hợp để trưng bày trong phòng khách hoặc không gian tiếp khách.",
        use:
            "Trang trí, quà tân gia, quà mừng khai trương.",
        image:
            "https://godinh.com/web/image/product.template/81280/image_512/B%E1%BA%A3o%20B%C3%ACnh%20Sen%20C%C3%A1%20Ph%C3%BA%20Qu%C3%BD%20Cao%2060%20%C4%90%C6%B0%E1%BB%9Dng%20K%C3%ADnh%2034%20%28cm%29?unique=a500000"
    },

    {
        id: 7,
        name: "Cốc Sứ Bát Tràng Men Hỏa Biến Dáng Trụ",
        price: 1250000,
        category: "am",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Cốc sứ thủ công",
        material: "Gốm/sứ Bát Tràng, men hỏa biến",
        size: "Cốc dáng trụ",
        technique: "Tạo dáng thủ công, phủ men hỏa biến",
        description:
            "Cốc dáng trụ với bề mặt men hỏa biến tạo chuyển sắc tự nhiên sau quá trình nung. Mỗi sản phẩm có thể có sắc độ khác nhau.",
        use:
            "Uống trà, cà phê, nước; sử dụng tại nhà hoặc văn phòng.",
        image:
            "https://battrangvietnam.vn/wp-content/uploads/2025/12/coc-su-bat-trang-men-hoa-bien-dang-tru-co-quai-ls-27-anh-dai-dien.jpg"
    },

    {
        id: 8,
        name: "Bộ Ba Bình Hoa Men Ngọc Trang Trí",
        price: 1850000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bộ bình hoa trang trí",
        material: "Gốm Bát Tràng, men màu",
        size: "Bộ 3 bình",
        technique: "Tạo hình thủ công, phủ men màu, nung hoàn thiện",
        description:
            "Bộ ba bình hoa kết hợp các sắc xanh, xanh đậm và trắng, phù hợp tạo bố cục trang trí nhiều tầng. Có thể sử dụng riêng hoặc trưng bày thành bộ.",
        use:
            "Trang trí bàn, kệ, tủ phòng khách, quầy lễ tân.",
        image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShIutqHKIFFs45SDMVl9Jm8soG0eFnqgLoNSOd_asQBJE52M5j"
    },

    {
        id: 9,
        name: "Đĩa Trang Trí Cá Sóng Men Lam",
        price: 3650000,
        category: "bat",
        origin: "Làng nghề Bát Tràng, Hà Nội",
        type: "Đĩa gốm trang trí nghệ thuật",
        material: "Gốm Bát Tràng, men lam và men màu",
        size: "Đĩa đường kính lớn",
        technique: "Trang trí họa tiết thủ công, nung nhiệt cao",
        description:
            "Đĩa trang trí kích thước lớn với hình tượng cá và sóng nước, sử dụng sắc xanh làm chủ đạo. Có thể treo tường hoặc đặt trên giá đỡ.",
        use:
            "Trang trí tường, tủ, kệ; làm quà tặng nghệ thuật.",
        image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMKFGtC66RZipOkQeJgtMMAfcENcr5WdIWRu9TFALRATRhGpBj"
    },

    {
        id: 10,
        name: "Bình Trang Trí Hoa Điểu Họa Tiết Hope",
        price: 4580000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bình trang trí nghệ thuật",
        material: "Gốm Bát Tràng, men trang trí đa sắc",
        size: "Dòng bình trung - lớn",
        technique: "Vẽ và phối họa tiết thủ công",
        description:
            "Mẫu bình trang trí kết hợp họa tiết hoa, chim và bố cục trang nhã. Thiết kế phù hợp với những không gian cần một điểm nhấn nghệ thuật.",
        use:
            "Phòng khách, sảnh, tủ kệ, quà tặng.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9W4D4mGP2J6ZGS1DJNzcZ5K1DYBdJGXJA46hAFzx7jOTK5egaFjWn5Hr&s=10"
    },

    {
        id: 11,
        name: "Bộ Ấm Chén Men Rạn Họa Tiết Cổ",
        price: 2680000,
        category: "am",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bộ ấm chén thưởng trà",
        material: "Gốm Bát Tràng, men rạn",
        size: "Ấm và chén",
        technique: "Tạo hình thủ công, phủ men rạn, nung nhiệt cao",
        description:
            "Bộ ấm chén mang bề mặt men rạn đặc trưng, tạo cảm giác cổ kính và mộc mạc. Phù hợp với không gian trà hoặc làm quà biếu.",
        use:
            "Thưởng trà, tiếp khách, trưng bày và quà tặng.",
        image:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqTjHmLxve9gZTwigiRXZm_VY3RcPht7_IgL5_YLOvPX-oAafI"
    },

    {
        id: 12,
        name: "Bộ Ấm Trà Gà Trống Men Nâu Xanh",
        price: 2950000,
        category: "am",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bộ ấm trà",
        material: "Gốm Bát Tràng, men nâu và xanh",
        size: "Ấm trà kèm chén",
        technique: "Trang trí họa tiết gà trống, phủ men và nung",
        description:
            "Bộ trà sử dụng hình tượng gà trống làm điểm nhấn, kết hợp sắc nâu và xanh tạo vẻ ấm áp. Phù hợp cho không gian trà gia đình.",
        use:
            "Pha trà, tiếp khách, trưng bày và quà tặng.",
        image:
            "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mifiykrms9ag43"
    },

    {
        id: 13,
        name: "Đôi Lục Bình Hắc Kim Thuyền Hải Hành",
        price: 6850000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Đôi lục bình cao cấp",
        material: "Gốm Bát Tràng, men đen - ánh kim",
        size: "Dòng bình lớn - đôi",
        technique: "Tạo hình, đắp nổi họa tiết, xử lý men và nung",
        description:
            "Đôi lục bình tông đen ánh kim tạo cảm giác sang trọng, nổi bật với hình ảnh thuyền và cảnh biển trên thân bình.",
        use:
            "Phòng khách, sảnh lớn, văn phòng và quà biếu cao cấp.",
        image:
            "https://bizweb.dktcdn.net/100/659/338/products/2e9c6da5-bca0-4a06-97a3-0c85f3d74a57.jpg?v=1773291686963"
    },

    {
        id: 14,
        name: "Đôi Lục Bình Bạch Kim Thuyền Mã",
        price: 7580000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Đôi lục bình nghệ thuật cao cấp",
        material: "Gốm Bát Tràng, men trắng và điểm nhấn ánh kim",
        size: "Dòng bình lớn - đôi",
        technique: "Tạo hình thủ công, đắp nổi họa tiết, phối men",
        description:
            "Đôi lục bình nền trắng phối chi tiết vàng, tạo hình ảnh thuyền và ngựa với bố cục giàu tính trang trí. Phù hợp với không gian sang trọng.",
        use:
            "Biệt thự, phòng khách lớn, sảnh, văn phòng và quà tặng.",
        image:
            "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/486496hTq/anh-mo-ta.png"
    },

    {
        id: 15,
        name: "Đĩa Nghệ Thuật Thuyền Buồm Vượt Sóng",
        price: 4850000,
        category: "bat",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Đĩa trang trí nghệ thuật",
        material: "Gốm Bát Tràng, men màu",
        size: "Đĩa lớn - dùng trưng bày",
        technique: "Tạo hình, trang trí cảnh thuyền buồm, nung nhiệt cao",
        description:
            "Đĩa nghệ thuật tái hiện hình ảnh thuyền buồm trên biển. Thiết kế phù hợp với cách trưng bày theo chủ đề và tạo điểm nhấn cho không gian.",
        use:
            "Trang trí nội thất, quà tặng doanh nghiệp, quà tân gia.",
        image:
            "https://product.hstatic.net/200000258799/product/z6560994619592_1dd138feeafdadd8b79ef6d63e0a82b1_28308021f6864719bf8ebce77630607a_master.jpg"
    },

    {
        id: 16,
        name: "Bình Hoa Men Trắng Viền Vàng Kèm Cốc",
        price: 3250000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bộ bình hoa và cốc trang trí",
        material: "Sứ/gốm Bát Tràng, men trắng, điểm nhấn vàng",
        size: "Bình cỡ vừa kèm phụ kiện",
        technique: "Tạo hình, trang trí hoa, phối màu và nung",
        description:
            "Bộ sản phẩm có bình hoa nền trắng với họa tiết hoa và đường viền vàng, đi kèm các cốc đồng bộ. Tổng thể thanh lịch và phù hợp làm quà tặng.",
        use:
            "Trang trí bàn, phòng khách, phòng làm việc; quà tặng.",
        image:
            "https://neon.vn/image/cache/catalog/products/D39-2-1100x1100.jpg.webp"
    }

];


/* =========================================================
   2. GIỎ HÀNG
   ========================================================= */

let cart = [];

try {

    cart = JSON.parse(
        localStorage.getItem("chamHonVietCart") || "[]"
    );

    if (!Array.isArray(cart)) {
        cart = [];
    }

} catch (error) {

    cart = [];
}


/* =========================================================
   3. HÀM TIỆN ÍCH
   ========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat("vi-VN")
        .format(Number(price) || 0) + " đ";
}


function getProduct(productId) {

    return products.find(
        product => product.id === Number(productId)
    );
}


function saveCart() {

    localStorage.setItem(
        "chamHonVietCart",
        JSON.stringify(cart)
    );
}


function getCategoryName(category) {

    const categoryNames = {

        all: "Tất cả",

        binh: "Bình & đồ trang trí",

        bat: "Bát & đĩa",

        am: "Ấm & cốc"

    };

    return categoryNames[category] || "Sản phẩm";
}


function escapeHtml(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   4. LẤY SỐ LƯỢNG TẠM THỜI CỦA SẢN PHẨM
   ========================================================= */

function getProductQuantity(productId) {

    const item = cart.find(
        cartItem =>
            cartItem.id === Number(productId)
    );

    return item
        ? Number(item.quantity) || 1
        : 1;
}


/* =========================================================
   5. TĂNG / GIẢM SỐ LƯỢNG TRỰC TIẾP TRÊN CARD
   ========================================================= */

function changeProductQuantity(
    productId,
    change
) {

    const product =
        getProduct(productId);

    if (!product) {
        return;
    }

    let item =
        cart.find(
            cartItem =>
                cartItem.id === product.id
        );

    if (!item) {

        item = {

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        };

        cart.push(item);
    }

    item.quantity += Number(change);

    if (item.quantity <= 0) {

        cart =
            cart.filter(
                cartItem =>
                    cartItem.id !== product.id
            );
    }

    saveCart();

    updateCart();

    renderProductQuantity(product.id);
}


/* =========================================================
   6. HIỂN THỊ SỐ LƯỢNG TRÊN CARD
   ========================================================= */

function renderProductQuantity(productId) {

    const quantity =
        getProductQuantity(productId);

    const quantityElements =
        document.querySelectorAll(
            `[data-product-quantity="${productId}"]`
        );

    quantityElements.forEach(
        element => {

            element.textContent =
                quantity;

        }
    );
}


/* =========================================================
   7. CARD SẢN PHẨM
   TÊN NGAY DƯỚI HÌNH ẢNH
   ========================================================= */

function createProductCard(product) {

    const quantity =
        getProductQuantity(product.id);

    return `

        <article
            class="product-card"
            data-category="${product.category}"
        >

            <!-- HÌNH ẢNH -->

            <div
                class="product-image"
                onclick="showProductDetail(${product.id})"
                style="cursor:pointer;"
            >

                <img
                    src="${product.image}"
                    alt="${escapeHtml(product.name)}"
                    loading="lazy"
                    onerror="
                        this.style.display='none';
                        this.parentElement.classList.add('image-error');
                    "
                >

                <span class="product-badge">
                    ${getCategoryName(product.category)}
                </span>

            </div>


            <!-- TÊN SẢN PHẨM NGAY DƯỚI HÌNH -->

            <div class="product-info">

                <h3
                    class="product-name"
                    onclick="showProductDetail(${product.id})"
                    style="cursor:pointer;"
                >
                    ${escapeHtml(product.name)}
                </h3>


                <p class="product-origin">
                    ${escapeHtml(product.origin)}
                </p>


                <!-- DÒNG GIÁ + CỘNG TRỪ + CHI TIẾT -->

                <div class="product-action-row">

                    <strong class="product-price">
                        ${formatPrice(product.price)}
                    </strong>


                    <div
                        class="product-quantity-control"
                        aria-label="Chọn số lượng"
                    >

                        <button
                            type="button"
                            class="quantity-minus"
                            onclick="
                                event.stopPropagation();
                                changeProductQuantity(
                                    ${product.id},
                                    -1
                                );
                            "
                            aria-label="Giảm số lượng"
                        >
                            −
                        </button>


                        <span
                            class="product-quantity"
                            data-product-quantity="${product.id}"
                        >
                            ${quantity}
                        </span>


                        <button
                            type="button"
                            class="quantity-plus"
                            onclick="
                                event.stopPropagation();
                                changeProductQuantity(
                                    ${product.id},
                                    1
                                );
                            "
                            aria-label="Tăng số lượng"
                        >
                            +
                        </button>

                    </div>


                    <button
                        type="button"
                        class="detail-product-btn"
                        onclick="
                            event.stopPropagation();
                            showProductDetail(${product.id});
                        "
                    >
                        Xem chi tiết
                    </button>

                </div>

            </div>

        </article>

    `;
}


/* =========================================================
   8. DANH SÁCH SẢN PHẨM
   ========================================================= */

function getProductGrids() {

    return [

        document.getElementById("productGrid"),

        document.getElementById("productsGrid"),

        document.querySelector(".products-grid"),

        document.getElementById("product-list"),

        document.querySelector(".product-grid")

    ].filter(Boolean);
}


function renderProducts(category = "all") {

    const grids =
        getProductGrids();

    if (!grids.length) {
        return;
    }

    const filteredProducts =
        category === "all"

            ? products

            : products.filter(
                product =>
                    product.category === category
            );


    const html =
        filteredProducts
            .map(createProductCard)
            .join("");


    grids.forEach(
        grid => {

            grid.innerHTML =
                html;

        }
    );
}


/* =========================================================
   9. LỌC SẢN PHẨM
   ========================================================= */

function filterProducts(
    category = "all",
    button = null
) {

    renderProducts(category);

    document
        .querySelectorAll(".filter-btn")
        .forEach(
            btn => {
                btn.classList.remove(
                    "active"
                );
            }
        );

    if (button) {

        button.classList.add(
            "active"
        );
    }
}


/* =========================================================
   10. TÌM KIẾM
   ========================================================= */

function searchProducts(keyword) {

    const query =
        String(keyword || "")
            .trim()
            .toLowerCase();


    const grids =
        getProductGrids();

    if (!grids.length) {
        return;
    }


    if (!query) {

        renderProducts("all");

        return;
    }


    const results =
        products.filter(
            product => {

                const searchText = [

                    product.name,

                    product.origin,

                    product.type,

                    product.material,

                    product.description,

                    product.use

                ]
                    .join(" ")
                    .toLowerCase();


                return searchText.includes(
                    query
                );

            }
        );


    grids.forEach(
        grid => {

            if (!results.length) {

                grid.innerHTML = `

                    <div class="empty-products">

                        <h3>
                            Không tìm thấy sản phẩm
                        </h3>

                        <p>
                            Hãy thử tìm kiếm với từ khóa khác.
                        </p>

                    </div>

                `;

                return;
            }


            grid.innerHTML =
                results
                    .map(createProductCard)
                    .join("");

        }
    );
}


/* =========================================================
   11. TẠO POPUP CHI TIẾT
   ========================================================= */

function createProductModal() {

    let modal =
        document.getElementById(
            "productDetailModal"
        );


    if (modal) {
        return modal;
    }


    modal =
        document.createElement(
            "div"
        );


    modal.id =
        "productDetailModal";


    modal.className =
        "product-detail-modal";


    modal.innerHTML = `

        <div
            class="product-detail-overlay"
            onclick="closeProductDetail()"
        ></div>


        <div
            class="product-detail-box"
            role="dialog"
            aria-modal="true"
        >

            <button
                type="button"
                class="product-detail-close"
                onclick="closeProductDetail()"
            >
                ×
            </button>


            <div id="productDetailContent"></div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    addProductModalCSS();


    return modal;
}


/* =========================================================
   12. CSS CHO POPUP + CARD
   KHÔNG ĐỔI FONT
   ========================================================= */

function addProductModalCSS() {

    if (
        document.getElementById(
            "productDetailAutoStyle"
        )
    ) {
        return;
    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "productDetailAutoStyle";


    style.textContent = `

        /* ============================
           CARD SẢN PHẨM
           ============================ */

        .product-card {
            overflow: hidden;
        }


        .product-image {
            position: relative;
        }


        .product-info {
            padding-top: 15px;
        }


        .product-name {
            margin: 0 0 8px;
            line-height: 1.45;
        }


        .product-origin {
            margin: 0 0 14px;
            line-height: 1.5;
        }


        .product-action-row {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }


        .product-price {
            font-size: 16px;
            white-space: nowrap;
            margin-right: auto;
        }


        .product-quantity-control {
            display: inline-flex;
            align-items: center;
            height: 34px;
            border: 1px solid #d9c8b7;
            border-radius: 8px;
            overflow: hidden;
            background: #fff;
        }


        .product-quantity-control button {
            width: 30px;
            height: 32px;
            border: none;
            background: transparent;
            color: #624936;
            font-size: 18px;
            line-height: 1;
            cursor: pointer;
        }


        .product-quantity-control button:hover {
            background: #eee4da;
        }


        .product-quantity {
            min-width: 25px;
            text-align: center;
            font-size: 13px;
            font-weight: 600;
            color: #4f3a2b;
        }


        .detail-product-btn {
            height: 34px;
            border: 1px solid #b99b7e;
            border-radius: 8px;
            padding: 0 10px;
            background: transparent;
            color: #684a34;
            cursor: pointer;
            white-space: nowrap;
        }


        .detail-product-btn:hover {
            background: #eee4da;
        }


        /* ============================
           POPUP CHI TIẾT
           ============================ */

        .product-detail-modal {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: none;
        }


        .product-detail-modal.show {
            display: block;
        }


        .product-detail-overlay {
            position: absolute;
            inset: 0;
            background: rgba(52, 37, 26, .68);
            backdrop-filter: blur(5px);
        }


        .product-detail-box {
            position: relative;
            z-index: 2;
            width: min(1000px, calc(100% - 30px));
            max-height: calc(100vh - 40px);
            overflow-y: auto;
            margin: 20px auto;
            background: #fffdf9;
            border-radius: 22px;
            box-shadow: 0 25px 80px rgba(0,0,0,.25);
        }


        .product-detail-close {
            position: absolute;
            top: 16px;
            right: 16px;
            width: 42px;
            height: 42px;
            border: none;
            border-radius: 50%;
            background: #eadfd3;
            color: #4e392b;
            font-size: 28px;
            line-height: 1;
            cursor: pointer;
            z-index: 5;
        }


        .product-detail-content {
            display: grid;
            grid-template-columns: 45% 55%;
        }


        .product-detail-image {
            min-height: 520px;
            background: #f4eee7;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 35px;
        }


        .product-detail-image img {
            width: 100%;
            max-height: 470px;
            object-fit: contain;
        }


        .product-detail-info {
            padding: 45px 42px;
        }


        .product-detail-category {
            display: inline-block;
            margin-bottom: 12px;
            color: #9a704f;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: .14em;
            text-transform: uppercase;
        }


        .product-detail-info h2 {
            margin: 0 0 14px;
            color: #4d382a;
            font-size: 30px;
            line-height: 1.2;
        }


        .product-detail-price {
            margin-bottom: 25px;
            color: #8b6041;
            font-size: 25px;
            font-weight: 700;
        }


        .product-detail-description {
            margin-bottom: 25px;
            color: #6f5e50;
            line-height: 1.8;
            font-size: 14px;
        }


        .product-detail-meta {
            margin: 0 0 25px;
            border-top: 1px solid #e8ddd2;
        }


        .product-detail-meta div {
            display: grid;
            grid-template-columns: 110px 1fr;
            gap: 15px;
            padding: 11px 0;
            border-bottom: 1px solid #eee5dd;
            font-size: 13px;
        }


        .product-detail-meta span {
            color: #8b7868;
        }


        .product-detail-meta strong {
            color: #503c2e;
            font-weight: 600;
        }


        .product-detail-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }


        .detail-cart-btn,
        .detail-order-btn,
        .detail-close-btn {
            border: none;
            border-radius: 10px;
            padding: 13px 17px;
            font: inherit;
            font-weight: 700;
            cursor: pointer;
            transition: .2s ease;
        }


        .detail-cart-btn {
            background: #6e4c35;
            color: white;
        }


        .detail-order-btn {
            background: #d9c2aa;
            color: #503b2d;
        }


        .detail-close-btn {
            background: #eee6de;
            color: #624d3d;
        }


        .detail-cart-btn:hover,
        .detail-order-btn:hover,
        .detail-close-btn:hover {
            transform: translateY(-1px);
        }


        /* ============================
           MOBILE
           ============================ */

        @media (max-width: 760px) {

            .product-detail-content {
                grid-template-columns: 1fr;
            }


            .product-detail-image {
                min-height: 300px;
                padding: 25px;
            }


            .product-detail-info {
                padding: 30px 25px;
            }


            .product-detail-info h2 {
                font-size: 25px;
            }


            .product-action-row {
                align-items: stretch;
            }


            .product-price {
                width: 100%;
                margin-right: 0;
            }


            .product-quantity-control,
            .detail-product-btn {
                height: 36px;
            }

        }

    `;


    document.head.appendChild(
        style
    );
}


/* =========================================================
   13. HIỂN THỊ CHI TIẾT SẢN PHẨM
   ========================================================= */

function showProductDetail(productId) {

    const product =
        getProduct(productId);


    if (!product) {
        return;
    }


    const modal =
        createProductModal();


    const content =
        document.getElementById(
            "productDetailContent"
        );


    if (!content) {
        return;
    }


    content.innerHTML = `

        <div class="product-detail-content">

            <div class="product-detail-image">

                <img
                    src="${product.image}"
                    alt="${escapeHtml(product.name)}"
                >

            </div>


            <div class="product-detail-info">

                <span class="product-detail-category">
                    ${getCategoryName(product.category)}
                </span>


                <h2>
                    ${escapeHtml(product.name)}
                </h2>


                <div class="product-detail-price">
                    ${formatPrice(product.price)}
                </div>


                <p class="product-detail-description">
                    ${escapeHtml(product.description)}
                </p>


                <div class="product-detail-meta">

                    <div>
                        <span>Nguồn gốc</span>

                        <strong>
                            ${escapeHtml(product.origin)}
                        </strong>
                    </div>


                    <div>
                        <span>Loại sản phẩm</span>

                        <strong>
                            ${escapeHtml(product.type)}
                        </strong>
                    </div>


                    <div>
                        <span>Chất liệu</span>

                        <strong>
                            ${escapeHtml(product.material)}
                        </strong>
                    </div>


                    <div>
                        <span>Kích thước</span>

                        <strong>
                            ${escapeHtml(product.size)}
                        </strong>
                    </div>


                    <div>
                        <span>Kỹ thuật</span>

                        <strong>
                            ${escapeHtml(product.technique)}
                        </strong>
                    </div>


                    <div>
                        <span>Công dụng</span>

                        <strong>
                            ${escapeHtml(product.use)}
                        </strong>
                    </div>

                </div>


                <div class="product-detail-actions">

                    <button
                        type="button"
                        class="detail-cart-btn"
                        onclick="
                            addToCart(${product.id});
                            closeProductDetail();
                        "
                    >
                        Thêm vào giỏ hàng
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


                    <button
                        type="button"
                        class="detail-close-btn"
                        onclick="
                            closeProductDetail();
                        "
                    >
                        Đóng
                    </button>

                </div>

            </div>

        </div>

    `;


    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";
}


/* =========================================================
   14. ĐÓNG CHI TIẾT
   ========================================================= */

function closeProductDetail() {

    const modal =
        document.getElementById(
            "productDetailModal"
        );


    if (modal) {

        modal.classList.remove(
            "show"
        );
    }


    document.body.style.overflow =
        "";
}


/* =========================================================
   15. THÊM SẢN PHẨM VÀO GIỎ
   ========================================================= */

function addToCart(productId) {

    const product =
        getProduct(productId);


    if (!product) {
        return;
    }


    const existing =
        cart.find(
            item =>
                item.id === product.id
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });
    }


    saveCart();

    updateCart();

    renderProductQuantity(
        product.id
    );


    showToast(
        `Đã thêm "${product.name}" vào giỏ hàng.`
    );
}


/* =========================================================
   16. TĂNG / GIẢM TRONG GIỎ
   ========================================================= */

function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            cartItem =>
                cartItem.id === Number(productId)
        );


    if (!item) {
        return;
    }


    item.quantity += Number(
        change
    );


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                cartItem =>
                    cartItem.id !==
                    Number(productId)
            );
    }


    saveCart();

    updateCart();

    renderProductQuantity(
        productId
    );
}


/* =========================================================
   17. XÓA SẢN PHẨM
   ========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== Number(
                    productId
                )
        );


    saveCart();

    updateCart();

    renderProductQuantity(
        productId
    );


    showToast(
        "Đã xóa sản phẩm khỏi giỏ hàng."
    );
}


/* =========================================================
   18. TỔNG TIỀN
   ========================================================= */

function getCartTotal() {

    return cart.reduce(

        (total, item) =>

            total +
            Number(item.price) *
            Number(item.quantity),

        0

    );
}


/* =========================================================
   19. TỔNG SỐ LƯỢNG
   ========================================================= */

function getCartCount() {

    return cart.reduce(

        (total, item) =>

            total +
            Number(item.quantity),

        0

    );
}


/* =========================================================
   20. CẬP NHẬT GIỎ HÀNG
   ========================================================= */

function updateCart() {

    const count =
        getCartCount();


    const total =
        getCartTotal();


    const countElements = [

        document.getElementById(
            "cartCount"
        ),

        document.getElementById(
            "cart-count"
        ),

        document.querySelector(
            ".cart-count"
        )

    ].filter(Boolean);


    countElements.forEach(
        element => {

            element.textContent =
                count;

        }
    );


    const totalElements = [

        document.getElementById(
            "cartTotal"
        ),

        document.getElementById(
            "cart-total"
        )

    ].filter(Boolean);


    totalElements.forEach(
        element => {

            element.textContent =
                formatPrice(total);

        }
    );


    const cartItems =

        document.getElementById(
            "cartItems"
        ) ||

        document.getElementById(
            "cart-items"
        );


    if (!cartItems) {
        return;
    }


    if (!cart.length) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <p>
                    Giỏ hàng đang trống.
                </p>

                <small>
                    Hãy chọn một tác phẩm
                    gốm bạn yêu thích.
                </small>

            </div>

        `;

        return;
    }


    cartItems.innerHTML =

        cart.map(
            item => `

                <div class="cart-item">

                    <img
                        src="${item.image}"
                        alt="${escapeHtml(item.name)}"
                    >


                    <div class="cart-item-info">

                        <h4>
                            ${escapeHtml(item.name)}
                        </h4>


                        <strong>
                            ${formatPrice(item.price)}
                        </strong>


                        <div class="quantity-control">

                            <button
                                type="button"
                                onclick="
                                    changeQuantity(
                                        ${item.id},
                                        -1
                                    )
                                "
                            >
                                −
                            </button>


                            <span>
                                ${item.quantity}
                            </span>


                            <button
                                type="button"
                                onclick="
                                    changeQuantity(
                                        ${item.id},
                                        1
                                    )
                                "
                            >
                                +
                            </button>


                            <button
                                type="button"
                                class="remove-cart-item"
                                onclick="
                                    removeFromCart(
                                        ${item.id}
                                    )
                                "
                            >
                                Xóa
                            </button>

                        </div>

                    </div>

                </div>

            `
        ).join("");
}


/* =========================================================
   21. MỞ / ĐÓNG GIỎ
   ========================================================= */

function toggleCart(
    forceState
) {

    const sidebar =

        document.getElementById(
            "cartSidebar"
        ) ||

        document.getElementById(
            "cart-sidebar"
        ) ||

        document.querySelector(
            ".cart-sidebar"
        );


    const overlay =
        document.getElementById(
            "cart-overlay"
        );


    if (!sidebar) {
        return;
    }


    let shouldOpen;


    if (
        typeof forceState ===
        "boolean"
    ) {

        shouldOpen =
            forceState;

    } else {

        shouldOpen =

            !sidebar.classList.contains(
                "open"
            ) &&

            !sidebar.classList.contains(
                "active"
            );
    }


    sidebar.classList.toggle(
        "open",
        shouldOpen
    );


    sidebar.classList.toggle(
        "active",
        shouldOpen
    );


    if (overlay) {

        overlay.classList.toggle(
            "show",
            shouldOpen
        );

        overlay.classList.toggle(
            "active",
            shouldOpen
        );
    }
}


/* =========================================================
   22. CHỌN SẢN PHẨM ĐẶT HÀNG
   ========================================================= */

function selectProductForOrder(
    productId
) {

    const product =
        getProduct(productId);


    if (!product) {
        return;
    }


    const select =
        document.getElementById(
            "orderProduct"
        );


    if (select) {

        select.value =
            String(product.id);


        select.dispatchEvent(
            new Event("change")
        );
    }


    const orderSection =
        document.getElementById(
            "order"
        );


    if (orderSection) {

        orderSection.scrollIntoView({

            behavior:
                "smooth",

            block:
                "start"

        });
    }
}


/* =========================================================
   23. ĐẶT HÀNG TỪ GIỎ
   ========================================================= */

function checkout() {

    if (!cart.length) {

        showToast(
            "Giỏ hàng đang trống. Vui lòng chọn sản phẩm trước."
        );

        return;
    }


    const firstItem =
        cart[0];


    const select =
        document.getElementById(
            "orderProduct"
        );


    const quantityInput =
        document.getElementById(
            "orderQuantity"
        );


    if (select) {

        select.value =
            String(firstItem.id);


        select.dispatchEvent(
            new Event("change")
        );
    }


    if (quantityInput) {

        quantityInput.value =
            String(
                firstItem.quantity
            );


        quantityInput.dispatchEvent(
            new Event("input")
        );
    }


    toggleCart(false);


    const orderSection =
        document.getElementById(
            "order"
        );


    if (orderSection) {

        orderSection.scrollIntoView({

            behavior:
                "smooth",

            block:
                "start"

        });
    }


    showToast(
        "Đã đưa sản phẩm trong giỏ vào phần đặt đơn. Vui lòng điền thông tin nhận hàng."
    );
}


/* =========================================================
   24. TƯ VẤN KHÁCH HÀNG
   HỌ TÊN + SỐ ĐIỆN THOẠI
   ========================================================= */

function submitConsultation(
    event
) {

    if (event) {
        event.preventDefault();
    }


    const nameInput =
        document.getElementById(
            "consultName"
        );


    const phoneInput =
        document.getElementById(
            "consultPhone"
        );


    const name =
        nameInput?.value.trim() ||
        "";


    const phone =
        phoneInput?.value.trim() ||
        "";


    if (!name) {

        showToast(
            "Vui lòng nhập họ và tên."
        );


        nameInput?.focus();

        return false;
    }


    if (!phone) {

        showToast(
            "Vui lòng nhập số điện thoại."
        );


        phoneInput?.focus();

        return false;
    }


    if (
        !isValidVietnamesePhone(
            phone
        )
    ) {

        showToast(
            "Vui lòng kiểm tra lại số điện thoại."
        );


        phoneInput?.focus();

        return false;
    }


    const consultationData = {

        name,

        phone,

        hotline:
            "0855337455",

        createdAt:
            new Date().toISOString()

    };


    localStorage.setItem(

        "chamHonVietConsultation",

        JSON.stringify(
            consultationData
        )
    );


    document
        .getElementById(
            "consultationForm"
        )
        ?.reset();


    showToast(

        `Đã nhận thông tin của ${name}. Chúng tôi sẽ liên hệ tư vấn qua số 0855 337 455.`

    );


    return false;
}


/* =========================================================
   25. ĐẶT ĐƠN HÀNG
   ========================================================= */

function submitOrder(
    event
) {

    if (event) {
        event.preventDefault();
    }


    const name =

        document
            .getElementById(
                "orderName"
            )
            ?.value
            .trim() || "";


    const phone =

        document
            .getElementById(
                "orderPhone"
            )
            ?.value
            .trim() || "";


    const address =

        document
            .getElementById(
                "orderAddress"
            )
            ?.value
            .trim() || "";


    const productId =

        document
            .getElementById(
                "orderProduct"
            )
            ?.value || "";


    const quantity =

        Number(

            document
                .getElementById(
                    "orderQuantity"
                )
                ?.value || 0

        );


    const payment =

        document
            .getElementById(
                "paymentMethod"
            )
            ?.value || "";


    const note =

        document
            .getElementById(
                "orderNote"
            )
            ?.value
            .trim() || "";


    if (!name) {

        showToast(
            "Vui lòng nhập họ và tên."
        );


        document
            .getElementById(
                "orderName"
            )
            ?.focus();


        return false;
    }


    if (

        !phone ||

        !isValidVietnamesePhone(
            phone
        )

    ) {

        showToast(
            "Vui lòng kiểm tra lại số điện thoại."
        );


        document
            .getElementById(
                "orderPhone"
            )
            ?.focus();


        return false;
    }


    if (!address) {

        showToast(
            "Vui lòng nhập địa chỉ nhận hàng."
        );


        document
            .getElementById(
                "orderAddress"
            )
            ?.focus();


        return false;
    }


    if (!productId) {

        showToast(
            "Vui lòng chọn tên sản phẩm."
        );


        document
            .getElementById(
                "orderProduct"
            )
            ?.focus();


        return false;
    }


    if (

        !Number.isInteger(
            quantity
        ) ||

        quantity < 1

    ) {

        showToast(
            "Số lượng sản phẩm phải từ 1 trở lên."
        );


        document
            .getElementById(
                "orderQuantity"
            )
            ?.focus();


        return false;
    }


    if (!payment) {

        showToast(
            "Vui lòng chọn phương thức thanh toán."
        );


        document
            .getElementById(
                "paymentMethod"
            )
            ?.focus();


        return false;
    }


    const product =
        getProduct(productId);


    if (!product) {

        showToast(
            "Sản phẩm không hợp lệ."
        );


        return false;
    }


    const paymentNames = {

        COD:
            "Thanh toán khi nhận hàng (COD)",

        bank:
            "Chuyển khoản ngân hàng",

        "e-wallet":
            "Thanh toán điện tử"

    };


    const orderData = {

        orderId:
            "CHV-" +
            Date.now(),


        customer: {

            name,

            phone,

            address

        },


        product: {

            id:
                product.id,

            name:
                product.name,

            quantity,

            unitPrice:
                product.price,

            total:
                product.price *
                quantity

        },


        payment:
            paymentNames[payment] ||
            payment,


        note,


        hotline:
            "0855337455",


        createdAt:
            new Date().toISOString(),


        status:
            "Đã tiếp nhận thông tin"

    };


    localStorage.setItem(

        "chamHonVietLastOrder",

        JSON.stringify(
            orderData
        )
    );


    let orderHistory;


    try {

        orderHistory =
            JSON.parse(

                localStorage.getItem(
                    "chamHonVietOrders"
                ) || "[]"

            );


        if (
            !Array.isArray(
                orderHistory
            )
        ) {

            orderHistory = [];

        }

    } catch (error) {

        orderHistory = [];

    }


    orderHistory.push(
        orderData
    );


    localStorage.setItem(

        "chamHonVietOrders",

        JSON.stringify(
            orderHistory
        )
    );


    showToast(

        `Đã nhận đơn ${orderData.orderId}. Chúng tôi sẽ liên hệ ${phone} để xác nhận.`

    );


    document
        .getElementById(
            "orderForm"
        )
        ?.reset();


    const quantityInput =
        document.getElementById(
            "orderQuantity"
        );


    if (quantityInput) {

        quantityInput.value =
            "1";
    }


    updateOrderSummary();


    return false;
}


/* =========================================================
   26. KIỂM TRA SỐ ĐIỆN THOẠI
   ========================================================= */

function isValidVietnamesePhone(
    phone
) {

    const normalized =

        String(phone)
            .replace(
                /[\s.-]/g,
                ""
            );


    return /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/
        .test(normalized);
}


/* =========================================================
   27. ĐĂNG KÝ EMAIL
   ========================================================= */

function subscribeEmail(
    event
) {

    if (event) {
        event.preventDefault();
    }


    const input =

        document.getElementById(
            "emailInput"
        ) ||

        document.getElementById(
            "email"
        ) ||

        document.querySelector(
            'input[type="email"]'
        );


    if (

        !input ||

        !input.value.trim()

    ) {

        showToast(
            "Vui lòng nhập email."
        );


        return false;
    }


    const email =
        input.value.trim();


    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
        !emailRegex.test(
            email
        )
    ) {

        showToast(
            "Email chưa đúng định dạng."
        );


        return false;
    }


    localStorage.setItem(

        "chamHonVietNewsletter",

        email

    );


    input.value = "";


    showToast(
        "Đăng ký nhận thông tin thành công!"
    );


    return false;
}


/* =========================================================
   28. THÔNG BÁO
   ========================================================= */

function showToast(
    message
) {

    let toast =
        document.getElementById(
            "siteToast"
        );


    if (!toast) {

        toast =
            document.createElement(
                "div"
            );


        toast.id =
            "siteToast";


        toast.style.cssText = `

            position: fixed;

            right: 22px;

            bottom: 22px;

            z-index: 10000;

            max-width:
                min(
                    390px,
                    calc(100vw - 44px)
                );

            padding:
                14px 18px;

            border-radius:
                12px;

            background:
                #5a4030;

            color:
                #ffffff;

            box-shadow:
                0 12px 30px
                rgba(0,0,0,.18);

            font-size:
                14px;

            line-height:
                1.55;

            transform:
                translateY(20px);

            opacity:
                0;

            transition:
                .25s ease;

        `;


        document.body.appendChild(
            toast
        );
    }


    toast.textContent =
        message;


    toast.style.opacity =
        "1";


    toast.style.transform =
        "translateY(0)";


    clearTimeout(
        window.__toastTimer
    );


    window.__toastTimer =

        setTimeout(
            () => {

                toast.style.opacity =
                    "0";

                toast.style.transform =
                    "translateY(20px)";

            },

            3500
        );
}


/* =========================================================
   29. ĐỔ SẢN PHẨM VÀO FORM ĐẶT HÀNG
   ========================================================= */

function populateOrderProducts() {

    const select =
        document.getElementById(
            "orderProduct"
        );


    if (!select) {
        return;
    }


    const currentValue =
        select.value;


    select.innerHTML = `

        <option value="">
            -- Chọn sản phẩm --
        </option>


        ${products
            .map(
                product => `

                    <option
                        value="${product.id}"
                    >
                        ${escapeHtml(
                            product.name
                        )}
                        —
                        ${formatPrice(
                            product.price
                        )}
                    </option>

                `
            )
            .join("")}

    `;


    if (

        currentValue &&

        products.some(

            product =>

                String(product.id) ===
                currentValue

        )

    ) {

        select.value =
            currentValue;
    }


    updateOrderSummary();
}


/* =========================================================
   30. TÓM TẮT ĐƠN
   ========================================================= */

function updateOrderSummary() {

    const productSelect =
        document.getElementById(
            "orderProduct"
        );


    const quantityInput =
        document.getElementById(
            "orderQuantity"
        );


    const productName =
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


    if (

        !productSelect ||

        !quantityInput

    ) {

        return;
    }


    const product =
        getProduct(
            productSelect.value
        );


    let quantity =
        Number(
            quantityInput.value || 1
        );


    if (

        !Number.isFinite(
            quantity
        ) ||

        quantity < 1

    ) {

        quantity = 1;
    }


    quantity =
        Math.floor(
            quantity
        );


    if (!product) {

        if (productName) {

            productName.textContent =
                "Chưa chọn";
        }


        if (priceElement) {

            priceElement.textContent =
                "0 đ";
        }


        if (quantityElement) {

            quantityElement.textContent =
                "1";
        }


        if (totalElement) {

            totalElement.textContent =
                "0 đ";
        }


        return;
    }


    if (productName) {

        productName.textContent =
            product.name;
    }


    if (priceElement) {

        priceElement.textContent =
            formatPrice(
                product.price
            );
    }


    if (quantityElement) {

        quantityElement.textContent =
            quantity;
    }


    if (totalElement) {

        totalElement.textContent =
            formatPrice(

                product.price *
                quantity

            );
    }
}


/* =========================================================
   31. KHỞI TẠO WEBSITE
   ========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        /* =========================
           HIỂN THỊ SẢN PHẨM
           ========================= */

        renderProducts(
            "all"
        );


        /* =========================
           GIỎ HÀNG
           ========================= */

        updateCart();


        /* =========================
           FORM ĐẶT HÀNG
           ========================= */

        populateOrderProducts();


        /* =========================
           TÌM KIẾM
           ========================= */

        const searchInput =
            document.getElementById(
                "productSearch"
            );


        if (searchInput) {

            searchInput.addEventListener(

                "input",

                event => {

                    searchProducts(
                        event.target.value
                    );

                }

            );
        }


        /* =========================
           CHỌN SẢN PHẨM
           ========================= */

        const orderProduct =
            document.getElementById(
                "orderProduct"
            );


        if (orderProduct) {

            orderProduct.addEventListener(

                "change",

                updateOrderSummary

            );
        }


        /* =========================
           SỐ LƯỢNG ĐẶT HÀNG
           ========================= */

        const orderQuantity =
            document.getElementById(
                "orderQuantity"
            );


        if (orderQuantity) {

            orderQuantity.addEventListener(

                "input",

                updateOrderSummary

            );


            orderQuantity.addEventListener(

                "change",

                updateOrderSummary

            );
        }


        /* =========================
           TÓM TẮT
           ========================= */

        updateOrderSummary();


        /* =========================
           PHÍM ESC
           ========================= */

        document.addEventListener(

            "keydown",

            event => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeProductDetail();

                    toggleCart(
                        false
                    );
                }

            }

        );

    }

);
