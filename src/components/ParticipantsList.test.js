import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './ParticipantList';
import participants from '../data/participantData';

// smoke test; failing time
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ParticipantList participants={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// screenshot test;
it('renders this UI as expected', () => {
  const appTest = renderer.create(<ParticipantList participants={participants} />).toJSON();
  // Check whether it matches the previous snapshot
  // Stored in __snapshots__/App.test.js.snap
  expect(appTest).toMatchSnapshot(); 
});