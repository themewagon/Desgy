const getImagePrefix = () => {
    return process.env.NODE_ENV === "production"
      ? "/Desgy/"
      : "";
  };
  
  export { getImagePrefix };