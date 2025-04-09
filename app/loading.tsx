export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 rounded-full border-4 border-amber-200 border-t-amber-500 animate-spin"></div>
        <p className="mt-4 text-amber-900 font-serif text-lg">Loading divine elegance...</p>
      </div>
    </div>
  )
}
