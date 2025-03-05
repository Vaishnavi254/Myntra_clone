import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"; // Import this hook
import HomeItem from "./HomeItem"; // Assuming HomeItem is the component to display individual items

const FilteredItems = () => {
  const items = useSelector((state) => state.items);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState(false); // To track whether the filter is applied
  const [searchParams] = useSearchParams(); // Get the URL search parameters

  useEffect(() => {
    const category = searchParams.get('category'); // Get category from URL (men/women)

    if (category === 'men') {
      setFilteredItems(items.filter(item => item.purchaser === 'men'));
      setFilter(true);
    } else if (category === 'women') {
      setFilteredItems(items.filter(item => item.purchaser === 'women'));
      setFilter(true);
    }
   else if (category === 'studio') {
    setFilteredItems(items.filter(item => item.purchaser === 'studio'));
    setFilter(true);
  } 
  else if (category === 'beauty') {
    setFilteredItems(items.filter(item => item.purchaser === 'beauty'));
    setFilter(true);
  } 
  else if (category === 'home') {
    setFilteredItems(items.filter(item => item.purchaser === 'home'));
    setFilter(true);
  }
  else if (category === 'kids') {
    setFilteredItems(items.filter(item => item.purchaser === 'kids'));
    setFilter(true);
  }
   
  else {
      setFilteredItems(items); // No filter, show all items
      setFilter(false);
    }
  }, [searchParams, items]); // Dependency array to rerun the effect when the search params change

  return (
    <div>
      {filter ? (
        <div className="filtered-items">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <HomeItem key={item.id} item={item} />
            ))
          ) : (
            <p>No items found for this category.</p>
          )}
        </div>
      ) : (
        <div className="filtered-items">
          {items.length > 0 ? (
            items.map((item) => (
              <HomeItem key={item.id} item={item} />
            ))
          ) : (
            <p>No items available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FilteredItems;
