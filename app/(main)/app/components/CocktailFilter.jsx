import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { FaCheck } from "react-icons/fa";

const customCheckboxStyles = {
  container: 'flex justify-between items-center mb-2',
  label: 'text-sm',
  checkboxContainer: 'relative',
  checkbox: 'absolute h-0 w-0 opacity-0',
  customCheckbox: 'h-5 w-5 border-2 border-gray-300 rounded bg-white flex items-center justify-center',
  customCheckboxChecked: 'h-5 w-5 border-2 border-orange-400 rounded bg-orange-400 flex items-center justify-center',
  checkmark: 'text-white p-0.5',
  sortCheckmark: 'text-orange-400 p-0.5',
  labelChecked: 'text-sm text-orange-500',
};

const CocktailFilter = ({ isOpen, onRequestClose, filters, setFilters, filteredCount }) => {
  useEffect(() => {
    if (isOpen) {
      Modal.setAppElement('#__next');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCheckboxChange = (option, action) => {
    const currentSelections = filters[action.name] || [];
    const isSelected = currentSelections.some(
      (selection) => selection.value === option.value
    );

    setFilters((prevFilters) => ({
      ...prevFilters,
      [action.name]: isSelected
        ? currentSelections.filter((selection) => selection.value !== option.value)
        : [option],
    }));
  };

  const handleMultiCheckboxChange = (option, action) => {
    const currentSelections = filters[action.name] || [];
    const isSelected = currentSelections.some(
      (selection) => selection.value === option.value
    );

    setFilters((prevFilters) => ({
      ...prevFilters,
      [action.name]: isSelected
        ? currentSelections.filter((selection) => selection.value !== option.value)
        : [...currentSelections, option],
    }));
  };

  const handleClearAll = () => {
    setFilters({
      ...filters,
      sortBy: [{ value: 'name', label: 'Name' }],
      baseSpirit: [],
      cocktailType: [],
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      contentLabel="Cocktail Filter"
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4 overflow-hidden"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      ariaHideApp={false}
    >
      <div className="flex flex-col h-full max-h-[60vh]">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={onRequestClose}
            className="text-orange-400 hover:text-orange-500"
          >
            Cancel
          </button>
          <h2 className="text-xl font-semibold">Filters</h2>
          <button
            onClick={handleClearAll}
            className="text-orange-400 hover:text-orange-500"
          >
            Clear All
          </button>
        </div>

        <div className="overflow-y-auto flex-grow mb-4 pr-2">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Sort</h3>
            {[
              { value: 'name', label: 'Name' },
              { value: 'date', label: 'Date' },
            ].map((option) => (
              <label key={option.value} className={`${customCheckboxStyles.container} cursor-pointer`}>
                <span className={filters.sortBy?.some(
                  (selection) => selection.value === option.value
                ) ? customCheckboxStyles.labelChecked : customCheckboxStyles.label}>{option.label}</span>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={
                    filters.sortBy?.some(
                      (selection) => selection.value === option.value
                    ) || false
                  }
                  onChange={() => handleCheckboxChange(option, { name: 'sortBy' })}
                />
                <FaCheck className={filters.sortBy?.some(
                  (selection) => selection.value === option.value
                ) ? customCheckboxStyles.sortCheckmark : "text-transparent"} />
              </label>
            ))}
          </div>
          <hr className="my-4 border-gray-200" />

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Base Spirit</h3>
            {[
              { value: 'vodka', label: 'Vodka' },
              { value: 'gin', label: 'Gin' },
              { value: 'rum', label: 'Rum' },
              // Add more options
            ].map((option) => (
              <label key={option.value} className={`${customCheckboxStyles.container} cursor-pointer`}>
                <span className={filters.baseSpirit?.some(
                  (selection) => selection.value === option.value
                ) ? customCheckboxStyles.labelChecked : customCheckboxStyles.label}>{option.label}</span>
                <div className={customCheckboxStyles.checkboxContainer}>
                  <input
                    type="checkbox"
                    className={customCheckboxStyles.checkbox}
                    checked={
                      filters.baseSpirit?.some(
                        (selection) => selection.value === option.value
                      ) || false
                    }
                    onChange={() => handleMultiCheckboxChange(option, { name: 'baseSpirit' })}
                  />
                  <div className={filters.baseSpirit?.some(
                    (selection) => selection.value === option.value
                  ) ? customCheckboxStyles.customCheckboxChecked : customCheckboxStyles.customCheckbox}>
                    {filters.baseSpirit?.some(
                      (selection) => selection.value === option.value
                    ) && <FaCheck className={customCheckboxStyles.checkmark} />}
                  </div>
                </div>
              </label>
            ))}
          </div>
          <hr className="my-4 border-gray-200" />

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Cocktail Type</h3>
            {[
              { value: 'cocktail', label: 'Cocktail' },
              { value: 'ordinary drink', label: 'Ordinary Drink' },
              { value: 'shot', label: 'Shot' },
              { value: 'punch / party drink', label: 'Party Drink' },
              { value: 'beer', label: 'Beer' },
            
              // Add more options if needed
            ].map((option) => (
              <label key={option.value} className={`${customCheckboxStyles.container} cursor-pointer`}>
                <span className={filters.cocktailType?.some(
                  (selection) => selection.value === option.value
                ) ? customCheckboxStyles.labelChecked : customCheckboxStyles.label}>{option.label}</span>
                <div className={customCheckboxStyles.checkboxContainer}>
                  <input
                    type="checkbox"
                    className={customCheckboxStyles.checkbox}
                    checked={
                      filters.cocktailType?.some(
                        (selection) => selection.value === option.value
                      ) || false
                    }
                    onChange={() => handleMultiCheckboxChange(option, { name: 'cocktailType' })}
                  />
                  <div className={filters.cocktailType?.some(
                    (selection) => selection.value === option.value
                  ) ? customCheckboxStyles.customCheckboxChecked : customCheckboxStyles.customCheckbox}>
                    {filters.cocktailType?.some(
                      (selection) => selection.value === option.value
                    ) && <FaCheck className={customCheckboxStyles.checkmark} />}
                  </div>
                </div>
              </label>
            ))}
          </div>
          <hr className="my-4 border-gray-200" />
        </div>

        <div className="mt-0">
          <button
            onClick={onRequestClose}
            className="w-full bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500"
          >
            Show ({filteredCount})
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CocktailFilter;
