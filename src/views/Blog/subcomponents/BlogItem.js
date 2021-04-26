import styled from "styled-components";

const BlogListItem = ({ title, content, imageUrl }) => {
  return (
    <StyledListItem>
      <StyledHeader>{title}</StyledHeader>
      <img src={imageUrl} alt={title} />
      <p>{content}</p>
    </StyledListItem>
  );
};

const StyledHeader = styled.h1`
  color: #0360eb;
  font-size: 25px;
`;

const StyledListItem = styled.li`
  width: 70%;
  border: 2px solid #0360eb;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  list-style: none;
  box-shadow: 0px 8px 10px 5px rgba(0, 0, 255, 0.1);
  border-radius: 15px;
  padding: 10px;
`;

export default BlogListItem;
