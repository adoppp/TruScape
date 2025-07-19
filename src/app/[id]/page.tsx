import classNames from 'classnames/bind';

import styles from '@/app/[id]/Product.module.scss';

import { Product } from '@/app/types';
import { Button } from '@/app/components/ui/Button/Button';
import Link from 'next/link';
import GoBackButton from '../components/ui/GoBackButton/GoBackButton';

interface ProductProps {
    params: {
        id: string
    }
};

async function getProduct(id: string) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        next: {
            revalidate: 120,
        }
    });

    return response.json();
};

const cn = classNames.bind(styles);

export default async function ProductPage({ params: { id }}: ProductProps) {
    const { 
        title, 
        price, 
        description, 
        image, 
        category }: Product = await getProduct(id);

    return (
        <section className={cn('container')}>
            <GoBackButton />
            <div className={cn('product')}>
                <img src={image} alt={title} />
                <div className={cn('product__info')}>
                    <div>
                        <h1>{title}</h1>
                        <div className={cn('product__section')}>
                            <h3 className={cn('product__sub-title', 'product__sub-title_top')}>Description: </h3>
                            <p>{description}</p>
                        </div>
                        <div className={cn('product__section')}>
                            <h3 className={cn('product__sub-title', 'product__sub-title_right')}>Category: </h3>
                            <span>{category}</span>
                        </div>
                        <div className={cn('product__section')}>
                            <h3 className={cn('product__sub-title', 'product__sub-title_right')}>Price:</h3>
                            <span>{price}$</span>
                        </div>
                    </div>
                    <Button label='Add to the cart' />
                </div>
            </div>
        </section>
    );
};