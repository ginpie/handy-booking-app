import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MediaQuery from "react-responsive";
import "./react-tabs.css";
import FloatingBox from "../FloatingBox/FloatingBox";
import getReviews from "../../../../../../apis/getReviews";

class Tab_s extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    getReviews()
      .then((data) => {
        let cards = [];
        data.forEach((i) => {
          let a = {};
          a.price = i.totalPrice;
          a.title = i.name;
          a.comment = i.comment;
          a.rating = i.rating;
          a.avatar = i.avatar;

          cards.push(a);
        });

        this.setState({
          cards: cards,
        });
      })
      .catch((e) => {});
  }

  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Cleaning</Tab>
          <Tab>Moving</Tab>
          <MediaQuery minWidth={900}>
            <Tab>Furniture Assembly</Tab>
            <Tab>Installation</Tab>
          </MediaQuery>
        </TabList>

        <TabPanel>
          <FloatingBox cards={this.state.cards} hrefs="/orders" />
        </TabPanel>
        <TabPanel>
          <FloatingBox cards={this.state.cards} hrefs="/orders" />
        </TabPanel>
        <MediaQuery minWidth={900}>
          <TabPanel>
            <FloatingBox cards={this.state.cards} hrefs="/orders" />
          </TabPanel>
          <TabPanel>
            <FloatingBox cards={this.state.cards} hrefs="/orders" />
          </TabPanel>
        </MediaQuery>
      </Tabs>
    );
  }
}

export default Tab_s;
