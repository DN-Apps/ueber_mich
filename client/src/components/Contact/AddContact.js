import React from 'react'
import WysiwygEditorWithLoad from '../WysiwygEditor/WysiwygEditorWithLoad'

function AddContact() {
  return (
    <div>
        <h1>Contacts:</h1>
        <WysiwygEditorWithLoad contentId={1}></WysiwygEditorWithLoad>
      
    </div>
  )
}

export default AddContact
