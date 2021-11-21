import React from 'react';
import {
    SearchWrapper,
    SearchInput,
    SearchIcon,
    SearchContainer
} from './Search.elements';


export const Search = ({ data, setFiltered }) => {

    function handleSearch(event) {
        var value = event.target.value;
        let filtered = data.filter((x) => {
            return x.name.includes(value) || x.title.includes(value);
        })
        setFiltered(filtered);
    }

    return (
        <SearchWrapper>
            <SearchContainer>
                <SearchInput type="text" onChange={(event) => handleSearch(event)} placeholder="Search by user or title" />
                <SearchIcon />
            </SearchContainer>
        </SearchWrapper>
    )
}
