/* =========================================================
   CHẠM VÀO HỒN VIỆT
   script.js
   ---------------------------------------------------------
   - 16 sản phẩm
   - Hiển thị lần lượt sản phẩm
   - Không hiển thị phân loại trên ảnh
   - Tên sản phẩm ngay dưới hình ảnh
   - Cộng / trừ số lượng ngay cạnh giá
   - Giỏ hàng
   - Chi tiết sản phẩm
   - Tư vấn khách hàng
   - Đặt hàng
   - Tìm kiếm
   - Newsletter
   - Hiệu ứng khi mở trang
   - Không thay đổi font chữ hiện tại
   ========================================================= */


/* =========================================================
   1. DỮ LIỆU 16 SẢN PHẨM
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
        name: "Bộ ba Bình Hoa Điểu Họa Tiết Hope",
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
        name: "Bộ ba Bình Men Rạn Họa Tiết Cổ",
        price: 2680000,
        category: "am",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bộ ba Bình Men Rạn",
        material: "Gốm Bát Tràng, men rạn",
        size: "Dòng bình trung - lớn",
        technique: "Tạo hình thủ công, phủ men rạn, nung nhiệt cao",
        description:
            "Bộ ba Bình mang bề mặt men rạn đặc trưng, tạo cảm giác cổ kính và mộc mạc. Phù hợp với không gian trà hoặc làm quà biếu.",
        use:
            "Trưng bày và quà tặng.",
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
        name: "Bộ ấm trà Lục Bình Hắc Kim Thuyền Hải Hành",
        price: 6850000,
        category: "am",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Bộ ấm trà cao cấp",
        material: "Gốm Bát Tràng, men đen - ánh kim",
        size: "Ấm trà dậu mi",
        technique: "Tạo hình, đắp nổi họa tiết, xử lý men và nung",
        description:
            "Bộ ấm trà Lục Bình tông đen ánh kim tạo cảm giác sang trọng, nổi bật với hình ảnh thuyền và cảnh biển trên thân bình.",
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
        name: "Đôi Nghệ Thuật Thuyền Buồm Vượt Sóng",
        price: 4850000,
        category: "binh",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Đôi bình trang trí nghệ thuật",
        material: "Gốm Bát Tràng, men màu",
        size: "Bình lớn - dùng trưng bày",
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
        name: "Đĩa Hoa Men Trắng Viền Vàng",
        price: 3250000,
        category: "bat",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        type: "Đĩa trang trí",
        material: "Sứ/gốm Bát Tràng, men trắng, điểm nhấn vàng",
        size: "Đĩa cỡ vừa",
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

let cart = JSON.parse(
    localStorage.getItem("chamHonVietCart") || "[]"
);


/* =========================================================
   3. SỐ LƯỢNG TẠM TRÊN CARD SẢN PHẨM
   ========================================================= */

const productQuantities = {};


/* =========================================================
   4. HÀM TIỆN ÍCH
   ========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat("vi-VN")
        .format(price) + " đ";

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


function escapeHtml(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   5. SỐ LƯỢNG TRÊN CARD
   ========================================================= */

function getProductQuantity(productId) {

    const id = Number(productId);

    if (!productQuantities[id]) {

        productQuantities[id] = 1;

    }

    return productQuantities[id];

}


function changeProductCardQuantity(
    productId,
    change
) {

    const id = Number(productId);

    let quantity =
        getProductQuantity(id) + Number(change);

    if (quantity < 1) {
        quantity = 1;
    }

    if (quantity > 99) {
        quantity = 99;
    }

    productQuantities[id] = quantity;

    document
        .querySelectorAll(
            `.product-qty-value[data-product-id="${id}"]`
        )
        .forEach(element => {

            element.textContent = quantity;

        });

}


function addProductWithQuantity(productId) {

    const quantity =
        getProductQuantity(productId);

    addToCart(
        productId,
        quantity
    );

}


/* =========================================================
   6. CARD SẢN PHẨM
   ---------------------------------------------------------
   Không còn phân loại trên hình ảnh.
   Tên sản phẩm nằm ngay dưới hình.
   ========================================================= */

function createProductCard(product) {

    const quantity =
        getProductQuantity(product.id);

    return `

        <article
            class="product-card chv-product-card"
            data-category="${product.category}"
            data-product-id="${product.id}"
            onclick="showProductDetail(${product.id})"
        >

            <div class="product-image chv-product-image">

                <img
                    src="${product.image}"
                    alt="${escapeHtml(product.name)}"
                    loading="lazy"
                    onerror="
                        this.style.display='none';
                        this.parentElement.classList.add('image-error');
                    "
                >

            </div>


            <div class="product-info chv-product-info">

                <h3 class="product-name">

                    ${escapeHtml(product.name)}

                </h3>


                <p class="product-origin">

                    ${escapeHtml(product.origin)}

                </p>


                <div class="product-purchase-row">

                    <strong class="product-price">

                        ${formatPrice(product.price)}

                    </strong>


                    <div
                        class="product-quantity-control"
                        onclick="event.stopPropagation()"
                    >

                        <button
                            type="button"
                            aria-label="Giảm số lượng"
                            onclick="
                                event.stopPropagation();
                                changeProductCardQuantity(
                                    ${product.id},
                                    -1
                                );
                            "
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
                            aria-label="Tăng số lượng"
                            onclick="
                                event.stopPropagation();
                                changeProductCardQuantity(
                                    ${product.id},
                                    1
                                );
                            "
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    type="button"
                    class="add-cart-btn chv-add-cart-btn"
                    onclick="
                        event.stopPropagation();
                        addProductWithQuantity(${product.id});
                    "
                >

                    Thêm vào giỏ

                </button>

            </div>

        </article>

    `;
}


/* =========================================================
   7. LẤY CÁC KHU VỰC SẢN PHẨM
   ========================================================= */

function getProductGrids() {

    return [

        document.getElementById("productGrid"),

        document.getElementById("productsGrid"),

        document.getElementById("product-list"),

        document.querySelector(".products-grid"),

        document.querySelector(".product-grid")

    ].filter(Boolean);

}


/* =========================================================
   8. HIỂN THỊ SẢN PHẨM
   ---------------------------------------------------------
   Sản phẩm luôn hiển thị lần lượt.
   Không hiển thị phân loại.
   ========================================================= */

function renderProducts(category = "all") {

    const grids =
        getProductGrids();

    if (!grids.length) {
        return;
    }


    let filteredProducts = products;


    /*
       Vẫn hỗ trợ filter cũ nếu HTML đang có,
       nhưng mặc định hiển thị toàn bộ sản phẩm.
    */

    if (
        category &&
        category !== "all"
    ) {

        filteredProducts =
            products.filter(
                product =>
                    product.category === category
            );

    }


    const html =
        filteredProducts
            .map(createProductCard)
            .join("");


    grids.forEach(grid => {

        grid.innerHTML = html;

    });


    animateProducts();

}


/* =========================================================
   9. HIỆU ỨNG SẢN PHẨM KHI HIỂN THỊ
   ========================================================= */

function animateProducts() {

    const cards =
        document.querySelectorAll(
            ".chv-product-card"
        );

    cards.forEach(
        (card, index) => {

            card.style.setProperty(
                "--product-delay",
                `${index * 70}ms`
            );

            card.classList.add(
                "chv-product-reveal"
            );

        }
    );

}


/* =========================================================
   10. LỌC
   ---------------------------------------------------------
   Nếu bạn bỏ nút phân loại trong HTML thì phần này
   không ảnh hưởng đến website.
   ========================================================= */

function filterProducts(
    category = "all",
    button = null
) {

    renderProducts(category);


    document
        .querySelectorAll(".filter-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    if (button) {

        button.classList.add("active");

    }

}


/* =========================================================
   11. TÌM KIẾM
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
        products.filter(product => {

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


            return searchText.includes(query);

        });


    grids.forEach(grid => {

        if (!results.length) {

            grid.innerHTML = `

                <div class="empty-products chv-empty-products">

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


        animateProducts();

    });

}


/* =========================================================
   12. POPUP CHI TIẾT SẢN PHẨM
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
        document.createElement("div");


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
                aria-label="Đóng"
            >
                ×
            </button>


            <div id="productDetailContent"></div>

        </div>

    `;


    document.body.appendChild(modal);


    addProductModalCSS();


    return modal;

}


/* =========================================================
   13. CSS TỰ ĐỘNG CHO WEBSITE
   ---------------------------------------------------------
   Không thay đổi font.
   font: inherit để sử dụng font hiện tại của website.
   ========================================================= */

function addProductModalCSS() {

    if (
        document.getElementById(
            "chamHonVietAutoStyle"
        )
    ) {
        return;
    }


    const style =
        document.createElement("style");


    style.id =
        "chamHonVietAutoStyle";


    style.textContent = `

        /* =========================================
           HIỆU ỨNG MỞ TRANG
           ========================================= */

        body.chv-page-loading::before {

            content: "";

            position: fixed;

            inset: 0;

            z-index: 99999;

            background:
                linear-gradient(
                    135deg,
                    #f7efe5,
                    #fffdf9,
                    #ead9c8
                );

            pointer-events: none;

            animation:
                chvPageCurtain 1.25s
                cubic-bezier(.77,0,.18,1)
                forwards;

        }


        body.chv-page-loading::after {

            content: "CHẠM VÀO HỒN VIỆT";

            position: fixed;

            top: 50%;

            left: 50%;

            transform:
                translate(-50%, -50%);

            z-index: 100000;

            color: #654735;

            font: inherit;

            font-weight: 700;

            font-size: 20px;

            letter-spacing: 2px;

            white-space: nowrap;

            opacity: 1;

            animation:
                chvIntroText 1.15s
                ease forwards;

        }


        @keyframes chvPageCurtain {

            0% {
                opacity: 1;
                transform: translateY(0);
            }

            70% {
                opacity: 1;
            }

            100% {
                opacity: 0;
                transform: translateY(-100%);
            }

        }


        @keyframes chvIntroText {

            0% {

                opacity: 0;

                transform:
                    translate(-50%, -40%)
                    scale(.94);

            }

            25% {

                opacity: 1;

            }

            70% {

                opacity: 1;

            }

            100% {

                opacity: 0;

                transform:
                    translate(-50%, -65%)
                    scale(1.04);

            }

        }


        /* =========================================
           CARD SẢN PHẨM
           ========================================= */

        .chv-product-card {

            overflow: hidden;

            transition:
                transform .35s ease,
                box-shadow .35s ease;

        }


        .chv-product-card:hover {

            transform:
                translateY(-7px);

            box-shadow:
                0 18px 45px
                rgba(87, 60, 40, .14);

        }


        .chv-product-image {

            position: relative;

            overflow: hidden;

        }


        .chv-product-image img {

            transition:
                transform .65s ease;

        }


        .chv-product-card:hover
        .chv-product-image img {

            transform:
                scale(1.045);

        }


        /* =========================================
           TÊN SẢN PHẨM
           ========================================= */

        .chv-product-info {

            position: relative;

        }


        .chv-product-info
        .product-name {

            display: block;

            margin:
                16px 0 8px;

            color:
                #4d3829;

            font: inherit;

            font-size:
                18px;

            font-weight:
                700;

            line-height:
                1.45;

        }


        /* =========================================
           GIÁ + CỘNG TRỪ
           ========================================= */

        .product-purchase-row {

            display:
                flex;

            align-items:
                center;

            justify-content:
                space-between;

            gap:
                10px;

            margin-top:
                15px;

        }


        .product-price {

            color:
                #986943;

            font-size:
                18px;

            font-weight:
                800;

            white-space:
                nowrap;

        }


        .product-quantity-control {

            display:
                inline-flex;

            align-items:
                center;

            border:
                1px solid #d8c6b5;

            border-radius:
                10px;

            overflow:
                hidden;

            background:
                #fffaf4;

        }


        .product-quantity-control button {

            width:
                31px;

            height:
                31px;

            border:
                none;

            background:
                transparent;

            color:
                #5d4433;

            font: inherit;

            font-size:
                18px;

            font-weight:
                700;

            cursor:
                pointer;

            transition:
                background .2s ease;

        }


        .product-quantity-control button:hover {

            background:
                #eadbca;

        }


        .product-qty-value {

            min-width:
                27px;

            text-align:
                center;

            color:
                #4d3829;

            font: inherit;

            font-weight:
                700;

        }


        .chv-add-cart-btn {

            width:
                100%;

            margin-top:
                13px;

            font: inherit;

            transition:
                transform .2s ease,
                background .2s ease;

        }


        .chv-add-cart-btn:hover {

            transform:
                translateY(-1px);

        }


        /* =========================================
           HIỆU ỨNG TỪNG SẢN PHẨM
           ========================================= */

        .chv-product-reveal {

            animation:
                chvProductReveal .65s
                cubic-bezier(.22,.61,.36,1)
                both;

            animation-delay:
                var(--product-delay, 0ms);

        }


        @keyframes chvProductReveal {

            0% {

                opacity: 0;

                transform:
                    translateY(28px)
                    scale(.97);

            }

            100% {

                opacity: 1;

                transform:
                    translateY(0)
                    scale(1);

            }

        }


        /* =========================================
           FORM TƯ VẤN KHÁCH HÀNG
           ========================================= */

        #consultationForm {

            position: relative;

            padding:
                30px;

            background:
                #fffdf9;

            border:
                1px solid #dfd0c0;

            border-radius:
                24px;

            box-shadow:
                0 18px 55px
                rgba(76, 53, 37, .10);

        }


        #consultationForm::before {

            content:
                "Thông tin khách hàng";

            display:
                block;

            margin-bottom:
                20px;

            color:
                #5c4130;

            font: inherit;

            font-size:
                20px;

            font-weight:
                700;

        }


        #consultationForm
        .form-group,

        #consultationForm
        .form-field,

        #consultationForm
        .field-group {

            padding:
                15px;

            margin-bottom:
                14px;

            background:
                #fbf7f1;

            border:
                1px solid #e5d8ca;

            border-radius:
                14px;

        }


        #consultationForm
        label {

            display:
                block;

            margin-bottom:
                7px;

            color:
                #5b4637;

            font: inherit;

            font-weight:
                600;

        }


        #consultationForm
        input {

            width:
                100%;

            box-sizing:
                border-box;

            padding:
                12px 14px;

            background:
                #ffffff;

            border:
                1px solid #ddcdbd;

            border-radius:
                10px;

            color:
                #4d3829;

            font: inherit;

            outline:
                none;

        }


        #consultationForm
        input:focus {

            border-color:
                #a47b5a;

            box-shadow:
                0 0 0 3px
                rgba(164,123,90,.10);

        }


        /* =========================================
           FORM ĐẶT HÀNG
           ========================================= */

        #orderForm {

            position: relative;

            padding:
                30px;

            background:
                #fffdf9;

            border:
                1px solid #dfd0c0;

            border-radius:
                24px;

            box-shadow:
                0 18px 55px
                rgba(76, 53, 37, .10);

        }


        #orderForm::before {

            content:
                "Thông tin đặt hàng";

            display:
                block;

            margin-bottom:
                20px;

            color:
                #5c4130;

            font: inherit;

            font-size:
                20px;

            font-weight:
                700;

        }


        #orderForm
        .form-group,

        #orderForm
        .form-field,

        #orderForm
        .field-group {

            padding:
                15px;

            margin-bottom:
                14px;

            background:
                #fbf7f1;

            border:
                1px solid #e5d8ca;

            border-radius:
                14px;

        }


        #orderForm
        label {

            display:
                block;

            margin-bottom:
                7px;

            color:
                #5b4637;

            font: inherit;

            font-weight:
                600;

        }


        #orderForm
        input,

        #orderForm
        select,

        #orderForm
        textarea {

            width:
                100%;

            box-sizing:
                border-box;

            padding:
                12px 14px;

            background:
                #ffffff;

            border:
                1px solid #ddcdbd;

            border-radius:
                10px;

            color:
                #4d3829;

            font: inherit;

            outline:
                none;

        }


        #orderForm
        textarea {

            min-height:
                100px;

            resize:
                vertical;

        }


        #orderForm
        input:focus,

        #orderForm
        select:focus,

        #orderForm
        textarea:focus {

            border-color:
                #a47b5a;

            box-shadow:
                0 0 0 3px
                rgba(164,123,90,.10);

        }


        /* =========================================
           POPUP CHI TIẾT
           ========================================= */

        .product-detail-modal {

            position:
                fixed;

            inset:
                0;

            z-index:
                9999;

            display:
                none;

        }


        .product-detail-modal.show {

            display:
                block;

        }


        .product-detail-overlay {

            position:
                absolute;

            inset:
                0;

            background:
                rgba(52,37,26,.68);

            backdrop-filter:
                blur(5px);

        }


        .product-detail-box {

            position:
                relative;

            z-index:
                2;

            width:
                min(1000px, calc(100% - 30px));

            max-height:
                calc(100vh - 40px);

            overflow-y:
                auto;

            margin:
                20px auto;

            background:
                #fffdf9;

            border-radius:
                22px;

            box-shadow:
                0 25px 80px
                rgba(0,0,0,.25);

        }


        .product-detail-close {

            position:
                absolute;

            top:
                15px;

            right:
                15px;

            width:
                42px;

            height:
                42px;

            border:
                none;

            border-radius:
                50%;

            background:
                #eadfd3;

            color:
                #4e392b;

            font: inherit;

            font-size:
                28px;

            cursor:
                pointer;

            z-index:
                5;

        }


        .product-detail-close:hover {

            background:
                #d9c8b7;

        }


        .detail-layout {

            display:
                grid;

            grid-template-columns:
                1fr 1fr;

            gap:
                32px;

            padding:
                35px;

        }


        .detail-image {

            min-height:
                430px;

            display:
                flex;

            align-items:
                center;

            justify-content:
                center;

            background:
                #f5eee5;

            border-radius:
                15px;

            overflow:
                hidden;

        }


        .detail-image img {

            width:
                100%;

            height:
                430px;

            object-fit:
                contain;

        }


        .detail-content h2 {

            margin:
                10px 50px 10px 0;

            color:
                #4d3829;

            font: inherit;

            font-size:
                29px;

            font-weight:
                700;

            line-height:
                1.3;

        }


        .detail-price {

            color:
                #986943;

            font-size:
                25px;

            font-weight:
                800;

        }


        .detail-description {

            color:
                #65564b;

            line-height:
                1.7;

        }


        .detail-list {

            list-style:
                none;

            padding:
                0;

            margin:
                20px 0;

            border-top:
                1px solid #e7ddd2;

        }


        .detail-list li {

            display:
                grid;

            grid-template-columns:
                120px 1fr;

            gap:
                12px;

            padding:
                11px 0;

            border-bottom:
                1px solid #e7ddd2;

            color:
                #5b4a3d;

            line-height:
                1.5;

        }


        .detail-list strong {

            color:
                #4d3829;

        }


        .detail-actions {

            display:
                flex;

            gap:
                10px;

            flex-wrap:
                wrap;

            margin-top:
                20px;

        }


        .detail-actions button {

            border:
                none;

            padding:
                12px 20px;

            border-radius:
                10px;

            cursor:
                pointer;

            font: inherit;

            font-weight:
                700;

        }


        .detail-cart-btn {

            background:
                #8b6041;

            color:
                white;

        }


        .detail-close-btn {

            background:
                #eee3d6;

            color:
                #564437;

        }


        /* =========================================
           TƯ VẤN + ĐẶT HÀNG TRÊN MOBILE
           ========================================= */

        @media (max-width: 720px) {

            #consultationForm,

            #orderForm {

                padding:
                    20px;

                border-radius:
                    18px;

            }


            .product-purchase-row {

                align-items:
                    flex-start;

                flex-direction:
                    column;

            }


            .detail-layout {

                grid-template-columns:
                    1fr;

                padding:
                    22px;

            }


            .detail-image {

                min-height:
                    300px;

            }


            .detail-image img {

                height:
                    300px;

            }


            .detail-content h2 {

                font-size:
                    24px;

            }


            .detail-list li {

                grid-template-columns:
                    1fr;

                gap:
                    4px;

            }

        }

    `;


    document.head.appendChild(style);

}


/* =========================================================
   14. MỞ CHI TIẾT SẢN PHẨM
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


    const quantity =
        getProductQuantity(product.id);


    content.innerHTML = `

        <div class="detail-layout">

            <div class="detail-image">

                <img
                    src="${product.image}"
                    alt="${escapeHtml(product.name)}"
                >

            </div>


            <div class="detail-content">

                <h2>
                    ${escapeHtml(product.name)}
                </h2>


                <div class="detail-price">

                    ${formatPrice(product.price)}

                </div>


                <div
                    class="product-quantity-control detail-quantity-control"
                    style="
                        display:inline-flex;
                        margin:8px 0 18px;
                    "
                >

                    <button
                        type="button"
                        onclick="
                            changeDetailQuantity(
                                ${product.id},
                                -1
                            )
                        "
                    >
                        −
                    </button>


                    <span
                        id="detailQtyValue"
                        class="product-qty-value"
                    >
                        ${quantity}
                    </span>


                    <button
                        type="button"
                        onclick="
                            changeDetailQuantity(
                                ${product.id},
                                1
                            )
                        "
                    >
                        +
                    </button>

                </div>


                <p class="detail-description">

                    ${escapeHtml(product.description)}

                </p>


                <ul class="detail-list">

                    <li>

                        <strong>
                            Xuất xứ
                        </strong>

                        <span>
                            ${escapeHtml(product.origin)}
                        </span>

                    </li>


                    <li>

                        <strong>
                            Loại đồ
                        </strong>

                        <span>
                            ${escapeHtml(product.type)}
                        </span>

                    </li>


                    <li>

                        <strong>
                            Chất liệu
                        </strong>

                        <span>
                            ${escapeHtml(product.material)}
                        </span>

                    </li>


                    <li>

                        <strong>
                            Kích thước
                        </strong>

                        <span>
                            ${escapeHtml(product.size)}
                        </span>

                    </li>


                    <li>

                        <strong>
                            Kỹ thuật
                        </strong>

                        <span>
                            ${escapeHtml(product.technique)}
                        </span>

                    </li>


                    <li>

                        <strong>
                            Công dụng
                        </strong>

                        <span>
                            ${escapeHtml(product.use)}
                        </span>

                    </li>

                </ul>


                <div class="detail-actions">

                    <button
                        type="button"
                        class="detail-cart-btn"
                        onclick="
                            addProductWithQuantity(
                                ${product.id}
                            );
                            closeProductDetail();
                        "
                    >

                        Thêm vào giỏ hàng

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


    modal.classList.add("show");


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   15. CỘNG / TRỪ TRONG CHI TIẾT
   ========================================================= */

function changeDetailQuantity(
    productId,
    change
) {

    changeProductCardQuantity(
        productId,
        change
    );


    const quantity =
        getProductQuantity(productId);


    const detailQuantity =
        document.getElementById(
            "detailQtyValue"
        );


    if (detailQuantity) {

        detailQuantity.textContent =
            quantity;

    }

}


/* =========================================================
   16. ĐÓNG CHI TIẾT
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
   17. THÊM VÀO GIỎ
   ========================================================= */

function addToCart(
    productId,
    quantity = 1
) {

    const product =
        getProduct(productId);


    if (!product) {
        return;
    }


    quantity =
        Number(quantity);


    if (!Number.isFinite(quantity) ||
        quantity < 1) {

        quantity = 1;

    }


    const existing =
        cart.find(
            item =>
                item.id === product.id
        );


    if (existing) {

        existing.quantity +=
            quantity;

    } else {

        cart.push({

            id:
                product.id,

            name:
                product.name,

            price:
                product.price,

            image:
                product.image,

            quantity:
                quantity

        });

    }


    saveCart();

    updateCart();


    showToast(
        `Đã thêm ${quantity} sản phẩm "${product.name}" vào giỏ hàng.`
    );

}


/* =========================================================
   18. TĂNG / GIẢM GIỎ HÀNG
   ========================================================= */

function changeQuantity(
    productId,
    change
) {

    const id =
        Number(productId);


    const item =
        cart.find(
            cartItem =>
                cartItem.id === id
        );


    if (!item) {
        return;
    }


    item.quantity +=
        Number(change);


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                cartItem =>
                    cartItem.id !== id
            );

    }


    saveCart();

    updateCart();

}


/* =========================================================
   19. XÓA SẢN PHẨM
   ========================================================= */

function removeFromCart(productId) {

    const id =
        Number(productId);


    cart =
        cart.filter(
            item =>
                item.id !== id
        );


    saveCart();

    updateCart();

}


/* =========================================================
   20. TỔNG GIỎ HÀNG
   ========================================================= */

function getCartTotal() {

    return cart.reduce(

        (total, item) =>

            total +
            item.price *
            item.quantity,

        0

    );

}


/* =========================================================
   21. SỐ LƯỢNG TRONG GIỎ
   ========================================================= */

function getCartCount() {

    return cart.reduce(

        (total, item) =>

            total +
            item.quantity,

        0

    );

}


/* =========================================================
   22. CẬP NHẬT GIỎ HÀNG
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

        cart.map(item => `

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


                    <div
                        class="quantity-control"
                    >

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

        `).join("");

}


/* =========================================================
   23. MỞ / ĐÓNG GIỎ
   ========================================================= */

function toggleCart(forceState) {

    const sidebar =

        document.getElementById(
            "cartSidebar"
        ) ||

        document.querySelector(
            ".cart-sidebar"
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

}


/* =========================================================
   24. CHỌN SẢN PHẨM ĐỂ ĐẶT HÀNG
   ========================================================= */

function selectProductForOrder(
    productId
) {

    const product =
        getProduct(productId);


    if (!product) {
        return;
    }


    const productSelect =
        document.getElementById(
            "orderProduct"
        );


    if (productSelect) {

        productSelect.value =
            String(product.id);

    }


    updateOrderSummary();

}


/* =========================================================
   25. ĐIỀN DANH SÁCH SẢN PHẨM VÀO FORM
   ========================================================= */

function populateOrderProducts() {

    const select =
        document.getElementById(
            "orderProduct"
        );


    if (!select) {
        return;
    }


    /*
       Nếu đã có option sản phẩm thì
       không tạo lại.
    */

    const existingOptions =
        Array.from(select.options)
            .map(option =>
                option.value
            );


    products.forEach(product => {

        if (
            existingOptions.includes(
                String(product.id)
            )
        ) {
            return;
        }


        const option =
            document.createElement(
                "option"
            );


        option.value =
            product.id;


        option.textContent =
            product.name;


        select.appendChild(
            option
        );

    });


    select.addEventListener(
        "change",
        updateOrderSummary
    );

}


/* =========================================================
   26. CẬP NHẬT TÓM TẮT ĐẶT HÀNG
   ========================================================= */

function updateOrderSummary() {

    const select =
        document.getElementById(
            "orderProduct"
        );


    if (!select) {
        return;
    }


    const product =
        getProduct(select.value);


    const quantityInput =
        document.getElementById(
            "orderQuantity"
        );


    const quantity =
        Math.max(
            1,
            Number(
                quantityInput?.value || 1
            )
        );


    const summaryProduct =
        document.getElementById(
            "orderSummaryProduct"
        );


    const summaryPrice =
        document.getElementById(
            "orderSummaryPrice"
        );


    const summaryQuantity =
        document.getElementById(
            "orderSummaryQuantity"
        );


    const summaryTotal =
        document.getElementById(
            "orderSummaryTotal"
        );


    if (!product) {

        if (summaryProduct) {
            summaryProduct.textContent =
                "Chưa chọn sản phẩm";
        }

        if (summaryPrice) {
            summaryPrice.textContent =
                "0 đ";
        }

        if (summaryQuantity) {
            summaryQuantity.textContent =
                "0";
        }

        if (summaryTotal) {
            summaryTotal.textContent =
                "0 đ";
        }

        return;

    }


    if (summaryProduct) {

        summaryProduct.textContent =
            product.name;

    }


    if (summaryPrice) {

        summaryPrice.textContent =
            formatPrice(product.price);

    }


    if (summaryQuantity) {

        summaryQuantity.textContent =
            quantity;

    }


    if (summaryTotal) {

        summaryTotal.textContent =
            formatPrice(
                product.price *
                quantity
            );

    }

}


/* =========================================================
   27. KIỂM TRA SỐ ĐIỆN THOẠI VIỆT NAM
   ========================================================= */

function isValidVietnamesePhone(
    phone
) {

    const normalized =
        String(phone || "")
            .replace(/\s+/g, "")
            .replace(/-/g, "")
            .replace(/\./g, "");


    return /^(0|\+84)(3|5|7|8|9)\d{8}$/
        .test(normalized);

}


/* =========================================================
   28. TƯ VẤN KHÁCH HÀNG
   ---------------------------------------------------------
   Họ tên + số điện thoại
   ========================================================= */

function submitConsultation(event) {

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
        nameInput
            ? nameInput.value.trim()
            : "";


    const phone =
        phoneInput
            ? phoneInput.value.trim()
            : "";


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
            "Số điện thoại chưa đúng định dạng."
        );

        phoneInput?.focus();

        return false;

    }


    const consultation = {

        name:
            name,

        phone:
            phone,

        time:
            new Date().toISOString()

    };


    localStorage.setItem(

        "chamHonVietConsultation",

        JSON.stringify(
            consultation
        )

    );


    showToast(
        "Đã nhận thông tin tư vấn. Chúng tôi sẽ liên hệ với bạn qua số điện thoại."
    );


    if (
        document.getElementById(
            "consultationForm"
        )
    ) {

        document
            .getElementById(
                "consultationForm"
            )
            .reset();

    }


    return false;

}


/* =========================================================
   29. ĐẶT HÀNG
   ---------------------------------------------------------
   Họ tên
   Số điện thoại
   Địa chỉ
   Sản phẩm
   Số lượng
   Thanh toán
   Ghi chú
   ========================================================= */

function submitOrder(event) {

    if (event) {

        event.preventDefault();

    }


    const name =
        document.getElementById(
            "orderName"
        )?.value.trim() || "";


    const phone =
        document.getElementById(
            "orderPhone"
        )?.value.trim() || "";


    const address =
        document.getElementById(
            "orderAddress"
        )?.value.trim() || "";


    const productId =
        document.getElementById(
            "orderProduct"
        )?.value || "";


    const quantity =
        Math.max(

            1,

            Number(
                document.getElementById(
                    "orderQuantity"
                )?.value || 1
            )

        );


    const payment =
        document.getElementById(
            "paymentMethod"
        )?.value || "";


    const note =
        document.getElementById(
            "orderNote"
        )?.value.trim() || "";


    if (!name) {

        showToast(
            "Vui lòng nhập họ và tên."
        );

        return false;

    }


    if (!phone) {

        showToast(
            "Vui lòng nhập số điện thoại."
        );

        return false;

    }


    if (
        !isValidVietnamesePhone(
            phone
        )
    ) {

        showToast(
            "Số điện thoại chưa đúng định dạng."
        );

        return false;

    }


    if (!address) {

        showToast(
            "Vui lòng nhập địa chỉ nhận hàng."
        );

        return false;

    }


    const product =
        getProduct(productId);


    if (!product) {

        showToast(
            "Vui lòng chọn sản phẩm."
        );

        return false;

    }


    if (!payment) {

        showToast(
            "Vui lòng chọn phương thức thanh toán."
        );

        return false;

    }


    const total =
        product.price *
        quantity;


    const paymentNames = {

        COD:
            "Thanh toán khi nhận hàng (COD)",

        bank:
            "Chuyển khoản ngân hàng",

        "e-wallet":
            "Thanh toán điện tử"

    };


    const order = {

        id:
            "CHV-" +
            Date.now(),

        customer: {

            name:
                name,

            phone:
                phone,

            address:
                address

        },

        product: {

            id:
                product.id,

            name:
                product.name,

            price:
                product.price,

            quantity:
                quantity,

            total:
                total

        },

        payment:
            payment,

        paymentName:
            paymentNames[payment] ||
            payment,

        note:
            note,

        createdAt:
            new Date().toISOString()

    };


    localStorage.setItem(

        "chamHonVietLastOrder",

        JSON.stringify(
            order
        )

    );


    let orders = [];


    try {

        orders =
            JSON.parse(
                localStorage.getItem(
                    "chamHonVietOrders"
                ) || "[]"
            );

    } catch (error) {

        orders = [];

    }


    orders.push(order);


    localStorage.setItem(

        "chamHonVietOrders",

        JSON.stringify(
            orders
        )

    );


    showToast(

        `Đặt hàng thành công! Tổng tiền: ${formatPrice(total)}.`

    );


    const orderForm =
        document.getElementById(
            "orderForm"
        );


    if (orderForm) {

        orderForm.reset();

    }


    updateOrderSummary();


    return false;

}


/* =========================================================
   30. THANH TOÁN TỪ GIỎ
   ========================================================= */

function checkout() {

    if (!cart.length) {

        showToast(
            "Giỏ hàng đang trống."
        );

        return;

    }


    /*
       Nếu có form đặt hàng,
       chuyển sản phẩm đầu tiên vào form.
    */

    const firstItem =
        cart[0];


    selectProductForOrder(
        firstItem.id
    );


    const quantityInput =
        document.getElementById(
            "orderQuantity"
        );


    if (quantityInput) {

        quantityInput.value =
            firstItem.quantity;

    }


    updateOrderSummary();


    const orderForm =
        document.getElementById(
            "orderForm"
        );


    if (orderForm) {

        orderForm.scrollIntoView({

            behavior:
                "smooth",

            block:
                "center"

        });


        showToast(
            "Đã chuyển sản phẩm sang phần đặt hàng. Vui lòng điền thông tin để hoàn tất."
        );

        return;

    }


    /*
       Nếu trang không có form đặt hàng
       thì vẫn giữ hành vi cũ.
    */

    const total =
        getCartTotal();


    const confirmed =
        window.confirm(

            `Xác nhận đặt hàng với tổng giá trị ${formatPrice(total)}?`

        );


    if (!confirmed) {
        return;
    }


    cart = [];


    saveCart();

    updateCart();

    toggleCart(false);


    showToast(
        "Đặt hàng thành công! Đây là website mô phỏng."
    );

}


/* =========================================================
   31. ĐĂNG KÝ EMAIL
   ========================================================= */

function subscribeEmail(event) {

    if (event) {

        event.preventDefault();

    }


    const input =

        document.getElementById(
            "emailInput"
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


    if (!emailRegex.test(email)) {

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
   32. TOAST
   ========================================================= */

function showToast(message) {

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

            z-index: 100001;

            max-width:
                min(
                    390px,
                    calc(100vw - 44px)
                );

            padding:
                13px 17px;

            border-radius:
                12px;

            background:
                #5a4030;

            color:
                #ffffff;

            box-shadow:
                0 12px 30px
                rgba(0,0,0,.18);

            font: inherit;

            font-size:
                14px;

            line-height:
                1.5;

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
        setTimeout(() => {

            toast.style.opacity =
                "0";

            toast.style.transform =
                "translateY(20px)";

        }, 2800);

}


/* =========================================================
   33. HIỆU ỨNG MỞ TRANG
   ========================================================= */

function startPageIntro() {

    /*
       Không đổi font.
       Chỉ tạo hiệu ứng màn hình mở đầu.
    */

    document.body.classList.add(
        "chv-page-loading"
    );


    setTimeout(() => {

        document.body.classList.remove(
            "chv-page-loading"
        );

    }, 1300);

}


/* =========================================================
   34. KHỞI TẠO WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
           Thêm CSS
        */

        addProductModalCSS();


        /*
           Hiệu ứng khi mới vào website
        */

        startPageIntro();


        /*
           Hiển thị toàn bộ 16 sản phẩm
        */

        renderProducts("all");


        /*
           Cập nhật giỏ
        */

        updateCart();


        /*
           Tạo danh sách sản phẩm
           trong form đặt hàng
        */

        populateOrderProducts();


        /*
           Cập nhật tóm tắt đơn hàng
        */

        updateOrderSummary();


        /*
           Tìm kiếm
        */

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


        /*
           Khi thay đổi số lượng đặt hàng
        */

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


        /*
           Khi chọn sản phẩm
        */

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


        /*
           Nhấn ESC để đóng popup
        */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeProductDetail();

                }

            }
        );

    }
);


/* =========================================================
   35. TƯƠNG THÍCH TRANG CŨ
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCart();

        populateOrderProducts();

        updateOrderSummary();

    }
);
