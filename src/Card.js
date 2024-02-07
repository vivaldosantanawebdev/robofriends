import React from "react";

// // One way to do
// const Card = (props) => {
//   return (
//     <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
//       <img alt='robots' src={`https://robohash.org/${props.id}?100x100`} />
//       <div className='tc'>
//         <h2>{props.name}</h2>
//         <p>{props.email}</p>
//       </div>
//     </div>
// )
// }

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?100x100`} />
      <div className="tc">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
