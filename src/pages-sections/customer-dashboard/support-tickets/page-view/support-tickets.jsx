"use client";

import { Fragment } from "react"; // CUSTOM ICON COMPONENT

import CustomerService from "icons/CustomerService"; // Local CUSTOM COMPONENTS

import TicketCard from "../ticket-card";
import Pagination from "../../pagination";
import DashboardHeader from "../../dashboard-header"; // CUSTOM DATA MODEL

// =============================================
const TicketsPageView = ({
  tickets
}) => {
  return <Fragment>
      {
      /* TITLE HEADER AREA */
    }
      <DashboardHeader title="To be Implemented" Icon={CustomerService} />

      {
      /* SUPPORT TICKET LIST AREA */
    }
      {/* {tickets.map(item => <TicketCard ticket={item} key={item.id} />)} */}
      <div style={{display:'flex', width:'100%', minWidth:'100%', height:"auto", color:'darkmagenta'}}>
            <h5>
            To be implemented
            </h5>
          </div>

      {
      /* PAGINATION AREA */
    }
      {/* <Pagination count={4} onChange={data => console.log(data)} /> */}
    </Fragment>;
};

export default TicketsPageView;