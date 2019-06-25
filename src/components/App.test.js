import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import participants from '../data/participantData';
import chatEvents from '../data/chatEventsData';

// smoke test; failing time
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App
    participants={[]}
    chatEvents={[]}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// screenshot test;
it('renders this UI as expected', () => {
  const appTest = renderer.create(<App
    participants={participants}
    chatEvents={chatEvents}
    />).toJSON();
  // Check whether it matches the previous snapshot
  // Stored in __snapshots__/App.test.js.snap
  expect(appTest).toMatchSnapshot(); 
});