import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';

export const SearchWrapper = styled.div`
    padding: 5% 30%;
`;

export const SearchInput = styled.input`
    border-radius: 5px;
    width: -webkit-fill-available;
    height: 40px;
    border: 1px solid lightgray;
    padding-right: 30px;
    padding-left: 10px;

    &:focus{
        outline: none;
        border: 1px solid gray;
    }
`;

export const SearchIcon = styled(IoIosSearch)`
    position:absolute;
    bottom:6px;
    right:5px;
    width:24px;
    height:24px;
    color: lightslategray;
`;

export const SearchContainer = styled.div`
    position:relative;
`;