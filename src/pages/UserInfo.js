import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router';

function UserInfo() {

    const {users} = useSelector(state => state.data);
    const {id} = useParams();
    const history = useHistory();
    const singleUser = users.find((item) => item.id === Number(id));

    return (
        <div style={{ marginTop:"100px" }}>

        <div
        className="row"
        style={{
            margin:"auto",
            padding:"15px",
            maxWidth:"450px",
            alignContent:"center",
        }}
        >
        <p className="col-md-12 fs-3">User Details</p>
        <hr />
        <p className="col-md-6 fw-bold">ID:</p>
        <p className="col-md-6">{singleUser.id}</p>
        <p className="col-md-6 fw-bold">Name</p>
        <p className="col-md-6">{singleUser.name}</p>
        <p className="col-md-6 fw-bold">Email</p>
        <p className="col-md-6">{singleUser.email}</p>
        <p className="col-md-6 fw-bold">Phone</p>
        <p className="col-md-6">{singleUser.phone}</p>
        <p className="col-md-6 fw-bold">Address</p>
        <p className="col-md-6">{singleUser.address}</p>
        </div>
        <MDBBtn onClick={() => history.push("/")} color="danger">
           Go Back
        </MDBBtn>
           
        </div>
    )
}

export default UserInfo
