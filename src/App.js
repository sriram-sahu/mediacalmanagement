import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Design/Home";
import "./App.css";
import AllVenders from "./Components/VendorModule/AllVendors";
import AllCustomers from "./Components/CustomerModule/AllCustomers";
import AllDrugs from "./Components/DrugModule/AllDrugs";
import AddNewBill from "./Components/BillItem/AddNewBill";
import AddNewVender from "./Components/VendorModule/AddNewVendor";
import AddNewCustomer from "./Components/CustomerModule/AddNewCustomer";
import AddNewDrug from "./Components/DrugModule/AddNewDrug";
import AllBillModules from "./Components/BillModule/AllBillModules";
import EditVendorModule from "./Components/VendorModule/EditVendorModule";
import GetAllBillItems from "./Components/BillItem/GetAllBillItems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AllVenders' element={<AllVenders />} />
        <Route path='/AddVender' element={<AddNewVender />} />
        <Route path='/editVendor/:id' element={<EditVendorModule />} />
        <Route path='/AllCustomers' element={<AllCustomers />} />
        <Route path='/AddCustomer' element={<AddNewCustomer />} />
        <Route path='/AllDrugs' element={<AllDrugs />} />
        <Route path='/AddDrug' element={<AddNewDrug />} />
        <Route path='/AllBills' element={<GetAllBillItems />} />
        <Route path='/AddBill' element={<AddNewBill />} />
        <Route path='/AllBillModules' element={<AllBillModules />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
