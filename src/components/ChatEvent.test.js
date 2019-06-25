import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatEvents from './ChatEvents';
import participants from '../data/participantData';
import chatEvents from '../data/chatEventsData';

// smoke test; failing time
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatEvents
    time={0}
    participants={[]}
    chatEvents={[]}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// screenshot test; failing filter
it('renders this UI as expected', () => {
  const appTest = renderer.create(<ChatEvents
    time={chatEvents[0].time}
    participants={participants}
    chatEvents={chatEvents}
    />).toJSON();
  // Check whether it matches the previous snapshot
  // Stored in __snapshots__/App.test.js.snap
  expect(appTest).toMatchSnapshot(); 
});