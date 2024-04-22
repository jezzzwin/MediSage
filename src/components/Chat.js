import React, { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: "VxrmI0u9Qr_ZVolss8nDR",
      domain: "www.chatbase.co"
    };

    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.setAttribute('chatbotId', 'VxrmI0u9Qr_ZVolss8nDR');
    script.setAttribute('domain', 'www.chatbase.co');
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default Chat;
