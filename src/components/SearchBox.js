import React from 'react'

export const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Buscar Robot"
                onChange = {searchChange}
                />
        </div>
    )
}

export default SearchBox;
