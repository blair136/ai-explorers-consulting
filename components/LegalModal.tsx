import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function LegalModal({ isOpen, onClose, children }: LegalModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-8">
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card border border-border rounded-2xl shadow-xl max-w-3xl w-full max-h-[85vh] overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-8 py-5 border-b border-border">
          <span className="text-sm font-semibold text-muted-foreground">Rechtliches</span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto p-8 max-h-[calc(85vh-64px)]">
          {children}
        </div>
      </div>
    </div>
  );
}
