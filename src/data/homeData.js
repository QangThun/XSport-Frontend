/**
 * homeData.js
 * Structured mock data for the Maxxsport homepage.
 * Designed for easy API integration — replace arrays with async fetch calls.
 */

/* ─────────────────────────────────────────────
   HERO SLIDER
───────────────────────────────────────────── */
export const heroSlides = [
  {
    id: 1,
    image: '/assets/banners/hero-banner.svg',
    href: '/sale-tung-bung-mung-dai-le',
    alt: 'Sale Tưng Bừng Mừng Đại Lễ — Ưu đãi tới 50%',
  },
];

/* ─────────────────────────────────────────────
   LOOKBOOK BANNERS
───────────────────────────────────────────── */
export const lookbookBanners = [
  {
    id: 1,
    image: '/assets/banners/lookbooks.svg',
    href: '/burning-up-new-arrivals-2026',
    alt: 'New Arrivals — Recharge Restart Rebuild | Bật Mood Lên Sân | BST Trekking Camping 2026',
  },
];

/* ─────────────────────────────────────────────
   NEW ARRIVALS SECTION
───────────────────────────────────────────── */
export const newArrivalsTabs = [
  { id: 'adidas', label: 'adidas', href: '/adidas-moi-ve-1' },
  { id: 'nike', label: 'Nike', href: '/nike-moi-ve' },
  { id: 'lining', label: 'Li-Ning', href: '/li-ning-moi-ve' },
  { id: '361sport', label: '361° Sport', href: '/361-sport-moi-ve' },
  { id: 'asics', label: 'ASICS', href: '/asics-moi-ve' },
  { id: 'lecoq', label: 'le coq sportif', href: '/le-coq-sportif-moi-ve' },
];

export const newArrivalsProducts = {
  adidas: [
    {
      id: 'kd3875',
      brand: 'ADIDAS',
      name: 'Quần short chạy bộ adidas adi365 Formotion Nữ - KD3875',
      price: '1.050.000₫',
      image: '/assets/products/adidas-kd3875.svg',
      dotColor: '#111111',
      href: '/quan-short-chay-bo-adidas-adi365-formotion-nu-kd3875',
    },
    {
      id: 'kd0375',
      brand: 'ADIDAS',
      name: 'Áo Tank Top tập luyện adidas D4T Primelft 3 sọc Nam - KD0375',
      price: '900.000₫',
      image: '/assets/products/adidas-kd0375.svg',
      dotColor: '#555555',
      href: '/ao-tank-top-tap-luyen-adidas-d4t-primelft-kd0375',
    },
    {
      id: 'kd0374',
      brand: 'ADIDAS',
      name: 'Áo Tank Top tập luyện adidas D4T Primelft 3 sọc Nam - KD0374',
      price: '900.000₫',
      image: '/assets/products/adidas-kd0374.svg',
      dotColor: '#e87722',
      href: '/ao-tank-top-tap-luyen-adidas-d4t-primelft-kd0374',
    },
    {
      id: 'kd0353',
      brand: 'ADIDAS',
      name: 'Quần short tập luyện adidas D4T Power 3 sọc Nam - KD0353',
      price: '1.400.000₫',
      image: '/assets/products/adidas-kd0353.svg',
      dotColor: '#111111',
      href: '/quan-short-tap-luyen-adidas-d4t-power-kd0353',
    },
    {
      id: 'ka6998',
      brand: 'ADIDAS',
      name: 'Quần short adidas Soft Lux Nữ - KA6998',
      price: '1.700.000₫',
      image: '/assets/products/adidas-ka6998.svg',
      dotColor: '#d4a574',
      href: '/quan-short-adidas-soft-lux-nu-ka6998',
    },
    {
      id: 'kq7487',
      brand: 'ADIDAS',
      name: 'Áo T-shirt tập luyện adidas Tech Essentials 3 sọc Nam - KQ7487',
      price: '900.000₫',
      image: '/assets/products/adidas-kq7487.svg',
      dotColor: '#cccccc',
      href: '/ao-tshirt-adidas-tech-essentials-kq7487',
    },
    {
      id: 'kq7485',
      brand: 'ADIDAS',
      name: 'Áo T-shirt tập luyện adidas Tech Essentials 3 sọc Nam - KQ7485',
      price: '900.000₫',
      image: '/assets/products/adidas-kq7485.svg',
      dotColor: '#111111',
      href: '/ao-tshirt-adidas-tech-essentials-kq7485',
    },
    {
      id: 'ki6930',
      brand: 'ADIDAS',
      name: 'Giày chạy bộ adidas Adizero EVO SL Nữ - KI6930',
      price: '4.000.000₫',
      image: '/assets/products/adidas-ki6930.svg',
      dotColor: '#e91e8c',
      href: '/giay-chay-bo-adidas-adizero-evo-sl-nu-ki6930',
    },
    {
      id: 'ki6901',
      brand: 'ADIDAS',
      name: 'Giày chạy bộ adidas Adizero EVO SL Nam - KI6901',
      price: '4.000.000₫',
      image: '/assets/products/adidas-ki6901.svg',
      dotColor: '#111111',
      href: '/giay-chay-bo-adidas-adizero-evo-sl-nam-ki6901',
    },
    {
      id: 'ki6900',
      brand: 'ADIDAS',
      name: 'Giày chạy bộ adidas Adizero EVO SL Nam - KI6900',
      price: '4.000.000₫',
      image: '/assets/products/adidas-ki6900.svg',
      dotColor: '#f5f5f0',
      href: '/giay-chay-bo-adidas-adizero-evo-sl-nam-ki6900',
    },
  ],
  nike: [],
  lining: [],
  '361sport': [],
  asics: [],
  lecoq: [],
};

/* ─────────────────────────────────────────────
   BẬT MOOD MÙA MỚI — SALE SECTION
───────────────────────────────────────────── */
export const batMoodTabs = [
  { id: 'extra15', label: 'EXTRA UP TO 15%', href: '/extra-up-to-15' },
  { id: 'sale20_30', label: 'SALE 20% - 30%', href: '/sale-20-30' },
  { id: 'sale40_50', label: 'SALE 40% - 50%', href: '/sale-40-50' },
];

export const batMoodProducts = {
  extra15: [
    {
      id: 'aplv649',
      brand: 'LI-NING',
      name: 'Áo Polo Li-Ning Nam APLV649-5V',
      currentPrice: '680.400₫',
      originalPrice: '972.000₫',
      discount: '-30%',
      image: '/assets/products/lining-aplv649.svg',
      dotColor: '#5cb85c',
      href: '/ao-polo-li-ning-nam-aplv649-5v',
    },
    {
      id: 'agcv375-4v',
      brand: 'LI-NING',
      name: 'Giày thời trang Li-Ning Nam AGCV375-4V',
      currentPrice: '1.367.673₫',
      originalPrice: '1.953.818₫',
      discount: '-30%',
      image: '/assets/products/lining-agcv375-4v.svg',
      dotColor: '#b5a48a',
      href: '/giay-thoi-trang-li-ning-nam-agcv375-4v',
    },
    {
      id: 'agcv375-3v',
      brand: 'LI-NING',
      name: 'Giày thời trang Li-Ning Nam AGCV375-3V',
      currentPrice: '1.367.673₫',
      originalPrice: '1.953.818₫',
      discount: '-30%',
      image: '/assets/products/lining-agcv375-3v.svg',
      dotColor: '#b5a48a',
      href: '/giay-thoi-trang-li-ning-nam-agcv375-3v',
    },
    {
      id: 'aglv091-3v',
      brand: 'LI-NING',
      name: 'Giày thời trang Li-Ning SOFT GO 2 V4 Nam AGLV091-3V',
      currentPrice: '1.161.491₫',
      originalPrice: '1.659.273₫',
      discount: '-30%',
      image: '/assets/products/lining-aglv091-3v.svg',
      dotColor: '#a8c4d4',
      href: '/giay-li-ning-soft-go-2-v4-nam-aglv091-3v',
    },
    {
      id: 'aglv091-17v',
      brand: 'LI-NING',
      name: 'Giày thời trang Li-Ning SOFT GO 2 V4 Nam AGLV091-17V',
      currentPrice: '1.161.491₫',
      originalPrice: '1.659.273₫',
      discount: '-30%',
      image: '/assets/products/lining-aglv091-17v.svg',
      dotColor: '#8899aa',
      href: '/giay-li-ning-soft-go-2-v4-nam-aglv091-17v',
    },
    {
      id: 'aglv040-4v',
      brand: 'LI-NING',
      name: 'Giày thời trang Li-Ning Nữ AGLV040-4V',
      currentPrice: '1.161.491₫',
      originalPrice: '1.659.273₫',
      discount: '-30%',
      image: '/assets/products/lining-aglv040-4v.svg',
      dotColor: '#e8b4c8',
      href: '/giay-li-ning-nu-aglv040-4v',
    },
    {
      id: 'aglv040-2v',
      brand: 'LI-NING',
      name: 'Giày thời trang Li-Ning SOFT GO 2 WMS Nữ AGLV040-2V',
      currentPrice: '1.161.491₫',
      originalPrice: '1.659.273₫',
      discount: '-30%',
      image: '/assets/products/lining-aglv040-2v.svg',
      dotColor: '#c8d4e8',
      href: '/giay-li-ning-soft-go-2-wms-nu-aglv040-2v',
    },
    {
      id: 'arsv087',
      brand: 'LI-NING',
      name: 'Giày chạy bộ Li-Ning Nam ARSV087-5V',
      currentPrice: '955.309₫',
      originalPrice: '1.364.727₫',
      discount: '-30%',
      image: '/assets/products/lining-arsv087.svg',
      dotColor: '#c8d4e8',
      href: '/giay-chay-bo-li-ning-nam-arsv087-5v',
    },
    {
      id: 'atsv669',
      brand: 'LI-NING',
      name: 'Áo T-shirt Li-Ning Nam ATSV669-2V',
      currentPrice: '405.491₫',
      originalPrice: '579.273₫',
      discount: '-30%',
      image: '/assets/products/lining-atsv669.svg',
      dotColor: '#336699',
      href: '/ao-tshirt-li-ning-nam-atsv669-2v',
    },
    {
      id: 'aksv809',
      brand: 'LI-NING',
      name: 'Quần short Li-Ning Nam AKSV809-2V',
      currentPrice: '474.219₫',
      originalPrice: '677.455₫',
      discount: '-30%',
      image: '/assets/products/lining-aksv809.svg',
      dotColor: '#111111',
      href: '/quan-short-li-ning-nam-aksv809-2v',
    },
  ],
  sale20_30: [],
  sale40_50: [],
};

/* ─────────────────────────────────────────────
   SPORT CATEGORIES
───────────────────────────────────────────── */
export const sportCategories = [
  { id: 'pickleball', name: 'PICKLEBALL', image: '/assets/sports/pickleball.png', href: '/pickleball' },
  { id: 'chay-bo', name: 'CHẠY BỘ', image: '/assets/sports/running.png', href: '/chay-bo' },
  { id: 'cau-long', name: 'CẦU LÔNG', image: '/assets/sports/badminton.png', href: '/cau-long' },
  { id: 'tennis', name: 'TENNIS', image: '/assets/sports/tennis.png', href: '/tennis-1' },
  { id: 'golf', name: 'GOLF', image: '/assets/sports/golf.png', href: '/golf-2' },
];

/* ─────────────────────────────────────────────
   TRENDING SECTION
───────────────────────────────────────────── */
export const trendingTabs = [
  { id: 'pickleball', label: 'PICKLEBALL', href: '/pickleball' },
  { id: 'cau-long', label: 'CẦU LÔNG', href: '/cau-long' },
  { id: 'running', label: 'RUNNING', href: '/chay-bo' },
];

export const trendingProducts = {
  pickleball: [
    {
      id: 'fv5552',
      brand: 'NIKE',
      name: 'Giày tennis/pickleball Nike ZOOM VAPOR 12 HC Nam - FV5552-108',
      price: '5.069.000₫',
      image: '/assets/products/nike-fv5552.svg',
      dotColor: '#dddddd',
      href: '/giay-nike-zoom-vapor-12-hc-nam-fv5552-108',
    },
    {
      id: 'fd6575',
      brand: 'NIKE',
      name: 'Giày tennis/pickleball Nike COURT LITE 4 HC Nữ - FD6575-111',
      price: '2.369.000₫',
      image: '/assets/products/nike-fd6575.svg',
      dotColor: '#dddddd',
      href: '/giay-nike-court-lite-4-hc-nu-fd6575-111',
    },
    {
      id: '1042a220',
      brand: 'ASICS',
      name: 'Giày tennis/pickleball ASICS COURT FF 3 Nữ - 1042A220.107',
      price: '4.122.655₫',
      image: '/assets/products/asics-1042a220.svg',
      dotColor: '#dddddd',
      href: '/giay-asics-court-ff-3-nu-1042a220-107',
    },
    {
      id: '1041a481',
      brand: 'ASICS',
      name: 'Giày tennis/pickleball ASICS GEL-RESOLUTION X Nam - 1041A481.402',
      price: '3.533.564₫',
      image: '/assets/products/asics-1041a481.svg',
      dotColor: '#dddddd',
      href: '/giay-asics-gel-resolution-x-nam-1041a481-402',
    },
    {
      id: '1041a370',
      brand: 'ASICS',
      name: 'Giày tennis/pickleball ASICS COURT FF 3 Nam - 1041A370.404',
      price: '4.122.655₫',
      image: '/assets/products/asics-1041a370.svg',
      dotColor: '#dddddd',
      href: '/giay-asics-court-ff-3-nam-1041a370-404',
    },
    {
      id: 'jr1736',
      brand: 'ADIDAS',
      name: 'Giày tennis/pickleball adidas Adizero Ubersonic 5 Nam - JR1736',
      price: '3.800.000₫',
      image: '/assets/products/adidas-jr1736.svg',
      dotColor: '#555555',
      href: '/giay-adidas-adizero-ubersonic-5-nam-jr1736',
    },
    {
      id: '1042a294',
      brand: 'ASICS',
      name: 'Giày tennis/pickleball ASICS GEL-CHALLENGER 15 Nữ - 1042A294.700',
      price: '2.895.382₫',
      image: '/assets/products/asics-1042a294.svg',
      dotColor: '#555555',
      href: '/giay-asics-gel-challenger-15-nu-1042a294-700',
    },
    {
      id: '1042a237',
      brand: 'ASICS',
      name: 'Giày tennis/pickleball ASICS GEL-DEDICATE 8 Nữ - 1042A237.106',
      price: '1.864.473₫',
      image: '/assets/products/asics-1042a237.svg',
      dotColor: '#555555',
      href: '/giay-asics-gel-dedicate-8-nu-1042a237-106',
    },
    {
      id: '1041a532',
      brand: 'ASICS',
      name: 'Giày tennis/pickleball ASICS SOLUTION SPEED FF 4 Nam - 1041A532.300',
      price: '3.435.382₫',
      image: '/assets/products/asics-1041a532.svg',
      dotColor: '#226644',
      href: '/giay-asics-solution-speed-ff-4-nam-1041a532-300',
    },
    {
      id: 'ib6560',
      brand: 'NIKE',
      name: 'Giày tennis/pickleball Nike GP Challenge Pro HC Unisex - IB6560-109',
      price: '3.629.000₫',
      image: '/assets/products/nike-ib6560.svg',
      dotColor: '#dddddd',
      href: '/giay-nike-gp-challenge-pro-hc-unisex-ib6560-109',
    },
  ],
  'cau-long': [],
  running: [],
};

/* ─────────────────────────────────────────────
   BLOG / NEWS
───────────────────────────────────────────── */
export const blogPosts = [
  {
    id: 1,
    image: '/assets/blog/blog-bidv.png',
    title: 'ƯU ĐÃI LỚN KHI MUA SẮM TẠI MAXXSPORT VỚI CHỦ THẺ BIDV',
    excerpt: 'Mùa shopping này, MaxxSport bắt tay cùng Payoo và BIDV mang đến deal "hời" cho hội mê thể thao 💥 Chỉ...',
    href: '/uu-dai-lon-khi-mua-sam-tai-maxxsport-voi-chu-the-bidv',
  },
  {
    id: 2,
    image: '/assets/blog/blog-pickleball.jpg',
    title: 'Mới Chơi Pickleball Cần Chuẩn Bị Gì?',
    excerpt: 'Pickleball đang là "cơn sốt" thực sự vì tính kết nối cao và cực kỳ vui. Với một người mới...',
    href: '/moi-choi-pickleball-can-chuan-bi-gi',
  },
];

export const promoPosts = [
  {
    id: 1,
    image: '/assets/blog/promo-sale50.png',
    title: 'SẮM OUTFIT DU LỊCH, NHẬN DEAL CHỒNG DEAL TỪ MAXXSPORT',
    excerpt: '🔥Ưu đãi tới 50% hàng ngàn sản phẩm quần áo hè, giày dép các thương hiệu ADIDAS, NIKE, LI-NING, ASICS,...',
    href: '/sam-outfit-du-lich-nhan-deal-chong-deal-tu-maxxsport',
  },
  {
    id: 2,
    image: '/assets/blog/promo-grand-opening.png',
    title: 'TƯNG BỪNG KHAI TRƯƠNG MAXXSPORT VÕ VĂN NGÂN',
    excerpt: 'Lên lịch ghé MaxxSport 332-334 đường Võ Văn Ngân để không bỏ lỡ loạt deal này nhé 👇 🔥Ưu đãi tới 50%...',
    href: '/tung-bung-khai-truong-maxxsport-vo-van-ngan',
  },
];
