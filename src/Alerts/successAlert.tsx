import Swal from "sweetalert2";

export const successAlert = (msg: string) => {
  Swal.fire({
    title: "Well done!",
    text: msg,
    icon: "success",
  });
};
