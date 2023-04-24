import { Component } from "react";
import './search-box.styles.css';
const SearchBox = ({classname, placeholder, onChangehandler}) => {
    <input 
        //1.general 2.specific for monster search box
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder} 
        onChange={onChangeHandler}  
    />
}

export default SearchBox;