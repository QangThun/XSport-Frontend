import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>MaxxSport - Siêu thị thể thao</h1>
      <p className={styles.homeSubtitle}>
        Chào mừng bạn đến với cửa hàng thể thao uy tín hàng đầu Việt Nam
      </p>
      <p style={{ marginTop: '2rem', textAlign: 'center', maxWidth: '600px' }}>
        MaxxSport cung cấp các sản phẩm thể thao chất lượng cao từ các thương hiệu nổi tiếng
        như Nike, Adidas, ASICS, Le Coq Sportif và nhiều hơn nữa.
      </p>
    </div>
  );
}
