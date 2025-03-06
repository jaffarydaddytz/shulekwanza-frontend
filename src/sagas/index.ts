import { all, fork } from "redux-saga/effects";
import authSaga from "./authSaga";  // Assuming you already imported authSaga

// Root saga
function* rootSaga(): Generator {
  // Use `fork` to properly handle concurrent sagas
  yield all([
    fork(authSaga), // Include the authSaga
  ]);
}

export default rootSaga;
