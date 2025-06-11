// src/app/Chatting/page.tsx

"use client";

import React, { useState, useRef, FormEvent, useEffect, KeyboardEvent } from 'react';

import Image from 'next/image';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUpload, faPlay, faPause, faCopy, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../../components/Sidebar';



interface ChatItem {

  message: string;

  response: string;

}



const Loader: React.FC = () => (

  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

    <div className="loader"></div>

    <style jsx>{`

.loader {

display: inline-block;

width: 80px;

height: 80px;

}

.loader:after {

content: " ";

display: block;

width: 64px;

height: 64px;

margin: 8px;

border-radius: 50%;

border: 6px solid #fff;

border-color: #fff transparent #fff transparent;

animation: loader 1.2s linear infinite;

}

@keyframes loader {

0% {

transform: rotate(0deg);

}

100% {

transform: rotate(360deg);

}

}

`}</style>

  </div>

);



const Page: React.FC = () => {

  const [message, setMessage] = useState('');

  const [chatLog, setChatLog] = useState<ChatItem[]>([]);

  const [isSending, setIsSending] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const [suggestions, setSuggestions] = useState<string[]>([]);

  const [defaultSuggestions, setDefaultSuggestions] = useState<string[]>([

    'What are the main features of MiningNiti for managing mining data?',

    'What are the latest trends in mining technology?',

    'How do mining companies manage environmental impact?',

    'What are the safety regulations in the mining industry?',

    'Can you explain the process of ore extraction?'

  ]);

  const [source, setSource] = useState('both');

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentUtterance, setCurrentUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  const [highlightedText, setHighlightedText] = useState<string | null>(null);

  const [selectedSession, setSelectedSession] = useState<ChatItem[]>([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);



  useEffect(() => {

    const handleResize = () => {

      if (textareaRef.current) {

        textareaRef.current.style.height = 'auto';

        textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;

      }

    };

    handleResize();

  }, [message]);



  useEffect(() => {

    fetchChatHistory();

  }, []);



  const fetchChatHistory = async () => {

    try {

      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/history`);

      setChatLog(response.data.history.map((item: { message: string; response: string }) => ({

        message: item.message,

        response: item.response

      })));

    } catch (error) {

      console.error('Failed to fetch chat history:', error);

    }

  };



  const fetchSuggestions = async (input: string) => {

    try {

      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/suggestions?q=${input}`);

      setSuggestions(response.data.suggestions);

    } catch (error) {

      console.error('Failed to fetch suggestions:', error);

    }

  };



  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

    const newMessage = e.target.value;

    setMessage(newMessage);

    if (newMessage.trim() === '') {

      setSuggestions([]);

      setDefaultSuggestions([

        'What are the main features of MiningNiti for managing mining data?',

        'What are the latest trends in mining technology?',

        'How do mining companies manage environmental impact?',

        'What are the safety regulations in the mining industry?',

        'Can you explain the process of ore extraction?'

      ]);

    } else {

      fetchSuggestions(newMessage);

      setDefaultSuggestions([]);

    }

  };



  const handleSubmit = async (messageToSend: string) => {

    setIsSending(true);

    setError(null);

    const data = { input_query: messageToSend, source };

    try {

      const response = await axios.post(

        `${process.env.NEXT_PUBLIC_BACKEND_URL}/chat`,

        data,

        {

          headers: {

            'Content-Type': 'application/json',

          },

        }

      );

      setChatLog([...chatLog, { message: messageToSend, response: response.data.response }]);

      setMessage('');

      setSuggestions([]);

      setDefaultSuggestions([]);

      if (textareaRef.current) {

        textareaRef.current.style.height = 'auto';

      }

      if (chatContainerRef.current) {

        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;

      }

    } catch (error) {

      console.error('Failed to send message:', error);

      setError('Failed to send message. Please try again.');

    } finally {

      setIsSending(false);

    }

  };



  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    handleSubmit(message);

  };



  const handleSuggestionClick = async (suggestion: string) => {

    await handleSubmit(suggestion);

  };



  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {

    if (e.key === 'Enter' && !e.shiftKey) {

      e.preventDefault(); // Prevent the default newline behavior

      handleFormSubmit(e as unknown as FormEvent<HTMLFormElement>); // Trigger form submission

    }

  };



  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.files && e.target.files.length > 0) {

      const file = e.target.files[0];

      const formData = new FormData();

      formData.append('file', file);

      try {

        const response = await axios.post(

          `${process.env.NEXT_PUBLIC_BACKEND_URL}/extract_text_from_pdf`,

          formData,

          {

            headers: {

              'Content-Type': 'multipart/form-data',

            },

          }

        );

        const extractedText = response.data.text;

        setMessage(extractedText);

      } catch (error) {

        console.error('Error extracting text from PDF:', error);

        setError('Failed to extract text from PDF. Please try again.');

      }

    }

  };



  const handlePlayVoice = (text: string) => {

    if (isPlaying && currentUtterance) {

      speechSynthesis.cancel();

      setIsPlaying(false);

      setHighlightedText(null);

      return;

    }



    const utterance = new SpeechSynthesisUtterance(text);

    utterance.onstart = () => {

      setIsPlaying(true);

      setHighlightedText(text);

    };

    utterance.onend = () => {

      setIsPlaying(false);

      setHighlightedText(null);

    };

    utterance.onboundary = (event) => {

      const { charIndex } = event;

      setHighlightedText(text.substring(0, charIndex));

    };



    setCurrentUtterance(utterance);

    speechSynthesis.speak(utterance);

  };



  const handleCopyText = (text: string) => {

    navigator.clipboard.writeText(text).then(() => {

      alert('Text copied to clipboard!');

    }).catch(err => {

      console.error('Failed to copy text: ', err);

    });

  };



  interface Session {
    messages: ChatItem[];
  }

  const handleSessionSelect = (session: Session) => {
    setSelectedSession(session.messages);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (

    <div className="flex">

      <button onClick={toggleSidebar} className="absolute top-4 left-4 z-50">
        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
      </button>
      {isSidebarOpen && <Sidebar onSessionSelect={handleSessionSelect} />}

      <div className='pt-0 px-4 flex-1' style={{ height: '100vh', overflowY: 'auto' }}>

        {isSending && <Loader />}

        <div className='flex flex-col items-center mt-8'>

          <p className='text-2xl text-pink-500 font-bold'>Chat Application</p>

        </div>

        <div className='fixed bottom-0 w-full bg-transparent pb-4'>

          <form onSubmit={handleFormSubmit} className='flex items-center p-2 mx-auto w-full max-w-7xl'>

            <textarea

              id='chat'

              rows={1}

              ref={textareaRef}

              className='flex-1 p-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring focus:border-blue-500 resize-none overflow-hidden overflow-auto'

              placeholder='Your message...'

              value={message}

              onChange={handleInputChange}

              onKeyDown={handleKeyDown}

              style={{ minHeight: '40px', maxHeight: '200px' }}

              aria-label="Type your message here"

            />

            <label className="p-2 ml-4 rounded-full bg-pink-500 text-white cursor-pointer hover:bg-pink-600 transition-colors duration-300 hidden sm:block">

              <input

                type="file"

                accept="application/pdf"

                onChange={handleFileUpload}

                className='hidden'

              />

              Upload PDF

            </label>

            <label className="p-2 ml-4 rounded-full bg-pink-500 text-white cursor-pointer hover:bg-pink-600 transition-colors duration-300 block sm:hidden">

              <input

                type="file"

                accept="application/pdf"

                onChange={handleFileUpload}

                className='hidden'

              />

              <FontAwesomeIcon icon={faUpload} />

            </label>

            <button

              type='submit'

              disabled={isSending}

              className='p-2 ml-4 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300'

            >

              {isSending ? 'Sending...' : 'Send'}

            </button>

          </form>

          <div className="flex justify-center mt-4">

            <label className="mr-4">

              <input

                type="radio"

                name="source"

                value="database"

                checked={source === "database"}

                onChange={() => setSource("database")}

              />

              Database

            </label>

            <label className="mr-4">

              <input

                type="radio"

                name="source"

                value="internet"

                checked={source === "internet"}

                onChange={() => setSource("internet")}

              />

              Internet

            </label>

            <label>

              <input

                type="radio"

                name="source"

                value="both"

                checked={source === "both"}

                onChange={() => setSource("both")}

              />

              Both

            </label>

          </div>

          {suggestions.length > 0 && (

            <div className="absolute bottom-20 left-0 right-0 mx-auto w-full max-w-7xl bg-gray-100 shadow-lg p-4" style={{ marginBottom: '60px' }}>

              {suggestions.map((suggestion, index) => (

                <div

                  key={index}

                  className="cursor-pointer hover:bg-gray-200 p-2"

                  onClick={() => handleSuggestionClick(suggestion)}

                >

                  {suggestion}

                </div>

              ))}

            </div>

          )}

          {defaultSuggestions.length > 0 && message.trim() === '' && (

            <div className="absolute bottom-20 left-0 right-0 mx-auto w-full max-w-7xl shadow-lg p-4" style={{ marginBottom: '60px' }}>

              {defaultSuggestions.map((suggestion, index) => (

                <div

                  key={index}

                  className="cursor-pointer hover:bg-pink-100 hover:text-black p-2 transition-colors duration-150"

                  onClick={() => handleSuggestionClick(suggestion)}

                >

                  {suggestion}

                </div>

              ))}

            </div>

          )}

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        </div>

        <div className='flex flex-1'>

          <div

            className='my-4 flex flex-col items-center w-full'

            ref={chatContainerRef}

            style={{ maxHeight: 'calc(100vh - 250px)', overflowY: 'auto' }}

          >

            {selectedSession.length > 0 ? (

              selectedSession.map((item, index) => (

                <div key={index} className='flex flex-col items-center w-full'>

                  <div className='bg-pink-100 text-blue-900 p-4 rounded-lg shadow-md my-2 w-3/4'>

                    <p className='text-left text-sm font-bold'>{item.message}</p>

                  </div>

                  <div className='bg-gray-100 text-gray-900 p-4 rounded-lg shadow-md my-2 w-3/4 relative'>

                    <span dangerouslySetInnerHTML={{ __html: highlightedText && item.response.includes(highlightedText) ? item.response.replace(/\*/g, '').replace(highlightedText, `<mark>${highlightedText}</mark>`) : item.response.replace(/\*/g, '') }} />

                    <div className='absolute top-2 right-2 flex space-x-2'>

                      <button onClick={() => handlePlayVoice(item.response)} className='text-blue-500 hover:text-blue-700'>

                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />

                      </button>

                      <button onClick={() => handleCopyText(item.response)} className='text-blue-500 hover:text-blue-700'>

                        <FontAwesomeIcon icon={faCopy} />

                      </button>

                    </div>

                  </div>

                </div>

              ))

            ) : (

              chatLog.map((item, index) => (

                <div key={index} className='flex flex-col items-center w-full'>

                  <div className='bg-pink-100 text-blue-900 p-4 rounded-lg shadow-md my-2 w-3/4'>

                    <p className='text-left text-sm font-bold'>{item.message}</p>

                  </div>

                  <div className='bg-gray-100 text-gray-900 p-4 rounded-lg shadow-md my-2 w-3/4 relative'>

                    <span dangerouslySetInnerHTML={{ __html: highlightedText && item.response.replace(/\*/g, '').includes(highlightedText) ? item.response.replace(/\*/g, '').replace(highlightedText, `<mark>${highlightedText}</mark>`) : item.response.replace(/\*/g, '') }} />

                    <div className='absolute top-2 right-2 flex space-x-2'>

                      <button onClick={() => handlePlayVoice(item.response)} className='text-blue-500 hover:text-blue-700'>

                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />

                      </button>

                      <button onClick={() => handleCopyText(item.response)} className='text-blue-500 hover:text-blue-700'>

                        <FontAwesomeIcon icon={faCopy} />

                      </button>

                    </div>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

    </div>

  );

};

export default Page;