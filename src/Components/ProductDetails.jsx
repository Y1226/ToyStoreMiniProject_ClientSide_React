export const ProductDetails = (props) => {

    var product = JSON.parse(localStorage.getItem("itemDetails"))

    return <div>
        <img alt="img" src={`https://localhost:44306/pictures/${product.productPicture}`}></img>
        <h1>#{product.productId} {product.productName}</h1>
        <p>${product.productPrice}</p>
        <p>only {product.amountInStock} left in stock!</p>
        {/* <p>{product.categoryId}</p> */}
    </div>
}