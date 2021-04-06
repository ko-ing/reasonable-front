import { forwardRef, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment, { Moment } from 'moment';

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
    left: 0vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 5;
    width: 100vw;
    height: 80vh;
    background: white;
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
    height: 100vw;
    width: 100vw;
    background: url(${p => p.url});
    background-size: cover;
    background-position: center, center;
    background-repeat: no-repeat;
    border-radius: 10px;
    // padding: 10px;
`;

const DateSelector = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 35px;
    background-color: #6e76ec;
    color: white;
    font-size: 15px;
    font-family: "NanumBarunGothic";
    font-weight: 500;
    border-radius: 5px;
    padding: 0px;
    margin-top: 30px;
`;

const ConfirmCancel = styled.div<{
    isConfirm: boolean
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 30px;
`;

const ConfirmWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 120px;
    margin-top: 10px;
`;

const Upload =  ({
    uploadType
}: {
    uploadType: "photo" | "post"
}) => {
    const [isUploaded, setIsUploaded] = useState<boolean>(false);
    const [files, setFiles] = useState<Blob[]>([]);
    const [previewUrls, setPreviewUrls] = useState<any[]>([]);
    const [pictureDate, setPictureDate] = useState<any>(new Date());
    const ExampleCustomInput = forwardRef(
        ({ value, onClick }: {value?:any, onClick?:any}, ref:any) => (
          <DateSelector onClick={onClick} ref={ref}>
            {value}
          </DateSelector>
        ),
    );

    const setInitial = useCallback(() => {
        setIsUploaded(false);
        setFiles([]);
        setPreviewUrls([]);
        setPictureDate(new Date());
    }, []);

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
                    setIsUploaded(true);
                }}
            />
            {isUploaded && (
                <>
                    <ModalMargin onClick={() => {
                        // const 
                        // setInitial();
                    }}/>
                    <UploadModal>
                        {previewUrls.map(p => <PreviewPhotos url={p} />)}
                        <DatePicker
                            selected={pictureDate}
                            onChange={(d) =>{setPictureDate(d)}}
                            dateFormat="yyyy/MM/dd"
                            customInput={<ExampleCustomInput />}
                        />
                        {/* 사람 태그? + 내 사람들에 그냥 저장 */}
                        <ConfirmWrapper>
                            <ConfirmCancel isConfirm>
                                확인
                            </ConfirmCancel>
                            <ConfirmCancel isConfirm={false}>
                                취소
                            </ConfirmCancel>
                        </ConfirmWrapper>
                    </UploadModal>
                </>
            )}            
        </>
    );
    
}
export default Upload;
