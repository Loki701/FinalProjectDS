import React, {useState, useEffect} from 'react'
import './searchBar.css'


function SearchBar(props){
    
    const posts = [ 'NYC', 'LAX','BHM'];
    const [searchBody, setSearchBody] = useState("search-body")
    const [input, setInput] = useState('');

    useEffect(() =>{
        props.stateChanger(input.toLocaleUpperCase())
        console.log(input)
        console.log(props.state)
    })
    const filterPosts = () => {
        if (!input) {
            return posts;
        }
        return posts.filter((post) => {
            const postName = post.toLocaleUpperCase();
            return postName.includes(input.toLocaleUpperCase());
        });
    }
    const filteredPosts = filterPosts();
    
    const handleClick = (e) =>{
        setInput(e);
    }
    return(
        <div className='searchBar'>
            <div className='search-header'>
                <input
                    className='inputbar'
                    list = "airports"
                    value={input}
                    onChange={e=>{setInput(e.target.value)}}
                    onFocus={()=>{ setSearchBody("search-body-active")}}
                    onBlur={()=>{
                        setTimeout(()=>{
                            setSearchBody("search-body")
                        },100) 
                    }
                    } 
                    type="text"
                    id="header-search"
                    autoComplete='off'
                    placeholder ={props.name} 
                />
                <datalist id="airports">
                    <option>BHM</option>
                    <option>DHN</option>
                    <option>HSV</option>
                    <option>MOB</option>
                    <option>MGM</option>
                    <option>ANC</option>
                    <option>FAI</option>
                    <option>JNU</option>
                    <option>FLG</option>
                    <option>PHX</option>
                    <option>TUS</option>
                    <option>YUM</option>
                    <option>FYV</option>
                    <option>LIT</option>
                    <option>XNA</option>
                    <option>BUR</option>
                    <option>FAT</option>
                    <option>LGB</option>
                    <option>LAX</option>
                    <option>OAK</option>
                    <option>ONT</option>
                    <option>PSP</option>
                    <option>SMF</option>
                    <option>SAN</option>
                    <option>SFO</option>
                    <option>SJC</option>
                    <option>SNA</option>
                    <option>ASE</option>
                    <option>COS</option>
                    <option>Apple</option>
                    <option>Banana</option>
                    <option>Orange</option>
                    <option>Pineapple</option>
                    <option>Kiwi</option>
                    <option>Apple</option>
                    <option>Banana</option>
                    <option>Orange</option>
                    <option>Pineapple</option>
                </datalist>
            </div>
            
        </div>
    );
}
export default SearchBar;