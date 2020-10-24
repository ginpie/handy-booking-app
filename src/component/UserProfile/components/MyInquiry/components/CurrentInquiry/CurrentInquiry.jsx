import React, {useState, useEffect, Fragment} from 'react';
import styled from 'styled-components';
import BoxContainer from '../../../BoxContainer';
import CustomEmptyContent from '../../../CustomEmptyContent';
import ShowInquiry from '../ShowInquiry';
import boxIcon from '../../../icons/box.png';

const Container = styled.div`
    width: 100%;
    overflow:auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    &::-webkit-scrollbar-thumb {
        background: #888; 
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

`;

const CurrentInquiry = () => {
    const [currentInquiries, setCurrentInquiries] = useState([]);
    const [searchQuery, setSearchQuery] = useState(null);

    useEffect(()=>{
        const fetchCurrentInquiries = async() => {
            setCurrentInquiries([
                {
                    serviceName: "House Clean",
                    inquiryId:"id645321",
                    tradie: "Bruce Lee",
                    createTime:"19/10/2020",
                    status: "pending",
                    phoneNumber:"0468925505",
                    email:"Bruce@tradie.com",
                    address:"fake st, robina, QLD",
                    message:"Hi, this is Bruce, I would Like to take the house cleaning job",
                    price: "300$",
                },
                {
                    serviceName: "House Moving",
                    inquiryId:"id666",
                    tradie: "Jakey Chen",
                    createTime:"20/10/2020",
                    status: "Accept",
                    phoneNumber:"0498925506",
                    email:"Jakey@tradie.com",
                    address:"fake st, southport, QLD",
                    message:"Hi, this is Jakey, I would Like to take the House Moving job",
                    price: "400$",
                }
            ]);
        }
        fetchCurrentInquiries()
    },[])

    let filteredInquiries = {}

    if (searchQuery) {
        filteredInquiries = currentInquiries.filter(inquiry =>
            inquiry.serviceName.toLowerCase().trim().startsWith(searchQuery.toLowerCase())
        );
    }
    else {
        filteredInquiries = currentInquiries
    }

    return ( 
        <BoxContainer 
            title="Current Inquiries"
            needSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
        >
            <Container>
                {(filteredInquiries.length !== 0) ? (
                    currentInquiries.map((inquiry=>(
                        <Fragment key={inquiry.inquiryId}>
                            <ShowInquiry inquiry={inquiry}/>
                        </Fragment>
                    )))
                ):(
                    <CustomEmptyContent>
                        <CustomEmptyContent.Icon src={boxIcon}/>
                        <CustomEmptyContent.Title>Nothing Here</CustomEmptyContent.Title>
                        <CustomEmptyContent.Text>Your don't have any current inquiry</CustomEmptyContent.Text>
                    </CustomEmptyContent>
                )}
            </Container>
        </BoxContainer>
     );
}
 
export default CurrentInquiry;