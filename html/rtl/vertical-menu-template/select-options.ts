// select-options.ts
document.addEventListener('DOMContentLoaded', () => {
    const basicSelect = document.getElementById('custom-basicSelect') as HTMLSelectElement;
    const videoSelect = document.getElementById('custom-video-select') as HTMLSelectElement;

    if (basicSelect) {
        basicSelect.addEventListener('change', () => {
            const options = [
                'custom-videoOptions',
                'custom-urlInput',
                'custom-iframeInput',
                'custom-pdfOptions',
                'custom-fileOptionContainer',
                'custom-textOption'
            ];
            options.forEach(option => {
                document.getElementById(option)!.classList.add('custom-hidden');
            });

            const selectedValue = basicSelect.value;
            if (selectedValue === 'video') {
                document.getElementById('custom-videoOptions')!.classList.remove('custom-hidden');
            } else if (selectedValue === 'iframe') {
                document.getElementById('custom-iframeInput')!.classList.remove('custom-hidden');
            } else if (selectedValue === 'pdf') {
                document.getElementById('custom-pdfOptions')!.classList.remove('custom-hidden');
            } else if (selectedValue === 'file') {
                document.getElementById('custom-fileOptionContainer')!.classList.remove('custom-hidden');
            } else if (selectedValue === 'text') {
                document.getElementById('custom-textOption')!.classList.remove('custom-hidden');
            }
        });
    }

    if (videoSelect) {
        videoSelect.addEventListener('change', () => {
            const options = ['custom-urlInput', 'custom-iframeInput'];
            options.forEach(option => {
                document.getElementById(option)!.classList.add('custom-hidden');
            });

            if (videoSelect.value === 'url') {
                document.getElementById('custom-urlInput')!.classList.remove('custom-hidden');
            } else if (videoSelect.value === 'iframe') {
                document.getElementById('custom-iframeInput')!.classList.remove('custom-hidden');
            }
        });
    }
});