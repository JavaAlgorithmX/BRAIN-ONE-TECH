import studentData from "../../staticUiData/studentData";

export default function Students(){

    const getRowColor = (paymentStatus) => {
        switch (paymentStatus) {
          case "done":
            return "bg-green-100";
          case "partial":
            return "bg-yellow-100";
          default:
            return "bg-red-100";
        }
      };

    return(
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr className=" bg-gray-50">
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Student Id
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                First Name
              </th>
              <th scope="col" class="px-6 py-3">
                Last Name
              </th>
              <th scope="col" class="px-6 py-3  bg-gray-50">
                Payment Status
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((data, index) => (
              <tr 
            //   class="border-b border-gray-200 dark:border-gray-700"
            class={`border-b border-gray-200 dark:border-gray-700 ${getRowColor(
                data.paymentStatus
              )}`}
              
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white dark:bg-gray-800"
                >
                  {data.id}
                </th>
                <td class="px-2 py-2 flex items-center justify-center ">
                {data.email}
                </td>
                <td class="px-6 py-4 dark:bg-gray-800">
                  {data.firstName}
                </td>
                <td class="px-6 py-4">{data.lastName}</td>
                <td class="px-6 py-4  ">{data.paymentStatus}</td>
                <td class="px-6 py-4"><button 
                // onClick={() => openEditModal(data)} 
                className="text-blue-500">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
           
        </div>
    );

}