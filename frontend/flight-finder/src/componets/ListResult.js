import TicketItem from './tickets'

function ListResult(props){

    props.result.map( (ticket,index) =>{
        return(
            <div key={index}>
                <ul>
                    <TicketItem ticket={ticket}/>
                </ul>
            </div>
        )
    });
}

export default ListResult;
