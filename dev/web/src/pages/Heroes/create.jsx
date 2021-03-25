import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../../components/Header'

import { heroes as heroesEndpoint } from '../../config/connections';
import api from '../../services/api';

const CreateHero = () => {
  const history = useHistory();
  const form = React.createRef();
  
  const [heroName, setHeroName] = useState('');
  const [heroRank, setHeroRank] = useState('');
  const [validated, setValidated] = useState(false);

  const createHero = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const isValid = form.current.checkValidity();
    setValidated(true);

    if (isValid) {
      try {
        const response = await api.post(`${heroesEndpoint}`, {
          name: heroName,
          rank: heroRank,
          location: [
            // @todo: adicionar suporte a locations
            {
              "lat": -5.836597,
              "lng": -35.236007
            }
          ],
        });

        history.push('/heroes');
      } catch(err) {
        // @todo: mostrar tooltip com resultado.
        console.log(err);
      }
    }
  };
  return (
    <div>
      <Header />
      <Container>
        <Row className="justify-content-md-center align-items-center h-100">
          <Col xs="4">
            <Form noValidate validated={validated} onSubmit={createHero} ref={form}>
              <h1 className="text-center">Create hero</h1>
              <Form.Group>
                <Form.Control
                  required
                  size="lg"
                  placeholder="Name"
                  onChange={(value) => setHeroName(value.target.value)} 
                  value={heroName}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="select"
                  required
                  size="lg"
                  placeholder="Rank"
                  onChange={(value) => setHeroRank(value.target.value)} 
                  value={heroRank}
                >
                  <option value="">Select</option>
                  <option value="S">S</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Button type="submit" variant="primary" size="lg" block onClick={createHero}>Create</Button>
              </Form.Group>

              <Button as={Link} to="/heroes" variant="secondary" size="lg" block>Cancel</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateHero;
