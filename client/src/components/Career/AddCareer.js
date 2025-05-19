import React, {useState} from 'react'
import WysiwygEditorWithLoad from '../WysiwygEditor/WysiwygEditorWithLoad'
import CategoryContent from '../CategoryContent/CategoryContent'
import './Career.css'

function AddCareer() {
  const [contentUpdateKey, setContentUpdateKey] = useState(0);

  const handleContentUpdate = () => {
    setContentUpdateKey((prevKey) => prevKey + 1); // Update-Trigger erhöhen
  };
  return (
    <div className='career-components'>
        <h1>Career: </h1>
        <WysiwygEditorWithLoad onContentUpdate={handleContentUpdate}></WysiwygEditorWithLoad>
        <CategoryContent category='career' contentUpdateKey={contentUpdateKey}></CategoryContent>
      
    </div>
  )
}

export default AddCareer
