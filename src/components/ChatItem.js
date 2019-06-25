import React from 'react';

function ChatItem(props) {
  const participant = props.participant;
  const chatEvent = props.chatEvent;

  const time = new Date(chatEvent.timestamp);

  // check chatEvent type and display accordingly
  const message = (type) => {
    const name = participant.name
    switch(type) {
      case 'message':
        return chatEvent.message;
      case 'thumbs-up':
        return `${name} gave a thumbs up b`;
      case 'thumbs-down':
        return `${name} gave a thumbs down p`;
      case 'raise-hand':
        return `${name} raised their hand o/`;
      case 'clap':
        return `${name} clapped /\\`;
      case 'join':
        return `${name} joined`;
      case 'leave':
        return `${name} left`;
      case 'join-stage':
        return `${name} joined the stage`;
      case 'left-stage':
        return `${name} left the stage`;
      default:
        return '';
    }
  };

  return (
    <div class='chatItem'>
      <img class='chatAvatar' src={participant.avatar} alt='avatar here'></img>
      <p class='participant'>
        {participant.name}&nbsp;
        <span class='time'>{time.toLocaleTimeString()}</span>
      </p>
      <p class={chatEvent.type === 'message' ? 'chatMessage': 'chatReaction'}>{message(chatEvent.type)}</p>
    </div>
  )
}

export default ChatItem;