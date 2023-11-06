// import React, { useState } from 'react'
// import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

// export default function MultipleInput() {

//   let [user, setUser] = useState({
//     email: "",
//     password:"",
//   });
//   console.log("=======>>>>>",user)

//   return (
//     <div>
//       <Form className="border p-3 border-dark rounded-3 w-50 mx-auto">
//         <FormGroup>
//           <Label for="name">Email</Label>
//           <Input
//             id="name"
//             name="name"
//             placeholder="Enter your name"
//             type="text"
//             onClick={(e) => setUser( e.target?.value)}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="Password">Password</Label>
//           <Input
//             id="Password"
//             name="Password"
//             placeholder="Enter your Password"
//             type="text"
//           />
//         </FormGroup>

//         {/* <Button color="danger" className="w-100">
//           Update
//         </Button> */}

//         <Button color="danger" className="w-100">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// }

// sir code

import { FileSignature, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

export default function MultipleInput() {
  let [user, setUser] = useState({
    email: "",
    password: "",
    age: "",
  });

  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("userData");
    const normalData = JSON.parse(data) || [];
    console.log("normalData", normalData);
    // setDataArr(normalData);

    let filteredData = normalData.filter((e) => e.email.toLowerCase().includes(searchText.toLowerCase()));
    setDataArr(filteredData);
  }, [searchText]);

  let [dataArr, setDataArr] = useState([]);

  const submitHandler = () => {
    console.log("----user---->", user);
    console.log("dataarr====>", dataArr);
    // user.email !=="" && user.password!==""
    setDataArr([...dataArr, user]);
    localStorage.setItem("userData", JSON.stringify([...dataArr, user]));
    setUser({ email: "", password: "", age: "" });
  };

  return (
    <>
      <Form className="border p-3 border-dark rounded-3 w-50 mx-auto">
        <FormGroup>
          <Label for="name">Email</Label>
          <Input
            id="name"
            name="name"
            value={user?.email}
            placeholder="Enter your name"
            type="text"
            onChange={(e) => setUser({ ...user, email: e.target?.value })}
          />
        </FormGroup>

        {/* <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            id="Password"
            name="Password"
            value={user?.password}
            placeholder="Enter your Password"
            type="text"
            onChange={(e) => setUser({ ...user, password: e.target?.value })}
          />
        </FormGroup> */}
        <FormGroup>
          <Label for="Age">Age</Label>
          <Input
            id="Age"
            name="Age"
            value={user?.age}
            placeholder="Enter your Age"
            type="number"
            onChange={(e) => setUser({ ...user, age: e.target?.value })}
          />
        </FormGroup>
        {/* <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            value={user?.password}
            placeholder="Enter your password"
            type="text"
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
          />
        </FormGroup> */}

        {/* <Button color="danger" className="w-100">
          Update
        </Button> */}

        <Button onClick={submitHandler} color="danger" className="w-100">
          {" "}
          Submit{" "}
        </Button>
      </Form>

      {dataArr?.length > 0 ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <input
              //set Search input in state
              onChange={(e) => setSearchText(e?.target.value)}
              type="text"
              placeholder="Search your text here...!"
              style={{
                borderRadius: "5px",
                padding: "10px",
                width: "51%",
                border: "3px solid blue",
              }}
            />
          </div>

          <Table className="w-50 mx-auto border border-dark border-1" striped>
            <thead>
              <tr>
                <th>SR.</th>
                <th>Email</th>
                <th>Password</th>
                <th>Age</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {dataArr?.map?.((e, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{e?.email}</td>
                    <td>{e?.password}</td>
                    <td>{e?.age}</td>
                    <td>
                      <FileSignature
                        role="button"
                        onClick={() => updateHandler(e, i)}
                      />
                      <Trash2
                        color="#e71818"
                        role="button"
                        onClick={() => deleteHandler(i)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      ) : (
        <div style={{ width: "100vw", textAlign: "center" }}>
          <h1>Data Not Avavilable</h1>
        </div>
      )}
    </>
  );
}
