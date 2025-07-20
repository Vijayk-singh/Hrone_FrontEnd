import { useState } from 'react'
import { Row } from 'antd';


import JsonBuilder from './Components/JsonBuilder'
import JsonOutput from './Components/JsonOutput';

function App() {
  const [fields, setFields] = useState([]);

  return (
    <Row>
      <JsonBuilder fields={fields} setFields={setFields} />
      
     <JsonOutput fields={fields}/>
      
    </Row>
  )
}

export default App
