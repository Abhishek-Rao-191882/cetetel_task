import Table from "rc-table";
import React, { useState } from "react";
import Pagination from "react-js-pagination";

const CategoryTable = () => {
  const columns = [
    {
      title: "Username",
      dataIndex: "name",
      key: "name",
      width: 400,
      className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
      rowClassName: "bg-black-ripon",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
      width: 400,
      className: "text-white bg-gray-600 p-2 border-r-2 border-b-2",
    },
    {
      title: "Phone No.",
      dataIndex: "phone",
      key: "phone",
      width: 400,
      className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      width: 400,
      className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "operations",
      width: 150,
      className: "text-white bg-gray-600 p-2 border-b-2",
      render: () => (
        <>
          <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>

          </a>{" "}
          |{" "}
          <a href="#">
            Delete
          </a>
        </>
      ),
    },
  ];

  const data = [
    {
      id: "01",
      name: "Vinod",
      email: "vinod@gmail.com",
      phone: "9876543210",
      company: "Saturn",
    },
    {
      id: "02",
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: "9876543210",
      company: "Jupiter",
    },
    {
      id: "03",
      name: "Parmod",
      email: "parmod@gmail.com",
      phone: "9876543210",
      company: "Mars",
    },
    {
      id: "04",
      name: "Suchitra",
      email: "suchitra@gmail.com",
      phone: "9876543210",
      company: "Earth",
    },
  ];

  //Pagination
  const [activePage, setActivePage] = useState(15);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <Table
        columns={columns}
        data={data}
        rowKey="id"
        className="bg-purple-700 p-4 w-full text-center rc-table-custom font-semibold "
      />
      <Pagination
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        nextPageText={"Next"}
        prevPageText={"Prev"}
        firstPageText={"First"}
        lastPageText={"Last"}
        innerClass="js-ul"
        itemClass="js-li"
        linkClass="page-link"
      />
    </>
  );
};

export default CategoryTable;
