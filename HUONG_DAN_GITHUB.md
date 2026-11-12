# Hướng dẫn tạo GitHub Portfolio cho tài khoản tuantace200779

## 1. Tạo repository dành cho website cá nhân

1. Đăng nhập tại https://github.com/tuantace200779.
2. Chọn **New repository**.
3. Đặt tên repository chính xác là: `tuantace200779.github.io`.
4. Chọn **Public**.
5. Có thể bật **Add a README file** hoặc để trống; sau đó chọn **Create repository**.

> Đây là repository dạng user site. Tên phải khớp username GitHub + `.github.io`. Đường dẫn website dự kiến là `https://tuantace200779.github.io/`.

## 2. Upload website

1. Giải nén file ZIP portfolio.
2. Mở thư mục `tuantace200779.github.io`.
3. Trong repository vừa tạo, chọn **Add file → Upload files**.
4. Kéo toàn bộ nội dung bên trong thư mục vào trang upload: `index.html`, `README.md`, `.nojekyll`, `assets/`, `HUONG_DAN_GITHUB.md`.
5. Không upload nguyên thư mục bọc bên ngoài; `index.html` phải nằm ngay ở gốc repository.
6. Chọn **Commit changes**.

Cấu trúc đúng:

```text
index.html
README.md
.nojekyll
HUONG_DAN_GITHUB.md
assets/
  css/style.css
  js/config.js
  js/main.js
  img/...
```

## 3. Bật GitHub Pages

1. Mở **Settings** của repository `tuantace200779.github.io`.
2. Chọn **Pages** ở menu bên trái.
3. Trong **Build and deployment**, chọn **Deploy from a branch**.
4. Chọn branch `main`, folder `/(root)`, rồi nhấn **Save**.
5. Mở URL `https://tuantace200779.github.io/` sau khi deployment hoàn tất. Lần xuất bản đầu tiên có thể cần vài phút.

## 4. Những gì đã được cấu hình

File `assets/js/config.js` đã được cài GitHub profile:

```js
window.PORTFOLIO_CONFIG = {
  githubProfile: "https://github.com/tuantace200779",
  projectRepos: {
    bookstore: "",
    fcinema: "",
    hms: ""
  }
};
```

Các link source code dự án để trống có chủ đích vì tài khoản trong ảnh chưa có public repositories. Chỉ thêm link sau khi có repository thật và chắc chắn được phép công khai source code dự án nhóm.

## 5. Kiểm tra cuối

- Truy cập website bằng cửa sổ ẩn danh để kiểm tra người khác xem được.
- Kiểm tra ảnh, nội dung, menu và email trên máy tính/điện thoại.
- Nếu cập nhật website sau này, commit thay đổi lên branch `main`.
- Không đưa mật khẩu, API key, `.env`, dữ liệu cá nhân hoặc source code nhóm chưa được phép công khai lên repository public.
