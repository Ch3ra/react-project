import axios from "axios";
import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let res = await axios.get("https://668b47510b61b8d23b08f441.mockapi.io/blog");
    console.log(res)
    if (res.status === 200){
      setData(res.data);
    }
  };

  console.log(data)

  useEffect(() => {
    getData()
  }, []);
  return <div>
    {data.map((row)=> {
        return <p key={row.id} >{row.name}</p>
    })}

    {/* {data[0]?.name} */}
  </div>;
};

export default Blogs;
