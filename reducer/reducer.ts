const initState = {
  data: [],
};
const GENEL_KULTUR_KATEGORI = "GENEL_KULTUR_KATEGORI";
const COGRAFYA_KATEGORI = "COGRAFYA_KATEGORI";
const BILIM_KATEGORI = "BILIM_KATEGORI";
const MEDENIYET_KATEGORI = "MEDENIYET_KATEGORI";
const SPOR_KATEGORI = "SPOR_KATEGORI";
const SANAT_KATEGORI = "SANAT_KATEGORI";
const TARIH_KATEGORI = "TARIH_KATEGORI";
const CHANGE_QUESTION = "CHANGE_QUESTION";

export const reducer = (state: any = initState, action: any) => {
  switch (action.type) {
    case GENEL_KULTUR_KATEGORI:
      return {
        ...initState.data,
        data: action.state[0]["genel_kültür"],
      };
    case COGRAFYA_KATEGORI:
      return {
        ...initState.data,
        data: action.state[0]["coğrafya"],
      };
    case BILIM_KATEGORI:
      return {
        ...initState.data,
        data: action.state[0]["bilim"],
      };
    case MEDENIYET_KATEGORI:
      return {
        ...initState.data,
        data: action.state[0]["medeniyet"],
      };
    case SPOR_KATEGORI:
      return {
        ...initState.data,
        data: action.state[0]["spor"],
      };
    case SANAT_KATEGORI:
      return {
        ...initState.data,
        data: action.state[0]["sanat"],
      };
    case TARIH_KATEGORI:
      return {
        ...initState.data,
        data: action.state[0]["tarih"],
      };
    default:
      return state;
  }
};

// switch (action.type) {
//   case GENEL_KULTUR_KATEGORI:
//     return {
//       ...initState.data,
//       data: action.state[0]["genel_kültür"][initState.questionCounter],
//       questionCounter: action.action,
//     };
//   case COGRAFYA_KATEGORI:
//     return {
//       ...initState.data,
//       data: action.state[0]["coğrafya"][0],
//     };
//   case BILIM_KATEGORI:
//     return {
//       ...initState.data,
//       data: action.state[0]["bilim"][0],
//     };
//   case MEDENIYET_KATEGORI:
//     return {
//       ...initState.data,
//       data: action.state[0]["medeniyet"][0],
//     };
//   case SPOR_KATEGORI:
//     return {
//       ...initState.data,
//       data: action.state[0]["spor"][0],
//     };
//   case SANAT_KATEGORI:
//     return {
//       ...initState.data,
//       data: action.state[0]["sanat"][0],
//     };
//   case TARIH_KATEGORI:
//     return {
//       ...initState.data,
//       data: action.state[0]["tarih"][0],
//     };
//   default:
//     return state;
