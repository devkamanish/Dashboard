import React, { Suspense } from "react";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/shared/Loading";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
