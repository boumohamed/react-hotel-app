import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <>
            <footer>
                <Container>
                <Row>
                    <Col  className="text-center text-dark py-1">
                        Copyright &copy; THE STAR<i className="fas fa-star text-warning App-logo"></i>HOTEL 2021
                    </Col>
                </Row>
                </Container>
            </footer>
        </>
    )
}
