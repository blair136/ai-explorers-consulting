import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function LegalModal({ isOpen, onClose, children }: LegalModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 pb-10 px-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" onClick={onClose} />
      <div className="relative bg-card rounded-2xl border border-border max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl shadow-black/50">
        <div className="sticky top-0 bg-card/95 backdrop-blur-md border-b border-border flex items-center justify-between px-6 py-4 z-10">
          <h2 className="text-lg font-bold text-foreground">Rechtliches</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
