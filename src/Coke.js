import { Link } from 'react-router-dom';

const coke = {
    small: {
        name: 'coke',
        price: 1.50,
        size: 12,
        measure: 'oz',
        img: "https://images.costcobusinessdelivery.com/ImageDelivery/imageService?profileId=12028466&itemId=20&recipeName=680"
    },
    med: {
        name: 'coke',
        price: 2.25,
        size: 20,
        measure: 'oz',
        img: "https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/home/coca-cola-original-20oz.png"
    }, 
    large: {
        name: 'coke',
        price: 3,
        size: 2,
        measure: 'L',
        img: "https://i5.walmartimages.com/asr/0f4c2c4d-d7a7-467d-af04-6f2c6ecb2446.5f4f5a8b2a1e9e5ff3463aa130cff1ed.jpeg"
    },
}

const Coke = ({ purchase }) => (
    <div>
        <h1>Coke!</h1>
        <h3>What Size Coke?</h3>
        <button onClick={() => purchase(coke.small)}>12oz</button>
        <button onClick={() => purchase(coke.med)}>20oz</button>
        <button onClick={() => purchase(coke.large)}>2L</button>
        <br />
        <Link to="/">Vending Machine</Link>
    </div>
);
export default Coke