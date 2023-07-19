import { Outlet, Route, Routes } from "react-router-dom"
import { TicketForm } from "../tickets/TicketForm.js"
import { TicketContainer } from "../tickets/TicketContainer.js"
import { EmployeeList } from "../employees/EmployeeList.js"
import { EmployeeDetails } from "../employees/EmployeeDetails.js"
import { CustomerList } from "../Customers/CustomerList.js"
import { CustomerDetails } from "../Customers/CustomerDetails.js"
import { Profile } from "../profile/Profile.js"

export const EmployeeViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>
                <Route path="profile" element={<Profile />} />
                <Route path="tickets" element={<TicketContainer />} />
                <Route path="employees" element={<EmployeeList />} />
                <Route path="employees/:employeeId" element={<EmployeeDetails />} />
                <Route path="customers" element={<CustomerList />} />
                <Route path="customer/:customerId" element={<CustomerDetails />} />
            </Route>
        </Routes>
    )
}