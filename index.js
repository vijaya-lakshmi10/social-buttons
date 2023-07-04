const Button = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <button className={`${className}`}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons">
      <Button className="button1" name="Like" />
      <Button className="button2" name="Comment" />
      <Button className="button3" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
