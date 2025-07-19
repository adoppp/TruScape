import { FC, ReactElement } from "react";
import classNames from "classnames/bind";

import styles from '@/app/components/shared/Header/Header.module.scss';

import { IconCart, IconLogIn, IconLogo } from "@/app/assets/svg";
import CategoryMenu from "@/app/components/shared/Header/CategoryMenu/CategoryMenu";

const cn = classNames.bind(styles);

export const Header: FC = (): ReactElement => {
    return (
        <header className={cn('header')}>
            {IconLogo}
            <CategoryMenu />
            <div>
                {IconCart}
                {IconLogIn}
            </div>
        </header>
    );
};