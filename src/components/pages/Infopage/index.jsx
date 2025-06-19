import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../../../data.json";

export default function InfoPage() {
  const { postId } = useParams();
  const [info, setInfo] = useState(data);

  async function filterInfo() {
    const info = data.filter((item) => item.id.includes(postId));
    setInfo(info);
  }

  useEffect(() => {
    filterInfo(postId);
  }, []);

  return (
    <div>
      {info.map((item) => (
        <>
          <h1>{item.name}</h1>
          <h2>{item.house}</h2>
        </>
      ))}
    </div>
  );
}
