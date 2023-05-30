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
  onSnapshot
} from "firebase/firestore";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import moment from "moment";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getUser } from "../apis/profileApi";
import { UserName } from "../components/chatComponents/Username";
import { useHistory } from 'react-router-dom';

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
const auth = getAuth(app);
const database = getDatabase(app);
const messagesRef = ref(database, "messages");
const dbRef = ref(database);
//const databaseRef = getDatabase(app).ref();

const senderuserId = localStorage.getItem("userId");
console.log(localStorage.getItem("anotherUser"));
let tempUser = localStorage.getItem("anotherUser");
console.log(tempUser + "lo que sea");

export function Chat() {
  const params = useParams();
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [chatId, setChatId] = useState(""); // Nuevo estado para almacenar el ID del chat

  useEffect(() => {
    fetchDraw();
  }, [tempUser]);

  async function fetchDraw() {
    const response = await getUser(tempUser);
    const data = await response.json();  

    setUserId(data.user.userId);
    setUserName(data.user.userName);
  }



  const [searchText, setSearch] = useState("");
  const [files, setFiles] = useState([]);
  const [messages, setMessages] = useState([]);
  let msgs = [];
  let msgsSender = [];
  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(senderuserId);
  const userIdA = senderuserId;
  const userIdB = tempUser;

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      setMessages(data);
    });
    
  }, []);

  useEffect(() => {
    // Obtener el chatId correspondiente a la conversación entre los usuarios A y B
    setChatId(getChatId(userIdA, userIdB));
  }, []);

  useEffect(() => {
    // Cargar los mensajes del chat específico
    if (chatId) {
      const messagesCol = collection(firestore, "messages");
      const messagesQuery = query(messagesCol, where("chatId", "==", chatId));
      const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
        const messagesData = snapshot.docs.map((doc) => doc.data());
        setMessages(messagesData);
      });

      return () => unsubscribe(); // Limpiar el listener cuando el componente se desmonte
    }
  }, [chatId]);


  if (messages) {
    //console.log(messages);
    for (const [key, value] of Object.entries(messages)){
      //console.log(value);
      let auxMsg =  
      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-time" key={value.user_id}>
            {moment(value.date).format("HH:mm")}{" "}
            {/* Formatea la fecha y hora según tus necesidades */}
          </div>
        </div>
        <div className="msg-text" id="Message">
          <p className="msg-text" key={key}> {value.content_msg} </p>
        </div>
      </div>
      msgs.push(auxMsg);
    }
  }


//mensajes izquierda
  if (messages) {
    for (const [key, value] of Object.entries(messages)) {
      let auxMsg = (
        <div className="msg-bubble">
          <div className="msg-info">
            <div className="msg-info-name">{value.userName}</div>
            <div className="msg-info-time" key={value.user_id}>
              {moment(value.date).format("HH:mm")}
            </div>
          </div>
          <div className="msg-text" id="Message">
            <p className="msg-text" key={key}>
              {value.content_msg}
            </p>
          </div>
        </div>
      );
      msgsSender.push(auxMsg);
    }
  }

  // Función para enviar un mensaje
  const sendMsg = () => {
    console.log("currentUser:" + currentUser);
    if (currentUser  &&  newMessage) {
      console.log("Msg: " + newMessage);
      console.log(localStorage.getItem("userId") + ":user id");
      console.log(senderuserId + "=" + "currentUser")
      push(ref(database, "messages/"), {
        user_id: senderuserId, // Usar la constante de: senderuserId
        //datos dummy:"1990054"
        content_msg: newMessage,
        date: Date.now(),
        chatId: chatId,
      });

      setNewMessage("");
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

  console.log("nombre" + userId);

  return (
    <section className="chatcont">
      <div className="inbox_chat h-100 py-5 mt-2">
        <div className="recent_heading">
          <h4>Recientes</h4>
        </div>
        <div className="srch_bar">
          <div className="stylish-input-group">
            <input
              type="text"
              className="search-bar"
              placeholder="Search"
              required
              value={searchText}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <span className="input-group-addon">
              <button type="button">
                {" "}
                <i className="fa fa-search" aria-hidden="true"></i>{" "}
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
                <UserName
                                    value={userName}
                                />
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
            {msgsSender}
          </div>

          <div className="msg right-msg">
            {msgs}
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
        <div className="msger-inputarea">
        <input
          type="text"
          className="msger-input"
          placeholder="Escribe tu mensaje"
          required
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="msger-send-btn" onClick={() => sendMsg()}>
          Enviar
        </button>
        </div>

      </div>
    </section>
  );
}

// Función para obtener el chatId a partir de los IDs de usuario de las dos personas involucradas
function getChatId(userIdA, userIdB) {
  // Ordenar los IDs de usuario alfabéticamente para tener un orden consistente en el chatId
  const sortedUserIds = [userIdA, userIdB].sort();
  return sortedUserIds.join("_"); // Concatenar los IDs de usuario con un guion bajo
}