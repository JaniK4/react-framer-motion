import React from 'react'
import { motion } from 'framer-motion';
import { Card, Col, Container, Row } from 'react-bootstrap'
import jaljeeraImage from './images/jaljeera.jpg';
import kulfi from './images/kulfi.jpg';
import lassi from './images/lassi.jpg';
import './card-page.css'
export default function CardPage() {
  return (
    <div>
        <Container fluid className='con'>
            <Row   className="g-4">
                <motion.div className='card-deck'
                    initial={{opacity:0,scale:0}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:2}}
                    viewport={{once:true}}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    >
                        <Col md={3}>
                            <Card className='Cards'>
                                <Card.Img className='card-pic img-fluid mx-auto d-block' src={jaljeeraImage} variant='top'/>
                                <Card.Title className='m_Title'><h3>Example 1</h3></Card.Title>
                                <Card.Text><h5>Jaljeera is a traditional Indian drink made from cumin, mint, and tamarind, 
                                    known for its tangy and refreshing flavor. It's often enjoyed as a digestive aid and is 
                                    popular during hot weather for its cooling properties. The drink is typically served 
                                    chilled and garnished with mint leaves or boondi (crisp chickpea flour pearls).</h5></Card.Text>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className='Cards'>
                                <Card.Img className='card-pic img-fluid mx-auto d-block' src={kulfi} variant='top'/>
                                <Card.Title className='m_Title'><h3>Example 1</h3></Card.Title>
                                <Card.Text><h5>Kulfi is a traditional Indian frozen dessert made from condensed milk, sugar, and flavored 
                                    with ingredients like cardamom, saffron, and pistachios. Unlike regular ice cream, kulfi has a denser 
                                    and creamier texture due to its slow freezing process. Kulfi is a popular treat during hot weather and is loved for its 
                                    rich, indulgent flavor.</h5></Card.Text>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className='Cards'>
                                <Card.Img className='card-pic  img-fluid mx-auto d-block' src={lassi} variant='top'/>
                                <Card.Title className='m_Title'><h3>Example 1</h3></Card.Title>
                                <Card.Text><h5>Jaljeera is a traditional Indian drink made from cumin, mint, and tamarind, 
                                    known for its tangy and refreshing flavor. It's often enjoyed as a digestive aid and is 
                                    popular during hot weather for its cooling properties. The drink is typically served 
                                    chilled and garnished with mint leaves or boondi (crisp chickpea flour pearls).</h5></Card.Text>
                            </Card>
                        </Col>
                </motion.div>
                
            </Row>
        </Container>
    </div>
  )
}
