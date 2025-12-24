export default function VerificationUpload() {
  return (
    <div className="card">
      <h3>📄 Verification Documents</h3>
      <input type="file" />
      <button className="btn-primary">Upload Document</button>
      <p>Status: Pending Verification</p>
    </div>
  );
}
