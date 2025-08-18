import Image from 'next/image';

const ImageExample = () => {
  return (
    <div>
      {/* For images in public/images/ folder */}
      <Image 
        src="/images/your-image.jpg" 
        alt="Description of your image"
        width={500}
        height={300}
        className="rounded-lg"
      />
      
      {/* For images directly in public folder */}
      <Image 
        src="/your-image.png" 
        alt="Description of your image"
        width={400}
        height={250}
        className="rounded-lg"
      />
    </div>
  );
};

export default ImageExample;
