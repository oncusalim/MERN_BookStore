import { useState, useContext, useEffect } from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { Badge } from "antd";
import { ShoppingCartOutlined, HomeOutlined } from "@ant-design/icons";
import { AuthContext } from "../../context/AuthContext";

const { Header } = Layout;

const Navbar = () => {
  const [sayac, setSayac] = useState();
  const { isLoggedIn, setLoggedIn, selectedBooks } = useContext(AuthContext);
  
  const [current, setCurrent] = useState("home");
  
  const history = useHistory();

  const getData = () =>{
    let mySelectedBooks = sessionStorage.getItem("selectedBooks")
    let mySelectedBooks2 = JSON.parse(mySelectedBooks)
    setSayac(mySelectedBooks2)
  }

  const handleLogoClick = (e) => {
    history.push(`/`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };
  const handleClick = (e) => {
    setCurrent({ current: e.key });
    if (e.key === "logout") {
      handleLogout();
    } else history.push(`/${e.key}`);
  };

  useEffect(() => {
   
    getData();
  }, [selectedBooks])

  return (
    <Header>

      <Menu
        onClick={handleClick}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[current]}
      >
        <Menu.Item key="home"></Menu.Item>

        <a href="/" className="cart-navbar-link">

          <HomeOutlined className="cart-icon" />

        </a>

        <Menu.Item key="books">Books</Menu.Item>

        <a href="/cart" className="cart-navbar-link">

          <Badge count={sayac?.length}>

            <ShoppingCartOutlined className="cart-icon" />

          </Badge>
        </a>
        {isLoggedIn ? (
        
          <Menu.Item key="logout" onClick={handleLogout}>
            Logout
          </Menu.Item>
         
        ) : (
          <>
            <Menu.Item key="signin">Sign In</Menu.Item>
            <Menu.Item key="signup">Sign Up</Menu.Item>
          </>
        )}
      </Menu>
    </Header>
  );
};

export default Navbar;