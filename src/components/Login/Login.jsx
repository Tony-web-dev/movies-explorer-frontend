import Form from "../Form/Form.jsx";
import Greeting from "../Greeting/Greeting.jsx";

export default function Login() {
  return (
    <main className="main">
      <section className="section auth">
        <Greeting>Рады видеть!</Greeting>
        <Form name="login" />
      </section>
    </main>
  )
};