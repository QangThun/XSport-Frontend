import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const policyLinks = [
  { label: 'Hướng dẫn mua hàng', href: '/huong-dan' },
  { label: 'Hướng dẫn chọn size', href: '/bang-size-tong-hop' },
  { label: 'Chính sách thanh toán', href: '/chinh-sach-thanh-toan' },
  { label: 'Chính sách vận chuyển', href: '/van-chuyen' },
  { label: 'Chính sách đổi trả - bảo hành', href: '/quy-dinh-doi-tra-hang-online' },
  { label: 'Chỉnh sách đổi trả tại cửa hàng', href: '/quy-dinh-doi-tra-hang-tai-shop' },
  { label: 'Chính sách bảo mật', href: '/chinh-sach' },
];

const aboutLinks = [
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  { label: 'Liên hệ', href: '/lien-he' },
  { label: 'Hệ thống cửa hàng', href: '/he-thong-cua-hang' },
  { label: 'Điều khoản và điều kiện', href: '/dieu-khoan' },
  { label: 'Tuyển đại lý', href: '/tuyen-dai-ly' },
];

const socialLinks = [
  {
    name: 'Facebook',
    icon: '📘',
    href: 'https://www.facebook.com/maxxsport.com.vn',
  },
  {
    name: 'Zalo',
    icon: '💬',
    href: 'https://zalo.me/2670394599170994691',
  },
  {
    name: 'Instagram',
    icon: '📷',
    href: 'https://www.instagram.com/maxxsportvietnam.vn',
  },
  {
    name: 'YouTube',
    icon: '▶️',
    href: 'https://www.youtube.com/@Maxxsport.Official',
  },
  {
    name: 'TikTok',
    icon: '🎵',
    href: 'https://www.tiktok.com/@maxxsport.vn',
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [newsMessage, setNewsMessage] = useState('');
  const [policyExpanded, setPolicyExpanded] = useState(true);
  const [aboutExpanded, setAboutExpanded] = useState(true);
  const [newsExpanded, setNewsExpanded] = useState(true);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setNewsMessage('Đăng ký thành công! Vui lòng kiểm tra email của bạn.');
      setEmail('');
      setTimeout(() => setNewsMessage(''), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="mid-footer">
        <div className="footer-container">
          <div className="footer-row">
            {/* Left Column: Logo, Address, Contact */}
            <div className="footer-col footer-col-lg-3">
              <div className="footer-block footer-contact-block">
                <Link to="/" className="footer-logo">
                  <div className="logo-text">MaxxSport</div>
                </Link>

                <div className="footer-section">
                  <div className="footer-contact-item">
                    <span className="contact-icon">📍</span>
                    <div>
                      <span className="contact-label">Địa chỉ:</span>
                      <p className="contact-value">
                        CH2.2, Tầng 2, Tòa Handiresco, Số 31 Lê Văn Lương, Phường Thanh Xuân, TP. Hà Nội
                      </p>
                    </div>
                  </div>

                  <div className="footer-contact-item">
                    <span className="contact-icon">📞</span>
                    <div>
                      <span className="contact-label">Số điện thoại:</span>
                      <a href="tel:1900633083" className="contact-value link">
                        1900633083
                      </a>
                    </div>
                  </div>

                  <div className="footer-contact-item">
                    <span className="contact-icon">✉️</span>
                    <div>
                      <span className="contact-label">Email:</span>
                      <a href="mailto:maxxsport.online@gmail.com" className="contact-value link">
                        maxxsport.online@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="footer-copyright">
                  © 2015 Công ty Cổ phần Đầu tư Phát Triển Thương Mại Thiên Sơn
                  <br />
                  MST/ĐKKD/QĐTL: 0107139974
                  <br />
                  Bản quyền của Maxxsport
                </div>
              </div>
            </div>

            {/* Right Column: 3 Sub-columns */}
            <div className="footer-col footer-col-lg-9">
              <div className="footer-row">
                {/* Policies Column */}
                <div className="footer-col footer-col-lg-4">
                  <div className="footer-block footer-link-block">
                    <h3
                      className={`footer-title ${policyExpanded ? 'active' : ''}`}
                      onClick={() => setPolicyExpanded(!policyExpanded)}
                    >
                      CHÍNH SÁCH
                      <span className="toggle-icon">{policyExpanded ? '−' : '+'}</span>
                    </h3>
                    {policyExpanded && (
                      <ul className="footer-link-list">
                        {policyLinks.map((link, idx) => (
                          <li key={idx}>
                            <Link to={link.href} className="footer-link">
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* About Column */}
                <div className="footer-col footer-col-lg-4">
                  <div className="footer-block footer-link-block">
                    <h3
                      className={`footer-title ${aboutExpanded ? 'active' : ''}`}
                      onClick={() => setAboutExpanded(!aboutExpanded)}
                    >
                      VỀ CHÚNG TÔI
                      <span className="toggle-icon">{aboutExpanded ? '−' : '+'}</span>
                    </h3>
                    {aboutExpanded && (
                      <ul className="footer-link-list">
                        {aboutLinks.map((link, idx) => (
                          <li key={idx}>
                            <Link to={link.href} className="footer-link">
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Newsletter & Social Column */}
                <div className="footer-col footer-col-lg-4">
                  <div className="footer-block footer-newsletter-block">
                    <h3
                      className={`footer-title ${newsExpanded ? 'active' : ''}`}
                      onClick={() => setNewsExpanded(!newsExpanded)}
                    >
                      ĐĂNG KÝ NHẬN TIN
                      <span className="toggle-icon">{newsExpanded ? '−' : '+'}</span>
                    </h3>
                    {newsExpanded && (
                      <>
                        <p className="newsletter-subtitle">
                          Bạn muốn nhận khuyến mãi đặc biệt? Đăng ký ngay.
                        </p>
                        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập địa chỉ email"
                            required
                            className="newsletter-input"
                          />
                          <button type="submit" className="newsletter-btn">
                            Đăng ký
                          </button>
                        </form>
                        {newsMessage && (
                          <div className="newsletter-message success">
                            {newsMessage}
                          </div>
                        )}

                        {/* Social Links */}
                        <ul className="social-links">
                          {socialLinks.map((social, idx) => (
                            <li key={idx}>
                              <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                title={social.name}
                                aria-label={social.name}
                              >
                                <span className="social-icon">{social.icon}</span>
                                <span className="social-name">{social.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Trust Badges Row */}
              <div className="footer-row footer-badges-row">
                <div className="footer-col footer-col-lg-4">
                  <div className="footer-badge">
                    <a
                      href="http://online.gov.vn/Home/WebDetails/55964"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge-link"
                      title="Bộ Công Thương"
                    >
                      <span className="badge-icon">🏛️</span>
                      <span className="badge-text">Bộ Công Thương</span>
                    </a>
                  </div>
                </div>

                <div className="footer-col footer-col-lg-4">
                  <div className="footer-badge">
                    <span className="badge-icon">✓</span>
                    <span className="badge-text">Thanh toán an toàn</span>
                  </div>
                </div>

                <div className="footer-col footer-col-lg-4">
                  <div className="footer-badge">
                    <span className="badge-icon">🚚</span>
                    <span className="badge-text">Giao hàng nhanh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
