interface FileListProps {
    files: any[];
    setFileId: (fileId: string) => void;
}

function FileList({ files, setFileId }: FileListProps) {
    return (
        <>
            <div className="h-full w-full flex flex-col">
                <h1 className="font-bold text-4xl m-4">Choose a file</h1>
                <div className="flex flex-1 w-full flex-col overflow-y-scroll">
                    {files.map((file, index) => (
                        <div
                            onClick={() => {
                                setFileId(file.id);
                                console.log(file.id);
                                
                            }}
                            key={index}
                            className="w-full flex p-4 border-b hover:bg-primary-content cursor-pointer">
                            <h1 className="text-2xl">{file.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default FileList;
