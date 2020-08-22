import React, { useState } from 'react';
import JobListEmpty from './jobListEmpty';
import '../style/components/jobList.scss';

const JobList = () => {
    const [onTask, setOnTask] = useState('current');

    const handleTaskChange = (task) => {
        if (task === onTask) {
            return 
        } else if(task === 'current') {
            return setOnTask(task)
        } else if(task === 'past') {
            return setOnTask(task)
        } else {
            return
        }
    }
    return ( 
        <div className="jobListContainer">
            <div className="jobList">
                <div className="jobList__title">My Jobs</div>
                <div className="jobList__nav">
                    <div className={(onTask==='current')? "jobList__nav--item jobList__nav--active" : "jobList__nav--item"} 
                    onClick={()=>handleTaskChange('current')}>Current</div>
                    <div className={(onTask==='past')? "jobList__nav--item jobList__nav--active" : "jobList__nav--item"}
                     onClick={()=>handleTaskChange('past')}>Past</div>
                </div>
                <JobListEmpty />
            </div>       
        </div>
     );
}
 
export default JobList;