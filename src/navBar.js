import React, { useState } from 'react'
import { Button, Row, Col, Form, FormControl } from 'react-bootstrap';

function NavBar({ getSearch, getlanguage, getsortby }) {
    const [text, setText] = useState('')
    const [sort, setSort] = useState('popularity')
    const [lang, setLang] = useState('en')
    const handleSubmit = (event) => {
        event.preventDefault();
        if (text === '') alert('Search Filed Required')
        getSearch(text)
        getlanguage(lang)
        getsortby(sort)
    }

    return (
        <>
            {/* <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form> */}
            <Form className='m-5' onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={text} onChange={(e) => setText(e.target.value)} />
                    </Col>
                    <Col>
                        <Form.Control
                            as="select"
                            className="mr-sm-2"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}

                        >
                            <option value="popularity">popularity</option>
                            <option value="relevancy">relevancy</option>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control
                            as="select"
                            className="mr-sm-2"
                            value={lang}
                            onChange={(e) => setLang(e.target.value)}

                        >
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="ar">Arabic</option>
                            <option value="es">Spanish</option>                            <option value="en">English</option>
                            <option value="de">Deutch</option>
                        </Form.Control>
                    </Col>
                    <input class="btn btn-primary" type="submit" value="Search" /></Row>
            </Form>

        </>
    )
}

export default NavBar
