export default function ContentComponent({ children ,drawerWidth, isDrawerOpen}) {
  return (
    <main
      className="flex-1 p-6 mt-16 transition-all duration-300 ease-in-out"
      style={{
        marginLeft: isDrawerOpen ? `${drawerWidth}px` : "65px",
      }}
    >
      {children}
    </main>
  );
}