// upload-image.ts
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('formFile') as HTMLInputElement;
    const uploadedImage = document.getElementById('uploadedImage') as HTMLImageElement;

    if (fileInput) {
        fileInput.addEventListener('change', (event) => {
            const file = (event.target as HTMLInputElement).files![0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (uploadedImage) {
                        uploadedImage.src = e.target!.result as string;
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
});