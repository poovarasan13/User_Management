import React,{Fragment} from 'react'
// import { Form } from 'reactstrap';

const PageNation = ({totaluser,setUserPerPerson,page,setPage,userperPerson}) => {
    const pages=[];
    for(let i=1;i<= Math.ceil(totaluser/userperPerson);i++)
    {
        pages.push(i);
    }
  return (
    <Fragment>
       <div className="d-flex align-items-center gap-1 mt-3">
            <select
                name="user"
                value={userperPerson}
                onChange={(e) => setUserPerPerson(Number(e.target.value))}
                className="form-select form-select-sm w-auto"
            >
                <option value="5">5/page</option>
                <option value="10">10/page</option>
                <option value="15">15/page</option>
                {/* <option value="20">20/page</option> */}
                {/* <option value="25">25/page</option> */}
            </select>
            
            <div className="d-flex gap-2 ms-5 ">
            {pages.map((p, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            console.log(" Page:", page, "selected Page:", p);
                            setPage(p);
                        }}
                        className={`btn px-2 py-1 ${page === p ? 'btn-secondary ' : 'btn-sm btn-light'}`}
                    >
                        {p}
                    </button>
                ))}
            </div>
        </div>
    </Fragment>
  )
}

export default PageNation
