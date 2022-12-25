import { Avatar } from "@mui/material";
import React from "react";
import InputOptions from "./InputOptions";
import "./Post.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { forwardRef } from 'react';


const Post = forwardRef(({ name, description, message, photoUrl, timestamp}, ref) => {
  return (
      <div className='post'>
          <div ref={ref} className="post_header">
              <Avatar src={photoUrl}>{name[0]}</Avatar>
              <div className="post__info">
                  <h2>{name}</h2>
                  {/* <p>{description}</p> */}
                  <p>{timestamp}</p>
              </div>

          </div>



          <div className="post_body">
              <p>{message}</p>
          </div>

              <div className="post_buttons">
                  <InputOptions title='Like' Icon={ThumbUpOffAltIcon} color='gray' />
                  <InputOptions title='Comment' Icon={CommentIcon} color='gray' />
                  <InputOptions title='Share' Icon={ShareIcon} color='gray' />
                  <InputOptions title='Send' Icon={SendIcon} color='gray' />
              </div>
          
          
          
      </div>
  );
});

export default Post
