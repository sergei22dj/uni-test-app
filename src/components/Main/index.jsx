import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../store/reducers/actionCreators";
import { itemsSlice } from "../../store/reducers/itemsSlice";
// components
import InputItem from "../InputItem";
import CardItem from "../card-item";
// data from localstorage
import { filterData } from "./filterData";
// loader
import LoaderCircle from "../Loaders/circle";
// views
import { FilterWrapper, TableWrapper, Wrapper } from "./views";
import { Button } from "../Auth/views";

const Main = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.authReducer);
  const { items, isLoading } = useSelector((state) => state.itemsReducer);
  const { clearItems } = itemsSlice.actions;

  const [reqParams, setReqParams] = useState({
    ...filterData,
    pageNumber: 1,
  });

  const addItems = () => {
    setReqParams({ ...reqParams, pageNumber: reqParams.pageNumber + 1 });
  };

  const filtered = () => {
    dispatch(clearItems());
    setReqParams((prev) => ({ ...prev, pageNumber: 1 }));
    if (reqParams.pageNumber === 1) {
      dispatch(getItems(accessToken, { ...reqParams, pageNumber: 1 }));
    }
  };

  const onChangeInputsHandler = (e) => {
    const values = { ...reqParams };
    values[e.target.name] = e.target.value;
    setReqParams(values);
  };

  useEffect(() => {
    dispatch(getItems(accessToken, reqParams));
  }, [reqParams.pageNumber]);

  localStorage.setItem("reqParams", JSON.stringify(reqParams));
  return (
    <Wrapper>
      <FilterWrapper>
        <InputItem
          label={"price from:"}
          name="price_from"
          type="number"
          value={reqParams.price_from}
          handler={(e) => onChangeInputsHandler(e)}
        />
        <InputItem
          label={"price to:"}
          name="price_to"
          type="number"
          value={reqParams.price_to}
          handler={(e) => onChangeInputsHandler(e)}
        />
        <InputItem
          label={"date from:"}
          name="from"
          type="date"
          value={reqParams.from}
          handler={(e) => onChangeInputsHandler(e)}
        />
        <InputItem
          label={"date to:"}
          name="to"
          type="date"
          value={reqParams.to}
          handler={(e) => onChangeInputsHandler(e)}
        />
        <InputItem
          label={"title: "}
          name="title"
          value={reqParams.title}
          handler={(e) => onChangeInputsHandler(e)}
        />
      </FilterWrapper>

      <Button onClick={filtered}>Filtred</Button>

      {isLoading == false && items == false ? (
        "Items not found"
      ) : (
        <TableWrapper>
          {items.map((el) => (
            <div key={el.id}>
              <CardItem data={el} />
            </div>
          ))}
        </TableWrapper>
      )}

      <Button onClick={addItems}>
        {isLoading ? <LoaderCircle /> : "MORE"}
      </Button>
    </Wrapper>
  );
};
export default Main;
