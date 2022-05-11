function Button(props) {
  const { text, onClickFunction } = props;
  return (
    <div onClick={onClickFunction}>
      <p>{text}</p>
    </div>
  );
}

export default Button;
