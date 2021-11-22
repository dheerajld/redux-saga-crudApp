import { MDBBtn, MDBIcon, MDBSpinner, MDBTable, MDBTableBody, MDBTableHead, MDBTooltip } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { deleteUserStart, loadUsersStart } from '../redux/action';


const Home = () => {

    const dispatch = useDispatch();
    const { users , loading ,error } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(loadUsersStart());
    }, []);

    useEffect(()=> error && toast.error(error),[error]);

      if(loading){
          return(
              <MDBSpinner style={{ maeginTop:"150px" }} role="status">
                <span className="visually-hidden">Loading...</span>
              </MDBSpinner>
          );
      }

    const handleDelete = (id) => {
           if(window.confirm("Are you that you wanted to delete that user?")){
            dispatch(deleteUserStart(id));
            toast.success("User Delete Successfully");
           }
           

    }

    return (
        <div className="container" style={{ margin: "150px" }}>
            <MDBTable>
                <MDBTableHead dark>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </MDBTableHead>
                {users &&
                    users.map((item, index) => (
                        <MDBTableBody key={index}>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <th scope="row">{item.name}</th>
                                <th scope="row">{item.email}</th>
                                <th scope="row">{item.phone}</th>
                                <th scope="row">{item.address}</th>
                                <th scope="row">
                                <td>
                                    <MDBBtn className="m-1" tag="a" color="none" onClick={() => handleDelete(item.id)}>
                                        <MDBTooltip title="Delete" tag="a">
                                            <MDBIcon
                                                fas
                                                icon="trash"
                                                style={{ color: "#dd4d39" }}
                                                size="lg"
                                            />
                                        </MDBTooltip>
                                    </MDBBtn>

                                    <Link to={`/editUser/${item.id}`}>
                                        <MDBBtn className="m-1" tag="a" color="none">
                                            <MDBTooltip title="Edit" tag="a">
                                                <MDBIcon
                                                    fas
                                                    icon="pen"
                                                    style={{ color: "#FFA900" , marginBottom:"10px" }}
                                                    size="lg"
                                                />
                                            </MDBTooltip>
                                        </MDBBtn>
                                    </Link>
                                    <Link to={`/userInfo/${item.id}`}>
                                        <MDBBtn className="m-1" tag="a" color="none">
                                            <MDBTooltip title="userInfo" tag="a">
                                                <MDBIcon
                                                    fas
                                                    icon="eye"
                                                    style={{ color: "#39C0ED" , marginBottom:"10px" }}
                                                    size="lg"
                                                />
                                            </MDBTooltip>
                                        </MDBBtn>
                                    </Link>
                                  </td>

                                </th>
                            </tr>
                        </MDBTableBody>
                    ))

                }

            </MDBTable>
        </div>
    );
};

export default Home;
