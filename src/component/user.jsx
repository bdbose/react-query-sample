import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import './style.css';

const fetchData = async ({ queryKey: [key, pokemonId] }) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  return res.data;
};

export const User = () => {
  const [id, setId] = useState(1);
  const { isLoading, error, data } = useQuery(['pokemon', id], fetchData);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  return (
    <div className='card-wrapper'>
      <h1>Pokemon</h1>
      {Object.keys(data.sprites).map((ele) => {
        if (data.sprites[ele]) return <img src={data.sprites[ele]} alt='' />;
        return null;
      })}
      <h2>
        Name: <span>{data.name}</span>
      </h2>
      <h2>
        Type: <span>{data.types.map((ele) => ele.type.name).join(', ')}</span>
      </h2>
      <h2>
        Height: <span>{data.height} feet</span>
      </h2>
      <h2>
        Weight: <span>{data.weight} kg</span>
      </h2>
      <div className='btn-wrapper'>
        {' '}
        <button
          onClick={() => {
            setId(Math.max(id - 1, 1));
          }}>
          {'<<'}
        </button>
        <button
          onClick={() => {
            setId(id + 1);
          }}>
          {'>>'}
        </button>
      </div>
    </div>
  );
};
