import React from 'react';
import PropTypes from 'prop-types';
import {
    CardContainer,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    CardText,
    CardUser

} from './Card.elements';
import { Link } from 'react-router-dom';

const Card = ({ id, title, text, user, disable, hideHeader }) => {

    const setBg = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return '#' + randomColor;
    }


    return (
        <Link to={'/post/' + id} style={{ textDecoration: 'none', color: 'black', pointerEvents: disable ? "none" : null }}>
            <CardContainer>
                {!hideHeader && <CardHeader color={setBg()} />}
                <CardBody>
                    <CardTitle>{title}</CardTitle><hr />
                    <CardText>{text}</CardText>
                </CardBody>
                <CardFooter>
                    <CardUser>{user}</CardUser>
                </CardFooter>
            </CardContainer>
        </Link >
    )
}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.string
};

export default Card;