import { Link } from "react-router-dom";

const Todos = () => {
  return (
    <div>
      <Link to="/auth/login">로그인</Link>
      <Link to="/auth/signup">회원가입</Link>
    </div>
  );
};

export default Todos;
