'use client';

import { ButtonHTMLAttributes, FC, ReactElement } from "react";
import classNames from "classnames/bind";

import styles from '@/app/ui/Button/Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    isDisabled?: boolean
};

const cn = classNames.bind(styles);

export const Button: FC<ButtonProps> = ({ label, isDisabled, ...props }): ReactElement => {
    return (
        <button className={cn('button', isDisabled && 'disabled' )} {...props}>
            {label}
        </button>
    );
}; 