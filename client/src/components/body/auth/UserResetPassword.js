/* 
Name of the module: Reset Password

Date of module Creation: 03/10/2021

Author of the module: Mohit Prajapati

What the module does: reset password

Functions supported:
1. Login   => Input: password, cf_password;              Output: Success/err
*/
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification';
import { isLength, isMatch } from '../../utils/validation/Validation';
import { useSelector } from 'react-redux';


const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function UserResetPassword() {
    const [data, setData] = useState(initialState);
    const token = useSelector(state => state.token);

    const { password, cf_password, err, success } = data;

    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value, err: '', success: '' });
    }

    const handleResetPassword = async () => {
        if (isLength(password))
            return setData({ ...data, err: "Password must be at least 8 characters.", success: '' });

        if (!isMatch(password, cf_password))
            return setData({ ...data, err: "Password did not match.", success: '' });

        try {
            const res = await axios.post('/user/resetpassword', { password }, {
                headers: { Authorization: token }
            });

            return setData({ ...data, err: "", success: res.data.msg });

        } catch (err) {
            err.response.data.msg && setData({ ...data, err: err.response.data.msg, success: '' });
        }

    }

    return (
        <div className="fg_pass">
            <h2>Reset Your Password</h2>

            <div className="row">
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password}
                    onChange={handleChangeInput} />

                <label htmlFor="cf_password">Confirm Password</label>
                <input type="password" name="cf_password" id="cf_password" value={cf_password}
                    onChange={handleChangeInput} />

                <button onClick={handleResetPassword}>Reset Password</button>
            </div>
        </div>
    );
}

export default UserResetPassword;