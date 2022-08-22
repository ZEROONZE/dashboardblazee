const FormatDate = (date: string): string => {
   const [year1, month1, day1] = date.split('-')

   

   return `${day1}/${"07"}/${year1}`;
};


export default FormatDate;