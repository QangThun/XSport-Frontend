import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';
import Cart from '../pages/Cart/Cart';
import Payment from '../pages/Payment/Payment';
import PaymentManagement from '../pages/PaymentManagement/PaymentManagement';
import Auth from '../pages/Auth/Auth';
import CategoryPage from '../pages/Category/Category';
import NotFound from '../pages/NotFound';
import MainLayout from '../components/layout/MainLayout';

export default function AppRoutes() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-management" element={<PaymentManagement />} />

          {/* ── Universal Category Routes ─────────────────────── */}
          <Route path="/new-arrivals" element={<CategoryPage categoryType="status" categoryValue="new" pageTitle="SẢN PHẨM MỚI" />} />
          <Route path="/nam" element={<CategoryPage categoryType="gender" categoryValue="nam" pageTitle="NAM" />} />
          <Route path="/nu" element={<CategoryPage categoryType="gender" categoryValue="nu" pageTitle="NỮ" />} />
          <Route path="/tre-em" element={<CategoryPage categoryType="gender" categoryValue="tre-em" pageTitle="TRẺ EM" />} />
          <Route path="/outlet" element={<CategoryPage categoryType="status" categoryValue="outlet" pageTitle="OUTLET" />} />
          <Route path="/category" element={<CategoryPage pageTitle="TẤT CẢ SẢN PHẨM" />} />

          {/* ── Sport Category Routes ─────────────────────────── */}
          <Route path="/sport/pickleball" element={<CategoryPage categoryType="sport" categoryValue="pickleball" pageTitle="PICKLEBALL" />} />
          <Route path="/sport/cau-long" element={<CategoryPage categoryType="sport" categoryValue="cau-long" pageTitle="CẦU LÔNG" />} />
          <Route path="/sport/bong-da" element={<CategoryPage categoryType="sport" categoryValue="bong-da" pageTitle="BÓNG ĐÁ" />} />
          <Route path="/sport/bong-ro" element={<CategoryPage categoryType="sport" categoryValue="bong-ro" pageTitle="BÓNG RỔ" />} />
          <Route path="/sport/chay-bo" element={<CategoryPage categoryType="sport" categoryValue="chay-bo" pageTitle="CHẠY BỘ" />} />
          <Route path="/sport/tennis" element={<CategoryPage categoryType="sport" categoryValue="tennis" pageTitle="TENNIS" />} />
          <Route path="/sport/golf" element={<CategoryPage categoryType="sport" categoryValue="golf" pageTitle="GOLF" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

