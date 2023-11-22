const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY}/image/upload`;

export const upLoadImage = async (formData, reqImage) => {
  const images = formData.getAll(reqImage);

  const urlImages = [];
  const cloudFormData = new FormData();

  for (const image of images) {
    cloudFormData.append('file', image);
    cloudFormData.append('upload_preset', 'ojlqsb85');

    const response = await fetch(url, {
      method: 'POST',
      body: cloudFormData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    urlImages.push(data.secure_url);
  }
  return urlImages;
};
