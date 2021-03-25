import { Image } from 'cloudinary-react';
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Modal } from 'bootstrap';
import './Photo.css';
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
  }

export default function Photo({label, required,name, change}) {
    const [files, setFiles] = useState();
    const [urls, setUrls] = useState([]);

    const [modal, setModal] = useState(null);
    const exampleModal = useRef();

    const uploadFile = (event) => {
        setFiles(event.target.files);
    }
    useEffect(()=>{
        const url = "https://api.cloudinary.com/v1_1/dysypyukv/image/upload";
        if (files) {
          let data = new FormData();
          for (let i = 0; i < files.length; i++) {
                let file = files[i];
                data.append('file', file);
                data.append("upload_preset", "bowtu6lx");
                data.append("folder", "solicitudes");
                fetch(url, {
                method: "POST",
                body: data
                }).then(response => {
                    return response.text();
                })
                .then(d => {
                    const { secure_url } = JSON.parse(d);
                    const urlsA = urls;
                    urlsA.push(secure_url);
                    setUrls(urlsA.map(a => a));
                    change(urls,name);
                })
                .catch((e) => console.log(e))
            }
        }
    },[files]);

    useEffect(() => {
        setModal(
          new Modal(exampleModal.current)
        )
      }, [])

    return (
        <>
            <ErrorBoundary>
            <div className="col-12 col-md-3 mx-3">
                <label className="form-label">{label}</label>
                <div className="file-card">
                    <button className="btn btn-success inputWrapper mx-1 mt-4" > Subir Archivos
                        <input required={required} type="file" className="fileInput" id={name} name="files[]" multiple onChange={uploadFile}/>
                    </button>
                    <button type="button" onClick={() => modal.show()} className="btn btn-success mx-1 mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Ver fotos
                    </button>
                    <p className="m-2">{urls.length} elementos seleccionados</p>
                </div>
            </div>
            </ErrorBoundary>
        

        <div className="modal fade"  ref={exampleModal} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable modal-xl">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Archivos</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => modal.hide()} aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {urls.length > 0
                    ? urls.map((url, i) => <Image className="photo-image" cloudName="dysypyukv" publicId={url} key={i} width="500" crop="scale"/>)
                    : ''
                }
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => modal.hide()} data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
        </>
    );
};