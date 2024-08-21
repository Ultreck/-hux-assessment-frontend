import SideBar from "../components/SideBar"
import ContactListPage from "../pages/ContactListPage"
import React from 'react'

const DashboardLayout = () => {

    const dummyData = [
        {id: 1,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 2,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 3,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 4,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 5,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 6,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 7,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 8,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 9,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 10,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 11,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 12,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 13,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 14,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 15,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 16,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 17,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 18,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 19,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 20,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 21,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 22,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 23,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 24,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 25,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 26,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 27,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 28,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 29,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
        {id: 30,firstName:"John", lastName: "Doe", email:"john@gmail.com", phoneNumber: "12002942849"},
    ]
  return (
    <div>
        <div className="text flex bg-slate-50">
            <div className="text md:w-1/5 w-1/12 min-h-screen md:block fixed">
                <SideBar/>
            </div>
            <div className="text w-4/5 bg-slate-50 min-h-screen fixed right-0 pr-6">
                <ContactListPage data={dummyData}/>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout