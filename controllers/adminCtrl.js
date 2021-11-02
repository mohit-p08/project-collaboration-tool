const Projects = require('../models/projectModel');
const Users = require('../models/userModel');
const Request = require('../models/requestModel');

const adminCtrl = {
    getAllDetails: async (req, res) => {
        try {
            const id = req.user.id;
            const admin = await Users.findById({ _id: id });
            if (admin.role === 1) {
                console.log('ssssss');
                const totalUsers = await Users.count();
                const totalProjects = await Projects.count();
                const hiringProjects = await Projects.count({ "hiringStatus": "0" });
                const requests = await Request.count();
                // console.log(requests);
                // const 
                const result = {
                    totalUsers: totalUsers,
                    totalProjects: totalProjects,
                    hiringProjects: hiringProjects,
                    requests: requests
                }
                res.json(result);
            } else {
                res.json({ msg: "Access Denied" });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}

module.exports = adminCtrl;