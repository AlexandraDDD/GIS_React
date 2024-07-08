import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { GeoObject } from '../../models/geoObject';
import './sidebar.css'


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedObject?: GeoObject
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, selectedObject }) => {
  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar__header">
      <h5 className="sidebar__title">Информация об объекте</h5>
        <button className="sidebar__close-button" onClick={onClose}>
          <span className="visually-hidden">Close</span>
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Menu / Close_LG">
              <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </svg>

        </button>
       
      </div>
      <div className="sidebar__body">
        {selectedObject && (<> 
        <h5>name: {selectedObject.name}</h5> 
        <p>id: {selectedObject.id}</p> 
        <p>someinfo</p> </>)}
      </div>
    </div>

    /*    <Offcanvas show={isOpen} onHide={onClose} placement="end" className="sidebar">
         <Offcanvas.Header closeButton>
           <Offcanvas.Title>Информация об объекте</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
           {selectedObject && (
             <>
               <h5>{selectedObject.name}</h5>
               <p>{selectedObject.id}</p>
               <p>someinfo</p>
             </>
           )}
         </Offcanvas.Body>
       </Offcanvas> */
  );
};

export default Sidebar;