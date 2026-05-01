import React, { useState } from 'react';
import './Footer.css';

/* ── Data ──────────────────────────────────────────────────── */
const policies = [
  { label: 'Hướng dẫn mua hàng', href: '#' },
  { label: 'Hướng dẫn chọn size', href: '#' },
  { label: 'Chính sách thanh toán', href: '#' },
  { label: 'Chính sách vận chuyển', href: '#' },
  { label: 'Chính sách đổi trả - bảo hành', href: '#' },
  { label: 'Chính sách đổi trả tại cửa hàng', href: '#' },
  { label: 'Chính sách bảo mật', href: '#' },
];

const aboutLinks = [
  { label: 'Giới thiệu', href: '#' },
  { label: 'Liên hệ', href: '#' },
  { label: 'Hệ thống cửa hàng', href: '#' },
  { label: 'Điều khoản và điều kiện', href: '#' },
  { label: 'Tuyển đại lý', href: '#' },
];

const socialLinks = [
  { href: '#', src: 'https://img.icons8.com/color/48/facebook-new.png', alt: 'Facebook' },
  { href: '#', src: 'https://img.icons8.com/color/48/zalo.png', alt: 'Zalo' },
  { href: '#', src: 'https://img.icons8.com/fluency/48/instagram-new.png', alt: 'Instagram' },
  { href: '#', src: 'https://img.icons8.com/color/48/youtube-play.png', alt: 'YouTube' },
  { href: '#', src: 'https://img.icons8.com/color/48/tiktok.png', alt: 'TikTok' },
];

/* ── Contact inline SVG icons ──────────────────────────────── */
const LocationIcon = () => (
  <svg width="12" height="15" viewBox="0 0 12 15" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M6 0C3.24 0 1 2.24 1 5c0 3.75 5 10 5 10s5-6.25 5-10C11 2.24 8.76 0 6 0zm0 6.5C5.17 6.5 4.5 5.83 4.5 5S5.17 3.5 6 3.5 7.5 4.17 7.5 5 6.83 6.5 6 6.5z"
      fill="currentColor"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg width="12" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.4 21 2 13.6 2 5c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
      fill="currentColor"
    />
  </svg>
);

const EmailIcon = () => (
  <svg width="14" height="11" viewBox="0 0 24 19" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M20 0H4C2.9 0 2 .9 2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z"
      fill="currentColor"
    />
  </svg>
);

/* ── Component ──────────────────────────────────────────────── */
export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed');
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="footer-outer">
      <div className="inner-container footer-grid">

        {/* ── Column 1: Company info ── */}
        <div className="footer-col">
          <a href="/" className="footer-logo-wrap" aria-label="Trang chủ MAXX SPORT">
            <img
              src="/assets/maxx-sport-logo.png"
              alt="MAXX SPORT — Siêu thị thể thao"
              className="footer-logo"
            />
          </a>

          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <span className="contact-icon"><LocationIcon /></span>
              <span>
                Địa chỉ: CH2.2, Tầng 2, Tòa Handiresco, Số 31 Lê Văn Lương,
                Phường Thanh Xuân, TP. Hà Nội
              </span>
            </li>
            <li className="footer-contact-item">
              <span className="contact-icon"><PhoneIcon /></span>
              <span>
                Số điện thoại:{' '}
                <a href="https://maxxsport.to" className="footer-inline-link">
                  maxxsport.to
                </a>
              </span>
            </li>
            <li className="footer-contact-item">
              <span className="contact-icon"><EmailIcon /></span>
              <span>
                Email:{' '}
                <a href="mailto:maxxsport.online@gmail.com" className="footer-inline-link">
                  maxxsport.online@gmail.com
                </a>
              </span>
            </li>
          </ul>

          <p className="footer-copyright">
            © 2015 Công ty Cổ phần Đầu tư Phát Triển Thương Mại Thiên Sơn.
            MST/ĐKKD/QĐTL: 0107139974 do Sở kế hoạch và Đầu tư TP. Hà Nội
            cấp ngày 25/11/2015 | Bản quyền của{' '}
            <a href="#" className="footer-brand-link">Maxxsport</a>
          </p>
        </div>

        {/* ── Column 2: CHÍNH SÁCH ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">CHÍNH SÁCH</h4>
          <ul className="footer-links">
            {policies.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3: VỀ CHÚNG TÔI ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">VỀ CHÚNG TÔI</h4>
          <ul className="footer-links">
            {aboutLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 4: ĐĂNG KÝ NHẬN TIN ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">ĐĂNG KÝ NHẬN TIN</h4>
          <p className="footer-body">
            Bạn muốn nhận khuyến mãi đặc biệt? Đăng ký ngay.
          </p>

          <form
            className="newsletter-form"
            onSubmit={handleSubscribe}
            noValidate
          >
            <input
              type="email"
              placeholder="Nhập địa chỉ email"
              aria-label="Địa chỉ email đăng ký nhận tin"
              required
            />
            <button type="submit">Đăng ký</button>
          </form>

          {subscribed && (
            <p className="newsletter-success" role="alert">
              ✓ Đăng ký thành công!
            </p>
          )}

          <div className="social-row" role="list">
            {socialLinks.map((s) => (
              <a
                key={s.alt}
                href={s.href}
                className="social-link"
                aria-label={s.alt}
                title={s.alt}
                role="listitem"
              >
                <img
                  src={s.src}
                  width="36"
                  height="36"
                  alt={s.alt}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

        {/* ── Bottom row: Trust badges (cols 2–4) ── */}
        <div className="footer-badges-row">
          <img
            src="/assets/footer-badges.svg"
            alt="Đã thông báo Bộ Công Thương · VNPay · COD"
            className="footer-badges-img"
          />
        </div>

      </div>
    </footer>
  );
}
