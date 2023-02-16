// 690. Employee Importance

var GetImportance = function (employees, id) {
  const importance = {};
  for (let employee of employees) {
    importance[employee.id] = employee;
  }
  let totalImportance = 0;
  for (let employee of employees) {
    if (employee.id === id) {
      totalImportance += employee.importance;
      for (let subordinate of employee.subordinates) {
        totalImportance += GetImportance(employees, subordinate);
      }
    }
  }
  return totalImportance;
};

//   // tao mot mapping de luu gia tri quan trong
//   const importance = {};
// //   // duyet qua danh sach cac nhan vien va luu thong tin cua tung nhan vien vao map
// //   for (let employee of employees) {
// //     importance[employee.id] = employee;
// //   }
//   // tao mot bien de luu tong gia tri quan trong
//   let totalImportance = 0;
//   // duyet qua danh sach cac nhan vien va tinh tong gia tri quan trong
//   for (let employee of employees) {
//     if (employee.id === id) {
//       totalImportance += employee.importance;
//       // duyet qua danh sach cac nhan vien duoi quyen cua nhan vien hien tai
//       for (let subordinate of employee.subordinates) {
//         // goi de quy de tinh gia tri quan trong cua nhan vien duoi quyen
//         totalImportance += GetImportance(employees, subordinate);
//       }
//     }
//   }
//   return totalImportance;
