import PDFComp from "../PDFComp";

function Resume() {
    return(
        <resume className="">
            <h1>Resume Page</h1>
            <div className="d-flex justify-content-center">
                <PDFComp/>
            </div>
        </resume>
    )
}

export default Resume;