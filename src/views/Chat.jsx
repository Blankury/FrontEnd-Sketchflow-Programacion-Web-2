import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";

import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import moment from "moment";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA39aQFBM3-HzsOR4FWVokoDQCaM9N6Yok",
  authDomain: "sketchflow-chat.firebaseapp.com",
  projectId: "sketchflow-chat",
  storageBucket: "sketchflow-chat.appspot.com",
  messagingSenderId: "512119752111",
  appId: "1:512119752111:web:b6ff4aac3ac22dbad0db5a",
  measurementId: "G-5TR51MKYBL",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const database = getDatabase(app);
const dbRef = ref(database);
//const databaseRef = getDatabase(app).ref();
const messagesRef = ref(database, "messages");

const auth = getAuth();
const senderUserId = localStorage.getItem("userId");
console.log(localStorage.getItem("userId"));

export function Chat() {
  const [searchText, setSearch] = useState("");
  const [files, setFiles] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(senderUserId);

  useEffect(() => {
    // Obtener los mensajes del usuario actualmente autenticado
    const fetchMessages = async () => {
      if (currentUser) {
        const messagesCol = collection(firestore, "messages");
        const messagesQuery = query(
          messagesCol,
          where("userId", "==", senderUserId)
        );
        const messagesSnapshot = await getDocs(messagesQuery);
        const messagesData = messagesSnapshot.docs.map((doc) => doc.data());
        setMessages(messagesData);
      }
    };
    fetchMessages();
  }, [currentUser]);

  // Función para enviar un mensaje
  const sendMessage = async () => {
    if (currentUser) {
      const messagesCol = collection(firestore, "messages");
      await addDoc(messagesCol, {
        text: newMessage,
        timestamp: serverTimestamp(),
        userId: currentUser.uid, // Agregar el ID de usuario al mensaje
      });
      setNewMessage("");
    }
  };

  const sendMsg = () => {
    if (/*currentUser && */ newMessage) {
      console.log("Msg: " + newMessage);
      //console.log(currentUser + " M: " + newMessage);
      let msgToSend = {
        user_id: "1990054",
        content_msg: newMessage,
        date: Date.now(),
      }

      //dbRef.child('messages/').push(msgToSend);
      messagesRef.push(msgToSend);

      // set(ref(database, "messages/" ), {
      //   user_id: "1990054",
      //   content_msg: newMessage,
      //   date: Date.now(),
      // });
    }
  };

  const signOut = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null); // Elimina el usuario actual del estado
    } catch (error) {
      // Manejo de errores
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user); // Almacena el usuario actual en el estado
      } else {
        setCurrentUser(null); // Elimina el usuario actual del estado
      }
    });

    // Devuelve una función de limpieza para detener el observador cuando el componente se desmonte
    //ya deberia haber un cambio
    return () => unsubscribe();
  }, []);

  return (
    <section className="chatcont">
      <div class="inbox_chat h-100 py-5 mt-2">
        <div class="recent_heading">
          <h4>Recientes</h4>
        </div>
        <div class="srch_bar">
          <div class="stylish-input-group">
            <input
              type="text"
              class="search-bar"
              placeholder="Search"
              required
              value={searchText}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <span class="input-group-addon">
              <button type="button">
                {" "}
                <i class="fa fa-search" aria-hidden="true"></i>{" "}
              </button>
            </span>
          </div>
        </div>
        {/*         <div class="chat_list active_chat">
          <div class="chat_people">
          {conversations.map((conversation, index) => (
          <div class="chat_people" key={index}>
            <div class="chat_img"> <img src={logo} class="pfp" alt="User" /> </div>
            <div class="chat_ib">
              <h5>{conversation.participantName} <span class="chat_date">{conversation.lastMessageTimestamp}</span></h5>
              <p>{conversation.lastMessage}</p>
            </div>
          </div>
        ))}
          </div>
        </div> */}
      </div>
      <div className="msger py-3">
        <header className="msger-header ">
          <div className="msger-header-title">
            <div className="userName">
              <h6>Nombre del usuario</h6>
            </div>
          </div>
          <div className="msger-header-options">
            <span>
              <i className="fas fa-cog" />
            </span>
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
              MENSAJE DE OTROS
            </div>
          </div>

          <div className="msg right-msg">
            {/* /*aqui iria la wea*/}
            {messages.map((message, index) => (
              <div className="msg-bubble">
                <div className="msg-info">
                  <div className="msg-info-name"></div>
                  <div className="msg-info-time" key={index}>
                    {moment(message.timestamp).format("HH:mm")}{" "}
                    {/* Formatea la fecha y hora según tus necesidades */}
                  </div>
                </div>
                <div className="msg-text" id="Message">
                  <p className="msg-text" key={index}>
                    {message.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>

        <div class="image-upload">
          <label for="file-input"></label>
          <input
            id="file-input"
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
          />
        </div>
        <input
          type="text"
          className="msger-input"
          placeholder="Escribe tu mensaje"
          required
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="msger-send-btn" onClick={() =>sendMsg()}>
          Enviar
        </button>
      </div>
    </section>
  );
}
