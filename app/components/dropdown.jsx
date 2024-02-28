'use client'
import React, { useState, useEffect, useRef } from 'react';

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const options = [
    { imageSrc: '/musica.svg', label: 'Crear una nueva lista'},
    {  imageSrc: '/carpeta.svg' ,label: 'Crear una carpeta de lista' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <img src="/plus.svg" alt="" width={25} />
      </div>
      {isDropdownOpen && (
        <div className="dropdown-options text-white">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option flex w-auto"
              onClick={() => handleOptionClick(option)}
            >
              <img src={option.imageSrc} alt={`Imagen de ${option.label}`} />
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
