import React, { useState } from "react";
import { db, storageService } from "fbase";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };
  const onDeleteClick = () => {
    const ok = window.confirm("확실합니까?");
    if (ok) {
      db.doc(`nweets/${nweetObj.id}`).delete();
      storageService.refFromURL(nweetObj.attachmentURL).delete();
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    db.doc(`nweets/${nweetObj.id}`).update({ text: newNweet });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };
  return (
    <div key={nweetObj.id}>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input type="text" value={newNweet} onChange={onChange} required />
            <input type="submit" value="수정" />
          </form>
          <button onClick={toggleEditing}>취소</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentURL && (
            <>
              <img
                src={nweetObj.attachmentURL}
                height="50px"
                width="50px"
                alt=""
              />
            </>
          )}
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
