import React ,{Fragment} from 'react'
import {Form} from "react-bootstrap";
import { Input } from 'reactstrap';
const Filter = ({getRole,getStatus,getGender , setGetGender , setGetRole , setGetStatus ,setSearch,search,data}) => {
  return (
    <Fragment>
              <Form.Group className="d-flex align-items-center gap-3">
              {!data &&<>
                 <div className="d-flex align-items-center gap-2">
                   <Form.Label className="mb-0">Select Role:</Form.Label>
                   <Form.Select
                     name="role"
                     value={getRole}
                     onChange={(e) => setGetRole(e.target.value)}
                     className="form-select form-select-sm w-auto"
                   >
                     <option value="Developer">Developer</option>
                     <option value="Designer">Designer</option>
                     <option value="Manager">Manager</option>
                     <option value="Tester">Tester</option>
                     <option value="HR">HR</option>
                   </Form.Select>
                 </div>
             
                 <div className="d-flex align-items-center gap-2">
                   <Form.Label className="mb-0">Status:</Form.Label>
                   <Form.Select
                     name="status"
                     value={getStatus}
                     onChange={(e) => setGetStatus(e.target.value)}
                     className="form-select form-select-sm w-auto"
                   >
                     <option value="active">Active</option>
                     <option value="inactive">Inactive</option>
                   </Form.Select>
                 </div>
                 <div className="d-flex align-items-center gap-2">
                   <Form.Label className="mb-0">Gender:</Form.Label>
                   <Form.Select
                     name="gender"
                     value={getGender}
                     onChange={(e) => setGetGender(e.target.value)}
                     className="form-select form-select-sm w-auto"
                   >
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                   </Form.Select>
                 </div>
                 </>
                }
                 <div className="d-flex align-items-center gap-2">
                   <Form.Label className="mb-0">Search:</Form.Label>
                   <Input
                   type='text'
                     name="search"
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                     style={{ height: "30px", width: "120px", padding: "2px" }}
                   className="w- text-sm border rounded"
                   >

                     
                   </Input>
                   {/* {search} */}
                   {/* <Input */}
                 </div>
             
               </Form.Group>
    </Fragment>
  )
}

export default Filter
