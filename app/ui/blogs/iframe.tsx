export default function IframePage({ url }: { url: any }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl h-screen">
        <iframe
          src={url}
          title="Embedded Page"
          className="w-full h-full border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  );
}
