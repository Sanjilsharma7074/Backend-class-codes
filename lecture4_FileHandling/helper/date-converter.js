function formatDate(date){
  let formatedDate = new Date().toISOString();
  return formatedDate;
}

function dateConverter(date){
  let newDate = new Date().toLocaleTimeString();
  return newDate;
}

// module.exports = formatDate => to export a single function
module.exports = {formatDate,dateConverter}; // to export multiple functions