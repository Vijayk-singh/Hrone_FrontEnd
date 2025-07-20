
import ItemInput from './ItemInput';
import JsonBuilder from './JsonBuilder';

const InputContainer = ({ field, index, updateField, deleteField, setFields }) => {
  return (
    <div key={index}>
      <ItemInput field={field} index={index} updateField={updateField} deleteField={deleteField} />
      
      {field.type === "nested" && (
        <div style={{ marginLeft: '20px',borderLeft: '5px solid #ccc', paddingLeft: '10px',alignItems:"center" }} >
          <JsonBuilder
            fields={field.children}
            setFields={(newChildren) => {
              updateField(index, { children:  newChildren });
            }}
          />
        </div>
      )}
    </div>
  );
};

export default InputContainer;