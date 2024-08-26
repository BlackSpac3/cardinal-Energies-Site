import axios from "axios";

export const filterPaginationData = async ({
  create_new_arr = true,
  state,
  data,
  page,
  countRoute,
  data_to_send = {},
}) => {
  const url = "http://localhost:4000";
  let obj;
  if (state != null && !create_new_arr) {
    obj = { ...state, results: [...state.results, ...data], page: page };
  } else {
    await axios
      .post(`${url}${countRoute}`, data_to_send)
      .then(({ data: { totalDocs } }) => {
        obj = { results: data, page: page, totalDocs };
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return obj;
};
