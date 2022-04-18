import TicketItem from './tickets'

function ListResult(props){

    return(
        props.result.map( (ticket,index) =>(
                <div key={index}>
                    <ul>
                        <TicketItem ticket={ticket}/>
                    </ul>
                </div>
            )
        )
    )
}

export default ListResult;
