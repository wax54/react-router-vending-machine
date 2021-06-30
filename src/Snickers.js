import { Link } from 'react-router-dom';
const snickers = {
    name: 'snickers',
    price: 1.50,
    size: 10,
    measure: 'grams',
    img: "https://images.heb.com/is/image/HEBGrocery/000121400"
};

const Snickers = ({ purchase }) => (

    <div>
        <h1>Snickers!</h1>
        <button onClick={() => purchase(snickers)}>Buy A Snickers</button>
        <br />
        <Link to="/">Vending Machine</Link>
    </div>
);
export default Snickers