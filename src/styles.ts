import styled, { keyframes } from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Info = styled.article`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h2`
  color: black;
  font-weight: 800;
`;

export const Paragraph = styled.p`
  color: #2196f3;
  font-weight: 700;
`;

export const DescriptionContainer = styled.div`
  max-width: 70%;
  margin: 0 auto 20px auto;
`;

export const Description = styled.p`
  color: #929495;
  font-weight: 600;
`;

export const InfoSection = styled.section`
  text-align: center;
`;

export const CompanySectionGrid = styled.section`
  grid-template-columns: 1fr 1fr;
  display: grid;
  grid-gap: 0;
`;

export const CompanySectionFlex = styled.section`
  display: flex;
`;

export const AbsoluteImage = styled.img`
  max-width: 100%;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const LogoContainer = styled.div`
  position: relative;
  background: radial-gradient(#cedbe1, #2196f3);
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
  width: 100%;
`;

export const Button = styled.button`
  border: 2px solid #2196f3;
  text-transform: uppercase;
  font-weight: 700;
  color: #2196f3;
  padding: 5px 15px;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
  :disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
`;

export const Input = styled.input`
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid rgba(0 0 0 / 10%);
  padding: 15px;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background: transparent;
  border: 3px solid rgba(0 0 0 / 10%);
  border-left-color: #2196f3;
  animation: ${spin} 0.9s infinite linear;
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 50px;
  max-height: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  right: 0;
  background: #fafafa;
`;

export const NavItem = styled.button`
  list-style: none;
  text-decoration: none;
  margin: 0 20px;
`;

export const PageContainer = styled.div<{ flexCol?: boolean }>`
  max-width: 500px;
  display: flex;
  flex-direction: ${(props) => (props.flexCol ? "column" : "row")};
  margin: 150px auto 0 auto;
  justify-content: center;
  width: 100%;
`;
