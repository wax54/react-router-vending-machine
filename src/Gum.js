import { Link } from 'react-router-dom';

const gum = {
    small: {
        name: 'gum',
        price: 0.50,
        size: 5,
        measure: 'ea',
        img: "https://images.heb.com/is/image/HEBGrocery/000903718"
    },
    med: {
        name: 'gum',
        price: 1,
        size: 10,
        measure: 'ea',
        img: "https://images.heb.com/is/image/HEBGrocery/000903718"
    },
    large: {
        name: 'gum',
        price: 2,
        size: 20,
        measure: 'ea',
        img: "https://images.heb.com/is/image/HEBGrocery/000903718"
    },
}
const Gum = ({ purchase }) => (

    <div>
        <h1>Gum!</h1>
        <h3> How Many Sticks Do you Want?</h3>
        <button onClick={() => purchase(gum.small)}>5</button>
        <button onClick={() => purchase(gum.med)}>10</button>
        <button onClick={() => purchase(gum.large)}>20</button>
        <br />
        <Link to="/">Vending Machine</Link>
    </div>
);
export default Gum