// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Eye, Trash2, LayoutDashboard, Loader2 } from "lucide-react";

// interface Workspace {
//   _id: string;
//   title: string;
//   price: number;
//   location: string;
// }

// export default function ManageSpacesPage() {
//   const router = useRouter();
//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [spaces, setSpaces] = useState<Workspace[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Auth Guard verification logic
//   useEffect(() => {
//     const token = localStorage.getItem("flexspace_auth");
//     if (token !== "authenticated") {
//       router.replace("/login");
//     } else {
//       setCheckingAuth(false);
//       fetchUserSpaces();
//     }
//   }, [router]);

//   const fetchUserSpaces = async () => {
//     try {
//       const res = await fetch("/api/spaces");
//       if (res.ok) {
//         const data = await res.json();
//         setSpaces(Array.isArray(data) ? data : data.data || data.spaces || []);
//       }
//     } catch (err) {
//       console.error("Management array loading failed:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you certain you want to permanently delete this listing asset?")) return;

//     try {
//       const res = await fetch(`/api/spaces/${id}`, { method: "DELETE" });
//       if (res.ok) {
//         // Instant state updates to drop row seamlessly out of client dashboard view
//         setSpaces(spaces.filter((space) => space._id !== id));
//       } else {
//         alert("Deletion operation failed on the server.");
//       }
//     } catch (err) {
//       alert("A network problem interrupted the deletion request.");
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
//     <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
//             <LayoutDashboard className="w-5 h-5" />
//           </div>
//           <div>
//             <h1 className="text-2xl font-black text-slate-900 tracking-tight">Manage Workspaces</h1>
//             <p className="text-xs text-slate-500">Overview management system to delete or view your live listed inventory properties.</p>
//           </div>
//         </div>
//       </div>

//       {/* Responsive Custom Data Table Wrapper */}
//       <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse min-w-[600px]">
//             <thead>
//               <tr className="bg-slate-50/70 border-b border-slate-200/60 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
//                 <th className="py-4 px-6">Workspace Details</th>
//                 <th className="py-4 px-6">Location</th>
//                 <th className="py-4 px-6">Pricing</th>
//                 <th className="py-4 px-6 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
//               {loading ? (
//                 // Table Row Skeleton Placeholders
//                 Array.from({ length: 4 }).map((_, idx) => (
//                   <tr key={idx} className="animate-pulse">
//                     <td className="py-4 px-6"><div className="h-4 bg-slate-200 rounded w-2/3" /></td>
//                     <td className="py-4 px-6"><div className="h-4 bg-slate-200 rounded w-1/3" /></td>
//                     <td className="py-4 px-6"><div className="h-4 bg-slate-200 rounded w-1/4" /></td>
//                     <td className="py-4 px-6"><div className="h-8 bg-slate-200 rounded w-20 ml-auto" /></td>
//                   </tr>
//                 ))
//               ) : spaces.length > 0 ? (
//                 spaces.map((space) => (
//                   <tr key={space._id} className="hover:bg-slate-50/50 transition">
//                     <td className="py-4 px-6 font-semibold text-slate-900">{space.title}</td>
//                     <td className="py-4 px-6 text-slate-500">📍 {space.location}</td>
//                     <td className="py-4 px-6 font-bold text-indigo-600">${space.price}/day</td>
//                     <td className="py-4 px-6 text-right">
//                       <div className="flex items-center justify-end gap-2">
//                         <button
//                           onClick={() => router.push(`/spaces/${space._id}`)}
//                           className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition cursor-pointer"
//                           title="View Details"
//                         >
//                           <Eye className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(space._id)}
//                           className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
//                           title="Delete Property"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={4} className="py-12 text-center text-slate-400 font-medium">
//                     No listed workspace assets found. Try adding a brand new space card!
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </main>
//   );
// }

// *********************************

// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Eye, Trash2, LayoutDashboard, Loader2 } from "lucide-react";

// interface Workspace {
//   _id: string;
//   title: string;
//   price: number;
//   location: string;
// }

// export default function ManageSpacesPage() {
//   const router = useRouter();
//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [spaces, setSpaces] = useState<Workspace[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Auth Guard verification logic
//   useEffect(() => {
//     const token = localStorage.getItem("flexspace_auth");
//     if (token !== "authenticated") {
//       router.replace("/login");
//     } else {
//       setCheckingAuth(false);
//       fetchUserSpaces();
//     }
//   }, [router]);

//   const fetchUserSpaces = async () => {
//     try {
//       // 🟢 limit=all parameter requests the database to return all listing items at once
//       const res = await fetch("/api/spaces?limit=all");
//       if (res.ok) {
//         const data = await res.json();
//         setSpaces(Array.isArray(data) ? data : data.data || data.spaces || []);
//       }
//     } catch (err) {
//       console.error("Management array loading failed:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you certain you want to permanently delete this listing asset?")) return;

//     try {
//       const res = await fetch(`/api/spaces/${id}`, { method: "DELETE" });
//       if (res.ok) {
//         // Instant state updates to drop row seamlessly out of client dashboard view
//         setSpaces(spaces.filter((space) => space._id !== id));
//       } else {
//         alert("Deletion operation failed on the server.");
//       }
//     } catch (err) {
//       alert("A network problem interrupted the deletion request.");
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
//     <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
//             <LayoutDashboard className="w-5 h-5" />
//           </div>
//           <div>
//             <h1 className="text-2xl font-black text-slate-900 tracking-tight">Manage Workspaces</h1>
//             <p className="text-xs text-slate-500">Overview management system to delete or view your live listed inventory properties.</p>
//           </div>
//         </div>
//       </div>

//       {/* Responsive Custom Data Table Wrapper */}
//       <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse min-w-[600px]">
//             <thead>
//               <tr className="bg-slate-50/70 border-b border-slate-200/60 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
//                 <th className="py-4 px-6">Workspace Details</th>
//                 <th className="py-4 px-6">Location</th>
//                 <th className="py-4 px-6">Pricing</th>
//                 <th className="py-4 px-6 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
//               {loading ? (
//                 // Table Row Skeleton Placeholders
//                 Array.from({ length: 4 }).map((_, idx) => (
//                   <tr key={idx} className="animate-pulse">
//                     <td className="py-4 px-6"><div className="h-4 bg-slate-200 rounded w-2/3" /></td>
//                     <td className="py-4 px-6"><div className="h-4 bg-slate-200 rounded w-1/3" /></td>
//                     <td className="py-4 px-6"><div className="h-4 bg-slate-200 rounded w-1/4" /></td>
//                     <td className="py-4 px-6"><div className="h-8 bg-slate-200 rounded w-20 ml-auto" /></td>
//                   </tr>
//                 ))
//               ) : spaces.length > 0 ? (
//                 spaces.map((space) => (
//                   <tr key={space._id} className="hover:bg-slate-50/50 transition">
//                     <td className="py-4 px-6 font-semibold text-slate-900">{space.title}</td>
//                     <td className="py-4 px-6 text-slate-500">📍 {space.location}</td>
//                     <td className="py-4 px-6 font-bold text-indigo-600">${space.price}/day</td>
//                     <td className="py-4 px-6 text-right">
//                       <div className="flex items-center justify-end gap-2">
//                         <button
//                           onClick={() => router.push(`/spaces/${space._id}`)}
//                           className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition cursor-pointer"
//                           title="View Details"
//                         >
//                           <Eye className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(space._id)}
//                           className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
//                           title="Delete Property"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={4} className="py-12 text-center text-slate-400 font-medium">
//                     No listed workspace assets found. Try adding a brand new space card!
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </main>
//   );
// }

// ************************************

// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Eye, Trash2, LayoutDashboard, Loader2 } from "lucide-react";

// interface Workspace {
//   _id: string;
//   title: string;
//   price: number;
//   location: string;
// }

// export default function ManageSpacesPage() {
//   const router = useRouter();
//   const [checkingAuth, setCheckingAuth] = useState(true);
//   const [spaces, setSpaces] = useState<Workspace[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Auth Guard verification logic
//   useEffect(() => {
//     // 1. Check for token and auth status matching your login schema
//     const token = localStorage.getItem("flexspace_token");
//     const authStatus = localStorage.getItem("flexspace_auth");
    
//     if (authStatus !== "authenticated" || !token) {
//       router.replace("/login");
//     } else {
//       setCheckingAuth(false);
//       fetchUserSpaces();
//     }
//   }, [router]);

//   const fetchUserSpaces = async () => {
//     try {
//       // Fetching all workspace listings
//       const res = await fetch("/api/spaces?limit=all");
//       if (res.ok) {
//         const data = await res.json();
//         setSpaces(Array.isArray(data) ? data : data.data || data.spaces || []);
//       }
//     } catch (err) {
//       console.error("Management array loading failed:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you certain you want to permanently delete this listing asset?")) return;

//     try {
//       // 2. Extract the token to securely authenticate the DELETE request
//       const token = localStorage.getItem("flexspace_token");
      
//       if (!token) {
//         alert("Your session has expired. Please log in again.");
//         router.replace("/login");
//         return;
//       }

//       const res = await fetch(`/api/spaces/${id}`, { 
//         method: "DELETE",
//         headers: {
//           // 🔒 Send the credentials so only administrators can delete listings
//           "Authorization": `Bearer ${token}`
//         }
//       });

//       if (res.ok) {
//         // Instant state updates to drop row seamlessly out of client dashboard view
//         setSpaces(spaces.filter((space) => space._id !== id));
//       } else {
//         const data = await res.json();
//         alert(data.error || "Deletion operation failed on the server.");
//       }
//     } catch (err) {
//       alert("A network problem interrupted the deletion request.");
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
//     <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
//             <LayoutDashboard className="w-5 h-5" />
//           </div>
//           <div>
//             <h1 className="text-2xl font-black text-slate-900 tracking-tight">Manage Workspaces</h1>
//             <p className="text-xs text-slate-500">Overview management system to delete or view your live listed inventory properties.</p>
//           </div>
//         </div>
//       </div>

//       {/* Responsive Custom Data Table Wrapper */}
//       <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse min-w-[600px]">
//             <thead>
//               <tr className="bg-slate-50/70 border-b border-slate-200/60 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
//                 <th className="py-4 px-6">Workspace Details</th>
//                 <th className="py-4 px-6">Location</th>
//                 <th className="py-4 px-6">Pricing</th>
//                 <th className="py-4 px-6 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
//               {loading ? (
//                 // Table Row Skeleton Placeholders
//                 Array.from({ length: 4 }).map((_, idx) => (
//                   <tr key={idx} className="animate-pulse">
//                     <td className="py-4 px-6"><div className="h-4 bg-slate-200 rounded w-2/3" /></td>
//                     <td className="py-4 px-6"><div className="h-4 bg-slate-200 rounded w-1/3" /></td>
//                     <td className="py-4 px-6"><div className="h-4 bg-slate-200 rounded w-1/4" /></td>
//                     <td className="py-4 px-6"><div className="h-8 bg-slate-200 rounded w-20 ml-auto" /></td>
//                   </tr>
//                 ))
//               ) : spaces.length > 0 ? (
//                 spaces.map((space) => (
//                   <tr key={space._id} className="hover:bg-slate-50/50 transition">
//                     <td className="py-4 px-6 font-semibold text-slate-900">{space.title}</td>
//                     <td className="py-4 px-6 text-slate-500">📍 {space.location}</td>
//                     <td className="py-4 px-6 font-bold text-indigo-600">${space.price}/day</td>
//                     <td className="py-4 px-6 text-right">
//                       <div className="flex items-center justify-end gap-2">
//                         <button
//                           onClick={() => router.push(`/spaces/${space._id}`)}
//                           className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition cursor-pointer"
//                           title="View Details"
//                         >
//                           <Eye className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(space._id)}
//                           className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
//                           title="Delete Property"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={4} className="py-12 text-center text-slate-400 font-medium">
//                     No listed workspace assets found. Try adding a brand new space card!
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </main>
//   );
// }

// **********************************

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, Trash2, LayoutDashboard, Loader2 } from "lucide-react";

interface Workspace {
  _id: string;
  title: string;
  price: number;
  location: string;
}

export default function ManageSpacesPage() {
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [spaces, setSpaces] = useState<Workspace[]>([]);
  const [loading, setLoading] = useState(true);

  // Route Authentication & Admin Role Protection Guard
  useEffect(() => {
    const token = localStorage.getItem("flexspace_token");
    const authStatus = localStorage.getItem("flexspace_auth");
    const userRole = localStorage.getItem("flexspace_role");
    
    // Validate that the user is logged in AND is an admin
    if (authStatus !== "authenticated" || !token) {
      router.replace("/login");
    } else if (userRole !== "admin") {
      router.replace("/"); // Send standard users back to the homepage
    } else {
      setCheckingAuth(false);
      fetchUserSpaces();
    }
  }, [router]);

  const fetchUserSpaces = async () => {
    try {
      const res = await fetch("/api/spaces?limit=all");
      if (res.ok) {
        const data = await res.json();
        setSpaces(Array.isArray(data) ? data : data.data || data.spaces || []);
      }
    } catch (err) {
      console.error("Management array loading failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you certain you want to permanently delete this listing asset?")) return;

    try {
      const token = localStorage.getItem("flexspace_token");
      
      if (!token) {
        alert("Your session has expired. Please log in again.");
        router.replace("/login");
        return;
      }

      const res = await fetch(`/api/spaces/${id}`, { 
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (res.ok) {
        setSpaces(spaces.filter((space) => space._id !== id));
      } else {
        const data = await res.json();
        alert(data.error || "Deletion operation failed on the server.");
      }
    } catch (err) {
      alert("A network problem interrupted the deletion request.");
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
    <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Manage Workspaces</h1>
            <p className="text-xs text-slate-500">Overview management system to delete or view your live listed inventory properties.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200/60 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-4 px-6">Workspace Details</th>
                <th className="py-4 px-6">Location</th>
                <th className="py-4 px-6">Pricing</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {loading ? (
                Array.from({ length: 4 }).map((_, idx) => (
                  <tr key={idx} className="animate-pulse">
                    <td className="py-4 px-6"><div className="h-4 bg-slate-200 rounded w-2/3" /></td>
                    <td className="py-4 px-6"><div className="h-4 bg-slate-200 rounded w-1/3" /></td>
                    <td className="py-4 px-6"><div className="h-4 bg-slate-200 rounded w-1/4" /></td>
                    <td className="py-4 px-6"><div className="h-8 bg-slate-200 rounded w-20 ml-auto" /></td>
                  </tr>
                ))
              ) : spaces.length > 0 ? (
                spaces.map((space) => (
                  <tr key={space._id} className="hover:bg-slate-50/50 transition">
                    <td className="py-4 px-6 font-semibold text-slate-900">{space.title}</td>
                    <td className="py-4 px-6 text-slate-500">📍 {space.location}</td>
                    <td className="py-4 px-6 font-bold text-indigo-600">${space.price}/day</td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => router.push(`/spaces/${space._id}`)}
                          className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition cursor-pointer"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(space._id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                          title="Delete Property"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-slate-400 font-medium">
                    No listed workspace assets found. Try adding a brand new space card!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}