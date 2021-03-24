import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header'

import { heros as herosEndpoint } from '../../config/connections';
import api from '../../services/api';

const HeroList = () => {
  const [heros, setHeros] = useState([]);

  const fetchHeros = async () => {
    const response = await api.get(herosEndpoint);
    setHeros(response.data)
  }

  const deleteHero = async (id) => {
    try {
      // @TODO: show tooltip
      await api.delete(`${herosEndpoint}/${id}`);
      fetchHeros();
    } catch(err) {
      // @TODO: show tooltip
      console.log('error')
    }
  };

  useEffect(() => {
    fetchHeros();
  }, []);

  return(
    <div>
      <Header />
      <Container>
        <Row>
          <Col><h1 class="mt-2">Heros</h1></Col>
          <Col>
            <Button className="mt-3 float-right" size="sm" variant="info" as={Link} to={`/hero`}>Add hero</Button>
          </Col>
        </Row>

        <Table stripped bordered hover>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Rank</th>
            <th>.:.</th>
            <th>.:.</th>
          </thead>
          <tbody>
            {heros.map((hero) => {
              return (
                <tr>
                  <td>{hero.id}</td>
                  <td>{hero.name}</td>
                  <td>{hero.rank}</td>
                  <td><Button size="sm" variant="info" as={Link} to={`/hero/${hero.id}`}>Edit</Button></td>
                  <td><Button size="sm" variant="danger" onClick={() => deleteHero(hero.id)}>Delete</Button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default HeroList;