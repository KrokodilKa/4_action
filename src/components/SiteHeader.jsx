import { Layout, Row, Col, Space } from 'antd';
import dogImg from '../assets/dog.jpg';

const { Header } = Layout;

const navItems = [
  { href: '#links-section', label: 'Гиперссылки' },
  { href: '#table-section', label: 'Таблица' },
  { href: '#form-section', label: 'Форма' },
  { href: '#', label: 'Контакты' },
];

export default function SiteHeader() {
  return (
    <Header
      style={{
        background: 'linear-gradient(135deg, #fce4ec, #f8d7e3)',
        boxShadow: '0 2px 8px rgba(200, 120, 150, 0.15)',
        height: 'auto',
        lineHeight: 'normal',
        padding: '16px 20px',
      }}
    >
      <Row gutter={[16, 12]} align="middle">
        <Col xs={24} md={10}>
          <Space align="center" size="middle" style={{ width: '100%' }}>
            <img
              src={dogImg}
              alt="Аватар — собака"
              style={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #f8bbd0',
                boxShadow: '0 4px 8px rgba(180, 100, 130, 0.2)',
                background: '#ffeef2',
                display: 'block',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                fontWeight: 700,
                color: '#5e2a42',
                letterSpacing: '0.5px',
                textShadow: '1px 1px 0 #ffeef2',
                lineHeight: 1.25,
              }}
            >
              Кубанский государственный университет
            </span>
          </Space>
        </Col>

        <Col xs={24} md={14}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Header>
  );
}