const Yup = require("yup");

const formSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email required!")
    .min(6, "Email too short!")
    .max(30, "Email too long"),
  password: Yup.string()
    .required("Password is required!")
    .min(6, "Password should be of minimum 6 characters length!")
    .max(30, "Password too long"),
});

const validateForm = (req, res) => {
  const formData = req.body;
  formSchema
    .validate(formData)
    .then((valid) => {
      if (valid) {
        console.log("form is good");
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
};

module.exports = validateForm
