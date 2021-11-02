const requestsendMail = require('./requestSendMail');

const contactCtrl = {
    postRequest: async (req, res) => {
        try {
            const { name, email, title, description } = req.body;

            const admin = "mohitprajapati11069@gmail.com"
            requestsendMail(admin,
                "Congratulations! You have received a new suggestion/query.",
                `FROM: ${name} (${email})`,
                `Title: ${title}`,
                `Description: ${description} Thank You!`
            );
 
            res.json({ msg: "Your request has been sent successfully. Thank You!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}

module.exports = contactCtrl;