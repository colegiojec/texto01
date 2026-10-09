import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import {
  Smartphone,
  Download,
  CheckCircle2,
  ExternalLink,
  Copy,
  X,
  Share2,
  Sparkles,
  Zap,
  Info,
  ShieldCheck,
  Check,
  Layers,
  ArrowRight
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onDownloadInteractiveHtml: () => void;
}

export const ApkInstallModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onDownloadInteractiveHtml,
}) => {
  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [installTriggered, setInstallTriggered] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const pwaBuilderUrl = `https://www.pwabuilder.com/reportcard?site=${encodeURIComponent(currentUrl)}`;

  const handleNativeInstall = async () => {
    const success = await install();
    if (success) {
      setInstallTriggered(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-3 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-700 via-teal-800 to-slate-900 px-5 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-xs text-white shadow-xs">
              <Smartphone className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black tracking-tight">
                  Instalar Aplicación Android (APK)
                </h3>
                <span className="rounded bg-emerald-400 px-2 py-0.5 text-[10px] font-black text-slate-950 uppercase">
                  PWA / WebAPK
                </span>
              </div>
              <p className="text-xs text-emerald-100">
                Lleva el Cuaderno Interactivo como aplicación móvil nativa a teléfonos y tablets.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-lg p-1.5 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-4 overflow-y-auto">
          {/* Notification if already installed */}
          {isInstalled && (
            <div className="rounded-xl bg-emerald-50 border border-emerald-300 p-3.5 flex items-center gap-3 text-emerald-900 text-xs font-semibold">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="font-bold text-emerald-950">¡Aplicación ya instalada!</p>
                <p className="text-[11px] text-emerald-700 mt-0.5">
                  Esta aplicación ya se encuentra ejecutándose en modo nativo en tu dispositivo.
                </p>
              </div>
            </div>
          )}

          {/* Method 1: Instant Native Install on Android / Chrome */}
          <div className="rounded-2xl border-2 border-emerald-500 bg-emerald-50/60 p-4 relative overflow-hidden">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white font-black text-xs">
                  1
                </span>
                <h4 className="text-sm font-black text-emerald-950">
                  Instalación Directa en Android (Recomendada)
                </h4>
              </div>
              <span className="rounded-full bg-emerald-200 px-2.5 py-0.5 text-[10px] font-black text-emerald-800">
                Oficial de Google
              </span>
            </div>

            <p className="text-xs text-emerald-900 leading-relaxed mb-3">
              Android utiliza la tecnología <strong>WebAPK</strong> para generar e instalar un APK seguro directamente en tu celular, con ícono en el menú de aplicaciones, pantalla completa y funcionamiento <strong>100% offline</strong> sin gastar datos.
            </p>

            {isInstallable ? (
              <button
                type="button"
                onClick={handleNativeInstall}
                className="cursor-pointer w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 py-3 text-xs font-black text-white hover:from-emerald-700 hover:to-teal-800 shadow-md transition-all active:scale-98"
              >
                <Smartphone className="w-4 h-4" />
                {installTriggered ? 'Instalando en tu Android...' : '📲 Instalar Aplicación Ahora en este Celular'}
              </button>
            ) : (
              <div className="rounded-xl bg-white border border-emerald-300 p-3 text-xs space-y-2 text-slate-700">
                <p className="font-bold text-emerald-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  Cómo instalar desde Google Chrome en tu celular:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-600 font-medium">
                  <li>Abre esta página en el navegador <strong>Google Chrome</strong> de tu teléfono.</li>
                  <li>Toca el menú de <strong>tres puntos (⋮)</strong> en la esquina superior derecha.</li>
                  <li>Selecciona la opción <strong>«Instalar aplicación»</strong> o <strong>«Agregar a la pantalla principal»</strong>.</li>
                  <li>¡Listo! El sistema creará el icono de la aplicación en tu celular.</li>
                </ol>
              </div>
            )}
          </div>

          {/* Method 2: Generate Signed APK via PWABuilder (Official Microsoft/Google tool) */}
          <div className="rounded-2xl border border-slate-300 bg-white p-4 space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-white font-black text-xs">
                  2
                </span>
                <h4 className="text-sm font-black text-slate-900">
                  Generar Archivo .APK para distribuir por USB / WhatsApp
                </h4>
              </div>
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-800">
                Archivo .APK
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Si eres docente y deseas un archivo instalador <strong>.apk</strong> para instalarlo en las tablets de tus alumnos mediante cable USB, memoria pendrive o Bluetooth:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={pwaBuilderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 px-3 text-xs font-bold text-white hover:bg-slate-800 shadow-xs text-center transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                Generar APK en PWABuilder
              </a>

              <button
                type="button"
                onClick={handleCopyUrl}
                className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-50 py-2.5 px-3 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {copiedUrl ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>¡Enlace Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copiar Enlace de la App</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Method 3: Download Single HTML File (Zero Installation, 100% Offline) */}
          <div className="rounded-2xl border border-amber-300 bg-amber-50/50 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-white font-black text-xs">
                3
              </span>
              <h4 className="text-sm font-black text-amber-950">
                Opción sin instalación: Guardar en HTML Interactivo
              </h4>
            </div>
            <p className="text-xs text-amber-900 leading-relaxed">
              Descarga el archivo <strong>.html autónomo</strong>. Puedes transferirlo por WhatsApp o Bluetooth a cualquier celular o computadora; al tocarlo, se abre como una app completa sin necesidad de instalar nada ni tener internet.
            </p>
            <button
              type="button"
              onClick={() => {
                onClose();
                onDownloadInteractiveHtml();
              }}
              className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-red-600 px-4 py-2.5 text-xs font-black text-white hover:brightness-110 shadow-xs"
            >
              <Download className="w-4 h-4" />
              Descargar Archivo HTML Interactivo
            </button>
          </div>

          {/* Educational notice for rural connectivity */}
          <div className="flex items-start gap-2.5 text-[11px] text-slate-600 bg-slate-100 rounded-xl p-3 border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p>
              <strong>Garantía Pedagógica Rural:</strong> Esta aplicación cuenta con Service Worker activo y Web App Manifest integrado según los estándares del Ministerio de Educación (CNEB) y W3C, garantizando que todo el material de las 4 fichas funcione sin señal telefónica ni internet.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-200 bg-slate-50 px-5 py-3.5 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-xl bg-slate-800 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-700"
          >
            Entendido / Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
