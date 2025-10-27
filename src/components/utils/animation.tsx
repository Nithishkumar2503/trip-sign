
export const viewportOnce = true;

export const useViewport = () => {
let isMobile=false
    const handleResize = () => isMobile=window.innerWidth < 768 // mobile breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
  return { isMobile };
};
