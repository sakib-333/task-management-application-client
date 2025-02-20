import Swal from "sweetalert2";

export const errorAlert = (msg: string) => {
  Swal.fire({
    title: "Error!",
    text: msg,
    icon: "error",
  });
};
