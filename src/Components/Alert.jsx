import React from 'react';

function Alert(props){
  return(
  <>
<div class="alert alert-success d-flex align-items-center" role="alert">
  <strong>{props.alert}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  
  </div>
  </>
  
      );

}
export default Alert;