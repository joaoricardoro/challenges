import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header'

import { heroes as heroesEndpoint } from '../../config/connections';
import api from '../../services/api';

const HeroList = () => {
  const [heroes, setHeroes] = useState([]);

  const fetchHeroes = async () => {
    const response = await api.get(heroesEndpoint);
    setHeroes(response.data)
  }

  const deleteHero = async (id) => {
    try {
      // @TODO: show tooltip
      await api.delete(`${heroesEndpoint}/${id}`);
      fetchHeroes();
    } catch(err) {
      // @TODO: show tooltip
      console.log('error')
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return(
    <div>
      <Header />
      <Container>
        <Row>
          <Col><h1 className="mt-2">Heroes</h1></Col>
          <Col>
            <Button className="mt-3 float-right" size="sm" variant="info" as={Link} to={`/hero`}>Add hero</Button>
          </Col>
        </Row>

        <Table stripped="true" bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Rank</th>
              <th>.:.</th>
              <th>.:.</th>
            </tr>
          </thead>
          <tbody>
            {heroes.map((hero) => {
              return (
                <tr key={hero.id}>
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