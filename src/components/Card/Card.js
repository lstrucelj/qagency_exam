import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    CardContainer,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    CardText,
    CardUser,
    CardDetails,
    Image
} from './Card.elements';
import titleimg from '../../assets/title.png';
import noteimg from '../../assets/note.png';
import userimg from '../../assets/user.png';
import { Link } from 'react-router-dom';

export const Card = ({ id, title, text, user, disable, hideHeader, propmessage }) => {
    var name = 'Card';

    useEffect(function () {
        console.log(propmessage + name);
    }, [])

    const setBg = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return '#' + randomColor;
    }


    return (
        <Link to={'/post/' + id} style={{ textDecoration: 'none', color: 'black', pointerEvents: disable ? "none" : null }}>
            <CardContainer>
                {!hideHeader && <CardHeader color={setBg()} />}
                <CardDetails>
                    <CardBody>
                        <CardTitle>
                            <Image src={titleimg} />
                            {title}
                        </CardTitle><hr />
                        <CardText>
                            <Image src={noteimg} />
                            {text}
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <CardUser>
                            <Image src={userimg} />
                            {user}
                        </CardUser>
                    </CardFooter>
                </CardDetails>
            </CardContainer>
        </Link >
    )
}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    user: PropTypes.string,
    id: PropTypes.number,
    disable: PropTypes.bool,
    hideHeader: PropTypes.bool,
    propmessage: PropTypes.string,
};