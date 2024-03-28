import "../styles/Comp1.css";
import PropTypes from 'prop-types'
const Comp1 = (props) => {
  const { name, img, kms, date, price } = props;
  return (
    <div className="cont">

        <div className="cont-img">
          <img src={img} alt="" />
       
      </div>
      <div className="content-h1">
        <h3>{name}</h3>
      </div>
      <div className="comp-kms">
        <p>{kms}</p>
      </div>
      <div className="date">
        <p>{date}</p>
      </div>
      <div className="price">
        <p>
          <b>${price}</b> night
        </p>
      </div>
    </div>
  );
};

export default Comp1;
Comp1.propTypes={
  name:PropTypes.string.isRequired,
  date:PropTypes.string,
  price:PropTypes.string
}
