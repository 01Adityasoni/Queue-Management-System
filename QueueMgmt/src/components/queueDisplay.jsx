
function QueueDisplay({queue, onUpdateStatus, onRemove}) {

    const getStatusColor = (status) => {
        switch(status) {
            case 'waiting':
                return "var(--warning)";
            case 'serving':
                return "var(--success)";
            case 'completed':
                return "var(--info)";
            default:
                return "var(--text)";
        }
    }

  return <div className="queue-display">
    <h2>Current queue</h2>
    {queue.length === 0 ? <p>No customers in the queue.</p> : <p>Yes customer data</p>}


  </div>
}

export default QueueDisplay