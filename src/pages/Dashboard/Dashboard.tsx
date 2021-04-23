import React, { Fragment } from 'react';
import Detailbar from './Detailbar/Detailbar';
import Topbar from './Topbar/Topbar';

export interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = (props) => {
    return (
        <Fragment>
            <Topbar />
            <Detailbar />
        </Fragment>
    );
}

export default Dashboard;