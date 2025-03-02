import BagItem from "../components/Bagitem";
import Bagsummary from "../components/Bagsummary";
import{useSelector}from "react-redux";
const Bag = () => {
 const bagItems=useSelector(state=>state.bag);
 const items=useSelector(state=>state.items);
 const finalitems=items.filter(item=>{
  const itemIndex=bagItems.indexOf(item.id);
  return itemIndex>=0;
 })
  return (
  
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalitems.map(item=><BagItem item={item}></BagItem>)}
            
          </div>
          <Bagsummary></Bagsummary>
          </div>
        
      </main>
  
  );
};
export default Bag;
