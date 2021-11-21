import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    CardContainer,
    CardWrapper,
    Title
} from '../Posts/Posts.elements';
import Card from '../Card/Card';
import { Col } from 'react-bootstrap'

const Post = () => {

    let { id } = useParams();

    const [post, setPost] = useState({})

    useEffect(async () => {
        let getPost = await
            fetch('https://jsonplaceholder.typicode.com/posts/' + id)
                .then((response) => response.json())
                .then((json) => { return json });

        let getUser = await
            fetch('https://jsonplaceholder.typicode.com/users/' + getPost.userId)
                .then((response) => response.json())
                .then((json) => { return json });

        let getComments = await
            fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
                .then((response) => response.json())
                .then((json) => { return json });

        getPost.username = getUser.name;
        getPost.comments = getComments;
        setPost(getPost);

    }, []);


    return (
        <>
            <CardContainer xs={1} md={1} className="g-4">
                <Col>
                    <Card
                        as={Col}
                        id={post.id}
                        title={post.title}
                        text={post.body}
                        user={post.username}
                        disable={true}
                    />
                </Col>
            </CardContainer>
            <CardWrapper>
                <Title>COMMENTS</Title>
                <CardContainer xs={1} md={1} className="g-4">
                    {post.comments && post.comments.map((x) => {
                        return (
                            <Col key={x.id}>
                                <Card
                                    as={Col}
                                    id={x.id}
                                    title={x.name}
                                    text={x.body}
                                    user={x.email}
                                    disable={true}
                                    hideHeader={true}
                                />
                            </Col>
                        );
                    })}
                </CardContainer>
            </CardWrapper>
        </>
    )

}

export default Post;