import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant';
import participants from '../data/participantData';

// smoke test; failing time
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Participant
    key={0}
    name=''
    avatar=''
    inSession={true}
    onStage={false}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// screenshot test;
it('renders this UI as expected', () => {
  const p = participants[0];
  const appTest = renderer.create(<Participant
    key={p.id}
    name={p.name}
    avatar={p.avatar}
    inSession={p.inSession}
    onStage={p.onStage}/>).toJSON();
  // Check whether it matches the previous snapshot
  // Stored in __snapshots__/App.test.js.snap
  expect(appTest).toMatchSnapshot(); 
});