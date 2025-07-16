'use client';

import { FC, FormEvent, ReactElement, useEffect, useState } from "react"
import classNames from "classnames/bind";

import styles from '@/app/sections/CompanyForm/CompanyForm.module.scss';
import { Button } from "@/app/ui/Button/Button";
import { Input } from "@/app/ui/Input/Input";

interface FormState {
    status: string;
    country: string;
    name: string;
    category: string;
    description: string;
};

interface ErrorState {
    [key: string]: string;
};

const cn = classNames.bind(styles);

export const CompanyForm: FC = (): ReactElement => {
    const [form, setForm] = useState<FormState>({
        status: '',
        country: '',
        name: '',
        category: '',
        description: ''
    });

    const [disabled, setDisabled] = useState<boolean>(true);
    
    const handleChange = (field: keyof FormState) => (value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    useEffect(() => {
        const filled = Object.values(form).some((v) => v.trim() !== '');
        setDisabled(!filled);
    }, [form]);
    

    const [status, setStatus] = useState<string>('');

    const [country, setCountry] = useState<string>('');

    const [name, setName] = useState<string>('');

    const [category, setCategory] = useState<string>('');

    const [description, setDescription] = useState<string>('');

    const handleStatusChange = (value: string) => {
        setStatus(value);
    };

    const handleCountryChange = (value: string) => {
        setCountry(value);
    };

    const handleNameChange = (value: string) => {
        setName(value);
    };

    const handleCategoryChange = (value: string) => {
        setCategory(value);
    };

    const handleDescriptionChange = (value: string) => {
        setDescription(value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = {
            status,
            country,
            name,
            category,
            description
        };

        const isFilled = Object.values(formData).filter(value => value !== '');

        if (isFilled.length === 0) setDisabled(true);

        console.log(formData);
        setStatus('');
    };

    return (
        <form onSubmit={handleSubmit} className={cn('form')}>
            <div className={cn('form__fields')}>
                <div className={cn('form__block')}>
                    <Input
                        label="Status"
                        placeholder="Title"
                        id="status"
                        value={status}
                        onChange={handleStatusChange}
                    />
                    <Input
                        label="Country"
                        placeholder="Description"
                        id="country"
                        value={country}
                        onChange={handleCountryChange}
                    />
                </div>
                <div className={cn('form__block')}>
                    <Input
                        label="Name"
                        placeholder="Title"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <Input
                        label="Category"
                        placeholder="Title"
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
                    />
                    <Input
                        label="Description"
                        placeholder="Description"
                        id="description"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </div>
            </div>
            <Button label="Add company" type="submit" disabled={disabled} />
        </form>
    );
};