/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useRouter } from 'next/router';
import Widget from '../Widget';
import Button from '../Button';

export default function ResultWidget({ results }) {
  const router = useRouter();

  return (
    <Widget>
      <Widget.Header>
        Tela de Resultado:
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {results.filter((x) => x).length}
          {' '}
          perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index}`}>
              #
              {index + 1}
              {' '}
              Resultado:
              {result === true
                ? 'Acertou'
                : 'Errou'}
            </li>
          ))}
        </ul>
        <Button
          type="submit"
          onClick={() => {
            router.push('/');
          }}
        >
          Novo Jogo
        </Button>
      </Widget.Content>
    </Widget>
  );
}
