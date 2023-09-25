import React, { useEffect, useState } from "react";
import axios from "axios";

const ListProduct = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setList(res.data.products);
      })
      .catch((err) => {
        console.log((err, "err"));
      });
  }, []);
  console.log(list, "list");
  return (
    <>
      {" "}
      List Product
      {/* <div>
        {list.map((item, key) => {
          console.log(item, key, "item");
          return <div key={key}> {item.title} </div>;
        })}
      </div> */}
      <table>
        <thead>
          <tr>
            <th> S.no</th>
            <th> Title </th>
            <th > Description </th>
             </tr>
          
           </thead>
           <tbody> 
             {list.map((item, key) => {
return (
  <tr> 
             <td> {item.id}</td>
             <td> {item.title}</td>
             <td> {item.description}</td>
             </tr> 
)
             })}
             </tbody>
         </table>
    </>
  );
};

export default ListProduct;
