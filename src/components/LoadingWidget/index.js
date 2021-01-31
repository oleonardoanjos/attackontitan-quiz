/* eslint-disable linebreak-style */
import React from 'react';
import { Lottie } from '@crello/react-lottie';
import Widget from '../Widget';
import loadingAnimation from './animations/loading.json';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content style={{ padding: 0, display: 'flex', justifyContent: 'center' }}>
        <img
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
          src="https://i.imgur.com/7f7kWs7.gif"
          alt="imgLoading"
        />
      </Widget.Content>
    </Widget>
  );
}
