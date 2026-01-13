
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
    {queue.length === 0 ? (<p className="empty-queue">No customers in the queue.</p> ):(<div className="queue-list">

        {queue.map((customer) => (
            <div className="queue-items" key={customer.id}>
                 <div className="customer-info"></div>
                 <h3>{customer?.name}</h3>
                 <p>{customer.service}</p>
                 <span style={{color: getStatusColor(customer.status), fontWeight: 600, marginBottom: '0.5rem'}}>
                   {customer.status}
                 </span>
                 <span className="status">
                   {customer.status === 'waiting'&&(
                    <button className="serve-btn"
                    onClick={() => onUpdateStatus(customer.id,"serving") }>Serve</button>
                   )} 
                   {customer.status === 'serving'&&(
                    <button className="complete-btn"
                    onClick={() => onUpdateStatus(customer.id,"completed") }>Complete</button>
                   )}
                 </span>
                 <button className="remove-btn"
                   onClick={() => onRemove(customer.id)}> Remove</button>
            </div>
        ))}
        </div>
        )}
  </div>
}
export default QueueDisplay