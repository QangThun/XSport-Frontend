import React, { useState } from 'react';
import './Footer.css';

const policies = [
  'Hướng dẫn mua hàng',
  'Chính sách thanh toán',
  'Chính sách vận chuyển',
  'Chính sách đổi trả',
  'Chính sách bảo mật',
];

const companyLinks = [
  'Giới thiệu',
  'Liên hệ',
  'Hệ thống cửa hàng',
  'Tuyển dụng',
  'Blog',
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="outer-wrapper footer-outer">
      <div className="inner-container footer-grid">

        {/* Column 1 – Company */}
        <div className="footer-col">
          <h4 className="footer-title">Về Maxx Sport</h4>
          <p className="footer-body">
            Thương hiệu thể thao hàng đầu Việt Nam, cung cấp sản phẩm và dịch vụ thể thao cao cấp.
          </p>
          <address className="footer-address">
            <p><strong>Địa chỉ:</strong> CH2.2, Tầng 2, Tòa Handiresco, 31 Lê Văn Lương, Hà Nội</p>
            <p><strong>Hotline:</strong> <a href="tel:1900633083">1900 633 083</a></p>
            <p><strong>Email:</strong> <a href="mailto:support@maxxsport.vn">support@maxxsport.vn</a></p>
          </address>
        </div>

        {/* Column 2 – Policies */}
        <div className="footer-col">
          <h4 className="footer-title">Chính sách</h4>
          <ul className="footer-links">
            {policies.map((item, i) => (
              <li key={i}><a href="/">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 3 – Company */}
        <div className="footer-col">
          <h4 className="footer-title">Công ty</h4>
          <ul className="footer-links">
            {companyLinks.map((item, i) => (
              <li key={i}><a href="/">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 4 – Newsletter + Social */}
        <div className="footer-col">
          <h4 className="footer-title">Đăng ký nhận tin</h4>
          <p className="footer-body">Nhận ưu đãi độc quyền trực tiếp vào email của bạn.</p>

          <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              aria-label="Email đăng ký nhận tin"
            />
            <button type="submit">Đăng ký</button>
          </form>

          {subscribed && (
            <p className="newsletter-success" role="alert">✓ Cảm ơn bạn đã đăng ký!</p>
          )}

          <div className="social-row">
            <img src="https://img.icons8.com/color/48/facebook-new.png" width="36" height="36" alt="Facebook" title="Facebook" />
            <img src="https://img.icons8.com/color/48/zalo.png" width="36" height="36" alt="Zalo" title="Zalo" />
            <img src="https://img.icons8.com/color/48/youtube-play.png" width="36" height="36" alt="YouTube" title="YouTube" />
            <img src="https://img.icons8.com/fluency/48/instagram-new.png" width="36" height="36" alt="Instagram" title="Instagram" />
          </div>
        </div>

        {/* Payment row — spans all columns */}
        <div className="payment-row">
          <img src="https://placehold.co/120x40/00529c/ffffff?text=Bo+Cong+Thuong" alt="Bộ Công Thương" />
          <img src="https://placehold.co/90x40/00529c/ffffff?text=VNPay" alt="VNPay" />
          <img src="https://placehold.co/90x40/ffcc00/000000?text=COD" alt="COD" />
          <p className="footer-copyright">© 2015–2026 MaxxSport. All rights reserved. | MST: 0107139974</p>
        </div>

      </div>
    </footer>
  );
}
