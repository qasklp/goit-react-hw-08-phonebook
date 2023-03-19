import { Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "Redux/store";

import { UserRoutes } from "./UserRoutes";
import Navigation from "./modules/Navigation/Navigation";
import { AuthLayout } from "./modules/AuthLayout/AuthLayout";


export const App = () => {
  return <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <AuthLayout>
        <BrowserRouter>
          <Navigation />
          <UserRoutes />
        </BrowserRouter>
      </AuthLayout>
    </PersistGate>
  </Provider>;
}
