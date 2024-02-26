import AuthLayouts from "../components/Layouts/AuthLayouts.jsx";
import FormLogin from "../components/Fragments/FormLogin.jsx";
const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <FormLogin />
    </AuthLayouts>
  )
}

export default LoginPage