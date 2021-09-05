import swal from "sweetalert2";

export const showConfirm = async(title, message, icon="warning") => {
  try {
    const confirm = await swal.fire({
      title: title,
      text: message,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update it!'
    })
  } catch (error) {
    console.log(error);
  }
}

export const succesAlert = (title, message, method="success") => {
  swal.fire(
    title,
    message,
    method
  )
}
