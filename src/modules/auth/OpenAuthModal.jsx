export const OpenAuthModal = ({ buttonName, pathname }) => {
  const handleOpenModal = () => {
    window.location.pathname = pathname;
  };

  return (
    <>
      <button onClick={handleOpenModal}>{buttonName}</button>
    </>
  );
};
