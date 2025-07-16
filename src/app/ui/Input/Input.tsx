'use client';

import { ChangeEvent, FC, ReactElement } from "react";
import classNames from "classnames/bind";

import styles from '@/app/ui/Input/Input.module.scss';

interface InputProps {
    label?: string;
    placeholder?: string;
    id: string;
    value: string;
    onChange: (value: string) => void;
    error?: string | null;
};

const cn = classNames.bind(styles);

export const Input: FC<InputProps> = ({ label, placeholder, id, value, onChange, error}): ReactElement => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className={cn('input')}>
            {label && <p className={cn('input__label')}>{label}</p>}

            <label htmlFor={id}>
                <input 
                    type="text" 
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    className={cn('input__element')}
                />
            </label>

            {error && <p className={cn('input__error')}>{error}</p>}
        </div>
    );
};