// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { PlusCircle, Loader2 } from "lucide-react";

// export default function AddSpacePage() {
//   const router = useRouter();
//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
  
//   // Form State
//   const [formData, setFormData] = useState({
//     title: "",
//     shortDescription: "",
//     description: "",
//     price: "",
//     location: "",
//     image: "",
//   });
//   const [error, setError] = useState("");

//   // Route Authentication Protection Guard
//   useEffect(() => {
//     const token = localStorage.getItem("flexspace_auth");
//     if (token !== "authenticated") {
//       router.replace("/login");
//     } else {
//       setCheckingAuth(false);
//     }
//   }, [router]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setSubmitting(true);

//     try {
//       const res = await fetch("/api/spaces", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formData,
//           price: Number(formData.price),
//           rating: 5.0, // Default star rating rule for freshly created listings
//         }),
//       });

//       const data = await res.json();
//       if (data.success) {
//         router.push("/explore");
//       } else {
//         setError(data.error || "Failed to create workspace listing.");
//       }
//     } catch (err) {
//       setError("A network error occurred. Please verify your connection.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (checkingAuth) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-slate-50">
//         <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen pt-24 pb-12 bg-slate-50 flex items-center justify-center px-4">
//       <div className="w-full max-w-2xl bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 sm:p-8">
//         <div className="flex items-center gap-3 mb-6">
//           <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
//             <PlusCircle className="w-5 h-5" />
//           </div>
//           <div>
//             <h1 className="text-xl font-black text-slate-900 tracking-tight">List a New Workspace</h1>
//             <p className="text-xs text-slate-500">Fill in the fields below to add your space onto the marketplace ecosystem.</p>
//           </div>
//         </div>

//         {error && (
//           <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs font-semibold rounded-lg">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-1.5">Workspace Title *</label>
//             <input
//               type="text"
//               required
//               value={formData.title}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               placeholder="e.g. Premium Executive Office Suite"
//               className="w-full bg-white border border-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-600 text-slate-800 transition"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-1.5">Short Description *</label>
//             <input
//               type="text"
//               required
//               maxLength={120}
//               value={formData.shortDescription}
//               onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
//               placeholder="A high-impact single line baseline overview summarizing the area..."
//               className="w-full bg-white border border-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-600 text-slate-800 transition"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-1.5">Full Detailed Overview *</label>
//             <textarea
//               required
//               rows={4}
//               value={formData.description}
//               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//               placeholder="Provide clear technical operational specifics, workspace hours, internet capacities, amenities..."
//               className="w-full bg-white border border-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-600 text-slate-800 transition resize-none"
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-1.5">Price Per Day ($) *</label>
//               <input
//                 type="number"
//                 required
//                 min={1}
//                 value={formData.price}
//                 onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//                 placeholder="25"
//                 className="w-full bg-white border border-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-600 text-slate-800 transition"
//               />
//             </div>
//             <div>
//               <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-1.5">Location Hub City *</label>
//               <input
//                 type="text"
//                 required
//                 value={formData.location}
//                 onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//                 placeholder="e.g. Dhaka"
//                 className="w-full bg-white border border-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-600 text-slate-800 transition"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-1.5">Optional Image URL</label>
//             <input
//               type="url"
//               value={formData.image}
//               onChange={(e) => setFormData({ ...formData, image: e.target.value })}
//               placeholder="https://images.unsplash.com/... (Leaves placeholder image if empty)"
//               className="w-full bg-white border border-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-600 text-slate-800 transition"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={submitting}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white text-sm font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer mt-2"
//           >
//             {submitting ? (
//               <>
//                 <Loader2 className="w-4 h-4 animate-spin" /> Saving Workspace...
//               </>
//             ) : (
//               "Submit Workspace"
//             )}
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }

// *********************************


"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, Loader2 } from "lucide-react";

export default function AddSpacePage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    price: "",
    location: "",
    image: "",
  });
  const [error, setError] = useState("");

  // Route Authentication Protection Guard
  useEffect(() => {
    const token = localStorage.getItem("flexspace_auth");
    if (token !== "authenticated") {
      router.replace("/login");
    } else {
      setCheckingAuth(false);
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/spaces", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
          rating: 5.0, // Default star rating rule for freshly created listings
          availableDate: new Date().toISOString().split('T')[0], // 🟢 Added to clear Mongoose schema requirement schema block
        }),
      });

      const data = await res.json();
      if (data.success) {
        router.push("/explore");
      } else {
        setError(data.error || "Failed to create workspace listing.");
      }
    } catch (err) {
      setError("A network error occurred. Please verify your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-12 bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
            <PlusCircle className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">List a New Workspace</h1>
            <p className="text-xs text-slate-500">Fill in the fields below to add your space onto the marketplace ecosystem.</p>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs font-semibold rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-1.5">Workspace Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Premium Executive Office Suite"
              className="w-full bg-white border border-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-600 text-slate-800 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-1.5">Short Description *</label>
            <input
              type="text"
              required
              maxLength={120}
              value={formData.shortDescription}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              placeholder="A high-impact single line baseline overview summarizing the area..."
              className="w-full bg-white border border-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-600 text-slate-800 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-1.5">Full Detailed Overview *</label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Provide clear technical operational specifics, workspace hours, internet capacities, amenities..."
              className="w-full bg-white border border-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-600 text-slate-800 transition resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-1.5">Price Per Day ($) *</label>
              <input
                type="number"
                required
                min={1}
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="25"
                className="w-full bg-white border border-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-600 text-slate-800 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-1.5">Location Hub City *</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Dhaka"
                className="w-full bg-white border border-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-600 text-slate-800 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-1.5">Optional Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="https://images.unsplash.com/... (Leaves placeholder image if empty)"
              className="w-full bg-white border border-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-600 text-slate-800 transition"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white text-sm font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer mt-2 shadow-md shadow-indigo-600/10"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Saving Workspace...
              </>
            ) : (
              "Submit Workspace"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}