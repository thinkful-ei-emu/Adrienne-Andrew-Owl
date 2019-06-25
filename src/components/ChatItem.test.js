import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatItem from './ChatItem';
import participants from '../data/participantData';
import chatEvents from '../data/chatEventsData';

// smoke test; failing time
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatItem key={0} chatEvents={{}} participant={{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// screenshot test;
it('renders this UI as expected', () => {
  const appTest = renderer.create(<ChatItem key={0} chatEvent={chatEvents[0]} participant={participants[0]}/>).toJSON();
  // Check whether it matches the previous snapshot
  // Stored in __snapshots__/App.test.js.snap
  expect(appTest).toMatchSnapshot(); 
});