function Item({ name, isPacked }) {
  // return <li className="item">{isPacked ? name + " ✅" : name} </li>;
  return (
    <li className="item">
      {name}
      {isPacked ? "✅" : "❌"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h3>Packing List:</h3>
      <ul>
        <Item isPacked={true} name={"Gitten"} />
        <Item isPacked={false} name={"Sweater"} />
        <Item isPacked={true} name={"Towel"} />
      </ul>
    </section>
  );
}
