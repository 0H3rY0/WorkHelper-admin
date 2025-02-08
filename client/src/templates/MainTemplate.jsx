const MainTemplate = ({ children }) => {
  return (
    <div
      className="grid w-full h-screen 
        grid-cols-[300px_1fr] grid-rows-[65px_1fr] "
    >
      {children}
    </div>
  );
};

export default MainTemplate;
