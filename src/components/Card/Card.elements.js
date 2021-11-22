import styled from 'styled-components';
import { Card } from 'react-bootstrap';


export const CardContainer = styled(Card)`

`;

export const CardHeader = styled.div`
    height: 15px;
    background-color: ${({ color }) => color};
    border-bottom: 1px solid lightgray;
`;

export const CardBody = styled(Card.Body)`

`;

export const CardTitle = styled(Card.Title)`
    padding-left: 30px;
`;

export const CardText = styled(Card.Text)`
    padding-left: 30px;
`;

export const CardFooter = styled(Card.Footer)`
    background: lightcyan;

`;

export const CardUser = styled.small.attrs(() => ({
    className: 'text-muted',
}))`
    padding-left: 30px;
`;

export const CardDetails = styled.div`
    align-items: stretch;

`;

export const Image = styled.img`
position: absolute;
left: 10px;
width: 25px;
height: 25px;
}
`;


