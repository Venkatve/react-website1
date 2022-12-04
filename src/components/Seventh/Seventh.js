import React from 'react';
import "./Seventh.css";

const Seventh = () => {
  return (
    <div className='Seventh'>
        <div className='container seven-all'>
            <div className='row'>
                <div className='col-md-6 seven-image'>
                 <img src='./seven.jpg'/>
                </div>
                <div className='col-md-6 seven-content'>
                <form className='seven-form'>
                    <div className='seven-text'>
                    GET IN TOUCH WITH <span>ATHULYA</span>
                    </div>
  <div class="mb-3">
    <input type="email" class="form-control" placeholder='enteryour name*' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" placeholder='enteryour name*' id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <input type="email" class="form-control" placeholder='enteryour name*' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
  <input class="form-control" type="file" id="formFile"/>
</div>
  <div class="mb-3">
    <input type="password" class="form-control" placeholder='enteryour name*' id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary seven-button">Submit</button>
</form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seventh