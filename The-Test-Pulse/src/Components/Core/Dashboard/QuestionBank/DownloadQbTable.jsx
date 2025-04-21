import React from "react";

function DownloadQbTable({ question }) {
  // console.log(question, "questions");
  function isUrl(str) {
    const urlRegex =
      /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]*[-A-Za-z0-9+&@#/%=~_|]$/;
    return urlRegex.test(str);
  }

  return (
    <table className=" w-full">
      <thead>
        <tr>
          <th>S no.</th>
          <th>Question</th>
        </tr>
      </thead>
      <tbody>
        {question &&
          question.map((key,index) => (
            <tr key={key._id}>
              <td>{index+1}</td>
              <td>
                {isUrl(key.questionText) ? (
                  <img
                    src={key.questionText}
                    className="object-fill h-44"
                    alt="Question Image"
                  />
                ) : (
                  key.questionText
                )}
              </td>
             
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default DownloadQbTable;
