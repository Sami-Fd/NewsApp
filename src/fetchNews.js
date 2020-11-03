import React from 'react'
import { Button, Card } from 'react-bootstrap';


function FetchNews({ article }) {
    return (
        <>

            <Card>
                <Card.Img variant="top" src={article.urlToImage} />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{new Date(article.publishedAt).toLocaleDateString()}, {article.author}</Card.Subtitle>
                    <Card.Text>
                        {article.description}
                    </Card.Text>
                    <Button variant="primary" >
                        <a href={article.url}>Read More</a> </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default FetchNews
