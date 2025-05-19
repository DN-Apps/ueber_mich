import React, {useState} from 'react'
import WysiwygEditorWithLoad from '../WysiwygEditor/WysiwygEditorWithLoad'
import './TechSkills.css'
import CategoryContent from '../CategoryContent/CategoryContent';

function AddTechSkills() {

  const [contentUpdateKey, setContentUpdateKey] = useState(0);

  const handleContentUpdate = () => {
    setContentUpdateKey((prevKey) => prevKey + 1); // Update-Trigger erhöhen
  };

  return (
    <div className='tech-skills-component'>
        <h1>Tech sklills: </h1>
        <WysiwygEditorWithLoad onContentUpdate={handleContentUpdate}></WysiwygEditorWithLoad>
        <CategoryContent category="techskills" contentUpdateKey={contentUpdateKey} />
      
    </div>
  )
}

export default AddTechSkills
