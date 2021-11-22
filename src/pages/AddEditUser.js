import { MDBBtn, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { createUserStart, updateUserStart } from '../redux/action';


const initailState = {
    name: "",
    email: "",
    phone: "",
    address: "",
};




function AddEditUser() {

    const [formValue, setFormValue] = useState(initailState);
    const [editMode, setEditMode] = useState(false);
    const { name, email, phone, address } = formValue;
    const history = useHistory();

    //edit

    const { users } = useSelector(state => state.data);
    const { id } = useParams();
    console.log("id=>", typeof (id));

    useEffect(() => {
        if (id) {
            setEditMode(true)
            const singleUser = users.find((item) => item.id === Number(id));
            setFormValue({ ...singleUser });
        }
    }, [id]);


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && phone && address) {
            if (!editMode) {
                dispatch(createUserStart(formValue));
                toast.success("User Added Successfully");
                setTimeout(() => history.push("/"), 500);
            } else {
                dispatch(updateUserStart({ id, formValue }));
                setEditMode(false);
                toast.success("User Updated Successfully");
                setTimeout(() => history.push("/"), 500);
            }

        }
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    return (
        <div className="container">
        <MDBValidation
            className="row g-3"
            style={{ marginTop: "100px" }}
            noValidate
            onSubmit={handleSubmit}
        >
            <p className="fs-2 fw-bold">{!editMode ? "Add User Detail" : "Update User Detail"}</p>
            <div
                style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "400px",
                    alignContent: "center",
                }}
            >

                <MDBInput
                    value={name || ""}
                    name="name"
                    type="text"
                    onChange={onInputChange}
                    required
                    label="Name"
                    validation="Please provide a name"
                    invalid
                /><br />
                <MDBInput
                    value={email || ""}
                    name="email"
                    type="email"
                    onChange={onInputChange}
                    required
                    label="Email"
                    validation="Please provide a email"
                    invalid
                /><br />
                <MDBInput
                    value={phone || ""}
                    name="phone"
                    type="number"
                    onChange={onInputChange}
                    required
                    label="Phone"
                    validation="Please provide a phone"
                    invalid
                /><br />
                <MDBInput
                    value={address || ""}
                    name="address"
                    type="address"
                    onChange={onInputChange}
                    required
                    label="Address"
                    validation="Please provide a address"
                    invalid
                /><br />

                <div className="col-12">
                    <MDBBtn style={{ marginRight: "10px" }} type="submi">
                        {!editMode ? "Add" : "Update"}
                    </MDBBtn>
                    <MDBBtn onClick={() => history.push("/")} color="danger">
                        Go Back
                    </MDBBtn>
                </div>
            </div>


        </MDBValidation>
        </div>
    )
}

export default AddEditUser
