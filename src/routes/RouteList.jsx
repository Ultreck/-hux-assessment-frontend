// import { AnimatePresence } from "framer-motion";
// import React, { Suspense } from "react";
// import { Route, Routes } from "react-router-dom";

// const WelcomePage = React.lazy(() => import("../pages/WelcomePage"));
// const RegistrationLayout = React.lazy(() =>
//     import("../layouts/RegistrationLayout")
// );
// const DashboardLayout = React.lazy(() => import("../layouts/DashboardLayout"));

// const RouteList = () => {
//   return (
//     <AnimatePresence>
//       <Suspense>
//         <Routes>
//           <Route exact path="/" element={<WelcomePage />} />
//           <Route path="/registration" element={<RegistrationLayout />} />
//           {/* Login routes starts */}
//           <Route path="/contacts" element={<DashboardLayout />}>
//             <Route index element={<DashboardLayout />} />
//             <Route path="dashboard" element={<DashboardLayout />} />
//             {/* <Route path="details" element={<RegistrationLayout />} /> */}
//             {/* <Route path="edit" element={<RegistrationLayout />} /> */}
//           </Route>
//           {/* Login routes ends */}
//         </Routes>
//       </Suspense>
//     </AnimatePresence>
//   );
// };

// export default RouteList;

import { AnimatePresence } from 'framer-motion';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const WelcomePage = React.lazy(() => import('../pages/WelcomePage'));
const RegistrationLayout = React.lazy(() =>
    import('../layouts/RegistrationLayout')
);
const DashboardLayout = React.lazy(() => import('../layouts/DashboardLayout'));

const RouteList = () => {
  return (
    <AnimatePresence>
      <Suspense>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/registration" element={<RegistrationLayout />} />
          {/* Protected routes */}
          <Route path="/contacts" element={<DashboardLayout />}>
            <Route index element={<DashboardLayout />} />
            <Route
            path="/contacts"
            element={<ProtectedRoute element={<DashboardLayout />} />}
          />
          <Route
            path="dashboard"
            element={<ProtectedRoute element={<DashboardLayout />} />}
          />    
         {/* <Route path="details" element={<RegistrationLayout />} /> */}
          {/* <Route path="edit" element={<RegistrationLayout />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default RouteList;


