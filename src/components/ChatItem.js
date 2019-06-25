import React from 'react';

function ChatItem(props) {
  const participant = props.participant;
  const chatEvent = props.chatEvent;

  if (!participant || !chatEvent) {
    return (
      <div></div>
    )
  }
  const time = chatEvent.timestamp && new Date(chatEvent.timestamp);
  const startTime = chatEvent.time && new Date(chatEvent.time);
  
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
      case 'leave-stage':
        return `${name} left the stage`;
      default:
        return '';
    }
  };

  return <>
    {startTime && <p>{startTime.toLocaleTimeString()}</p>}
    <div classNameName='chatItem'>
      <img className='chatAvatar' src={participant.avatar} alt='avatar here'></img>
      <p className='participant'>
        {participant.name}&nbsp;
        {time && 
        <span className='time'>{time.toLocaleTimeString()}</span>
        }
      </p>
      <p className={chatEvent.type === 'message' ? 'chatMessage': 'chatReaction'}>{message(chatEvent.type)}</p>
    </div>
   </>
}

export default ChatItem;