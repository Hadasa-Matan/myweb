import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

function ChatBot() {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-indigo-600 text-white p-4">
        <h3 className="font-semibold">צ'אט עם נציג</h3>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="bg-gray-100 rounded-lg p-3 mb-4 max-w-[80%]">
          שלום! כיצד אוכל לעזור לך היום?
        </div>
      </div>
      <div className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            placeholder="הקלד הודעה..."
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
          />
          <button className="mr-2 bg-indigo-600 text-white px-4 py-2 rounded-lg">
            שלח
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;