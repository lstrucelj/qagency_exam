import styled from 'styled-components';
import { Card } from 'react-bootstrap';


export const CardContainer = styled(Card)`

`;

export const CardHeader = styled.div`
    height: 15px;
    background-color: ${({ color }) => color};
`;

export const CardBody = styled(Card.Body)`

`;

export const CardTitle = styled(Card.Title)`

`;

export const CardText = styled(Card.Text)`

`;

export const CardFooter = styled(Card.Footer)`

`;

export const CardUser = styled.small.attrs(() => ({
    className: 'text-muted',
}))`

`;