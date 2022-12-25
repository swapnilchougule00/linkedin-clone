import React, { useEffect, useState } from "react";
import "./feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./Firebase";
import firebase from "firebase/compat/app";

// react flip move
import FlipMove from 'react-flip-move'

function Feed() {


  const [input, setinput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (event) => {
    event.preventDefault();

  
    db.collection("posts").add({
      name: "Swapnil chougule",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    
    });

    setinput("");
  };


  function convertTimestamp(firebaseTimestamp) {

    const newTimestamp = new Date(firebaseTimestamp.toDate()).toUTCString();
    

    return newTimestamp;
}


  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />

          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />

          <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />

          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write artical"
            color="#7FC15E"
          />
        </div>
      </div>

      <div className="posts">
      <FlipMove>
        {posts.map(
          ({
            id,
            data: { name, description, message, photoUrl, timestamp },
          }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
              timestamp={timestamp?convertTimestamp(timestamp):''}
            />
          )
        )}
        </FlipMove>
      </div>
      <br/>
    </div>
  );
}

export default Feed;
