export default function FilterBtn({ filterMenu, catItems }) {
  return (
    <>
      {catItems.map((val, ind) => (
        <button type="button" onClick={() => filterMenu(val)} key={ind}>
          {val}
        </button>
      ))}
    </>
  );
}
