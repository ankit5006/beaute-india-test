import { combineReducers } from "redux";
import { AuthSlices } from "store/auth/slices";
import { CartSlices } from "../cart/slices";
import { CommonSlices } from "../common/slices";

const rootReducer = combineReducers({
    auth: AuthSlices.reducer,
    common: CommonSlices.reducer,
    cart: CartSlices.reducer,
});

export default rootReducer;