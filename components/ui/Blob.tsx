import React from "react";

interface BlobProps {
  className: string;
}
function Blob({ className }: BlobProps) {
  return <div className={className} />;
}

export default Blob;
