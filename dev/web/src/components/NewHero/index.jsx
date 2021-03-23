import React, { useState } from 'react';

import {
  Input,
  Button,
} from './styles';

const NewHero = ({onCreate, onBack}) => {
  const [name, setName] = useState('');
  const [rank, setRank] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  
 return (
  <>
    <Input
      type="Text" 
      placeholder="Name" 
      onChange={(value) => setName(value.target.value)}
      defaultValue={name}
    />
    <Input 
      type="Text" 
      placeholder="Rank" 
      onChange={(value) => setRank(value.target.value)}
      defaultValue={rank}
    />
    <Input 
      type="Text" 
      placeholder="Latitude" 
      onChange={(value) => setLat(value.target.value)}
      defaultValue={lat}
    />
    <Input 
      type="Text" 
      placeholder="Longitude" 
      onChange={(value) => setLng(value.target.value)}
      defaultValue={lng}
    />
    <Button 
      onClick={() => onCreate(name, rank, lng, lat)}
    >
      Create
    </Button>
    <Button 
      onClick={onBack}
    >
      Cancel
    </Button>
  </>
 )
}

export default NewHero;