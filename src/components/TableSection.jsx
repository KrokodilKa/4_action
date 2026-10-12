import { Card, Typography, Table } from 'antd';

const { Title } = Typography;

const columns = [
  {
    title: 'Факультет / Институт',
    dataIndex: 'faculty',
    key: 'faculty',
    onCell: (record) => ({ rowSpan: record.facultyRowSpan }),
  },
  {
    title: 'Направление',
    dataIndex: 'direction',
    key: 'direction',
  },
  {
    title: 'Код',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Бюджетные места (2025)',
    dataIndex: 'places',
    key: 'places',
  },
  {
    title: 'Проходной балл (2024)',
    dataIndex: 'score',
    key: 'score',
  },
];

const data = [
  {
    key: '1',
    faculty: 'Факультет компьютерных технологий и прикладной математики',
    facultyRowSpan: 2,
    direction: 'Прикладная математика и информатика',
    code: '01.03.02',
    places: 45,
    score: 248,
  },
  {
    key: '2',
    faculty: '',
    facultyRowSpan: 0,
    direction: 'Фундаментальная информатика и информационные технологии',
    code: '02.03.02',
    places: 30,
    score: 242,
  },
  {
    key: '3',
    faculty: 'Институт экономики, управления и бизнеса',
    facultyRowSpan: 2,
    direction: 'Экономика',
    code: '38.03.01',
    places: 60,
    score: 255,
  },
  {
    key: '4',
    faculty: '',
    facultyRowSpan: 0,
    direction: 'Менеджмент',
    code: '38.03.02',
    places: 40,
    score: 249,
  },
  {
    key: '5',
    faculty: 'Юридический факультет',
    facultyRowSpan: 1,
    direction: 'Юриспруденция',
    code: '40.03.01',
    places: 75,
    score: 268,
  },
  {
    key: '6',
    faculty: 'Факультет педагогики, психологии и коммуникативистики',
    facultyRowSpan: 1,
    direction: 'Психолого-педагогическое образование',
    code: '44.03.02',
    places: 50,
    score: 235,
  },
];

export default function TableSection() {
  return (
    <Card
      id="table-section"
      style={{ borderRadius: 24, border: '1px solid #f8d7e3' }}
      styles={{ body: { padding: '24px 28px' } }}
    >
      <Title level={3} style={{ color: '#7b3f5e', marginTop: 0 }}>
        Факультеты и направления КубГУ
      </Title>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        size="middle"
        scroll={{ x: 600 }}
        rowClassName={(_, index) => (index % 2 === 0 ? 'odd-row' : 'even-row')}
      />
    </Card>
  );
}