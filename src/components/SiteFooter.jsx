import { Layout } from 'antd';

const { Footer } = Layout;

export default function SiteFooter() {
  return (
    <Footer
      style={{
        background: 'linear-gradient(135deg, #fce4ec, #f8d7e3)',
        color: '#5e2a42',
        padding: '20px',
        boxShadow: '0 -2px 8px rgba(200, 120, 150, 0.1)',
      }}
    >
      © Сергей Синица
    </Footer>
  );
}