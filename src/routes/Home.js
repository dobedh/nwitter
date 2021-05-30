import React, { useEffect, useState } from "react";
import { db } from "fbase";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const [dbNweets, setDbNweets] = useState("");
  const getNeweets = async () => {
    const nweets = await db.collection("nweets").get();
    console.log(nweets);
  };
  useEffect(() => {
    getNeweets();
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    await db
      .collection("nweets")
      .add({ nweet, createdAt: Date.now() })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    setNweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  );
};

export default Home;
