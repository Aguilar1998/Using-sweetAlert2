'use client';

import Swal from 'sweetalert2';

export default function Home() {
  function clickListo() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      color: 'ea60da',
      text: 'Check the email, We send you the information to course!',
      title: '¡Excellent!',
      showConfirmButton: false,
      timer: 3500,
    });
  }
  // function name(params) {}
  return (
    <div className="layout">
      <h1>¡Web Development Course!</h1>

      <button
        onClick={clickListo}
        data-label="Register"
        className="rainbow-hover"
      >
        <span className="sp">Register</span>
      </button>
    </div>
  );
}
