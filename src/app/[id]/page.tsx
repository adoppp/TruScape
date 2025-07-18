
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
}

export default async function Product({ params: { id }}: ProductProps) {
    const product = await getProduct(id);

    return (
        <section>
            id: {id}

            title: {product.title}
            <img src={product.image} />
        </section>
    );
};