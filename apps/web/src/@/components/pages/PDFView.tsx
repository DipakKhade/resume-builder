export function PDFView({path}){
    return <>
    <div>
 <iframe src={path}  width="100%" height="500px" ></iframe>
 </div>
    </>
}