import React from 'react'
import { Link } from "gatsby";
import { Col, Card } from 'react-bootstrap'


export default function PortfolioCard({ id, name, description, last_update, thumbnail_url, limit_desc }) {
    description = (description !== null) ? description : "No description available"
    return (
        <Col xl={6} lg={6} md={6}>
            <Card key={id} style={{ marginBottom: '1.75rem' }}>
                <Card.Img variant={'top'} src={ (thumbnail_url) || 'https://via.placeholder.com/640x320'} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Last commit: {last_update}</Card.Subtitle>
                    <Card.Text style={{ minHeight: '7rem' }}>
                        {(description.length <= limit_desc) ? description : description.substring(0, limit_desc) + "..."}
                    </Card.Text>

                    <Link className={'btn btn-outline-primary float-right'} to={'/portfolio/r?name=' + name}>Open README.md</Link>
                    {/* <Button variant='outline-success' href={github_link}>Check on GitHub</Button> */}
                </Card.Body>
            </Card>
        </Col>


    )
}