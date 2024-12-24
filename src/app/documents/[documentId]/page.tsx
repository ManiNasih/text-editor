import Editor from "./editor";
import Toolbar from "./Toolbar";

// interface DocumentPageProps {
//   params: Promise<{ documentId: string }>;
// }

const DocumentId = async () => {
  // const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentId;
