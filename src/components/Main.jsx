import React, { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Main() {

  const [artData, useArtData] = useState({});

  const { data, error } = useSWR(
    "https://collectionapi.metmuseum.org/public/collection/v1/objects",
    fetcher
  );

  useEffect(() => {
      useArtData([...artData, data]);
  })

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
        <ul>
            {artData.map((eachWork) => {
               return <img src={`${eachWork.primaryImage}`} alt={`${eachWork.title}`} />; 
            } )
            }
        </ul>
      {/* <h1>{data.title}</h1>
      <p>{data.description}</p>
      <strong> {data.primaryImage}</strong> <strong> {data.objectName}</strong>{" "}
      <strong> {data.artistDisplayName}</strong> */}
    </div>
  );
}
