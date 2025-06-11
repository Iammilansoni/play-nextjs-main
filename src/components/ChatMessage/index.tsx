// components/ChatMessage.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faCopy } from '@fortawesome/free-solid-svg-icons';

interface ChatMessageProps {
  message: string;
  response: string;
  isPlaying: boolean;
  highlightedText: string | null;
  onPlay: () => void;
  onCopy: () => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  response,
  isPlaying,
  highlightedText,
  onPlay,
  onCopy
}) => {
  const createHighlightedResponse = () => {
    if (!highlightedText) return { __html: response };
    
    const highlightedResponse = response.replace(
      new RegExp(highlightedText, 'gi'),
      (match) => `<mark class="bg-yellow-200">${match}</mark>`
    );

    return { __html: highlightedResponse };
  };

  return (
    <div className="space-y-4">
      {/* User Message */}
      <div className="flex justify-end">
        <div className="max-w-3xl px-4 py-2 bg-blue-600 text-white rounded-2xl rounded-br-none">
          <p className="text-sm">{message}</p>
        </div>
      </div>

      {/* Bot Response */}
      <div className="flex justify-start">
        <div className="group relative max-w-3xl px-4 py-2 bg-gray-100 rounded-2xl rounded-bl-none">
          <div 
            className="prose prose-sm"
            dangerouslySetInnerHTML={createHighlightedResponse()}
          />
          <div className="absolute -right-4 -top-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex gap-2 bg-white p-1 rounded-lg shadow-sm">
              <button
                onClick={onPlay}
                className="p-1.5 hover:bg-gray-100 rounded-md text-gray-600"
                aria-label={isPlaying ? "Pause response" : "Play response"}
              >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
              </button>
              <button
                onClick={onCopy}
                className="p-1.5 hover:bg-gray-100 rounded-md text-gray-600"
                aria-label="Copy response"
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;