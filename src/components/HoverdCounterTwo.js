function HoverdCounterTwo(props) {
  const { count, setCount } = props;

  return (
    <div>
      <h3 onMouseOver={() => setCount(count + 1)}>Hovered {count} times</h3>
    </div>
  );
}

export default HoverdCounterTwo;
