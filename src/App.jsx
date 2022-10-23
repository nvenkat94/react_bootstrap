import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
      <div style={{padding:'5rem'}}>
        <Tabs
          id="controlled-tab-example"
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            Home Sonnet
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Profile sonnet
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            Contact sonnet
          </Tab>
        </Tabs></div>
    </div>
  )
}

export default App
