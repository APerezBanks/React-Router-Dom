import { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { PageContainer } from "../globalStyles";
import { Navbar } from "./navbar";
import { PhotoContainer } from "./photoContainer";

export const Home = ({ user, setUser }) => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      setPhotos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageContainer>
      {!user && <Navigate to="/" />}
      <Navbar setUser={setUser} />
      <button onClick={fetchPhotos}>Grab photos</button>
      <PhotoPage>
        {photos.map((item, index) => (
          <PhotoContainer photo={item} />
        ))}
      </PhotoPage>
    </PageContainer>
  );
};

const PhotoPage = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
