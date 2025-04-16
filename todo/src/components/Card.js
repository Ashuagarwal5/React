import './Card.css';
import userimage from './assets/1.jpg';

function Card () {
    return(
        <div className="card-container">
            <img src={userimage} alt="user-image" className="card-img" />
            <h2 className="card-name">client</h2>
            <div className="card-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam error, ducimus reprehenderit tempora quae veritatis eveniet blanditiis, repellendus vel facere voluptatum exercitationem at velit eligendi.</div>

            <h1>hello</h1>
        </div>
    );
}
export default Card;