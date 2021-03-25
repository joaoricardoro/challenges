import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Container, Table, Button, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header'

import { heroes as heroesEndpoint } from '../../config/connections';
import { hero_threats as heroThreatEndpoint } from '../../config/connections';
import { threats as threatsEndpoint } from '../../config/connections';
import api from '../../services/api';


const HeroVsThreatList = () => {
  const history = useHistory();
  const [heroesThreat, setHeroesThreat] = useState([]);
  const [validated, setValidated] = useState(false);
  const form = React.createRef();

  const fetchHeroThreats = async () => {
    const response = await api.get(heroThreatEndpoint);
    setHeroesThreat(response.data)
  }

  // MUST DEFEAT THREAT
  const defeatThreat = async (id) => {
    try {
      const response = await api.patch(`${heroThreatEndpoint}/${id}`, {
        id,
        defeatedAt: new Date(),
      });

      fetchHeroThreats();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHeroThreats();
  }, []);

  const defeatThreatButton = ({ id, defeatedAt }) => {
    if (defeatedAt) {
      const date = new Date(defeatedAt);
      return date.toLocaleString('pt-BR');
    }

    return (
      <Button
        type="submit"
        size="sm"
        variant="danger"
        onClick={() => defeatThreat(id)}
      >
        Defeat Threat
      </Button>
    )
  }

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col><h1 className="mt-2">Hero threats history</h1></Col>
        </Row>

        <Table stripped="true" bordered hover>
          <thead>
            <tr>
              <th>Hero Name</th>
              <th>Threat Name</th>
              <th>Defeat</th>
            </tr>
          </thead>
          <tbody>
            {heroesThreat.map((ht) => {
              return (
                <tr key={ht.id}>
                  <td>{ht.hero.name}</td>
                  <td>{ht.threat.name}</td>
                  <td>{defeatThreatButton(ht)}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );

};

export default HeroVsThreatList;
