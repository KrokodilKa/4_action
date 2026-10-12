import { Card, Typography, Form, Input, Radio, Select, Checkbox, Button, DatePicker } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const languages = [
  'Pascal', 'C', 'C++', 'JavaScript', 'PHP', 'Python',
  'Java', 'Haskel', 'Clojure', 'Prolog', 'Scala',
];

export default function FormSection() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Card
      id="form-section"
      style={{ borderRadius: 24, border: '1px solid #f8d7e3' }}
      styles={{ body: { padding: '24px 28px' } }}
    >
      <Title level={3} style={{ color: '#7b3f5e', marginTop: 0 }}>
        Форма
      </Title>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ gender: 'male' }}
        requiredMark={false}
      >
        <Form.Item
          label="1. ФИО"
          name="fio"
          rules={[{ required: true, message: 'Введите ФИО' }]}
        >
          <Input placeholder="Иванов Иван Иванович" />
        </Form.Item>

        <Form.Item label="2. Телефон" name="phone">
          <Input placeholder="+7 (999) 123-45-67" />
        </Form.Item>

        <Form.Item
          label="3. E-mail"
          name="email"
          rules={[{ type: 'email', message: 'Некорректный e-mail' }]}
        >
          <Input placeholder="example@mail.ru" />
        </Form.Item>

        <Form.Item label="4. Дата рождения" name="birthdate">
          <DatePicker style={{ width: '100%' }} format="DD.MM.YYYY" />
        </Form.Item>

        <Form.Item label="5. Пол" name="gender">
          <Radio.Group>
            <Radio value="male">Мужской</Radio>
            <Radio value="female">Женский</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="6. Любимый язык программирования" name="languages">
          <Select
            mode="multiple"
            placeholder="Выберите языки"
            options={languages.map((l) => ({ label: l, value: l }))}
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item label="7. Биография" name="bio">
          <TextArea rows={6} placeholder="Расскажите о себе..." />
        </Form.Item>

        <Form.Item
          name="contract"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Необходимо согласие')),
            },
          ]}
        >
          <Checkbox>8. С контрактом ознакомлен(а)</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            9. Сохранить
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}