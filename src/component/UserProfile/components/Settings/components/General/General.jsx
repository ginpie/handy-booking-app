import React, { useState } from "react";
import styled from "styled-components";
import BoxContainer from "../../../BoxContainer";
import updateAccount from "../../../../../../apis/updateAccount";
import updateCustomerAddress from "../../../../../../apis/updateCustomerAddress";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AccountWrapper = styled.div`
  height: 250px;
  width: 100%;
  position: relative;
  @media screen and (min-width: 1700px) {
    height: 200px;
  }
  @media screen and (max-width: 990px) {
    height: 300px;
  }
  @media screen and (max-width: 700px) {
    height: 500px;
  }
`;

const Account = styled.div`
  width: 90%;
  height: 205px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 1700px) {
    height: 155px;
  }
  @media screen and (max-width: 990px) {
    height: 255px;
  }
  @media screen and (max-width: 700px) {
    height: 455px;
  }
`;

const AccountItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
`;

const AccountTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const AccountInput = styled.input`
  margin-top: 10px;
  width: 100%;
  height: 20px;
`;

const AddressWrapper = styled.div`
  height: 250px;
  width: 100%;
  margin-top: 50px;
  position: relative;
`;

const Address = styled.div`
  height: 205px;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const AddressTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-top: 15px;
`;

const AddressInput = styled.input`
  margin-top: 10px;
  width: 90%;
  height: 20px;
`;

const Button = styled.button`
  position: absolute;
  bottom: 10px;
  right: 15px;
  border: none;
  cursor: pointer;
  background: #fddb3a;
  padding: 8px 10px;
  border-radius: 5px;
`;

const General = ({ fakeUserData, role }) => {
  const [firstName, setFirstName] = useState(fakeUserData.firstName);
  const [lastName, setlastName] = useState(fakeUserData.lastName);
  const [dateOfBirth, setDateOfBirth] = useState(fakeUserData.DOB);
  const [phone, setPhone] = useState(fakeUserData.phone);
  const [postCode, setPostCode] = useState("4215");
  const [address, setAddress] = useState({
    address1: fakeUserData.address.address1,
    address2: fakeUserData.address.address2,
    suburb: fakeUserData.address.suburb,
    zipCode: fakeUserData.address.zipCode,
  });

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
    { key: "PHONE", title: "phone", value: phone, handleChange: setPhone },
  ];

  const handleAddressChange = (event) => {
    setAddress({ ...address, [event.target.name]: event.target.value });
  };

  const handleUpdateAccount = async (event) => {
    event.preventDefault();

    const data = {
      DOB: dateOfBirth,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phone,
    };
    await updateAccount(fakeUserData._id, data);
  };

  const handleUpdateAddress = async (event) => {
    event.preventDefault(event);
    const data = {
      address: {
        address1: address.address1,
        address2: address.address2,
        suburb: address.suburb,
        zipCode: address.zipCode,
      },
    };
    await updateCustomerAddress(fakeUserData.email, data);
  };

  return (
    <Container>
      <AccountWrapper>
        <BoxContainer title="Account">
          <Account>
            {accountItems.map((item) => (
              <AccountItem key={item.key}>
                <AccountTitle>{item.title}</AccountTitle>
                <AccountInput
                  type="text"
                  value={item.value}
                  onChange={(event) =>
                    item.handleChange(event.currentTarget.value)
                  }
                />
              </AccountItem>
            ))}
            {role.tradie && (
              <AccountItem>
                <AccountTitle>PostCode</AccountTitle>
                <AccountInput
                  type="text"
                  value={postCode}
                  onChange={(event) => setPostCode(event.currentTarget.value)}
                />
              </AccountItem>
            )}
          </Account>
          <Button onClick={handleUpdateAccount}>Save</Button>
        </BoxContainer>
      </AccountWrapper>
      {role.customer && (
        <AddressWrapper>
          <BoxContainer title="Address">
            <Address>
              <Left>
                <AddressTitle>Address</AddressTitle>
                <AddressInput
                  value={address.address1}
                  onChange={handleAddressChange}
                  name="address1"
                />
                <AddressTitle>Suburb</AddressTitle>
                <AddressInput
                  value={address.suburb}
                  onChange={handleAddressChange}
                  name="suburb"
                />
              </Left>
              <Right>
                <AddressTitle>Address2</AddressTitle>
                <AddressInput
                  value={address.address2}
                  onChange={handleAddressChange}
                  name="address2"
                />
                <AddressTitle>Zip Code</AddressTitle>
                <AddressInput
                  value={address.zipCode}
                  onChange={handleAddressChange}
                  name="zipCode"
                />
              </Right>
            </Address>
            <Button onClick={handleUpdateAddress}>Save</Button>
          </BoxContainer>
        </AddressWrapper>
      )}
    </Container>
  );
};

export default General;
