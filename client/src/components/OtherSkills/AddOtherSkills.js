import React, {useState} from 'react'
import WysiwygEditorWithLoad from '../WysiwygEditor/WysiwygEditorWithLoad'
import CategoryContent from '../CategoryContent/CategoryContent'

function AddOtherSkills() {
  const [contentUpdateKey, setContentUpdateKey] = useState(0);

  const handleContentUpdate = () => {
    setContentUpdateKey((prevKey) => prevKey + 1); // Update-Trigger erhöhen
  };
  return (
    <div className='other-skills-component'>
        <h1>Other skills:</h1>
      <WysiwygEditorWithLoad onContentUpdate={handleContentUpdate}></WysiwygEditorWithLoad>
      <CategoryContent category='otherskills' contentUpdateKey={contentUpdateKey}></CategoryContent>
    </div>
  )
}

export default AddOtherSkills
