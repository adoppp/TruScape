import classNames from "classnames/bind";

import styles from '@/app/components/shared/Header/CategoryMenu/CategoryMenu.module.scss';

async function getCategories() {
  const response = await fetch('https://fakestoreapi.com/products/categories');

  return response.json();
};

const cn = classNames.bind(styles);

export default async function CategoryMenu() {
  const categories = await getCategories();

    const categoryItem = categories.map((category: string) => <li>{category}</li>);

    return (
        <div className={cn('category')}>
            <p className={cn('category__label')}>
                category
            </p>
            <ul className={cn('category__list')}>
                {categoryItem}
            </ul>
        </div>
    );
};