import React from "react";

const Nweet = ({ nweetObj, isOwner }) => {
  return (
    <div key={nweetObj.id}>
      <h4>{nweetObj.text}</h4>
      {isOwner && (
        <>
          <button>삭제</button>
          <button>수정</button>
        </>
      )}
    </div>
  );
};

export default Nweet;
