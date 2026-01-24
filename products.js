

const readline = require('readline');

/*
 * CONSTRUCTOR FUNCTION: Product
 * - Dùng để tạo đối tượng sản phẩm với các thuộc tính:
 *   id, name, price, quantity, category, isAvailable
 * - Khi gọi: new Product(1, "Tên SP", 100000, 10, "Electronics", true)
 */
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;                   // mã sản phẩm
    this.name = name;               // tên sản phẩm
    this.price = price;             // giá sản phẩm
    this.quantity = quantity;       // số lượng tồn kho
    this.category = category;       // danh mục sản phẩm
    this.isAvailable = isAvailable; // trạng thái bán (true / false)
}

/*
 * MẢNG PRODUCTS: Chứa danh sách các sản phẩm
 * - Mỗi phần tử là 1 đối tượng Product
 * - Có 2 danh mục: Electronics và Accessories
 */
const products = [
    new Product(1, "iPhone 15 Pro Max", 35000000, 10, "Electronics", true),
    new Product(2, "Samsung Galaxy S24", 28000000, 5, "Electronics", true),
    new Product(3, "Tai nghe AirPods Pro", 6500000, 20, "Accessories", true),
    new Product(4, "Ốp lưng iPhone", 250000, 0, "Accessories", false),
    new Product(5, "MacBook Pro M3", 55000000, 3, "Electronics", true),
    new Product(6, "Cáp sạc Type-C", 150000, 50, "Accessories", true),
    new Product(7, "Bàn phím cơ Logitech", 2500000, 8, "Accessories", false)
];

/*
 * CÂU 1: In ra constructor function Product
 * - Chỉ là hàm in code của constructor để người dùng xem
 */
function cau1() {
    console.log("function Product(id, name, price, quantity, category, isAvailable) {");
    console.log("    this.id = id;");
    console.log("    this.name = name;");
    console.log("    this.price = price;");
    console.log("    this.quantity = quantity;");
    console.log("    this.category = category;");
    console.log("    this.isAvailable = isAvailable;");
    console.log("}");
}

/*
 * CÂU 2: In ra danh sách sản phẩm
 * - Hiển thị toàn bộ mảng products
 */
function cau2() {
    console.log(products);
}

/*
 * CÂU 3: Tạo mảng mới chỉ chứa name và price
 * - Dùng phương thức .map() để tạo mảng mới
 * - map() duyệt qua từng phần tử và trả về mảng mới với các giá trị đã biến đổi
 */
function cau3() {
    const productNamePrice = products.map(product => ({
        name: product.name,
        price: product.price
    }));
    console.log(productNamePrice);
}

/*
 * CÂU 4: Lọc sản phẩm còn hàng (quantity > 0)
 * - Dùng phương thức .filter() để lọc các phần tử thỏa điều kiện
 * - filter() trả về mảng mới chỉ chứa các phần tử thỏa điều kiện
 */
function cau4() {
    const productsInStock = products.filter(product => product.quantity > 0);
    console.log(productsInStock);
}

/*
 * CÂU 5: Kiểm tra có ít nhất 1 sản phẩm giá > 30 triệu
 * - Dùng phương thức .some() để kiểm tra
 * - some() trả về true nếu CÓ ÍT NHẤT 1 phần tử thỏa điều kiện
 */
function cau5() {
    const hasExpensiveProduct = products.some(product => product.price > 30000000);
    console.log(hasExpensiveProduct ? "Có" : "Không");
}

/*
 * CÂU 6: Kiểm tra TẤT CẢ Accessories có đang bán không
 * - Bước 1: Dùng filter() lọc ra các sản phẩm Accessories
 * - Bước 2: Dùng every() kiểm tra tất cả có isAvailable = true không
 * - every() trả về true nếu TẤT CẢ phần tử đều thỏa điều kiện
 */
function cau6() {
    const allAccessoriesAvailable = products
        .filter(product => product.category === "Accessories")
        .every(product => product.isAvailable === true);
    console.log(allAccessoriesAvailable ? "Có" : "Không");
}

/*
 * CÂU 7: Tính tổng giá trị kho hàng
 * - Dùng phương thức .reduce() để tính tổng
 * - reduce() gộp tất cả phần tử thành 1 giá trị duy nhất
 * - Công thức: tổng += price * quantity
 * - 0 là giá trị khởi tạo của total
 */
function cau7() {
    const totalInventoryValue = products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
    console.log(`${totalInventoryValue.toLocaleString('vi-VN')} VNĐ`);
}

/*
 * CÂU 8: Duyệt mảng với for...of
 * - for...of duyệt qua TỪNG GIÁ TRỊ (phần tử) của mảng
 * - Mỗi lần lặp, product là 1 đối tượng Product
 */
function cau8() {
    for (const product of products) {
        const trangThai = product.isAvailable ? "Đang bán" : "Ngừng bán";
        console.log(`${product.name} - ${product.category} - ${trangThai}`);
    }
}

/*
 * CÂU 9: Duyệt thuộc tính với for...in
 * - for...in duyệt qua TỪNG KEY (tên thuộc tính) của object
 * - Mỗi lần lặp, key là tên thuộc tính (id, name, price,...)
 * - Truy cập giá trị bằng: object[key]
 */
function cau9() {
    const sampleProduct = products[0];
    for (const key in sampleProduct) {
        console.log(`  ${key}: ${sampleProduct[key]}`);
    }
}

/*
 * CÂU 10: Lấy tên sản phẩm đang bán VÀ còn hàng
 * - Kết hợp filter() và map():
 *   + filter(): lọc sản phẩm isAvailable=true VÀ quantity>0
 *   + map(): chỉ lấy tên sản phẩm
 */
function cau10() {
    const availableProductNames = products
        .filter(product => product.isAvailable === true && product.quantity > 0)
        .map(product => product.name);
    console.log(availableProductNames);
}

/*
 * THÊM SẢN PHẨM MỚI
 * - Dùng readline.question() để hỏi người dùng nhập từng thông tin
 * - Tạo đối tượng Product mới và thêm vào mảng products bằng push()
 * - callback() gọi lại menu sau khi thêm xong
 */
function themSanPham(rl, callback) {
    console.log("\nTHEM SAN PHAM MOI");
    
    rl.question("Nhập mã sản phẩm (id): ", (id) => {
        rl.question("Nhập tên sản phẩm: ", (name) => {
            rl.question("Nhập giá sản phẩm: ", (price) => {
                rl.question("Nhập số lượng tồn kho: ", (quantity) => {
                    rl.question("Nhập danh mục (Electronics/Accessories): ", (category) => {
                        rl.question("Đang bán? (true/false): ", (isAvailable) => {
                            const newProduct = new Product(
                                parseInt(id),          // Chuyển string thành số nguyên
                                name,
                                parseFloat(price),     // Chuyển string thành số thực
                                parseInt(quantity),
                                category,
                                isAvailable.toLowerCase() === 'true'  // Chuyển string thành boolean
                            );
                            products.push(newProduct); // Thêm vào cuối mảng
                            console.log("\nĐã thêm sản phẩm thành công!");
                            console.log(newProduct);
                            callback();                // Quay lại menu
                        });
                    });
                });
            });
        });
    });
}

/*
 * HIỂN THỊ MENU
 * - In ra các lựa chọn cho người dùng
 */
function showMenu() {
    console.log("\n===== MENU BÀI TẬP QUẢN LÝ SẢN PHẨM =====");
    console.log("1. Thêm sản phẩm mới");
    console.log("2. Xem constructor function Product");
    console.log("3. Xem danh sách sản phẩm");
    console.log("4. Mảng chỉ chứa name, price (map)");
    console.log("5. Lọc sản phẩm còn hàng (filter)");
    console.log("6. Kiểm tra có sản phẩm giá > 30 triệu (some)");
    console.log("7. Kiểm tra tất cả Accessories đang bán (every)");
    console.log("8. Tính tổng giá trị kho hàng (reduce)");
    console.log("9. Duyệt mảng với for...of");
    console.log("10. Duyệt thuộc tính với for...in");
    console.log("11. Lấy tên sản phẩm đang bán và còn hàng");
    console.log("0. Thoát");
    console.log("==========================================");
}

/*
 * XỬ LÝ LỰA CHỌN CỦA NGƯỜI DÙNG
 * - Nhận lựa chọn (choice) và gọi hàm tương ứng
 * - Trả về 'async' nếu đang xử lý bất đồng bộ (thêm sản phẩm)
 * - Trả về false nếu người dùng chọn thoát
 * - Trả về true để tiếp tục hiện menu
 */
function handleChoice(choice, rl, callback) {
    switch (choice) {
        case '1': 
            themSanPham(rl, callback);
            return 'async';
        case '2': cau1(); break;
        case '3': cau2(); break;
        case '4': cau3(); break;
        case '5': cau4(); break;
        case '6': cau5(); break;
        case '7': cau6(); break;
        case '8': cau7(); break;
        case '9': cau8(); break;
        case '10': cau9(); break;
        case '11': cau10(); break;
        case '0': 
            console.log("\nCảm ơn bạn đã sử dụng chương trình! Tạm biệt!");
            return false;
        default:
            console.log("\nLựa chọn không hợp lệ! Vui lòng chọn từ 0-11.");
    }
    return true;
}

/*
 * TẠO READLINE INTERFACE
 * - Đọc input từ bàn phím (stdin)
 * - Xuất output ra màn hình (stdout)
 */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 * HÀM CHÍNH - VÒNG LẶP MENU
 * - Hiển thị menu và hỏi người dùng nhập lựa chọn
 * - Xử lý lựa chọn và lặp lại cho đến khi người dùng chọn thoát
 */
function askQuestion() {
    showMenu();
    rl.question("\nNhập lựa chọn của bạn (0-11): ", (answer) => {
        const result = handleChoice(answer.trim(), rl, askQuestion);
        if (result === 'async') {
            return;  // Đang xử lý bất đồng bộ, không làm gì
        } else if (result) {
            askQuestion();  // Tiếp tục hiện menu
        } else {
            rl.close();     // Đóng chương trình
        }
    });
}

// KHỞI ĐỘNG CHƯƠNG TRÌNH
console.log("CHÀO MỪNG BẠN ĐẾN VỚI BÀI TẬP JAVASCRIPT");
askQuestion();
