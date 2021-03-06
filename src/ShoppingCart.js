const ShoppingCart = ({ items, remove }) => (
    <div> 
        <h1>You're purchases so far!</h1>  
            {items.map(({id, img, name, size, measure, price}) => (
                <div key={id} style={{border: "1px solid black", display: "inline-block"}}> 
                    <span>{name} <br />
                        {size}{measure}<br />
                        cost ${price}<br /></span>

                    <img onClick={() => remove(id)} 
                        src={img} alt={name} 
                        width="100px" 
                        height="100px"
                    />
                </div>
            ))}
        <h4>Total: ${items.reduce(((total, next) => total + next.price), 0)}</h4>
    </div>
);
export default ShoppingCart