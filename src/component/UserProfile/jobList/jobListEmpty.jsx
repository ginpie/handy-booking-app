import React from 'react';
import folder from '../icons/folder.png';
import '../style/components/jobListEmpty.scss';

const JobListEmpty = () => {
    return ( 
        <div className="jobs">
            <div className="jobs__iconWrapper">
                <img src={folder} alt=""/>
            </div>
            <div className="jobs__title">
                Post your job with hipages in just 3 steps
            </div>
            <div className="jobs__message">
                1 &nbsp; Let us know what you're looking for.
            </div>
            <div className="jobs__message">
                2 &nbsp; We will send you up to 3 relevant tradies who are interested in completing your job.
            </div>
            <div className="jobs__message">
                3 &nbsp; You can contact these tradies or wait for them to contact you.
            </div>
        </div>
     );
}
 
export default JobListEmpty;