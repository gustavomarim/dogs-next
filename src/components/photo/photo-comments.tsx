"use client";

import { Comment } from "@/actions/photo-get";
import { useUser } from "@/context/user-context";
import { useEffect, useRef, useState } from "react";
import PhotoCommentsForm from "./photo-comments-form";
import styles from "./photo-comments.module.css";

const PhotoComments = (props: {
  single: boolean;
  id: number;
  comments: Comment[];
}) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef<HTMLUListElement>(null);

  const { user } = useUser();

  useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {user && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
