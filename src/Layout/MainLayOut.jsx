import { Outlet } from "react-router-dom";
import { useTheme } from "../Components/Theme/ThemeContext";
import { styled } from "styled-components";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const ManiLayoutContainer = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? '#fff' : '#333')};
  color: ${(props) => (props.theme === 'light' ? '#333' : '#fff')};
  /* Add other styles as needed */
`;
const MainLayOut = () => {
   const { theme } = useTheme();
   return (
      <ManiLayoutContainer theme={theme}>
         <div className="max-w-screen-2xl mx-auto">
         <Navbar></Navbar>
         
            <Outlet></Outlet>
         </div>
         <Footer></Footer>
      </ManiLayoutContainer>
   );
};

export default MainLayOut;