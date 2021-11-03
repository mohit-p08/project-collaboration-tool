import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import "./adminCreq.css";
import DataAdmin from "./DataAdmin";


const initialState = {
  totalUsers: '',
  totalProjects: '',
  hiringProjects: '',
  requests: '',
  err: '',
  success: ''
}


const AndminCreq = () => {

  const auth = useSelector(state => state.auth);
  const token = useSelector(state => state.token);
  const users = useSelector(state => state.users);
  const [admin, setAdmin] = useState([]);

  const { user, isAdmin } = auth;

  const [data, setData] = useState(initialState);
  const { totalUsers, totalProjects, hiringProjects, requests, err, success } = data;

  const [avatar, setAvatar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [callback, setCallback] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAdmin) {
      const res = axios.get('/admin', {
        headers: { Authorization: token }
      });
      var promise = Promise.resolve(res);

      promise.then(function (val) {
        setAdmin(val.data);
      });
    }
  });

  return (
    <>
      <div class="admin-Creq-main">
        <div class="content-box">
          <br />
          <table>
            {/* Table Heading  */}
            <tr>
              {/* <th>Project ID</th>
              <th>Collaborator ID</th>
              <th>Request Status</th>
              <th>Selection Status</th> */}
              <th>Project Name</th>
              <th>Project Owner</th>
              <th>Request Sender</th>
              <th>Date Of Request</th>
              <th>Request Status</th>
              <th>Selection Status</th>
            </tr>

            {/* Table Data  */}

            {DataAdmin.map((value) => {

              return (
                <>
                  <tr>
                    {/* <td><Link>{value.owner}</Link></td> */}
                    {/* <td>{admin.requests.projectID}</td>
                    <td>{admin.requests.collaboratorID}</td>
                    <td>{admin.requests.requestStatus}</td>
                    <td>{admin.requests.selected}</td> */}
                  </tr>
                </>
              )

            })}

          </table>

        </div>
      </div>
    </>
  );
};

export default AndminCreq;
