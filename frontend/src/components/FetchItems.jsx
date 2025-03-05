import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { itemsAction } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/FetchStatusSlice";
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  console.log(fetchStatus);
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

     dispatch(fetchStatusActions.markFetchingStarted());
    fetch("https://myntra-clone-icf8.onrender.com/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsAction.addInitialItems(items[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
