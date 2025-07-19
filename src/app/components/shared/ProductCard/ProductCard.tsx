import { FC, ReactElement } from "react";
import classNames from "classnames/bind";

import styles from '@/app/components/shared/ProductCard/Productcard.module.scss';

import { CustomButtonLink } from "@/app/components/ui/CustomButtonLink/CustomButtonLink";

interface ProductCardProps {
    id: number;
    title: string;
    price: number;
    image: string;
};

const cn = classNames.bind(styles);

export const ProductCard: FC<ProductCardProps> = ({ id, title, price, image }): ReactElement => {
    return (
        <li className={cn('card')}>
            <img src={image} alt={title} />
            <div className={cn('card__body')}>
                <h2>{title}</h2>
                <div className={cn('card__description')}>
                    <span>{price}$</span>
                    <CustomButtonLink link={id.toString()} label='View' />
                </div>
            </div>
        </li>
    );
};