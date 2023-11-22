const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY}/image/upload`;

const UPLOAD_PRESET = {
  brand: 'xpncjh9s',
  car: 'ojlqsb85',
};

export const upLoadImage = async (formData, reqImage, folder) => {
  const images = formData.getAll(reqImage);

  const urlImages = [];
  const cloudFormData = new FormData();

  for (const image of images) {
    cloudFormData.append('file', image);
    cloudFormData.append('upload_preset', UPLOAD_PRESET[folder]);

    const response = await fetch(url, {
      method: 'POST',
      body: cloudFormData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    urlImages.push(data.secure_url);
  }
  return urlImages;
};
