import React, {useState} from 'react';
import BoxContainer from '../../../BoxContainer';
import CustomEmptyContent from '../../../CustomEmptyContent';
import boxIcon from '../../../icons/box.png';

const ClosedInquiry = () => {
    const [closedInquiries, setClosedInquiries] = useState([]);
    return ( 
        <BoxContainer 
        title="Closed Inquiries"
        needSearchBar
        >
        {(closedInquiries.length !== 0) ? (
            closedInquiries.map((inquiry=>(
                <div>inquiry</div>
            )))
        ):(
            <CustomEmptyContent>
                <CustomEmptyContent.Icon src={boxIcon}/>
                <CustomEmptyContent.Title>Nothing Here</CustomEmptyContent.Title>
                <CustomEmptyContent.Text>Your don't have any closed inquiry</CustomEmptyContent.Text>
            </CustomEmptyContent>
        )}
        </BoxContainer>
     );
}
 
export default ClosedInquiry;