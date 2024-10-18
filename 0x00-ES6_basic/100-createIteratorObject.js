export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).flat(); // Flatten the array of employees across departments

  return {
    *[Symbol.iterator]() {
      for (const employee of allEmployees) {
        yield employee; // Use yield to return each employee one by one
      }
    },
  };
}
