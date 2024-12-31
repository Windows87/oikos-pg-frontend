import styled from "styled-components";
import logo from "../../assets/logo.png";

const Logo = styled.img.attrs({
  src: logo,
})<{ width?: number }>`
  width: ${(props) => props.width || 100}px;
`;

export default Logo;
