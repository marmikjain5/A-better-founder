import React from 'react';
import { X } from 'lucide-react';

interface Solution {
  title: string;
  description: string;
}

interface SolutionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  solutions: Solution[];
  industry: string;
}

const SolutionsModal: React.FC<SolutionsModalProps> = ({
  isOpen,
  onClose,
  solutions = [], // Provide default empty array
  industry
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-neutral-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-primary-800">
              {industry} Solutions
            </h2>
            <button
              onClick={onClose}
              className="text-neutral-500 hover:text-neutral-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid gap-6">
            {solutions && solutions.length > 0 ? (
              solutions.map((solution, index) => (
                <div key={index} className="bg-neutral-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-primary-800">
                    {solution.title}
                  </h3>
                  <p className="text-neutral-700">
                    {solution.description}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center text-neutral-600">
                No solutions available at this time.
              </div>
            )}
          </div>
        </div>
        
        <div className="p-6 border-t border-neutral-200 bg-neutral-50">
          <p className="text-center text-neutral-600">
            Contact us to learn more 
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionsModal;