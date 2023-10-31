import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import axios from 'axios';
import { Input } from '@chakra-ui/react'

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const handleKeyPress = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const url = "";
      const response = await axios.post(url, { message });
      console.log('API Response:', response.data);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Type a message and press Enter"
        value={message}
        onChange={handleInputChange}
        onKeyDown ={handleKeyPress}
      /> */}
<Input 
type="text"
placeholder="Type a message and press Enter"
value={message}
onChange={handleInputChange}
onKeyDown ={handleKeyPress} />
      
    </div>
  );
};

export default MessageInput;
