import React, { useState } from "react";
import { db } from "fbase";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };
  const onChange = (event) => {};
  const onDeleteClick = () => {
    db.doc(`nweets/${nweetObj.id}`).delete();
  };
  return (
    <div key={nweetObj.id}>
      {editing ? (
        <form>
          <input value={newNweet} required />
        </form>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>삭제</button>
              <button onClick={toggleEditing}>수정</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
