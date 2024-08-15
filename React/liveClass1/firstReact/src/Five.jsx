function Five({ setFiveCount }) {
  //   const { setFiveCount } = prop;

  const handleClick = () => {
    setFiveCount((prevCount) => prevCount + 5);
  };

  return (
    <div>
      <button onClick={handleClick}>5 Arttır</button>
    </div>
  );
}

export default Five;

// prop = {setFiveCount: setCount}
// prop.setFiveCount = setCount

// const {setFiveCount} = prop
