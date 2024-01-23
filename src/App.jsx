import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavigationBar from "./components/sideTopbar/navigationBar";
import StudentMenu from "./components/studentMenu/studentMenuContainer";
import AdmissionFormComponent from "./components/admissionForm/admissionForm";
import ScreeningFormFee from "./components/screeningFee/screeningFee";
import AdmissionStatusComponent from "./components/admissionStatus/admissionStatus";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main Route */}
      <Route path="/" element={<NavigationBar />}>
        {/* Default Route */}
        <Route index element={<StudentMenu />} />

        {/* Routes for specific paths */}
        <Route path="admission" element={<AdmissionStatusComponent />} />
        <Route path="admissionform" element={<AdmissionFormComponent />} />
        <Route path="screeningfee" element={<ScreeningFormFee />} />

        {/* Error Route (Catch-all) */}
        <Route path="*" element={<ErrorComponent />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// Additional Error Component
function ErrorComponent() {
  return <div>404 - Page Not Found</div>;
}
