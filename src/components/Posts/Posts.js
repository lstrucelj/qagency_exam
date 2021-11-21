import React, { useEffect, useState } from 'react';
import {
    CardContainer,
    CardWrapper
} from './Posts.elements';
import Card from '../Card/Card';
import { Col } from 'react-bootstrap';
import { Search } from '../Search/Search';

const Posts = () => {

    useEffect(async () => {
        let allPosts = await
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => { return json });

        let allUsers = await
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((json) => { return json });


        for (let i = 0; i < allPosts.length; i++) {
            const current = allPosts[i];
            let user = allUsers.find((i) => i.id == current.userId);
            current.name = user.name;
        }

        setPosts(allPosts);
        setFiltered(allPosts);


    }, []);



    const [posts, setPosts] = useState([]);
    const [filtered, setFiltered] = useState([]);

    return (
        <>
            <Search data={posts} setFiltered={setFiltered} />
            <CardWrapper>
                <CardContainer xs={1} md={3} className="g-4">
                    {filtered.map((x) => {
                        return (
                            <Col key={x.id}>
                                <Card
                                    as={Col}
                                    id={x.id}
                                    key={x.id}
                                    title={x.title}
                                    text={x.body}
                                    user={x.name}
                                />
                            </Col>
                        )
                    })}
                </CardContainer>
            </CardWrapper>
        </>
    )
}

export default Posts;