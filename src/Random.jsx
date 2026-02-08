function RandomNum() {
  let num = Math.random() * 1000;
  return (
    <>
      <p style={{ "background-color": "#123456" }}>
        Random Number is {Math.round(num)}
      </p>
    </>
  );
}
export default RandomNum;
