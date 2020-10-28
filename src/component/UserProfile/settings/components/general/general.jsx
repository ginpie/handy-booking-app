import React, { useState } from "react";
import BoxContainer from "../../../boxContainer/boxContainer";
import DisplayEmptyContent from "../../../dispalyEmptyContent/displayEmptyContent";
import phoneIcon from "../../../icons/phone.png";
import "./general.scss";

const General = ({ fakeUserData }) => {
  const [firstName, setFirstName] = useState(fakeUserData.firstName);
  const [lastName, setlastName] = useState(fakeUserData.lastName);
  const [dateOfBirth, setDateOfBirth] = useState(fakeUserData.DOB);
  const [email, setEmail] = useState(fakeUserData.email);
  const [phone] = useState(fakeUserData.phone);

  const accountItems = [
    {
      key: "FIRSTNAME",
      title: "First Name",
      value: firstName,
      handleChange: setFirstName,
    },
    {
      key: "LASTNAME",
      title: "Last Name",
      value: lastName,
      handleChange: setlastName,
    },
    {
      key: "DATEOFBIRTH",
      title: "Date of birth",
      value: dateOfBirth,
      handleChange: setDateOfBirth,
    },
  ];

  return (
    <div className="generalContainer">
      <div className="account">
        <BoxContainer title="Account">
          <div className="account__container">
            {accountItems.map((item) => (
              <div className="account__item" key={item.key}>
                <div className="account__item--title">{item.title}</div>
                <input
                  className="account__item--input"
                  type="text"
                  value={item.value}
                  onChange={(event) =>
                    item.handleChange(event.currentTarget.value)
                  }
                />
              </div>
            ))}
          </div>
        </BoxContainer>
      </div>
      <div className="email">
        <BoxContainer title="Email">
          <div className="email__info">
            <input
              className="email__info--email"
              type="text"
              value={email.address}
              onChange={(event) =>
                setEmail({
                  address: event.currentTarget.value,
                  status: email.status,
                })
              }
            />
            <div className="email__info--button">{email.status}</div>
          </div>
        </BoxContainer>
      </div>
      <div className="phone">
        <BoxContainer title="Phone number" buttonName="Add Phone">
          {phone ? (
            <div>content</div>
          ) : (
            <DisplayEmptyContent
              icon={phoneIcon}
              message="You don't have any phone numbers"
              size="small"
            />
          )}
        </BoxContainer>
      </div>
    </div>
  );
};

export default General;
