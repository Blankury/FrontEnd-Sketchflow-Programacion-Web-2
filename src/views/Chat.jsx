import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";

import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA39aQFBM3-HzsOR4FWVokoDQCaM9N6Yok",
  authDomain: "sketchflow-chat.firebaseapp.com",
  projectId: "sketchflow-chat",
  storageBucket: "sketchflow-chat.appspot.com",
  messagingSenderId: "512119752111",
  appId: "1:512119752111:web:b6ff4aac3ac22dbad0db5a",
  measurementId: "G-5TR51MKYBL"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export function Chat() {
  const [searchText, setSearch] = useState("");
  const [files, setFiles] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const messagesCol = collection(firestore, 'messages');
      const messagesSnapshot = await getDocs(messagesCol);
      const messagesData = messagesSnapshot.docs.map(doc => doc.data());
      setMessages(messagesData);
    };
    fetchMessages();
  }, []);

  const sendMessage = async () => {
    const messagesCol = collection(firestore, 'messages');
    await addDoc(messagesCol, {
      text: newMessage,
      timestamp: serverTimestamp(),
    });
    setNewMessage('');
  };
  return (

    
    <section className="chatcont">

        
      <div class="inbox_chat h-100 py-5 mt-2">
        <div class="recent_heading">
          <h4>Recientes</h4>
        </div>
        <div class="srch_bar">
          <div class="stylish-input-group">
            <input type="text" class="search-bar" placeholder="Search" 
                      required value={searchText} onChange={(e) => {
                        setSearch(e.target.value);  }}  />
            <span class="input-group-addon">
              <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
            </span> 
          </div>
        </div>
        <div class="chat_list active_chat">
          <div class="chat_people">
            <div class="chat_img"> <img src={logo} class="pfp" alt="User" /> </div>
            <div class="chat_ib">
              <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
              <p>Test, which is a new approach to have all solutions
                    astrology under one roof.</p>
            </div>
          </div>
        </div>
        <div class="chat_list">
          <div class="chat_people">
            <div class="chat_img"> <img src={logo} class="pfp" alt="User" /> </div>
            <div class="chat_ib">
              <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
              <p>Test, which is a new approach to have all solutions
                    astrology under one roof.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="msger py-3">
        <header className="msger-header ">
          <div className="msger-header-title">
            <div className="userName">
              <h6>Nombre del usuario</h6>
            </div>
          </div>
          <div className="msger-header-options">
            <span><i className="fas fa-cog" /></span>
          </div>
        </header>

        <main className="msger-chat">
          <div className="msg left-msg">
            <div
              className="msg-img"
              style={{ backgroundImage: `url(${logo})` }}
            ></div>
            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">BOT</div>
                <div className="msg-info-time">12:45</div>
              </div>
              {messages.map((message, index) => (
                <li className="msg-text" key={index}>{message.text}</li>
              ))}
            </div>
          </div>

          <div className="msg right-msg">
            <div
              className="msg-img"
              style={{ backgroundImage: `url(${isotipo})` }}
            ></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">Sajad</div>
                <div className="msg-info-time">12:46</div>
              </div>
                        
              <div className="msg-text" id="Message">
                Mensaje
              </div>
            </div>
          </div>
        </main>

        <form className="msger-inputarea">
          <div class="image-upload">
            <label for="file-input"></label>
            <input id="file-input" type="file"
                    multiple
                    onChange={(event) => setFiles(event.target.files)}/>
          </div>
          <input type="text" className="msger-input" placeholder="Escribe tu mensaje"
            required value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
          <button type="submit" className="msger-send-btn"
          onClick={sendMessage}
          >Enviar</button>
        </form>
      </div>
    </section>
  );

}