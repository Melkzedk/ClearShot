import React, { useState } from 'react';
import axios from 'axios';

export default function EnhanceForm() {
  const [file, setFile] = useState(null);
  const [beforeUrl, setBeforeUrl] = useState(null);
  const [afterUrl, setAfterUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleFileChange = (e) => {
    setErr('');
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    // show local preview (before)
    setBeforeUrl(URL.createObjectURL(f));
    setAfterUrl(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setErr('Please choose an image first');
      return;
    }
    setLoading(true);
    setErr('');
    try {
      const formData = new FormData();
      formData.append('image', file);

      // adjust endpoint if backend runs on different port/host
      const res = await axios.post('http://localhost:5000/api/enhance', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 120000,
      });

      setAfterUrl(res.data.url);
    } catch (error) {
      console.error(error);
      setErr('Upload or processing failed. See console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Choose a blur image</label>
          <input type="file" accept="image/*" className="form-control" onChange={handleFileChange} />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Processing...' : 'Enhance Image'}
        </button>
      </form>

      {err && <div className="alert alert-danger mt-3">{err}</div>}

      <div className="row mt-4">
        <div className="col-md-6">
          <h6>Before</h6>
          {beforeUrl ? (
            <img src={beforeUrl} alt="before" className="img-fluid border" />
          ) : (
            <div className="text-muted">No image selected</div>
          )}
        </div>

        <div className="col-md-6">
          <h6>After</h6>
          {afterUrl ? (
            <>
              <img src={afterUrl} alt="after" className="img-fluid border" />
              <div className="mt-2">
                <a className="btn btn-outline-success" href={afterUrl} target="_blank" rel="noreferrer">Open in new tab</a>
                <a className="btn btn-outline-primary ms-2" href={afterUrl} download>Download</a>
              </div>
            </>
          ) : (
            <div className="text-muted">No result yet</div>
          )}
        </div>
      </div>
    </div>
  );
}
