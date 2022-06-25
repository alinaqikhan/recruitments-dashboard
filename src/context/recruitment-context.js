import { createContext, useReducer } from "react";

import recruitmentData from "../database/data.json";

const RecruitmentContext = createContext({
    data: [],
    addItem: function (item) {},
    deleteItem: function (id) {},
    addToArchive: function (id) {},
    editItem: function (id, newItem) {}
});

export default RecruitmentContext;

const recruitmentReducer = (state, action) => {
    let newList;
    if (action.type === "ADD_ITEM_HANDLER") {
        newList = [...state, action.payload];
        return newList;
        
    } else if (action.type === "DELETE_ITEM_HANDLER") {
        newList = state.filter(item => item.id!==action.payload);
        return newList;
    } else if (action.type === "ADD_TO_ARCHIVE") {
        newList = state.map(item => {
            if (item.id === action.payload) {
                item.isArchive = true;
                item.isActive = false;
                item.isDraft = false;
            }
            return item;
        })
        return newList;
    } else if (action.type === "EDIT_ITEM") {
        console.log(action.payload);
        newList = state.filter(item => item.id !== action.payload.id);
        return [...newList,action.payload.newItem];
    };

    return state;
};

export const RecruitmentContextProvider = (props) => {

    const [state, dispatch] = useReducer(recruitmentReducer, recruitmentData);

    const addItemHandler = (item) => {
        dispatch({ type: "ADD_ITEM_HANDLER", payload: item });
    };

    const deleteItemHandler = (id) => {
        dispatch({ type: "DELETE_ITEM_HANDLER", payload: id });
    };

    const addToArchiveHandler = (id) => {
        dispatch({ type: "ADD_TO_ARCHIVE", payload: id });
    };

    const editItemHandler = (id, newItem) => {
        dispatch({ type: "EDIT_ITEM", payload: { id,newItem } });
    };

    return (
        <RecruitmentContext.Provider
            value={{ data: state, addItem:addItemHandler, deleteItem:deleteItemHandler, addToArchive: addToArchiveHandler, editItem: editItemHandler }}
        >
            {props.children}
        </RecruitmentContext.Provider>
    );
};
