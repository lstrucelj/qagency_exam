import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
    SearchWrapper,
    SearchInput,
    SearchIcon,
    SearchContainer
} from './Search.elements';


export const Search = ({ data, setFiltered, propmessage }) => {
    var name = 'Search';

    const [filterData, setfilterData] = useState(data);

    useEffect(function () {
        console.log(propmessage + name);
    }, []);

    function filterByValue(data, value) {
        let filtered = data.filter((x) => {
            return x.name.toLowerCase().includes(value) || x.title.toLowerCase().includes(value);
        });
        return filtered;
    }

    function handleSearch(event) {
        var value = event.target.value.toLowerCase();
        var filter = filterByValue(data, value);
        setFiltered(filter);
        setfilterData(filter);
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

Search.propTypes = {
    data: PropTypes.array,
    setFiltered: PropTypes.func,
    propmessage: PropTypes.string,
};
