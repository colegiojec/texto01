import React from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Smartphone, Download, CheckCircle2 } from 'lucide-react';

interface Props {
  onOpenApkModal: () => void;
}

export const PWAInstallButton: React.FC<Props> = ({ onOpenApkModal }) => {
  const { isInstallable, isInstalled, install } = usePWAInstall();

  // If already installed in standalone mode, show a discreet badge or allow opening APK center
  if (isInstalled) {
    return (
      <button
        type="button"
        onClick={onOpenApkModal}
        className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 text-[11px] font-bold text-emerald-300 hover:bg-emerald-900/60 transition-colors"
        title="App instalada en este dispositivo. Abre opciones de APK."
      >
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        <span className="hidden sm:inline">App Instalada</span>
      </button>
    );
  }

  // Fast click: If native browser install is ready, install directly, else open the APK modal
  const handleClick = async () => {
    if (isInstallable) {
      const accepted = await install();
      if (!accepted) {
        onOpenApkModal();
      }
    } else {
      onOpenApkModal();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-700 px-3 py-1.5 text-xs font-black text-white hover:from-emerald-700 hover:to-teal-800 shadow-sm transition-all active:scale-95 animate-pulse hover:animate-none"
      title="Instalar esta aplicación como APK en tu teléfono Android o computadora"
    >
      <Smartphone className="w-3.5 h-3.5 text-emerald-200" />
      <span>Instalar APK / App</span>
    </button>
  );
};
