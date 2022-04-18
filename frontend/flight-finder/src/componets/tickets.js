import React from 'react'

function Ticket(props){

    return(
        <div className='ticket'>
            <span style={{ fontWeight: 'bold, underline', marginLeft: "50px" }}>{props.ticket.date}</span>
            <span style={{ fontWeight: 'bold, underline', marginLeft: "50px"}}>{props.ticket.agency}</span>
            <span style={{ fontWeight: 'bold, underline', marginLeft: "50px"}}>{props.ticket.price}</span>
        </div>
    )
}
export default Ticket;