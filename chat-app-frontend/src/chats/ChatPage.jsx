import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import socketIO from 'socket.io-client'
import { useUserDetails } from '../authentication';

export const ChatPage = () => {
  const [socket, setSocket] = useState(null)
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const {id:chatId} = useParams()
  const {user} = useUserDetails()


  const sendMessage = () => {
    socket.emit("sendMessage",{
      message,
      chatId,
      userId:user.uid
    })
    setMessage("");
  }

  useEffect(()=> {
    const createNewConnection = async()=> {
      const socketConnection = socketIO("http://127.0.0.1:8080")
      // you can pass data here
      // ,{
      //   query: {
      //     data:"someData"
      //   }
      // })
      setSocket(socketConnection)
    }
    createNewConnection();
  },[user,chatId])
  return(
    <div className='container'>
      <ul className='list-group mt-2'>
        {messages.map((message, index) => (
          <li key={message.id} className="list-group item">
            <h3>{messages.postedBy.name}</h3>
            <p>{messages.text}</p>
          </li> 
        ))}
      </ul>
      <div className="input-group mt-3">
        <input 
          placeholder='Type Here'
          className='form-control'
          value={message}
          onChange={e=>setMessage(e.target.value)}  
        />
        <button 
          className='btn btn-info'
          onClick={sendMessage}
        >Send</button>
      </div>
    </div>
  )};
 