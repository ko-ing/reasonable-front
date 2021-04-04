import { useEffect, useState } from 'react';
import styled from 'styled-components';

const UploadIcon = styled.label`
    position: fixed;
    right: calc(50vw - 15px);
    bottom: 50px;
    background: url("/upload.svg") no-repeat scroll center center;
    background-size: 20px 20px;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    padding: 5px;
    background-color: rgb(240,240,240,0.5);
    /* border: 1px solid #777777; */
`;

const UploadModal = styled.div`
    position: fixed;
    top: 50px;
    left: 10vw;
    z-index: 5;
    width: 80vw;
    height: 60vh;
    background: white;
    border: 1px solid #dddddd;
`;

const ModalMargin = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    background: rgb(220,220,220,0.5);
`;

const PreviewPhotos = styled.div<{
    url: string
}>`
    height: 100%;
    width: 100%;
    background: url(${p => p.url});
    background-size: cover;
    background-position: center, center;
    background-repeat: no-repeat;
    border-radius: 10px;
    // padding: 10px;
`;

const DateRollOver = styled.div`

`;

const Upload =  ({
    uploadType
}: {
    uploadType: "photo" | "post"
}) => {
    const [isUploadViewOpen, setUploadView] = useState<boolean>(false);
    const [files, setFiles] = useState<Blob[]>([]);
    const [previewUrls, setPreviewUrls] = useState<any[]>([]);

    return (
        <>
            <UploadIcon htmlFor="imageUpload" />
            <input
                type="file"
                id="imageUpload"
                hidden
                // multiple
                accept = "image/jpg,impge/png,image/jpeg,image/gif"
                onChange={(e)=>{
                    const f = e.target.files;
                    if (!f) return;

                    let reader = new FileReader();
                    reader.onload = () => {
                        setFiles([f[0]]);
                        console.log(files);
                        setPreviewUrls([...previewUrls, reader.result]);
                    }
                    reader.readAsDataURL(f[0]);
                    setUploadView(true);
                }}/>
            {isUploadViewOpen && (
                <>
                    <ModalMargin onClick={() => {
                        setUploadView(false);
                        setPreviewUrls([]);
                    }}/>
                    <UploadModal>
                        {previewUrls.map(p => <PreviewPhotos url={p} />)}
                    </UploadModal>
                </>
            )}            
        </>
    );
}

export default Upload;
