import { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";

const Tooltip = () => {  
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = (e, bool) => {
    e.preventDefault();
    if (bool) {
      setIsHovering(bool);
      return;
    }
    setIsHovering(false);
    return;
  }

  return (
    <div className="header-icon">
      <BsQuestionCircle
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseLeave={(e) => handleHover(e, false)}
      />

    {isHovering && 
      <div className="tooltip" 
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        <h4>Tips</h4>
        <ul>
          <li>Hover over any section to show that section's edit button</li>
          <li>While editing a section you can delete it or change the content</li>
          <li>You cannot save some sections if there are any unsaved edits</li>
          <li>You can delete unwanted or irrelevant sections</li>
          <li>You can omit any input fields that you don't need</li>
          <li>Buttons, scrollbars, and deleted sections will not show up when printing</li>
        </ul>
        <h4>For Best Results</h4>
        <ul>
          <li>Use a desktop computer</li>
          <li>Fit all information onto a single page</li>
          <li>Close all forms before clicking Print / Save button</li>
          <li>Save all sections before clicking Print / Save button</li>
        </ul>
      </div>
    }
  </div>)
}

export default Tooltip;