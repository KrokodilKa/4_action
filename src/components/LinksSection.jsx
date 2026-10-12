import { Card, Typography, Space } from 'antd';
import dogImg from '../assets/dog.jpg';
import aImg from '../assets/a.jpg';

const { Title, Paragraph, Text } = Typography;

const links = [
  { href: 'http://kubsu.ru/', text: '1. Абсолютная гиперссылка на главную страницу kubsu.ru (http)' },
  { href: 'https://kubsu.ru/', text: '2. Абсолютная гиперссылка на главную страницу kubsu.ru (https)' },
  { href: '/about/', text: '4. Сокращённая ссылка на внутреннюю страницу (/about/)' },
  { href: '/', text: '5. Сокращённая ссылка на главную страницу (/)' },
  { href: '#form-section', text: '6. Ссылка на фрагмент текущей страницы (переход к форме)' },
  { href: 'https://kubsu.ru/?param1=value1&param2=value2&param3=value3', text: '7. Ссылка с тремя параметрами в URL' },
  { href: 'https://kubsu.ru/page?id=123', text: '8. Ссылка с параметром id в URL' },
  { href: 'page.html', text: '9. Относительная ссылка на страницу в текущем каталоге' },
  { href: 'about/page.html', text: '10. Относительная ссылка на страницу в каталоге about' },
  { href: '../page.html', text: '11. Относительная ссылка в каталоге уровнем выше текущего' },
  { href: '../../page.html', text: '12. Относительная ссылка в каталоге двумя уровнями выше' },
  { href: 'https://ru.wikipedia.org/wiki/Кубанский_государственный_университет#История', text: '14. Ссылка на фрагмент страницы стороннего сайта (Википедия, раздел «История»)' },
  { href: '', text: '16. Ссылка с пустым href' },
  { href: 'https://kubsu.ru/', rel: 'nofollow', text: '18. Ссылка, по которой запрещён переход поисковикам (rel="nofollow")' },
];

const linkStyle = {
  color: '#a14e6b',
  borderBottom: '1px dashed #e7b7c8',
};

export default function LinksSection() {
  return (
    <Card
      id="links-section"
      style={{ borderRadius: 24, border: '1px solid #f8d7e3' }}
      styles={{ body: { padding: '24px 28px' } }}
    >
      <Title
        level={2}
        style={{ color: '#6b2e4a', borderLeft: '6px solid #f8bbd0', paddingLeft: 14 }}
      >
        Страница с маркированным списком гиперссылок и формой
      </Title>

      <Title level={3} style={{ color: '#7b3f5e' }}>
        Список гиперссылок
      </Title>

      <ul style={{ paddingLeft: 22, listStyleType: 'disc' }}>
        {links.map((item) => (
          <li key={item.text} style={{ marginBottom: 10, lineHeight: 1.6 }}>
            <a href={item.href} rel={item.rel} style={linkStyle}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ margin: '10px 0' }}>
        <Text>3. Ссылка-изображение (картинка a в той же папке):</Text>
        <br />
        <a href="https://kubsu.ru/">
          <img
            src={dogImg}
            alt="Картинка a — ссылка на kubsu.ru"
            className="inline-img"
            style={{ maxWidth: 500, width: '100%', height: 'auto' }}
          />
        </a>
      </div>

      <div style={{ margin: '10px 0' }}>
        <Text>13. Контекстная ссылка в тексте абзаца:</Text>
        <Paragraph style={{ marginTop: 8 }}>
          Чтобы узнать больше о вузе, перейдите на{' '}
          <a href="https://kubsu.ru/" style={linkStyle}>
            официальный сайт Кубанского государственного университета
          </a>
          , где представлена вся необходимая информация для абитуриентов и студентов.
        </Paragraph>
      </div>

      <div style={{ margin: '10px 0' }}>
        <Text>15. Ссылки из прямоугольной и круглой областей картинки (тег map):</Text>
        <br />
        <img
          src={aImg}
          alt="Карта ссылок"
          useMap="#imagemap"
          width={300}
          height={300}
          className="map-img"
          style={{ marginTop: 8 }}
        />
        <map name="imagemap">
          <area shape="rect" coords="0,0,300,75" href="north.html" alt="Север" />
          <area shape="rect" coords="0,225,300,300" href="south.html" alt="Юг" />
          <area shape="rect" coords="0,75,75,225" href="west.html" alt="Запад" />
          <area shape="rect" coords="225,75,300,225" href="east.html" alt="Восток" />
        </map>
      </div>

      <div style={{ margin: '10px 0' }}>
        <Text>
          17. Ссылка без href: <a style={linkStyle}>ссылка без href</a>
        </Text>
      </div>

      <div style={{ margin: '10px 0' }}>
        <Text>
          19. Запрещённая для индексации поисковиками:{' '}
          <a href="https://kubsu.ru/" rel="noindex" style={linkStyle}>
            ссылка на kubsu.ru
          </a>
        </Text>
      </div>

      <Title level={3} style={{ color: '#7b3f5e', marginTop: 24 }}>
        20. Нумерованный список ссылок с подписями title
      </Title>
      <ol style={{ paddingLeft: 22 }}>
        <li style={{ marginBottom: 8 }}>
          <a href="https://kubsu.ru/" title="Главная страница КубГУ" style={linkStyle}>
            Кубанский государственный университет
          </a>
        </li>
        <li style={{ marginBottom: 8 }}>
          <a href="https://kubsu.ru/?id=1" title="Страница с параметром id" style={linkStyle}>
            Страница с параметром id
          </a>
        </li>
        <li style={{ marginBottom: 8 }}>
          <a href="page.html" title="Внутренняя страница в текущем каталоге" style={linkStyle}>
            Внутренняя страница
          </a>
        </li>
      </ol>

      <Title level={3} style={{ color: '#7b3f5e', marginTop: 24 }}>
        21. Ссылка на файл на сервере FTP с авторизацией
      </Title>
      <Paragraph>
        <a href="ftp://user:password@ftp.kubsu.ru/files/document.pdf" style={linkStyle}>
          Скачать файл document.pdf с FTP-сервера (логин: user, пароль: password)
        </a>
      </Paragraph>
    </Card>
  );
}