import classNames from "classnames/bind";

import styles from '@/app/Home.module.scss';
import { ProductCard } from "./components/shared/ProductCard/ProductCard";

async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products', {
        next: {
            revalidate: 60
        }
    }
    );

    return response.json();
};

const cn = classNames.bind(styles);

export default async function Home() {
    const products = await getProducts();

    const cards = products.map((product: any) => 
        <ProductCard 
            key={product.id} 
            id={product.id} 
            title={product.title} 
            price={product.price}
            image={product.image}
        />
    );

    return (
        <section className={cn('container')}>
            <h1 className={cn('container__title')}>All products</h1>
            <ul className={cn('container__list')}>
                {cards}
            </ul>
        </section>
    );
};
