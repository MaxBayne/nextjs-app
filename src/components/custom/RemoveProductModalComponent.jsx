'use client';

import '@/styles/NewProductModalComponent.css'

import DeleteIcon from '@mui/icons-material/Delete';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

export default function RemoveProductModalComponent({ openModalState, closeModalCallBack, productForRemove, onValidRemoveProductCallBack }) {

  if (!productForRemove) return null;
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
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Are you sure you want to delete <span className="text-red-500">({productForRemove.name})</span>?
          </h2>
        </div>

        {/* Content */}
        <div className="px-6 py-3">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Press <strong>Yes</strong> to delete, or <strong>No</strong> to cancel.
          </p>
        </div>

        {/* Actions */}
        <div className="px-6 py-3 flex justify-end gap-2 border-t border-gray-200 dark:border-gray-700">

          <button
            type="button"
            onClick={closeModalCallBack}
            className="flex items-center gap-1 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            <DisabledByDefaultIcon fontSize="small" />
            No
          </button>

          <button
            type="button"
            onClick={() => onValidRemoveProductCallBack(productForRemove)}
            className="flex items-center gap-1 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-md transition-colors"
          >
            <DeleteIcon fontSize="small" />
            Yes
          </button>

        </div>
      </div>
    </div>
  );
}