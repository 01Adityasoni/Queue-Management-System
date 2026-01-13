import "./App.css";
import { useState } from "react";
import Queueform from "./components/Queueform";
import QueueDisplay from "./components/queueDisplay";
export default function App(){
  const [queue , setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue , {...customer , id: Date.now() , status: 'waiting'}]);
  }

  const updateStatus = (id , newStatus) => {
    setQueue(queue.map(customer => 
      customer.id === id? {...customer , status: newStatus} : customer
    ))
  }
  const removeFromQueue = (id) => {
    setQueue(queue.filter(customer => customer.id !== id));
  }
  return (
    <>
    <div className="app">
      <header>
        <h1>Queue Management System</h1>
        <p>Manage your queues efficiently and effectively.</p>
      </header>
      <main>
        <div className="queue-layout">
          <Queueform onAdd={addToQueue} />
          <QueueDisplay
            queue={queue}
            onUpdateStatus={updateStatus}
            onRemove={removeFromQueue}
          />
        </div>
      </main>
    </div>
    </>
  )
}