'use client';

import '@/styles/ProductCardComponent.css'
import Link from "next/link";

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ProductCardComponent({ product, openEditModalCallback, openRemoveModalCallback }) {
  return (
    <div className="min-w-[300px]">
      <div className="rounded-lg shadow-md bg-white dark:bg-gray-800 overflow-hidden">

        {/* Card Content */}
        <div className="p-4 flex flex-col gap-1">
          <h5 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {product.name}
          </h5>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {product.price}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {product.description}
          </p>
        </div>

        {/* Card Actions */}
        <div className="px-2 pb-2 flex items-center gap-1">

          {/* View */}
          <Link
            href={`/products/${product.id}`}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <VisibilityIcon fontSize="small" />
          </Link>

          {/* Edit */}
          <button
            onClick={(e) => { e.currentTarget.blur(); openEditModalCallback(product); }}
            className="p-2 rounded-full text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors"
          >
            <EditIcon fontSize="small" />
          </button>

          {/* Delete */}
          <button
            onClick={(e) => { e.currentTarget.blur(); openRemoveModalCallback(product); }}
            className="p-2 rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
          >
            <DeleteIcon fontSize="small" />
          </button>

        </div>
      </div>
    </div>
  );
}