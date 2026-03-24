'use client';

import '@/styles/NewProductModalComponent.css'
import * as React from 'react';

import SaveIcon from '@mui/icons-material/Save';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

export default function EditProductModalComponent({ openModalState, closeModalCallBack, productForEdit, onValidEditProductCallBack }) {

  const [formInputs, setFormInputs] = React.useState({ id: '', name: '', price: '', description: '' });

  React.useEffect(() => {
    if (productForEdit) {
      setFormInputs({
        id: productForEdit.id,
        name: productForEdit.name,
        price: productForEdit.price,
        description: productForEdit.description,
      });
    }
  }, [productForEdit]);

  function handleFormSubmit(e) {
    e.preventDefault();
    const modifiedProduct = { ...formInputs };
    onValidEditProductCallBack(modifiedProduct);
  }

  if (!openModalState) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={closeModalCallBack}
    >
      {/* Modal Panel */}
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-sm mx-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Title */}
        <div className="px-6 pt-5 pb-2">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Edit Product</h2>
        </div>

        {/* Content */}
        <div className="px-6 py-3 border-t border-b border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Fill Form Below To Edit Product
          </p>

          <form id="frm_edit_product" onSubmit={handleFormSubmit} className="flex flex-col gap-3">

            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoFocus
                value={formInputs.name}
                onChange={(e) => setFormInputs({ ...formInputs, name: e.target.value })}
                className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="price" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Price <span className="text-red-500">*</span>
              </label>
              <input
                id="price"
                name="price"
                type="number"
                required
                value={formInputs.price}
                onChange={(e) => setFormInputs({ ...formInputs, price: e.target.value })}
                className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                value={formInputs.description}
                onChange={(e) => setFormInputs({ ...formInputs, description: e.target.value })}
                className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

          </form>
        </div>

        {/* Actions */}
        <div className="px-6 py-3 flex justify-end gap-2">
          <button
            type="button"
            onClick={closeModalCallBack}
            className="flex items-center gap-1 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            <DisabledByDefaultIcon fontSize="small" />
            Cancel
          </button>
          <button
            type="submit"
            form="frm_edit_product"
            className="flex items-center gap-1 px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md transition-colors"
          >
            <SaveIcon fontSize="small" />
            Update
          </button>
        </div>

      </div>
    </div>
  );
}