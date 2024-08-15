function Name({ name, surname, setStateName, setStateSurname, setChoosen }) {
  const handleClick = () => {
    // string ile değer sakalam
    // setStateName(name);
    // setStateSurname(surname);
    // obj ile değer saklama
    setChoosen({
      name: name,
      surname: surname,
    });
  };

  return (
    <div onClick={handleClick}>
      <p>{`${name} ${surname}`}</p>
    </div>
  );
}

export default Name;
