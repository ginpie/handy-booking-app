import React, { Component } from "react";
import styled from "styled-components";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
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
    userData: {},
    role: { customer: "", tradie: "" },
    currentPage: "",
    displaySidebar: false,
  };

  async componentDidMount() {
    const user = await getCurrentUser();
    console.log(user);
    if (user.customers.length >= 1) {
      const role = { ...this.state.role };
      role.customer = true;
      this.setState({ role });
    }
    if (user.tradies.length >= 1) {
      const role = { ...this.state.role };
      role.tradie = true;
      this.setState({ role });
    }
    this.setState({
      userData: {
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        DOB: user.DOB || "",
        email: user.email || "",
        phone: user.phoneNumber || "",
        address:
          user.customers.length > 0 ? user.customers[0].address || "" : "",
        _id: user._id,
        postCode: user.tradies.length > 0 ? user.tradies[0].PostCode || "" : "",
      },
      currentPage: "My Inquiry",
    });
  }

  handleNavItemChange = (value) => {
    const currentPage = value;
    this.setState({ currentPage });
  };

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
        content: (
          <MyInquiry role={this.state.role} userData={this.state.userData} />
        ),
      },
      {
        key: "MYORDERS",
        value: "My orders",
        icon: myOrdersIcon,
        content: (
          <MyOrders role={this.state.role} userData={this.state.userData} />
        ),
      },
      {
        key: "SETTING",
        value: "Settings",
        icon: settingsIcon,
        content: (
          <Settings userData={this.state.userData} role={this.state.role} />
        ),
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
      <div className="app-container">
        <ReactNotification />
        <Container>
          <Header scrollAnime={true} />
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
      </div>
    );
  }
}

export default UserProfile;
