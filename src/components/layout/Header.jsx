import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// Exact navigation items from https://maxxsport.com.vn/
const NAV_ITEMS = [
  { 
    id: 1, 
    label: 'THƯƠNG HIỆU', 
    href: '/thuong-hieu',
    type: 'mega-menu',
    submenu: [
      { label: 'adidas', href: '/adidas' },
      { label: 'ASICS', href: '/asics' },
      { label: 'Nike', href: '/nike' },
      { label: 'le coq sportif', href: '/le-coq-sportif' },
      { label: 'Li-Ning', href: '/li-ning' },
      { label: '361° Sport', href: '/361-sport' },
      { label: 'GRENDENE', href: '/sp-grendene-1', isColumn: true, subItems: [
        { label: 'RIDER', href: '/rider' },
        { label: 'IPANEMA', href: '/ipanema' },
        { label: 'ZAXY', href: '/zaxy' },
        { label: 'GRENDHA', href: '/grendha' },
      ] },
    ]
  },
  { 
    id: 2, 
    label: 'MÔN THỂ THAO', 
    href: '/collections/all',
    type: 'default',
    submenu: [
      { label: 'Pickleball', href: '/pickleball' },
      { label: 'Cầu lông', href: '/cau-long' },
      { label: 'Golf', href: '/golf-2' },
      { label: 'Bóng đá', href: '/bong-da' },
      { label: 'Chạy bộ', href: '/chay-bo' },
      { label: 'Tennis', href: '/tennis-1' },
      { label: 'Bóng rổ', href: '/bong-ro-1' },
      { label: 'Tập luyện', href: '/tap-luyen-1' },
    ]
  },
  { 
    id: 3, 
    label: 'SẢN PHẨM MỚI', 
    href: '/new-arrivals-1',
    type: 'link'
  },
  { 
    id: 4, 
    label: 'NAM', 
    href: '/nam-2',
    type: 'mega-menu',
    submenu: [
      { label: 'ÁO NAM', href: '/ao-nam', isColumn: true, subItems: [
        { label: 'Áo T-shirt', href: '/ao-t-shirt-nam-1' },
        { label: 'Áo polo', href: '/ao-polo-nam-1' },
        { label: 'Áo ba lỗ', href: '/ao-ba-lo-nam' },
        { label: 'Áo dài tay', href: '/ao-dai-tay-nam' },
        { label: 'Áo gió', href: '/ao-gio-nam-1' },
        { label: 'Áo nỉ', href: '/ao-ni-nam-1' },
        { label: 'Áo khoác', href: '/ao-khoac-nam' },
        { label: 'Áo phao & lông vũ', href: '/ao-phao-long-vu-nam' },
      ] },
      { label: 'QUẦN NAM', href: '/quan-nam-1', isColumn: true, subItems: [
        { label: 'Quần short', href: '/quan-short-nam-2' },
        { label: 'Quần dài', href: '/quan-dai-nam-2' },
        { label: 'Quần gió', href: '/quan-gio-nam-1' },
        { label: 'Quần nỉ', href: '/quan-ni-nam-1' },
      ] },
      { label: 'GIÀY NAM', href: '/giay-nam-1', isColumn: true, subItems: [
        { label: 'Giày chạy bộ', href: '/giay-chay-bo-nam-1' },
        { label: 'Giày pickleball', href: '#' },
        { label: 'Giày thời trang', href: '/giay-thoi-trang-nam-1' },
        { label: 'Giày golf', href: '/giay-golf-nam' },
        { label: 'Giày bóng rổ', href: '#' },
        { label: 'Giày tennis', href: '#' },
        { label: 'Giày bóng đá', href: '#' },
        { label: 'Giày cầu lông', href: '#' },
      ] },
      { label: 'PHỤ KIỆN NAM', href: '/phu-kien-nam', isColumn: true, subItems: [
        { label: 'Tất', href: '#' },
        { label: 'Mũ', href: '#' },
        { label: 'Dép', href: '#' },
        { label: 'Balo', href: '#' },
        { label: 'Túi', href: '#' },
        { label: 'Thắt lưng', href: '#' },
        { label: 'Găng tay', href: '#' },
      ] },
    ]
  },
  { 
    id: 5, 
    label: 'NỮ', 
    href: '/nu-2',
    type: 'mega-menu',
    submenu: [
      { label: 'ÁO NỮ', href: '/ao-nu-1', isColumn: true, subItems: [
        { label: 'Áo T-shirt', href: '/ao-t-shirt-nu-1' },
        { label: 'Áo polo', href: '/ao-polo-nu-1' },
        { label: 'Áo sát nách', href: '/ao-sat-nach-nu' },
        { label: 'Áo bra', href: '/ao-bra-nu-1' },
      ] },
      { label: 'QUẦN NỮ', href: '/quan-nu-1', isColumn: true, subItems: [
        { label: 'Quần short', href: '/quan-short-nu' },
        { label: 'Quần dài', href: '/quan-dai-nu-2' },
        { label: 'Quần legging', href: '/quan-legging-nu' },
      ] },
    ]
  },
  { 
    id: 6, 
    label: 'TRẺ EM', 
    href: '/tre-em-1',
    type: 'default',
    submenu: [
      { label: 'Bé trai (8 - 16 tuổi)', href: '/be-trai' },
      { label: 'Bé gái (8 - 16 tuổi)', href: '/be-gai-8-16-tuoi' },
    ]
  },
  { 
    id: 7, 
    label: 'OUTLET', 
    href: '/sale',
    type: 'default',
    submenu: [
      { label: 'Sale 20% - 30%', href: '/uu-dai-20-30' },
      { label: 'Sale 40% - 50%', href: '/uu-dai-40-50' },
      { label: 'GIÁ SỐC', href: '/dong-gia' },
      { label: 'GRENDENE LIMITED DEALS', href: '/grendene-giam-gia-soc' },
    ]
  },
  { 
    id: 8, 
    label: 'HỆ THỐNG CỬA HÀNG', 
    href: '/he-thong-cua-hang',
    type: 'link'
  },
];

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isSearchMobileOpen, setIsSearchMobileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const accountMenuRef = useRef(null);

  // Close account menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
        setIsAccountMenuOpen(false);
      }
    };

    if (isAccountMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isAccountMenuOpen]);

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = e.target.querySelector('input[name="query"]').value;
    if (query.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(query)}&type=product`;
    }
  };

  return (
    <header className="ega-header">
      <div className="header-wrap container">
        
        {/* Mobile hamburger toggle */}
        <div className="toggle-nav btn menu-bar" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Logo */}
        <div id="logo">
          <Link to="/" className="logo-wrapper">
            <span className="logo-text">MaxxSport</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navigation--horizontal">
          <div className="navigation-wrapper navigation-horizontal-wrapper">
            <nav>
              <ul className="navigation navigation-horizontal">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id} className={`menu-item list-group-item ${item.id === 7 ? 'outlet-highlight' : ''}`}>
                    <Link to={item.href} className="menu-item__link" title={item.label}>
                      <span>{item.label}</span>
                      {item.submenu && (
                        <i className="float-right">
                          <svg className="icon"><use xlinkHref="#icon-arrow"></use></svg>
                        </i>
                      )}
                    </Link>

                    {/* Submenu */}
                    {item.submenu && (
                      <div className={`submenu scroll ${item.type === 'mega-menu' ? 'mega-menu' : 'default'}`}>
                        <div className="toggle-submenu">
                          <i className="mr-3">
                            <svg className="icon"><use xlinkHref="#icon-arrow"></use></svg>
                          </i>
                          <span>{item.label}</span>
                        </div>

                        <ul className="submenu__list container">
                          {item.submenu.map((subitem, idx) => (
                            <li key={idx} className={subitem.isColumn ? 'submenu__col' : 'submenu__item submenu__item--main'}>
                              {subitem.isColumn ? (
                                <>
                                  <span className="submenu__item submenu__item--main">
                                    <Link to={subitem.href} className="link">{subitem.label}</Link>
                                  </span>
                                  {subitem.subItems && (
                                    <ul>
                                      {subitem.subItems.map((child, cidx) => (
                                        <li key={cidx} className="submenu__item">
                                          <Link to={child.href} className="link">{child.label}</Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </>
                              ) : (
                                <Link to={subitem.href} className="link">{subitem.label}</Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Right side: Search, icons, account, cart, translate */}
        <div className="header-right ega-d--flex">
          {/* Desktop Search */}
          <form 
            action="/search" 
            method="get" 
            className="input-group search-bar custom-input-group desktop-search"
            onSubmit={handleSearchSubmit}
          >
            <input
              type="text"
              name="query"
              className="input-group-field auto-search form-control"
              required
              placeholder="Tìm theo tên sản phẩm..."
            />
            <input type="hidden" name="type" value="product" />
            <span className="input-group-btn btn-action">
              <button type="submit" aria-label="search" className="btn text-white">
                <svg className="icon"><use xlinkHref="#icon-search"></use></svg>
              </button>
            </span>
          </form>

          {/* Header right icons container */}
          <div className="icon-action header-right__icons">
            
            {/* Mobile search toggle */}
            <span 
              className="header-icon icon-action__search mobile-search-toggle"
              onClick={() => setIsSearchMobileOpen(!isSearchMobileOpen)}
            >
              <svg className="icon"><use xlinkHref="#icon-search"></use></svg>
            </span>

            {/* Account dropdown */}
            <div 
              id="icon-account" 
              className="header-icon icon-account desktop-account"
              ref={accountMenuRef}
            >
              <svg className="icon" onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)} style={{cursor: 'pointer'}}>
                <use xlinkHref="#icon-user"></use>
              </svg>
              <div className={`account-action ${isAccountMenuOpen ? 'active' : ''}`}>
                <Link to="/account/login" title="Đăng nhập">Đăng nhập</Link>
                <Link to="/account/register" title="Đăng ký">Đăng ký</Link>
              </div>
            </div>

            {/* Mini cart */}
            <div className="mini-cart text-xs-center">
              <Link to="/cart" className="header-icon cart-count" title="Giỏ hàng">
                <svg className="icon"><use xlinkHref="#icon-cart"></use></svg>
                <span className="count_item count_item_pr">{cartCount}</span>
              </Link>
            </div>

            {/* Language selector */}
            <div className="block-translate nav-item header-action_translate desktop-translate">
              <select className="language-select" defaultValue="vi">
                <option value="vi">VI</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      {isSearchMobileOpen && (
        <div className="mobile-search-bar">
          <form 
            className="input-group search-bar custom-input-group"
            onSubmit={handleSearchSubmit}
          >
            <input
              type="text"
              name="query"
              className="input-group-field form-control"
              required
              placeholder="Tìm theo tên sản phẩm..."
              autoFocus
            />
            <span className="input-group-btn btn-action">
              <button type="submit" aria-label="search" className="btn text-white">
                <svg className="icon"><use xlinkHref="#icon-search"></use></svg>
              </button>
            </span>
          </form>
        </div>
      )}

      {/* Mobile menu drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul className="mobile-nav">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className={`mobile-nav-item ${item.id === 7 ? 'mobile-outlet' : ''}`}>
              <a href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
