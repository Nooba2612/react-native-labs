function downloadFile(filename: string) {
    console.log(`Starting download of ${filename}...`);

    setTimeout(() => {
        console.log(`Download of ${filename} completed!`);
    }, 3000);
}

downloadFile("example.pdf");
