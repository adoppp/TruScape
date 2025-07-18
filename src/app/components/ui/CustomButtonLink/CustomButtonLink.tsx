import Link from "next/link";
import { FC, ReactElement } from "react";
import classNames from "classnames/bind";

import styles from '@/app/components/ui/CustomButtonLink/CustomButtonLink.module.scss';

interface CustomButtonLinkProps {
    link: string;
    label: string;
};

const cn = classNames.bind(styles);

export const CustomButtonLink: FC<CustomButtonLinkProps> = ({ link, label}): ReactElement => {
    return (
        <Link href={`/${link}`} className={cn('link')}>
            {label}
        </Link>
    );
};