interface Props {
  text: string;
}

const Form = ({ text }: Props) => {
  return (
    <form>
      <label htmlFor="email">이메일</label>
      <input id="email" type="email" placeholder="abc@email.com" />
      <label htmlFor="password">비밀번호</label>
      <input id="password" type="password" />
      <button>{text}</button>
    </form>
  );
};

export default Form;
