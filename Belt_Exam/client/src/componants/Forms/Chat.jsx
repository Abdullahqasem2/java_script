import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"

const Chat = (props) => {
	const [ state, setState ] = useState({ message: "", name: "" })
	const [ chat, setChat ] = useState([])

	const socketRef = useRef();

	useEffect(
		() => {
			socketRef.current = io.connect("http://localhost:8000")
			socketRef.current.on("message", ({ name, message }) => {
				setChat([ ...chat, { name, message } ])
			})
			return () => socketRef.current.disconnect(true)
		},[ chat ]);

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}


	const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	}

	const renderChat = () => {
		return chat.map(({ name, message }, index) => (
      
			<div key={index}>
				<h3 style={{color:"blue"}} >
					{name} Say: <span style={{color:"white"}} >{message}</span>
				</h3>
			</div>
		))
	}

	return (
		<div >
    <h2 style={{color: "red"}} >Chat</h2>
    <div >
      <div style={{overflow: "scroll",width: "500px",height: "300px"}}>
      {renderChat()}
      </div>
    </div>
			<form onSubmit={onMessageSubmit}  >

        <div style={{display: "flex"}} >
				<div className="name-field">
					<TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} variant="outlined" label="Name" />
				</div>
				<div>
					<TextField
						name="message"
						onChange={(e) => onTextChange(e)}
						value={state.message}
						variant="outlined"
						label="Message"
					/>
				</div>
        </div>
				<button style={{background:"blue",color:"red"}} >Send Message</button>
			</form>

		</div>
	)
}

export default Chat
