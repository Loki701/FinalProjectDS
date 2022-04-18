import React, {useState} from 'react'
import './searchBar.css'


function SearchBar(props){
    // const posts = [
    //     { id: '1', name: 'Apple' },
    //     { id: '2', name: 'Banana' },
    //     { id: '3', name: 'GreenPeper' },
    //     { id: '4', name: 'Strawberry' },
    // ];
    const [searchBody, setSearchBody] = useState("search-body")
    //const [input, setInput] = useState('');

    // const filterPosts = () => {
    //     if (!props.state) {
    //         return posts;
    //     }
    
    //     return posts.filter((post) => {
    //         const postName = post.name.toLocaleLowerCase();
    //         return postName.includes(props.state.toLocaleLowerCase());
    //     });
    // };
    //const filteredPosts = filterPosts()

    return(
        <div className='searchBar'>
            <div className='search-header'>
                <input
                    value={props.state}
                    onChange={e=>{props.stateChanger(e.target.value)}}
                    onFocus={()=>{return setSearchBody("search-body-active")}}
                    onBlur={()=>{return setSearchBody("search-body")}}
                    
                    type="text"
                    id="header-search"
                    placeholder="Search Airport" 
                />
            </div>
            <div className={searchBody}>
            <ul className='airPort-list'>
            </ul>
            </div>
        </div>
    );
}
export default SearchBar;