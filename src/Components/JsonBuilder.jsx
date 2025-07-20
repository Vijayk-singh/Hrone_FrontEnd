
import InputContainer from './InputContainer';
import {Button} from 'antd'

const defaultField = () => ({
  key: "",
  type: "string",
  children: [],
});

function JsonBuilder({ fields, setFields }) {
  const updateField = (index, updates) => {
    const updated = [...fields];
    updated[index] = { ...updated[index], ...updates };
    setFields(updated);
  };

  const addField = () => {
    setFields([...fields, defaultField()]);
  };

  const deleteField = (index) => {
    const updated = [...fields];
    updated.splice(index, 1);
    setFields(updated);
  };

  return (
    <div  >
      {fields.map((field=[], index) => (
        <InputContainer 
          key={index} 
          field={field} 
          index={index} 
          updateField={updateField} 
          deleteField={deleteField} 
          setFields={setFields}
        />
      ))}
      <Button size='small' style={{margin:"5px"}} type='primary' onClick={addField}>+ Add Item</Button>
    </div>
  );
}

export default JsonBuilder;