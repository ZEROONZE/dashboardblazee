import React, { useState } from "react";
import DatePicker from "react-datepicker"; 

import "react-datepicker/dist/react-datepicker.css"




export default function Datefilterr() {
const [selectedDate, setselectedDate] = React.useState<Date | null | undefined>(new Date());
const [startDate, setStartDate] = React.useState<Date | null | undefined>(new Date());
const [endDate, setEndDate] = React.useState<Date | null | undefined>(new Date());
return(

    <>
   <DatePicker
 isClearable
filterDate={d => {
    return new Date() > d;
  }}
placeholderText="Inserir uma data"

dateFormat="0d/0M/yyyy"
    selected={startDate}
    selectsStart
    startDate={startDate}
    endDate={endDate} // add the endDate to your startDate DatePicker now that it is defined
    onChange={date => setStartDate(date)}
  />
 <DatePicker
  isClearable
 filterDate={d => {
    return new Date() > d;
  }}
 placeholderText="Inserir uma data"

 dateFormat="0d/0M/yyyy"
    selected={endDate}
    selectsEnd
    startDate={startDate}
    endDate={endDate}
    minDate={startDate}
    onChange={date => setEndDate(date)}
  />
</>
   
    )






}


