// Question on React Routing
// 2. Create a dynamic page to display the different Apple products that you stored in your
// Database (during your MySQL class). To do that, you will need to create a functional
// component called “Iphone.js” and fetch the Iphone products data from your Database
// using API. Once you fetch the data, display them on your React based Apple website replica
// when the “iphone” section from your Navbar is clicked. Please watch the demo video here
// to see what your dynamic page should look like.
// src/components/Iphone.js
// src/components/Iphone.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Iphone = () => {
//   const [iphones, setIphones] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:1233/Iphones")
//       .then((response) => {
//         setIphones(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching iPhones:", error);
//       });
//   }, []);

//   return (
//     <div className="iphone-section">
//       <h1>iPhone Products</h1>
//       <div className="iphone-grid">
//         {iphones.map((phone) => (
//           <div key={phone.product_id} className="iphone-card">
//             <img src={phone.product_img} alt={phone.product_name} />
//             <h2>{phone.product_name}</h2>
//             <p>{phone.product_brief_description}</p>
//             <p>{phone.product_description}</p>
//             <p><strong>Starting at:</strong> {phone.starting_price}</p>
//             <p><strong>Price Range:</strong> {phone.price_range}</p>
//             <a href={phone.product_link}>Learn more</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Iphone;
