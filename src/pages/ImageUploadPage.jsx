function ImageUploadPage() {
    return (
      <div>
        <h2>Upload Image</h2>
        <form>
          <input type="text" placeholder="Image Name" />
          <input type="file" />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
  
  export default ImageUploadPage;
  