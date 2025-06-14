import { FileX2 } from "lucide-react";

export const EmptyState = ({
  title = "Tidak ada data",
  description = "Belum ada informasi yang tersedia saat ini.",
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
      <FileX2 className="w-12 h-12 mb-4 text-gray-400" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
};
