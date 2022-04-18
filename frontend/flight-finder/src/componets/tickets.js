import React from 'react'

function Ticket(props){

    return(
        <div>
            <p>
                <span style={{ fontWeight: 'bold, underline' }}>{props.ticket.date}</span>
                {props.ticket.agency}
                {props.ticket.price}
                <hr></hr>
            </p>
        </div>
    )
}
export default Ticket;