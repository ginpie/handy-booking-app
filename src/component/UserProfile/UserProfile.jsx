import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import SideBar from "./components/SideBar";
import MyInquiry from "./components/MyInquiry";
import MyOrders from "./components/MyOrders";
import Settings from "./components/Settings";
import placeOrderIcon from "./components/icons/placeOrder.png";
import myOrdersIcon from "./components/icons/myOrders.png";
import settingsIcon from "./components/icons/settings.png";
import helpCentreIcon from "./components/icons/helpCentre.png";
import getCurrentUser from "../../apis/getCurrentUser";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 70px;
  position: relative;
`;

const Content = styled.div`
  flex: 4;
  height: 100%;
  margin-bottom: 20px;
`;

const SidebarMenu = styled.button`
  padding: 5px 10px;
  border: none;
  background: #fddb3a;
  position: absolute;
  top: 10px;
  left: 0px;
  cursor: pointer;
  :focus {
    outline: 0;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

class UserProfile extends Component {
  state = {
    fakeUserData: {},
    fakeUserInquiries: {},
    currentPage: "",
    displaySidebar: false,
  };

  state = {
    userData: {},
    currentPage: "",
    displaySidebar: false,
  };

  async componentDidMount() {
    this.setState({ currentPage: "My Inquiry" });
    const user = await getCurrentUser();
    console.log(user);
    this.setState({
      userData: {
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        DOB: user.DOB || "",
        email: user.email || "",
        phone: user.phoneNumber || "",
        address: user.address || "",
        _id: user._id,
        avatar: user.avatar || "",
      },
    });
    console.log(this.state.currentPage);
  }

  handleNavItemChange = (value) => {
    const currentPage = value;
    this.setState({ currentPage });
  };

  toggleSidebar = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      displaySidebar: !prevState.displaySidebar,
    }));
  };

  render() {
    const navItems = [
      {
        key: "MYINQUIRY",
        value: "My Inquiry",
        icon: placeOrderIcon,
        content: <MyInquiry />,
      },
      {
        key: "MYORDERS",
        value: "My orders",
        icon: myOrdersIcon,
        content: <MyOrders />,
      },
      {
        key: "SETTING",
        value: "Settings",
        icon: settingsIcon,
        content: <Settings fakeUserData={this.state.userData} />,
      },
      {
        key: "HELPCENTRE",
        value: "Help Centre",
        icon: helpCentreIcon,
        content: <div />,
      },
    ];
    const { userData, currentPage, displaySidebar } = this.state;
    return (
      <Container>
        <Header scrollAnime={false} />
        <ContentContainer>
          <SidebarMenu onClick={this.toggleSidebar}>Menu</SidebarMenu>
          <SideBar
            fakeUserData={userData}
            navItems={navItems}
            currentPage={currentPage}
            onPageChange={this.handleNavItemChange}
            displaySidebar={displaySidebar}
            onCloseSidebar={this.toggleSidebar}
          />
          <Content>
            {navItems.map((item) => {
              if (currentPage !== item.value) {
                return null;
              }
              return (
                <React.Fragment key={item.key}>{item.content}</React.Fragment>
              );
            })}
          </Content>
        </ContentContainer>
        <div style={{ width: "100%" }}>
          <Footer />
        </div>
      </Container>
    );
  }
}

export default UserProfile;
