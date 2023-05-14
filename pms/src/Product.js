function Product(props){

    

    return (
        
        <div className="item">
            <div className="img">
                <img className="img_main" src={props.imageURL} alt="nature"/>
            </div>

            <div className="details">
                <h2>
                    {props.name}
                </h2>

                <p>{props.price}</p>

                <button>View More</button>
            </div>
        </div>
       
    )
}


export default Product;