'use client';

export default function CenterPanel() {
  return (
    <div className="w-2/4 flex flex-col items-center justify-start p-4 pb-20">
      <div className="relative w-full overflow-hidden">
        {/* Background cover image */}
        <img
          src="/cover-1.jpg"
          alt="Decorative"
          className="w-[full] h-[full] rounded"
          style={{ filter: 'grayscale(100%)' }}
        />

        {/* Overlay mask image */}
        <img
          src="/ms.png" // ← put your overlay image path here
          alt="Overlay"
          className="absolute inset-0 w-full h-[full] object-contain pointer-events-none"
        />
      </div>

      <div className="text-center mt-4 text-sm border border-slate-200/50 rounded p-4 shadow-md text-red-900 italic">
        <p className="font-bold">À PROPOS DU CONCOURS DE L’IMAGE derrière la fenêtre</p>
        <p>
          Cliquez-ici pour télécharger une photo, un dessin ou autre motif Decoratif,etc.. qui apparaitra derriere la fenêtre au melieu de la page.
        </p>
      </div>

     <div className="text-center mt-4 text-sm border rounded p-4 shadow-md text-red-900 italic border-red-900/50">
        <p>
          <span className="font-bold">Cliquez-ici</span> pour consulter le score de la totalité de tous vos jeux et concours d'<span className="font-bold">ekpecto</span>  en dehours de <span className="font-bold">5 cités</span> ci-dessous qui seront notés séparément.
        </p>
      </div>
    </div>
  );
}
