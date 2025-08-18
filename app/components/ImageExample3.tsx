const ImageExample3 = () => {
  return (
    <div>
      {/* Using CSS background image */}
      <div 
        className="w-96 h-64 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/your-image.jpg)' }}
      >
        {/* Content can go here */}
      </div>
      
      {/* Using Tailwind CSS background image */}
      <div 
        className="w-80 h-60 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: 'url(/your-image.png)' }}
      >
        {/* Content can go here */}
      </div>
    </div>
  );
};

export default ImageExample3;
