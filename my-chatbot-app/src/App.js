import React, { useEffect, useState } from 'react';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [answer, setAnswer] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // Convert input value to lowercase for case insensitivity
      const inputValueLowercase = inputValue.toLowerCase().trim();
  
      // Check for prompts using a switch statement
      switch (inputValueLowercase) {
          case 'what qualifies as contempt of court?':
              setAnswer('Contempt means the publication (whether by words, spoken or written, or by signs, or by visible representations, or otherwise) of any matter or the doing of any other act whatsoever which – (i) scandalises or tends to scandalise or lowers or tends to lower the authority of any Court; or (ii) prejudices, or interferes or tends to interfere with, the due course of any judicial proceeding; or (iii) interferes or tends to interfere with, or obstructs or tends to obstruct, the administration of justice in any other manner.');
              break;
          case 'when was ipc established??' || 'When was IPC establised??':
              setAnswer('The Indian Penal Code was drafted by the First Indian Law Commission presided over by Lord Thomas Babington Macaulay. The draft underwent further revision at the hands of well-known jurists, like Sir Barnes Peacock, and was completed in 1850. The Indian Penal Code was passed by the then Legislature on 6 October 1860 and was enacted as Act No. XLV of 1860.');
              break;
          default:
              setAnswer('Please enter a meaningful prompt.');
      }
  };
  
    return (
        <div>
            <h1>Simple Chatbot</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Enter your message"
                />
                <button type="submit">Send</button>
            </form>
            <p>{answer}</p>
        </div>
    );
}

export default App;