import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useTheme } from "../Components/Theme/ThemeContext";
import { styled } from "styled-components";


const ManiLayoutContainer = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? '#fff' : '#333')};
  color: ${(props) => (props.theme === 'light' ? '#333' : '#fff')};
  /* Add other styles as needed */
`;
const MainLayOut = () => {
   const { theme } = useTheme();
   return (
      <ManiLayoutContainer theme={theme}>
         <div className="max-w-screen-xl mx-auto">
         <Navbar></Navbar>
         <Outlet></Outlet>
         </div>
      </ManiLayoutContainer>
   );
};

export default MainLayOut;