import Link from "next/link";

export default async function ProductDetailPage(props)
{
    //extract productId from params
    const {productId} = await props.params;

    return (
        <>

            <Link href="/products">Go Back</Link>
            <h1>Product Detail Page</h1>
            <hr/>
            <br/>
            <br/>
            <br/>
            <h3>Product ID: {productId}</h3>
        </>
    );
}