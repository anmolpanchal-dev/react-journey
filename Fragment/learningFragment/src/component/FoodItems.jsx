import Item from "./Item";
const FoodItem = ({item}) => {


  return (
    <>
      <ul className="list-group">
        {item.map((tool) => (
          <Item key={item} AITools={tool}></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodItem;
