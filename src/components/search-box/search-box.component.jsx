import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChangeHandler}) => (
    <input 
        //1.general 2.specific for monster search box
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder} 
        onChange={onChangeHandler}  
    />
);

export default SearchBox;