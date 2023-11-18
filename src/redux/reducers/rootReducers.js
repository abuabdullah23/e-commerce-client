import authReducers from "./auth/authReducers";
import homeReducers from "./home/homeReducers";

const rootReducers = {
    home : homeReducers,
    auth: authReducers
}

export default rootReducers