import {Input, Select, Button, Row, Col } from 'antd';

const defaultField = () => ({
  key: " ",
  type: "string",
  children: [],
});

const ItemInput = ({  field, index, updateField, deleteField }) => {
  return (
    <div style={{padding:"2px "}}>
      <Row gutter={16} align="middle">
        <Col>
          <Input
          size='small'
          
            placeholder="Key"
            value={field.key}
            onChange={(e) => updateField(index, { key: e.target.value })}
          />
        </Col>

        <Col>
          <Select
          size='small'
          style={{ width: 120 }}
            value={field.type}
            onChange={(value) => {
              if (value === "nested") {
                updateField(index, {
                  type: value,
                  children: [defaultField()],
                });
              } else {
                updateField(index, { type: value, children: [] });
              }
            }}
          >
            <Select.Option value="string">String</Select.Option>
            <Select.Option value="number">Number</Select.Option >
            <Select.Option value="nested">Nested</Select.Option>
          </Select>
        </Col>

        <Col>
          <Button size='medium'  type="danger" onClick={() => deleteField(index)}> ✖ </Button>
        </Col>
      </Row>

    </div>
  );
};

export default ItemInput;