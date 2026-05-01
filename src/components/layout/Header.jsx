import React, { useState } from 'react';
import './Header.css';

const sportsCategories = [
  'Pickleball',
  'Cầu lông',
  'Bóng đá',
  'Bóng chuyền',
  'Bóng bàn',
  'Tennis',
  'Badminton',
  'Bóng rổ',
];

const navLinks = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Bộ sưu tập', href: '/collections' },
  { label: 'Blog', href: '/blog' },
  { label: 'Liên hệ', href: '/contact' },
];

/* ── Inline SVG Icons ──────────────────────────────────── */
const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartCount = 3;

  return (
    <header className="outer-wrapper header-outer">
      <div className="inner-container header-inner">

        {/* Logo */}
        <div className="header-logo">
          <img
            src="https://placehold.co/220x50/151515/ffb800?text=MAXX+SPORT"
            alt="MAXX SPORT Logo"
            style={{ height: '40px', objectFit: 'contain' }}
          />
        </div>

        {/* Center nav — hidden on tablet */}
        <nav className={`center-nav${mobileOpen ? ' open' : ''}`} aria-label="Điều hướng chính">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="nav-item">
              {link.label}
            </a>
          ))}

          {/* Dropdown */}
          <div className="nav-dropdown">
            <span className="nav-item dropdown-trigger">
              Môn thể thao <ChevronDown />
            </span>
            <ul className="dropdown-menu" role="menu">
              {sportsCategories.map((cat, i) => (
                <li key={i} role="none">
                  <a href={`/${cat.toLowerCase().replace(/\s+/g, '-')}`} role="menuitem">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Right actions */}
        <div className="right-actions">
          {/* Search pill — input hidden on mobile */}
          <div className="search-pill">
            <input
              type="text"
              className="search-input"
              placeholder="Tìm kiếm..."
              aria-label="Tìm kiếm sản phẩm"
            />
            <span className="search-icon" aria-hidden="true">
              <SearchIcon />
            </span>
          </div>

          {/* User icon */}
          <button className="icon-btn" title="Tài khoản" aria-label="Tài khoản">
            <UserIcon />
          </button>

          {/* Cart icon */}
          <button className="icon-btn cart-wrap" title="Giỏ hàng" aria-label={`Giỏ hàng — ${cartCount} sản phẩm`}>
            <CartIcon />
            {cartCount > 0 && (
              <span className="cart-badge" aria-hidden="true">{cartCount}</span>
            )}
          </button>

          {/* Hamburger — visible only on mobile (< 768px) */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="mobile-nav" role="navigation" aria-label="Mobile menu">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="mobile-nav-item" onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="mobile-nav-group">
            <span className="mobile-nav-item mobile-nav-group-title">Môn thể thao</span>
            {sportsCategories.map((cat, i) => (
              <a key={i} href={`/${cat.toLowerCase().replace(/\s+/g, '-')}`} className="mobile-nav-sub" onClick={() => setMobileOpen(false)}>
                {cat}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
