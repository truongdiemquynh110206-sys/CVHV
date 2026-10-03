/* =========================================================
   script.js
   WEBSITE GỐM SỨ BÁT TRÀNG
   ========================================================= */

/* =========================================================
   1. DỮ LIỆU SẢN PHẨM
   ========================================================= */

const products = [

    /* =====================================================
       NHÓM 1: BÌNH
       ===================================================== */

    {
        id: 1,
        category: "binh",
        categoryName: "Bình",
        name: "Bình Gốm Bát Tràng Họa Tiết Thủ Công",
        price: 1850000,
        image: "https://xuonggomsuviet.vn/wp-content/uploads/2019/04/doc-dao-ky-thuat-trang-tri-tren-san-pham-gom-su-bat-trang-1.jpg",
        origin: "Làng gốm Bát Tràng, Gia Lâm, Hà Nội",
        material: "Đất sét cao cấp, men gốm truyền thống",
        size: "Cao khoảng 35 – 40 cm",
        description:
            "Bình gốm trang trí lấy cảm hứng từ kỹ thuật tạo hình và trang trí thủ công của các nghệ nhân Bát Tràng.",
        details:
            "Sản phẩm phù hợp để trưng bày tại phòng khách, phòng làm việc, sảnh hoặc không gian trà. Mỗi sản phẩm thủ công có thể có sự khác biệt nhẹ về màu men và đường nét.",
        stock: 8
    },

    {
        id: 2,
        category: "binh",
        categoryName: "Bình",
        name: "Bình Gốm Bát Tràng Men Họa Tiết Nghệ Thuật",
        price: 2450000,
        image: "https://battrangvietnam.vn/wp-content/uploads/2024/09/dong-san-pham-dac-trung-cua-bat-trang-13.jpg",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        material: "Gốm sứ cao cấp, men trang trí",
        size: "Cao khoảng 30 – 45 cm",
        description:
            "Mẫu bình mang vẻ đẹp đặc trưng của gốm Bát Tràng với phần thân được trang trí bằng các họa tiết thủ công.",
        details:
            "Có thể sử dụng để cắm hoa hoặc trưng bày độc lập. Phù hợp với không gian nội thất hiện đại kết hợp nét truyền thống.",
        stock: 6
    },

    {
        id: 3,
        category: "binh",
        categoryName: "Bình",
        name: "Bảo Bình Sen Cá Phú Quý Bát Tràng",
        price: 4850000,
        image: "https://godinh.com/web/image/product.template/81280/image_512/B%E1%BA%A3o%20B%C3%ACnh%20Sen%20C%C3%A1%20Ph%C3%BA%20Qu%C3%BD%20Cao%2060%20%C4%90%C6%B0%E1%BB%9Dng%20K%C3%ADnh%2034%20%28cm%29?unique=a500000",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        material: "Gốm sứ cao cấp, họa tiết sen cá",
        size: "Cao khoảng 60 cm, đường kính khoảng 34 cm",
        description:
            "Bảo bình cỡ lớn với chủ đề sen và cá, thích hợp làm vật phẩm trang trí cho phòng khách, sảnh hoặc không gian sang trọng.",
        details:
            "Thiết kế nổi bật với kích thước lớn và họa tiết mang ý nghĩa may mắn, phú quý. Phù hợp làm quà tặng tân gia hoặc quà biếu cao cấp.",
        stock: 3
    },

    {
        id: 4,
        category: "binh",
        categoryName: "Bình",
        name: "Bình Gốm Men Hỏa Biến Trang Trí",
        price: 3250000,
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShIutqHKIFFs45SDMVl9Jm8soG0eFnqgLoNSOd_asQBJE52M5j",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        material: "Gốm sứ, men hỏa biến",
        size: "Cao khoảng 30 – 40 cm",
        description:
            "Bình trang trí sử dụng hiệu ứng men hỏa biến tạo nên màu sắc độc đáo trong quá trình nung.",
        details:
            "Do đặc điểm của men hỏa biến, mỗi sản phẩm có thể có sắc độ khác nhau và tạo cảm giác gần như độc bản.",
        stock: 5
    },

    {
        id: 5,
        category: "binh",
        categoryName: "Bình",
        name: "Bình Gốm Trang Trí Dáng Nghệ Thuật",
        price: 2950000,
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMKFGtC66RZipOkQeJgtMMAfcENcr5WdIWRu9TFALRATRhGpBj",
        origin: "Bát Tràng, Hà Nội",
        material: "Gốm nung nhiệt độ cao, men trang trí",
        size: "Cao khoảng 32 – 42 cm",
        description:
            "Bình gốm dáng nghệ thuật dành cho những không gian nội thất sang trọng.",
        details:
            "Có thể kết hợp với hoa khô, hoa tươi hoặc sử dụng như một vật phẩm trang trí độc lập.",
        stock: 5
    },

    {
        id: 6,
        category: "binh",
        categoryName: "Bình",
        name: "Bình Gốm Trang Trí Men Cao Cấp",
        price: 2750000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9W4D4mGP2J6ZGS1DJNzcZ5K1DYBdJGXJA46hAFzx7jOTK5egaFjWn5Hr&s=10",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        material: "Gốm sứ cao cấp, men phủ trang trí",
        size: "Cao khoảng 30 – 40 cm",
        description:
            "Mẫu bình trang trí thanh lịch, phù hợp nhiều phong cách nội thất.",
        details:
            "Bề mặt men tạo cảm giác sang trọng. Nên vệ sinh bằng khăn mềm và tránh sử dụng chất tẩy rửa mạnh.",
        stock: 7
    },


    /* =====================================================
       NHÓM 2: ẤM TRÀ
       ===================================================== */

    {
        id: 7,
        category: "am-tra",
        categoryName: "Ấm trà",
        name: "Ấm Trà Gốm Bát Tràng Men Họa Tiết",
        price: 1250000,
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqTjHmLxve9gZTwigiRXZm_VY3RcPht7_IgL5_YLOvPX-oAafI",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        material: "Gốm sứ nung nhiệt độ cao",
        size: "Dung tích khoảng 700 – 900 ml",
        description:
            "Ấm trà thủ công mang phong cách Bát Tràng, phù hợp sử dụng trong gia đình hoặc phòng trà.",
        details:
            "Thân ấm chắc tay, thiết kế thuận tiện cho việc rót trà và giữ nhiệt.",
        stock: 10
    },

    {
        id: 8,
        category: "am-tra",
        categoryName: "Ấm trà",
        name: "Bộ Ấm Chén Gốm Bát Tràng Men Hỏa Biến",
        price: 1890000,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mifiykrms9ag43",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        material: "Gốm sứ cao cấp, men hỏa biến",
        size: "Ấm khoảng 700 ml, kèm chén",
        description:
            "Bộ ấm chén dành cho không gian thưởng trà, nổi bật bởi màu men biến đổi tự nhiên.",
        details:
            "Sắc men của từng bộ có thể khác nhau nhẹ do quá trình nung thủ công.",
        stock: 8
    },

    {
        id: 9,
        category: "am-tra",
        categoryName: "Ấm trà",
        name: "Ấm Trà Gốm Men Thanh Lịch Bát Tràng",
        price: 1580000,
        image: "https://bizweb.dktcdn.net/100/659/338/products/2e9c6da5-bca0-4a06-97a3-0c85f3d74a57.jpg?v=1773291686963",
        origin: "Bát Tràng, Hà Nội",
        material: "Gốm sứ, men phủ cao cấp",
        size: "Dung tích khoảng 600 – 800 ml",
        description:
            "Mẫu ấm trà có kiểu dáng cân đối, thích hợp thưởng trà tại gia và làm quà tặng.",
        details:
            "Thiết kế ưu tiên cảm giác cầm nắm chắc chắn và thao tác rót trà thuận tiện.",
        stock: 9
    },

    {
        id: 10,
        category: "am-tra",
        categoryName: "Ấm trà",
        name: "Bộ Ấm Chén Trà Gốm Nghệ Thuật",
        price: 2150000,
        image: "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/486496hTq/anh-mo-ta.png",
        origin: "Làng nghề Bát Tràng, Hà Nội",
        material: "Gốm sứ thủ công, men trang trí",
        size: "Bộ ấm và chén, dung tích khoảng 600 – 800 ml",
        description:
            "Bộ trà mang phong cách trang nhã, phù hợp phòng khách, phòng trà hoặc làm quà tặng.",
        details:
            "Nên rửa bằng miếng mềm và tránh va đập mạnh để giữ bề mặt men.",
        stock: 6
    },


    /* =====================================================
       NHÓM 3: ĐĨA
       ===================================================== */

    {
        id: 11,
        category: "dia",
        categoryName: "Đĩa",
        name: "Bộ Đĩa Gốm Gia Cổ Họa Tiết Hoa Cúc Vẽ Tay",
        price: 3650000,
        image: "https://battrangvietnam.vn/wp-content/uploads/2024/04/bo-bat-dia-gia-co-hoa-tiet-hoa-cuc-ve-tay-4.jpg",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        material: "Sứ cao cấp, họa tiết hoa cúc vẽ tay",
        size: "Bộ nhiều kích thước đĩa",
        description:
            "Bộ đĩa phong cách gia cổ với họa tiết hoa cúc được trang trí thủ công.",
        details:
            "Phù hợp sử dụng trong gia đình, bàn ăn tiếp khách hoặc làm quà tặng.",
        stock: 4
    },

    {
        id: 12,
        category: "dia",
        categoryName: "Đĩa",
        name: "Bộ Đĩa Sứ Hoa Sen Xanh Bát Tràng",
        price: 3290000,
        image: "https://battrangvietnam.vn/wp-content/uploads/2024/04/bo-bat-dia-su-trang-hoa-tiet-hoa-sen-xanh-2.jpg",
        origin: "Bát Tràng, Hà Nội",
        material: "Sứ trắng cao cấp, họa tiết hoa sen xanh",
        size: "Bộ nhiều kích thước",
        description:
            "Bộ đĩa sứ trắng trang trí hoa sen xanh mang phong cách thanh nhã.",
        details:
            "Phù hợp với bàn ăn gia đình, các buổi tiếp khách hoặc làm quà tặng.",
        stock: 5
    },

    {
        id: 13,
        category: "dia",
        categoryName: "Đĩa",
        name: "Đĩa Trang Trí Gốm Bát Tràng Họa Tiết Thủ Công",
        price: 980000,
        image: "https://product.hstatic.net/200000258799/product/z6560994619592_1dd138feeafdadd8b79ef6d63e0a82b1_28308021f6864719bf8ebce77630607a_master.jpg",
        origin: "Bát Tràng, Hà Nội",
        material: "Gốm sứ nung nhiệt độ cao",
        size: "Đường kính khoảng 25 – 35 cm",
        description:
            "Đĩa gốm trang trí có thể sử dụng độc lập trên tường, kệ hoặc kết hợp với các sản phẩm gốm khác.",
        details:
            "Nếu treo tường nên sử dụng giá đỡ chuyên dụng phù hợp với trọng lượng sản phẩm.",
        stock: 8
    },

    {
        id: 14,
        category: "dia",
        categoryName: "Đĩa",
        name: "Đĩa Gốm Trang Trí Men Nghệ Thuật",
        price: 1150000,
        image: "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/771821988_122135833587169230_2395659175711073556_n.jpg?stp=dst-jpg_tt6&cstp=mx768x1024&ctp=s768x1024&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHoW0rPQhSXK-GdCQHCKHEgNHWlIHr8PNw0daUgevw83EZJiTniqtfcnoWeRxUqot943OppSFf4AjLsB5q9sqoG&_nc_ohc=Jg-cCt6WDysQ7kNvwEoAvJE&_nc_oc=Ad9F9XfgQPQi1fz1reGrQDW98i7-5u93o7N1DtPJSXBZFWvCoaLfZZbKYoJSG7SM2Kg&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=R8wbuq8c4H8zQlhikj1gzg&_nc_ss=7b2a8&oh=00_AQMUzAhP_tjQrll9Fwf3P7SJw_g8XKIk16a0opyz4dCMXQ&oe=6AC69CCE",
        origin: "Bát Tràng, Hà Nội",
        material: "Gốm sứ, men trang trí",
        size: "Đường kính khoảng 28 – 32 cm",
        description:
            "Đĩa trang trí mang sắc thái thủ công, thích hợp làm điểm nhấn cho bàn trà, kệ tủ hoặc phòng khách.",
        details:
            "Màu men có thể khác biệt nhẹ tùy điều kiện ánh sáng và quá trình nung.",
        stock: 6
    },

    {
        id: 15,
        category: "dia",
        categoryName: "Đĩa",
        name: "Đĩa Gốm Bát Tràng Dáng Trang Trí Cao Cấp",
        price: 1290000,
        image: "https://neon.vn/image/cache/catalog/products/D39-2-1100x1100.jpg.webp",
        origin: "Bát Tràng, Gia Lâm, Hà Nội",
        material: "Gốm sứ cao cấp, men phủ",
        size: "Đường kính khoảng 30 cm",
        description:
            "Mẫu đĩa trang trí cao cấp dành cho không gian sống yêu thích vẻ đẹp thủ công Việt Nam.",
        details:
            "Có thể sử dụng làm đĩa trưng bày hoặc kết hợp với các sản phẩm khác trong bộ sưu tập.",
        stock: 5
    },


    /* =====================================================
       NHÓM 4: BỘ BÁT ĐŨA
       ===================================================== */

    {
        id: 16,
        category: "bo-bat-dua",
        categoryName: "Bộ bát đũa",
        name: "Bộ Bát Đũa Gốm Bát Tràng Phong Cách Truyền Thống",
        price: 2450000,
        image: "https://i1-vnexpress.vnecdn.net/2019/12/19/lang-gom-Bat-Trang-png-6590-1576729451.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=qNrvTb1lci5tRl9RRQ9COw",
        origin: "Làng gốm Bát Tràng, Gia Lâm, Hà Nội",
        material: "Gốm sứ gia dụng cao cấp",
        size: "Bộ dùng cho gia đình 4 – 6 người",
        description:
            "Bộ đồ ăn lấy cảm hứng từ các sản phẩm gốm Bát Tràng, thích hợp sử dụng hằng ngày hoặc làm quà tặng.",
        details:
            "Có thể kết hợp thêm đĩa, bát và các món phụ kiện trong cùng phong cách.",
        stock: 6
    },

    {
        id: 17,
        category: "bo-bat-dua",
        categoryName: "Bộ bát đũa",
        name: "Bộ Bát Đũa Gốm Sứ Cao Cấp Họa Tiết Trang Nhã",
        price: 2890000,
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShIutqHKIFFs45SDMVl9Jm8soG0eFnqgLoNSOd_asQBJE52M5j",
        origin: "Bát Tràng, Hà Nội",
        material: "Sứ cao cấp, men trang trí",
        size: "Bộ gia đình 4 – 6 người",
        description:
            "Bộ bát đũa hướng tới không gian bàn ăn cao cấp, chú trọng sự đồng bộ giữa các món.",
        details:
            "Phù hợp gia đình, nhà hàng phong cách Việt hoặc sử dụng làm quà tặng tân gia.",
        stock: 5
    }

];


/* =========================================================
   2. GIỎ HÀNG
   ========================================================= */

let cart = JSON.parse(
    localStorage.getItem("batTrangCart") || "[]"
);


/* =========================================================
   3. TRẠNG THÁI BỘ LỌC
   ========================================================= */

let currentCategory = "all";
let currentSearch = "";
let currentSort = "default";


/* =========================================================
   4. HÀM ĐỊNH DẠNG GIÁ
   ========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat("vi-VN").format(price) + " ₫";

}


/* =========================================================
   5. TÌM ELEMENT
   ========================================================= */

function getElement(selector) {

    return document.querySelector(selector);

}

function getElements(selector) {

    return document.querySelectorAll(selector);

}


/* =========================================================
   6. LỌC SẢN PHẨM
   ========================================================= */

function getFilteredProducts() {

    let result = products.filter(product => {

        const categoryOK =
            currentCategory === "all" ||
            product.category === currentCategory;

        const keyword = currentSearch
            .trim()
            .toLowerCase();

        const searchOK =
            keyword === "" ||
            product.name.toLowerCase().includes(keyword) ||
            product.categoryName.toLowerCase().includes(keyword) ||
            product.material.toLowerCase().includes(keyword) ||
            product.origin.toLowerCase().includes(keyword);

        return categoryOK && searchOK;

    });


    if (currentSort === "price-asc") {

        result.sort((a, b) => a.price - b.price);

    }

    if (currentSort === "price-desc") {

        result.sort((a, b) => b.price - a.price);

    }

    if (currentSort === "name") {

        result.sort((a, b) =>
            a.name.localeCompare(b.name, "vi")
        );

    }

    return result;

}


/* =========================================================
   7. HIỂN THỊ SẢN PHẨM
   ========================================================= */

function renderProducts() {

    const grid =
        getElement("#productGrid") ||
        getElement(".product-grid") ||
        getElement("#products");

    if (!grid) return;


    const filteredProducts =
        getFilteredProducts();


    if (filteredProducts.length === 0) {

        grid.innerHTML = `
            <div class="empty-products">
                Không tìm thấy sản phẩm phù hợp.
            </div>
        `;

        return;

    }


    grid.innerHTML =
        filteredProducts.map(product => {

            return `

                <article
                    class="product-card"
                    data-product-id="${product.id}"
                >

                    <button
                        class="product-image-button"
                        data-detail="${product.id}"
                        type="button"
                    >

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            loading="lazy"
                        >

                    </button>


                    <div class="product-info">

                        <div class="product-category">
                            ${product.categoryName}
                        </div>


                        <button
                            type="button"
                            class="product-name"
                            data-detail="${product.id}"
                        >
                            ${product.name}
                        </button>


                        <div class="product-price">
                            ${formatPrice(product.price)}
                        </div>


                        <div class="product-actions">


                            <div class="quantity-control">

                                <button
                                    type="button"
                                    data-qty-minus="${product.id}"
                                >
                                    −
                                </button>


                                <span id="qty-${product.id}">
                                    1
                                </span>


                                <button
                                    type="button"
                                    data-qty-plus="${product.id}"
                                >
                                    +
                                </button>

                            </div>


                            <button
                                type="button"
                                class="add-to-cart"
                                data-add-cart="${product.id}"
                            >
                                Thêm giỏ hàng
                            </button>

                        </div>


                        <button
                            type="button"
                            class="detail-link"
                            data-detail="${product.id}"
                        >
                            Xem chi tiết
                        </button>

                    </div>

                </article>

            `;

        }).join("");

}


/* =========================================================
   8. SỐ LƯỢNG TRÊN SẢN PHẨM
   ========================================================= */

const cardQuantities = new Map();


function getCardQuantity(productId) {

    return cardQuantities.get(Number(productId)) || 1;

}


function setCardQuantity(productId, quantity) {

    const product =
        products.find(
            item => item.id === Number(productId)
        );

    if (!product) return;


    quantity = Math.max(
        1,
        Math.min(quantity, product.stock)
    );


    cardQuantities.set(
        product.id,
        quantity
    );


    const display =
        document.querySelector(
            `#qty-${product.id}`
        );


    if (display) {

        display.textContent = quantity;

    }

}


/* =========================================================
   9. CHI TIẾT SẢN PHẨM
   ========================================================= */

function openProductDetail(productId) {

    const product =
        products.find(
            item => item.id === Number(productId)
        );

    if (!product) return;


    const modal =
        getElement("#productModal") ||
        getElement("#productDetailModal") ||
        getElement(".product-modal");


    const content =
        getElement("#productModalContent") ||
        getElement("#productDetailContent") ||
        getElement(".product-modal-content");


    if (!modal || !content) {

        alert(

            product.name +

            "\n\nGiá: " +
            formatPrice(product.price) +

            "\nXuất xứ: " +
            product.origin +

            "\nChất liệu: " +
            product.material +

            "\nKích thước: " +
            product.size +

            "\n\n" +
            product.description

        );

        return;

    }


    content.innerHTML = `

        <div class="product-detail">


            <div class="product-detail-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="product-detail-info">

                <div class="product-category">
                    ${product.categoryName}
                </div>


                <h2>
                    ${product.name}
                </h2>


                <div class="product-detail-price">
                    ${formatPrice(product.price)}
                </div>


                <div class="product-detail-list">

                    <p>
                        <strong>Xuất xứ:</strong>
                        ${product.origin}
                    </p>


                    <p>
                        <strong>Chất liệu:</strong>
                        ${product.material}
                    </p>


                    <p>
                        <strong>Kích thước:</strong>
                        ${product.size}
                    </p>


                    <p>
                        <strong>Tình trạng:</strong>
                        Còn ${product.stock} sản phẩm
                    </p>

                </div>


                <div class="product-detail-description">

                    <h3>
                        Thông tin sản phẩm
                    </h3>


                    <p>
                        ${product.description}
                    </p>


                    <p>
                        ${product.details}
                    </p>

                </div>


                <div class="product-actions detail-actions">


                    <div class="quantity-control">

                        <button
                            type="button"
                            data-detail-minus="${product.id}"
                        >
                            −
                        </button>


                        <span id="detail-qty-${product.id}">
                            1
                        </span>


                        <button
                            type="button"
                            data-detail-plus="${product.id}"
                        >
                            +
                        </button>

                    </div>


                    <button
                        type="button"
                        class="add-to-cart"
                        data-detail-add="${product.id}"
                    >
                        Thêm vào giỏ hàng
                    </button>

                </div>

            </div>

        </div>

    `;


    modal.classList.add("is-open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   10. ĐÓNG CHI TIẾT
   ========================================================= */

function closeProductDetail() {

    const modal =
        getElement("#productModal") ||
        getElement("#productDetailModal") ||
        getElement(".product-modal");


    if (!modal) return;


    modal.classList.remove("is-open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   11. SỐ LƯỢNG TRONG CHI TIẾT
   ========================================================= */

const detailQuantities = new Map();


function getDetailQuantity(productId) {

    return detailQuantities.get(
        Number(productId)
    ) || 1;

}


function setDetailQuantity(
    productId,
    quantity
) {

    const product =
        products.find(
            item => item.id === Number(productId)
        );

    if (!product) return;


    quantity = Math.max(
        1,
        Math.min(quantity, product.stock)
    );


    detailQuantities.set(
        product.id,
        quantity
    );


    const display =
        document.querySelector(
            `#detail-qty-${product.id}`
        );


    if (display) {

        display.textContent = quantity;

    }

}


/* =========================================================
   12. THÊM SẢN PHẨM VÀO GIỎ
   ========================================================= */

function addToCart(
    productId,
    quantity = 1
) {

    const product =
        products.find(
            item => item.id === Number(productId)
        );

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === product.id
        );


    if (existing) {

        existing.quantity = Math.min(

            existing.quantity + quantity,

            product.stock

        );

    } else {

        cart.push({

            id: product.id,

            quantity:
                Math.min(
                    quantity,
                    product.stock
                )

        });

    }


    saveCart();

    renderCart();

    showToast(
        `Đã thêm "${product.name}" vào giỏ hàng.`
    );

}


/* =========================================================
   13. LƯU GIỎ HÀNG
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        "batTrangCart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   14. XÓA SẢN PHẨM KHỎI GIỎ
   ========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== Number(productId)
        );


    saveCart();

    renderCart();

}


/* =========================================================
   15. THAY ĐỔI SỐ LƯỢNG TRONG GIỎ
   ========================================================= */

function changeCartQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            cartItem =>
                cartItem.id === Number(productId)
        );


    const product =
        products.find(
            productItem =>
                productItem.id === Number(productId)
        );


    if (!item || !product) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    item.quantity =
        Math.min(
            item.quantity,
            product.stock
        );


    saveCart();

    renderCart();

}


/* =========================================================
   16. TỔNG SỐ LƯỢNG GIỎ HÀNG
   ========================================================= */

function getCartCount() {

    return cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

}


/* =========================================================
   17. TỔNG TIỀN
   ========================================================= */

function getCartTotal() {

    return cart.reduce(
        (total, item) => {

            const product =
                products.find(
                    p => p.id === item.id
                );


            if (!product) {

                return total;

            }


            return (
                total +
                product.price *
                item.quantity
            );

        },
        0
    );

}


/* =========================================================
   18. HIỂN THỊ GIỎ HÀNG
   ========================================================= */

function renderCart() {

    const cartItems =
        getElement("#cartItems") ||
        getElement(".cart-items");


    const cartTotal =
        getElement("#cartTotal") ||
        getElement(".cart-total");


    const cartCount =
        getElement("#cartCount") ||
        getElement(".cart-count");


    if (cartCount) {

        cartCount.textContent =
            getCartCount();

    }


    if (cartTotal) {

        cartTotal.textContent =
            formatPrice(
                getCartTotal()
            );

    }


    if (!cartItems) return;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                Giỏ hàng đang trống.

            </div>

        `;

        return;

    }


    cartItems.innerHTML =

        cart.map(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );


            if (!product) return "";


            return `

                <div class="cart-item">


                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >


                    <div class="cart-item-info">


                        <button
                            type="button"
                            class="cart-item-name"
                            data-detail="${product.id}"
                        >
                            ${product.name}
                        </button>


                        <div class="cart-item-price">

                            ${formatPrice(product.price)}

                        </div>


                        <div class="cart-item-bottom">


                            <div class="quantity-control">

                                <button
                                    type="button"
                                    data-cart-minus="${product.id}"
                                >
                                    −
                                </button>


                                <span>
                                    ${item.quantity}
                                </span>


                                <button
                                    type="button"
                                    data-cart-plus="${product.id}"
                                >
                                    +
                                </button>

                            </div>


                            <button
                                type="button"
                                class="remove-cart"
                                data-remove-cart="${product.id}"
                            >
                                Xóa
                            </button>


                        </div>

                    </div>

                </div>

            `;

        }).join("");

}


/* =========================================================
   19. MỞ GIỎ HÀNG
   ========================================================= */

function openCart() {

    const panel =
        getElement("#cartPanel") ||
        getElement(".cart-panel");


    const overlay =
        getElement("#cartOverlay") ||
        getElement(".cart-overlay");


    if (panel) {

        panel.classList.add(
            "is-open"
        );

        panel.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    if (overlay) {

        overlay.classList.add(
            "is-open"
        );

    }

}


/* =========================================================
   20. ĐÓNG GIỎ HÀNG
   ========================================================= */

function closeCart() {

    const panel =
        getElement("#cartPanel") ||
        getElement(".cart-panel");


    const overlay =
        getElement("#cartOverlay") ||
        getElement(".cart-overlay");


    if (panel) {

        panel.classList.remove(
            "is-open"
        );

        panel.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (overlay) {

        overlay.classList.remove(
            "is-open"
        );

    }

}


/* =========================================================
   21. THÔNG BÁO
   ========================================================= */

function showToast(message) {

    let toast =
        document.querySelector(
            ".shop-toast"
        );


    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.className =
            "shop-toast";

        document.body.appendChild(
            toast
        );

    }


    toast.textContent = message;

    toast.classList.add(
        "show"
    );


    clearTimeout(
        showToast.timer
    );


    showToast.timer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   22. TƯ VẤN KHÁCH HÀNG
   ========================================================= */

function handleConsultationSubmit(event) {

    event.preventDefault();


    const form =
        event.currentTarget;


    const name =
        form
            .querySelector(
                '[name="name"]'
            )
            ?.value
            .trim();


    const phone =
        form
            .querySelector(
                '[name="phone"]'
            )
            ?.value
            .trim();


    if (!name || !phone) {

        showToast(
            "Vui lòng nhập họ tên và số điện thoại."
        );

        return;

    }


    const consultation = {

        name: name,

        phone: phone,

        createdAt:
            new Date().toISOString()

    };


    localStorage.setItem(

        "batTrangConsultation",

        JSON.stringify(
            consultation
        )

    );


    showToast(
        "Đã nhận yêu cầu tư vấn của bạn."
    );


    form.reset();

}


/* =========================================================
   23. ĐẶT HÀNG
   ========================================================= */

function handlePurchaseSubmit(event) {

    event.preventDefault();


    if (cart.length === 0) {

        showToast(
            "Vui lòng thêm sản phẩm vào giỏ hàng."
        );

        return;

    }


    const form =
        event.currentTarget;


    const name =
        form
            .querySelector(
                '[name="name"]'
            )
            ?.value
            .trim();


    const address =
        form
            .querySelector(
                '[name="address"]'
            )
            ?.value
            .trim();


    const phone =
        form
            .querySelector(
                '[name="phone"]'
            )
            ?.value
            .trim();


    const payment =
        form
            .querySelector(
                '[name="payment"]'
            )
            ?.value ||
        "COD";


    if (
        !name ||
        !address ||
        !phone
    ) {

        showToast(
            "Vui lòng nhập đầy đủ họ tên, địa chỉ và số điện thoại."
        );

        return;

    }


    const orderItems =
        cart.map(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );


            return {

                id: product.id,

                name: product.name,

                quantity:
                    item.quantity,

                price:
                    product.price,

                subtotal:
                    product.price *
                    item.quantity

            };

        });


    const order = {

        customer: {

            name: name,

            address: address,

            phone: phone,

            payment: payment

        },


        items:
            orderItems,


        total:
            getCartTotal(),


        createdAt:
            new Date().toISOString()

    };


    /*
       Lưu đơn hàng vào trình duyệt.

       Khi website đưa lên server thật,
       có thể thay đoạn localStorage này
       bằng API / PHP / Node.js / Firebase...
    */

    const oldOrders =
        JSON.parse(
            localStorage.getItem(
                "batTrangOrders"
            ) || "[]"
        );


    oldOrders.push(
        order
    );


    localStorage.setItem(

        "batTrangOrders",

        JSON.stringify(
            oldOrders
        )

    );


    cart = [];


    saveCart();

    renderCart();


    showToast(
        "Đặt hàng thành công!"
    );


    form.reset();

    closeCart();

}


/* =========================================================
   24. CLICK TOÀN WEBSITE
   ========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const target =
            event.target;


        /* ---------------------------------------------
           XEM CHI TIẾT
           --------------------------------------------- */

        const detailButton =
            target.closest(
                "[data-detail]"
            );


        if (detailButton) {

            openProductDetail(
                detailButton.dataset.detail
            );

            return;

        }


        /* ---------------------------------------------
           THÊM GIỎ HÀNG
           --------------------------------------------- */

        const addButton =
            target.closest(
                "[data-add-cart]"
            );


        if (addButton) {

            const productId =
                Number(
                    addButton.dataset.addCart
                );


            addToCart(

                productId,

                getCardQuantity(
                    productId
                )

            );


            return;

        }


        /* ---------------------------------------------
           TĂNG SỐ LƯỢNG SẢN PHẨM
           --------------------------------------------- */

        const plusButton =
            target.closest(
                "[data-qty-plus]"
            );


        if (plusButton) {

            const id =
                Number(
                    plusButton.dataset.qtyPlus
                );


            setCardQuantity(

                id,

                getCardQuantity(id) + 1

            );


            return;

        }


        /* ---------------------------------------------
           GIẢM SỐ LƯỢNG SẢN PHẨM
           --------------------------------------------- */

        const minusButton =
            target.closest(
                "[data-qty-minus]"
            );


        if (minusButton) {

            const id =
                Number(
                    minusButton.dataset.qtyMinus
                );


            setCardQuantity(

                id,

                getCardQuantity(id) - 1

            );


            return;

        }


        /* ---------------------------------------------
           TĂNG SỐ LƯỢNG TRONG CHI TIẾT
           --------------------------------------------- */

        const detailPlus =
            target.closest(
                "[data-detail-plus]"
            );


        if (detailPlus) {

            const id =
                Number(
                    detailPlus.dataset.detailPlus
                );


            setDetailQuantity(

                id,

                getDetailQuantity(id) + 1

            );


            return;

        }


        /* ---------------------------------------------
           GIẢM SỐ LƯỢNG TRONG CHI TIẾT
           --------------------------------------------- */

        const detailMinus =
            target.closest(
                "[data-detail-minus]"
            );


        if (detailMinus) {

            const id =
                Number(
                    detailMinus.dataset.detailMinus
                );


            setDetailQuantity(

                id,

                getDetailQuantity(id) - 1

            );


            return;

        }


        /* ---------------------------------------------
           THÊM GIỎ TỪ CHI TIẾT
           --------------------------------------------- */

        const detailAdd =
            target.closest(
                "[data-detail-add]"
            );


        if (detailAdd) {

            const id =
                Number(
                    detailAdd.dataset.detailAdd
                );


            addToCart(

                id,

                getDetailQuantity(id)

            );


            closeProductDetail();

            return;

        }


        /* ---------------------------------------------
           TĂNG TRONG GIỎ
           --------------------------------------------- */

        const cartPlus =
            target.closest(
                "[data-cart-plus]"
            );


        if (cartPlus) {

            changeCartQuantity(

                Number(
                    cartPlus.dataset.cartPlus
                ),

                1

            );


            return;

        }


        /* ---------------------------------------------
           GIẢM TRONG GIỎ
           --------------------------------------------- */

        const cartMinus =
            target.closest(
                "[data-cart-minus]"
            );


        if (cartMinus) {

            changeCartQuantity(

                Number(
                    cartMinus.dataset.cartMinus
                ),

                -1

            );


            return;

        }


        /* ---------------------------------------------
           XÓA GIỎ
           --------------------------------------------- */

        const removeButton =
            target.closest(
                "[data-remove-cart]"
            );


        if (removeButton) {

            removeFromCart(

                Number(
                    removeButton.dataset.removeCart
                )

            );


            return;

        }


        /* ---------------------------------------------
           ĐÓNG CHI TIẾT
           --------------------------------------------- */

        if (
            target.closest(
                "[data-close-modal]"
            )
        ) {

            closeProductDetail();

            return;

        }


        /* ---------------------------------------------
           MỞ GIỎ
           --------------------------------------------- */

        if (
            target.closest(
                "[data-open-cart]"
            )
        ) {

            openCart();

            return;

        }


        /* ---------------------------------------------
           ĐÓNG GIỎ
           --------------------------------------------- */

        if (
            target.closest(
                "[data-close-cart]"
            ) ||
            target.matches(
                "#cartOverlay"
            )
        ) {

            closeCart();

            return;

        }

    }
);


/* =========================================================
   25. LỌC THEO DANH MỤC
   ========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "[data-category]"
            );


        if (!button) return;


        currentCategory =
            button.dataset.category ||
            "all";


        document
            .querySelectorAll(
                "[data-category]"
            )
            .forEach(
                item => {

                    item.classList.toggle(

                        "active",

                        item === button

                    );

                }
            );


        renderProducts();

    }
);


/* =========================================================
   26. TÌM KIẾM
   ========================================================= */

document.addEventListener(
    "input",
    function(event) {

        if (
            !event.target.matches(
                "#searchInput"
            )
        ) {

            return;

        }


        currentSearch =
            event.target.value;


        renderProducts();

    }
);


/* =========================================================
   27. SẮP XẾP
   ========================================================= */

document.addEventListener(
    "change",
    function(event) {

        if (
            !event.target.matches(
                "#sortSelect"
            )
        ) {

            return;

        }


        currentSort =
            event.target.value;


        renderProducts();

    }
);


/* =========================================================
   28. FORM TƯ VẤN + MUA HÀNG
   ========================================================= */

document.addEventListener(
    "submit",
    function(event) {

        if (
            event.target.matches(
                "#consultationForm"
            )
        ) {

            handleConsultationSubmit(
                event
            );

        }


        if (
            event.target.matches(
                "#purchaseForm"
            )
        ) {

            handlePurchaseSubmit(
                event
            );

        }

    }
);


/* =========================================================
   29. PHÍM ESC
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProductDetail();

            closeCart();

        }

    }
);


/* =========================================================
   30. KHỞI TẠO WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderProducts();

        renderCart();


        const modal =
            getElement("#productModal");


        if (modal) {

            modal.setAttribute(
                "aria-hidden",
                "true"
            );

        }


        const cartPanel =
            getElement("#cartPanel");


        if (cartPanel) {

            cartPanel.setAttribute(
                "aria-hidden",
                "true"
            );

        }

    }
);
