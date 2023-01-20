
import React from 'react'

function Popup(props) {
  return (
    <>
        <div class="toast position-fixed bottom-0 end-0 m-3" id='popup' role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="https://cdn-icons-png.flaticon.com/512/3476/3476457.png" height="25" width='25' class="rounded me-2" alt="..."/>
            <strong class="me-auto">lokesh</strong>
            {/* <small class="text-muted">11 mins ago</small> */}
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            <strong>{props.message}</strong>
          </div>
        </div>
    </>
  )
}

export default Popup