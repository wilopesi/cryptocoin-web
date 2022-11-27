import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const newsURL = import.meta.env.VITE_API_NEWS;

const News = () => {

    const [coinNews, setCriptoNews] = useState([])

    const getNews = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            setCriptoNews(data.results)
        }
        catch { }
    }

    useEffect(() => {
        const url = `${newsURL}`
        getNews(url)
    }, [])

    const verifyImage = (image) => {
        if (image == null) {
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
        }
        else {
            return image;
        }
    }

    const newsElement = coinNews.map((news, index) =>
        <Row key={index} style={{ margin: '30px'}}>
            <Col xs={3}>
                <Card>
                    <Card.Img variant="top" src={verifyImage(news.image_url)} style={{maxHeight:'200px',maxWidth:'250px'}} />
                </Card>
            </Col>
            <Col xs={9}>
                <Card>
                    <Card.Body>
                        <Card.Title>{news.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"> Publicado em : {news.pubDate}</Card.Subtitle>
                        <Card.Text>
                            {news.description}
                        </Card.Text>
                        <Card.Link href={news.link}>Saiba Mais</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );


    return (
        <div className="container element">
            <h4>Ultimas noticias do mundo das Criptomoedas</h4>
            <br />
            {newsElement}
        </div>
    )
}


export default News