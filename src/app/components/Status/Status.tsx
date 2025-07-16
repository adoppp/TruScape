import { FC, ReactElement } from "react";
import classNames from "classnames/bind";

import styles from "@/app/components/Status/Status.module.scss";

interface StatusProps {
    statusType: 'Active' | 'Not active' | 'Pending' | 'Suspended';
};

const cn = classNames.bind(styles);

const Status: FC<StatusProps> = ({ statusType }): ReactElement => {

    return (
        <div className={cn(
            'container', 
            statusType === 'Active' && 'active',
            statusType === 'Not active' && 'notActive',
            statusType === 'Pending' && 'pending',
            statusType === 'Suspended' && 'suspended'
        )}>
            <span></span>
            {statusType}
        </div>
    );
};

export default Status;