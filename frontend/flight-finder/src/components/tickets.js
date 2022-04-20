import React from 'react'
import './tickets.css'

function Ticket(props){

    return(
        <div className='ticket'>
            <span className='ticket-item'>{props.ticket.date}</span>
            <span className='ticket-item'>{props.ticket.agency}</span>
            <span className='ticket-item'>${props.ticket.price}</span>
        </div>
    )
}
export default Ticket;