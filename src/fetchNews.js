import React from 'react'
import { Button, Card, CardColumns } from 'react-bootstrap';


function FetchNews({ news }) {

    const articles = news.map((article, index) =>
        <>

            <Card >
                <Card.Img key={index} variant="top" src={article.urlToImage} />
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
    );
    return (
        <>
            <CardColumns>
                {articles}
            </CardColumns>
        </>
    )
}

export default FetchNews
