import Button from "@/components/atoms/Button";

const FileUpload = ({ label, name }) => (
    <div className="mb-4">
        <label className="block text-white font-bold mb-2">{label}</label>
        <div className="flex items-center">
        <input
            type="file"
            name={name}
            className="w-full px-3 py-2 border rounded-md"
        />
        <Button color="bg-green-500 ml-4">Unggah</Button>
        </div>
    </div>
);

export default FileUpload;
