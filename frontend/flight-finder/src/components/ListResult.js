import TicketItem from './tickets'
import './ListResult.css'

function ListResult(props){

    return(
        props.result.map( (ticket,index) =>(
                <div key={index} className='result-list'>
                    <ul>
                        <TicketItem ticket={ticket}/>
                    </ul>
                </div>
            )
        )
    )
}

export default ListResult;
