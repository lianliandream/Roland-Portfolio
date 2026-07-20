export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F4EC] px-5 text-[#1E1E1E]">
      <div className="max-w-md text-center">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#1E1E1E]/60">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em]">
          This page is not available.
        </h1>
        <p className="mt-4 text-sm leading-7 text-[#1E1E1E]/70">
          The page you are looking for could not be found.
        </p>
      </div>
    </main>
  );
}
