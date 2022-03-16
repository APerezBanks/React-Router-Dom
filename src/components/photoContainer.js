import styled from "styled-components";

export const PhotoContainer = ({ photo }) => {
  return (
    <div>
      <p>{photo.author}</p>
      <ImgContainer src={photo.download_url} alt="lorem picsum random" />
    </div>
  );
};

const ImgContainer = styled.img`
  width: 30vw;
`;
