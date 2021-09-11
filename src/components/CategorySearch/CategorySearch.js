import React, { Fragment, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';

const CategorySearch = ({ onCategorySearch, news }) => {
    const [type, setType] = useState('category');
    const [category, setCategory] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [categoryList, setCategoryList] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg='8'>
                    <Form className="mt-3" onSubmit={onSubmit}>
                    <Form.Row>
                        {type === 'category' && (
                            <Fragment>
                                <Col md="4" sm="4">
                                <Form.Group>
                                    <Form.Control
                                        as="select"
                                        defaultValue={categoryName}
                                        onChange={e => setCategoryName(e.target.value)}
                                    >
                                    <option value="">Select Category</option>
                                    <option value="Biz">Biz</option>
                                    <option value="Campus">Campus</option>
                                    <option value="Corona">Corona</option>
                                    <option value="English">English</option>
                                    <option value="Games">Games</option>
                                    <option value="Hobbies">Hobbies</option>
                                    <option value="Intermezzo">Intermezzo</option>
                                    <option value="KataGaul">KataGaul</option>
                                    <option value="Life">Life</option>
                                    <option value="Movie">Movie</option>
                                    <option value="Music">Music</option>
                                    <option value="News">News</option>
                                    <option value="Otomotif">Otomotif</option>
                                    <option value="Parenting">Parenting</option>
                                    <option value="Regional">Regional</option>
                                    <option value="Sci-Tech">Sci-Tech</option>
                                    <option value="Showbiz">Showbiz</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Story">Story</option>
                                    <option value="Top">Top</option>
                                    <option value="Trending">Videos</option>
                                </Form.Control>
                                </Form.Group>
                                </Col>
                                </Fragment>
                        )}

                    </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default CategorySearch
