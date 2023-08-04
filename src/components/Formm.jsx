import React, { useState } from "react";
import { Link } from "react-router-dom";

const Formm = () => {
  const [formData, setFormData] = useState({
    phone: "",
    paymentMethod: "Mastercard",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const verifyMe = (event) => {
    const { phone, paymentMethod, cardNumber, cardName, expiryDate, cvv } =
      formData;
    if (
      !phone ||
      !paymentMethod ||
      !cardNumber ||
      !cardName ||
      !expiryDate ||
      !cvv
    ) {
      event.preventDefault();
      alert("Please fill in all details");
    } else {
      // Allow navigation to success page
      return true;
    }
  };

  return (
    <div className="form">
      <h3>Delivery Address</h3>
      <p>Your order will be delivered to your address</p>
      <input type="radio" name="" id="" />
      <br />
      <br />
      <p>
        <label htmlFor="numb">Phone number</label> <br />
        <input
          type="text"
          name="phone"
          id="numb"
          value={formData.phone}
          placeholder="+234"
          onChange={handleChange}
        />
      </p>
      <hr />
      <p>
        <label htmlFor="paymentMethod">Payment method</label>
        <br />
        <select
          name="paymentMethod"
          id=""
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="Mastercard">Mastercard</option>
          <option value="Visacard">Visacard</option>
          <option value="Opcard">Opcard</option>
        </select>
      </p>
      <hr />
      <p>
        <label htmlFor="cardNumber">Card number</label>
        <br />
        <input
          type="text"
          name="cardNumber"
          id="cardNumber"
          placeholder="2345 3333 3333 5555"
          value={formData.cardNumber}
          onChange={handleChange}
        />
      </p>
      <hr />
      <p>
        <label htmlFor="cardName">Card name</label>
        <br />
        <input
          type="text"
          name="cardName"
          id="cardName"
          placeholder="Mowumi Aishat"
          value={formData.cardName}
          onChange={handleChange}
        />
      </p>
      <hr />
      <div>
        <p>
          <label htmlFor="expiryDate">Expiry date</label>
          <br />
          <input
            type="text"
            name="expiryDate"
            id="expiryDate"
            placeholder="01/23"
            value={formData.expiryDate}
            onChange={handleChange}
          />
        </p>
        <hr />
        <p>
          <label htmlFor="cvv">CVV</label>
          <br />
          <input
            type="text"
            name="cvv"
            id="cvv"
            placeholder="015"
            value={formData.cvv}
            onChange={handleChange}
          />
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="btn--checkout">
      <button
        style={{ maxWidth: "400px"}}
        type="button"
        className="back--checkout"
      >
        <Link
          to="/cart"
          // onClick={verifyMe}
          style={{ color: "gold", fontSize: "1.3rem" }}
        >
          Go back
        </Link>
      </button>
      <button
        style={{ maxWidth: "400px" }}
        type="button"
        className="payment--checkout"
      >
        <Link
          to="/success"
          onClick={verifyMe}
          style={{ color: "gold", fontSize: "1.3rem" }}
        >
          Make payment
        </Link>
      </button>
      </div>
    </div>
  );
};

export default Formm;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Formm = () => {
//   const [phone, setPhone] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('Mastercard');
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardName, setCardName] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCVV] = useState('');

//   const handleChangePhone = (e) => {
//     setPhone(e.target.value);
//   };

//   const handleChangePayment = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleChangeCardNumber = (e) => {
//     setCardNumber(e.target.value);
//   };

//   const handleChangeCardName = (e) => {
//     setCardName(e.target.value);
//   };

//   const handleChangeExpiryDate = (e) => {
//     setExpiryDate(e.target.value);
//   };

//   const handleChangeCVV = (e) => {
//     setCVV(e.target.value);
//   };
//   const verifyMe = (event) => {
//     if (
//       cvv === '' ||
//       cardNumber === '' ||
//       expiryDate === '' ||
//       paymentMethod === '' ||
//       phone === '' ||
//       cardName === ''
//     ) {
//       event.preventDefault();
//       alert('Please fill in all details');
//     } else {
//       // allow navigation to success page
//       return true;
//     }
//   };

//   return (
//     <div className='form'>
//       <h3>Delivery Address</h3>
//       <p>Your order will be delivered to your address</p>
//       <input type='radio' name='' id='' />
//       <br/>
//       <br/>
//       <p>
//         <label htmlFor='numb'>Phone number</label> <br />
//         <input
//           type='text'
//           name=''
//           id='numb'
//           value={phone}
//           placeholder='+234'
//           onChange={handleChangePhone}
//         />
//       </p>
//       <hr />
//       <p>
//             <label htmlFor="">Payment method</label><br/>
//             <select name="" id="" value={paymentMethod} onChange={handleChangePayment}>
//                 <option value="Mastercard">Mastercard</option>
//                 <option value="Visacard">Visacard</option>
//                 <option value="Opcard">Opcard</option>
//             </select>
//         </p>
//         <hr />
//         <p>
//             <label htmlFor="cardNumber">Card number</label><br/>
//             <input type="text" name="" id="cardNumber" placeholder='2345 3333 3333 5555' value={cardNumber} onChange={handleChangeCardNumber}/>
//         </p>
//         <hr />
//         <p>
//             <label htmlFor="cardName">Card name</label><br/>
//             <input type="text" name="" id="cardName" placeholder='Mowumi Aishat' value={cardName} onChange={handleChangeCardName}/>
//         </p>
//         <hr />
//         <div>
//         <p>
//             <label htmlFor="expiryDate">Expiry date</label><br/>
//             <input type="text" name="" id="expiryDate" placeholder="01/23" value={expiryDate} onChange={handleChangeExpiryDate}/>
//         </p>
//         <hr />
//         <p>
//             <label htmlFor="cvv">CVC</label><br/>
//             <input type="text" name="" id="cvv" placeholder="015" value={cvv} onChange={handleChangeCVV}/>
//         </p>
//         </div>
//         <br />
//         <br/>
//         <br/>
//         <button
//             style={{maxWidth: "400px", margin: "auto"}}
//             type="button"
//             className="btn-lg btn-block checkout"

//         >
//             <Link to="/success"      onClick={verifyMe}  style={{color: 'gold', fontSize: '1.3rem'}}>Make payment</Link>
//         </button>
//         </div>
// )
//   }
// export default Formm;
