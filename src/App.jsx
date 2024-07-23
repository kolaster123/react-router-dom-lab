import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MailboxForm from './components/MailBoxForm';
import MailboxList from './components/MailBoxList';
import MailboxDetails from './components/MailBoxDetails';
import NavBar from './components/NavBar';
import './index.css'



const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBox) => {
    const newMailbox = {
      ...newBox,
      _id: mailboxes.length + 1,
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />
      <h1>Pokemon!</h1>
      <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
          <Route path="/mailboxes" 
          element={<MailboxList mailboxes={mailboxes} />} />
          <Route path="/new-mailbox" 
          element={<MailboxForm addBox={addBox} />} />
          <Route path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<h2>Whoops, page not found.</h2>} />
      </Routes>
    </>
  )
}
export default App;
