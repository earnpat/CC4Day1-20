import React from 'react';

const body = {
    margin: '20px 500px auto 500px'
  }
  const modalContent = {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    border: '1px solid #cccccc',
    borderRadius: '5px'
  }
  
  function Hw1() {
    return (
        <div style={body}>
          <div style={modalContent}>
            <div class="modal-header">
              <h4 class="modal-title">This Is Important</h4>
            </div>
            <div class="modal-body">
              <p>Here is some important text or error or somthing.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
    )
  }

export default Hw1