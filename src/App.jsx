import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

// Bootstrap components
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Button variant="outline-primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>

        <Alert key={"primary"} variant={"primary"}>
          This is a primary alert—check it out!
        </Alert>

      </div>
      
    </>
  )
}

export default App
